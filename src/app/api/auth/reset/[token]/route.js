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
        status: 500,
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
      status: 200,
      message: "Password has been reset please login",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: "Error resetting password " + error.message,
    });
  }
}
