import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  const SECRET_KEY = process.env.SECRET_KEY;
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json({ auth: false, message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded) {
      const user = await prisma.user.findUnique({
        where: {
          id: decoded.userId,
        },
      });
      if (!user) {
        return Response.json({
          message: "User not found",
          auth: false,
        });
      }
      if (!user.emailConfirmed) {
        return Response.json({
          message: "User not confirmed",
          auth: true,
          role: user.role,
          user,
          emailConfirmed: false,
        });
      }
      return Response.json({
        message: "User authenticated and confirmed",
        user,
        auth: true,
        role: user.role,
        emailConfirmed: true,
      });
    }
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Error authenticating user",
      error: error.message,
    });
  }
}
