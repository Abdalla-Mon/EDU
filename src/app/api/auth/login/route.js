import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import prisma from "../../../../lib/pirsma/prisma";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request) {
  let body = await request.json();
  const cookieStore = cookies();

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

    const validPassword = await bcrypt.compare(body.password, user.password);

    if (!validPassword) {
      return Response.json({
        status: 500,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY);

    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return Response.json({
      status: 200,
      message: "User signed in successfully redirecting...",
      user,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Error signing in user " + error.message,
    });
  }
}
