import bcrypt from "bcrypt";
import prisma from "../../../../lib/pirsma/prisma";
import { pageUrl } from "../../../../Urls/urls";
import { sendEmail } from "../../utlis/sendMail";
import crypto from "crypto";

export async function POST(request) {
  let body = await request.json();
  if (body.password !== body.confirmPassword) {
    return Response.json({ message: "Passwords do not match", status: 500 });
  }
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;
    delete body.confirmPassword;
    const token = crypto.randomBytes(20).toString("hex");
    await prisma.user.create({
      data: {
        ...body,
        confirmationToken: token,
        confirmationExpires: new Date(Date.now() + 3600000),
      },
    });

    // await prisma.user.update({
    //   where: {
    //     email: body.email,
    //   },
    //   data: {
    //     confirmationToken: token,
    //     confirmationExpires: new Date(Date.now() + 3600000), // 1 hour
    //   },
    // });
    const confirmLink = `${pageUrl}/confirm?token=${token}`;
    const emailSubject = "Email Confirmation Request";
    const emailText = `You are receiving this because you (or someone else) have requested the confirmation of the email for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n${confirmLink}\n\nIf you did not request this, please ignore this email and your email will remain unconfirmed.\n`;

    await sendEmail(body.email, emailSubject, emailText);

    return Response.json({
      status: 200,
      message: "Confirmation link sent to " + body.email,
    });
  } catch (error) {
    if (error.code === "P2002") {
      return Response.json({
        status: 500,
        message: "Email is already in use",
      });
    } else {
      return Response.json({
        status: 500,
        message: "Error creating user",
      });
    }
  }
}
