import { cookies } from "next/headers";

export async function POST(request, { params }) {
  const cookieStore = cookies();

  try {
    cookieStore.set({
      name: "token",
      value: "",
      path: "/",
      maxAge: -1,
    });

    return Response.json({
      message: "Signed out successfully",
      auth: false,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Error signing out user " + error.message,
    });
  }
}
