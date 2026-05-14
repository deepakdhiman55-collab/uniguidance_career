import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  leadId: string;
  fullName: string;
  mobileNumber: string;
  email: string;
  city: string;
  country: string;
  highestQualification: string;
  passingYear: string;
  percentageCgpa: string;
  preferredCourse: string;
  preferredCountry: string;
  studyGoals: string;
  budgetRange: string;
  intakePreference: string;
  englishTestStatus: string;
  preferredDate: string;
  preferredTimeSlot: string;
  mode: string;
  documentLinks?: {
    resume?: string;
    passport?: string;
    academicDocs?: string;
  };
  createdAt: Date;
}

const LeadSchema: Schema<ILead> = new Schema(
  {
    leadId: { type: String, unique: true },
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    
    highestQualification: { type: String, required: true },
    passingYear: { type: String, required: true },
    percentageCgpa: { type: String, required: true },
    preferredCourse: { type: String, required: true },
    preferredCountry: { type: String, required: true },
    
    studyGoals: { type: String, required: true },
    budgetRange: { type: String, required: true },
    intakePreference: { type: String, required: true },
    englishTestStatus: { type: String, required: true },
    
    preferredDate: { type: String, required: true },
    preferredTimeSlot: { type: String, required: true },
    mode: { type: String, required: true },
    
    documentLinks: {
      resume: String,
      passport: String,
      academicDocs: String,
    },
  },
  { timestamps: true }
);

LeadSchema.pre("save", function (this: ILead, next: any) {
  if (!this.leadId) {
    // Generate a unique lead ID, e.g., UG-YYYYMMDD-XXXX
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    this.leadId = `UG-${dateStr}-${randomNum}`;
  }
  next();
});

export const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);
