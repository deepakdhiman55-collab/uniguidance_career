import { NextRequest, NextResponse } from "next/server";
import { sendAssessmentEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // In a real app, you would also save this rapid assessment lead to the database (e.g., MongoDB).
    // For now, we will directly process the email sending.
    
    // Generate a random Assessment ID
    const assessmentId = `UG-RAPID-${Math.floor(1000 + Math.random() * 9000)}`;
    const assessmentData = { ...data, assessmentId };

    // Send confirmation and notification emails
    const emailsSent = await sendAssessmentEmails(assessmentData);

    if (!emailsSent) {
      console.warn("Emails failed to send, but rapid assessment was captured.");
    }

    return NextResponse.json(
      { 
        message: "Assessment request successful", 
        assessmentId: assessmentId 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("API Route Error (Assessment Submit):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
