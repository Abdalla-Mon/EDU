import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request, { params }) {
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
        message: "No user found with this email",
      });
    }

    const validPassword = await bcrypt.compare(body.password, user.password);

    if (!validPassword) {
      return Response.json({
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

    return Response.json({ message: "User signed in successfully", user });
  } catch (error) {
    return Response.json({
      message: "Error signing in user " + error.message,
    });
  }
}
