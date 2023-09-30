// import { connectToDB } from "@/config/db.config";
import { NextResponse } from "next/server";
import validator from "validator";

export const POST = async (req) => {
  try {
    // await connectToDB();

    const { email, comment } = await req.json();

    if (!email || email == "")
      return new NextResponse("Please enter your email", { status: 400 });

    if (!validator.isEmail(email))
      return new NextResponse("Please enter a valid email", { status: 400 });

    return new NextResponse(
      JSON.stringify({ user: { email, comment }, response: "Success" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Failed to submit email", { status: 400 });
  }
};
