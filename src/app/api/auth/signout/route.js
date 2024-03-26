import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();

  try {
    cookieStore.set({
      name: "token",
      value: "",
      path: "/",
      maxAge: -1,
    });

    return Response.json({
      status: 200,
      message: "Signed out successfully",
      auth: false,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: "Error signing out user " + error.message,
    });
  }
}
