import { connectToDB } from "@/config/db.config";
import { NextResponse } from "next/server";
import validator from "validator";
import { Resend } from "resend";
import Subscribe from "@/models/Subscribe";

export const POST = async (req) => {
  try {
    await connectToDB();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { email, comment, profession } = await req.json();

    if (!email || email == "")
      return new NextResponse("Please enter your email", { status: 400 });

    if (!profession || profession == "")
      return new NextResponse("Please enter your profession", { status: 400 });

    if (!validator.isEmail(email))
      return new NextResponse("Please enter a valid email", { status: 400 });

    const newSubscription = new Subscribe({ email, comment, profession });

    await newSubscription.save();

    await resend.emails.send({
      from: "creituug@gmail.com",
      to: email,
      subject: "Stay tuned",
      html: `
        <h3 style="font-weight: bold; font-size: 2rem;">Thank you for subscribing</h3>
        <p style="margin: 1rem 0;">We shall soon notify when we officially launch creitu</p>

        <div style="padding: 3rem 0"></div>
      `,
    });

    return new NextResponse(
      JSON.stringify({
        user: { email, comment, profession },
        response: "Success",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return new NextResponse("Failed to submit email", { status: 400 });
  }
};
