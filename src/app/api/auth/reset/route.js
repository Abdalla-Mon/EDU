import crypto from "crypto";
import prisma from "../../../../lib/pirsma/prisma";
import { sendEmail } from "../../utlis/sendMail";
import { pageUrl } from "../../../../Urls/urls";

export async function POST(request) {
  let body = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      return Response.json({
        status: 500,
        message: "No user found with this email",
      });
    }

    const token = crypto.randomBytes(20).toString("hex");
    await prisma.user.update({
      where: {
        email: body.email,
      },
      data: {
        resetPasswordToken: token,
        resetPasswordExpires: new Date(Date.now() + 3600000), // 1 hour
      },
    });

    const resetLink = `${pageUrl}/reset?token=${token}`;
    const emailSubject = "Password Reset Request";
    const emailText = `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n${resetLink}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`;

    await sendEmail(body.email, emailSubject, emailText);

    return Response.json({
      status: 200,
      message: "Password reset link sent to " + body.email,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: "Error sending password reset link ",
    });
  }
}
