import bcrypt from "bcrypt";
import prisma from "../../../../../lib/pirsma/prisma";

export async function POST(request, { params }) {
  let body = await request.json();
  const { token } = params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        resetPasswordToken: token,
      },
    });
    if (!user || Date.now() > user.resetPasswordExpires) {
      return Response.json({
        message: "Invalid or expired reset token",
      });
    }

    const hashedPassword = bcrypt.hashSync(body.password, 8);

    await prisma.user.update({
      where: {
        resetPasswordToken: token,
      },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    return Response.json({
      message: "Password has been successfully reset",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Error resetting password " + error.message,
    });
  }
}
