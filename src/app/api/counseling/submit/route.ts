import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { sendEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Convert FormData to a regular object for easier handling
    const leadData: any = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // In a real app, upload this file to S3/Cloudinary and save the URL.
        // For now, we will just store the file name to simulate an upload.
        console.log(`Received file for ${key}: ${value.name}`);
        leadData[key] = `MockedUploadURL_for_${value.name}`;
      } else {
        leadData[key] = value;
      }
    }

    // Connect to MongoDB
    const db = await connectToDatabase();
    
    let savedLead;
    let leadId = `UG-MOCK-${Math.floor(1000 + Math.random() * 9000)}`;

    if (db) {
      // Create and save the new lead
      const newLead = new Lead(leadData);
      savedLead = await newLead.save();
      leadId = savedLead.leadId;
      console.log(`Lead saved to MongoDB with ID: ${leadId}`);
    } else {
      console.log("MongoDB is not connected. Simulating lead save.");
      leadData.leadId = leadId;
      savedLead = leadData;
    }

    // Send confirmation and notification emails
    const emailsSent = await sendEmails(savedLead);

    if (!emailsSent) {
      console.warn("Emails failed to send, but lead was saved.");
    }

    return NextResponse.json(
      { 
        message: "Registration successful", 
        leadId: leadId 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("API Route Error (Counseling Submit):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
