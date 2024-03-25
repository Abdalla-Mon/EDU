import bcrypt from "bcrypt";
import prisma from "../../../../lib/pirsma/prisma";
import { cookies } from "next/headers";
import { pageUrl } from "../../../../Urls/urls";
import { sendEmail } from "../../utlis/sendMail";
import crypto from "crypto";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request, { params }) {
  let body = await request.json();
  const cookieStore = cookies();
  if (body.password !== body.confirmPassword) {
    return Response.json({ message: "Passwords do not match" });
  }
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;
    delete body.confirmPassword;
    const user = await prisma.user.create({
      data: {
        ...body,
      },
    });

    const token = crypto.randomBytes(20).toString("hex");
    await prisma.user.update({
      where: {
        email: body.email,
      },
      data: {
        confirmationToken: token,
        confirmationExpires: new Date(Date.now() + 3600000), // 1 hour
      },
    });
    const confirmLink = `${pageUrl}/confirm?token=${token}`;
    const emailSubject = "Email Confirmation Request";
    const emailText = `You are receiving this because you (or someone else) have requested the confirmation of the email for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n${confirmLink}\n\nIf you did not request this, please ignore this email and your email will remain unconfirmed.\n`;

    await sendEmail(body.email, emailSubject, emailText);

    return Response.json({
      message: "Confirmation link sent to " + body.email,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Error creating user " + error.message,
    });
  }
}
