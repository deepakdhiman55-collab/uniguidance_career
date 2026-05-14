import { z } from "zod";

export const counselingSchema = z.object({
  // Step 1: Basic Details
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  mobileNumber: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),

  // Step 2: Academic Information
  highestQualification: z.string().min(1, "Please select your highest qualification"),
  passingYear: z.string().min(4, "Please enter passing year"),
  percentageCgpa: z.string().min(1, "Percentage/CGPA is required"),
  preferredCourse: z.string().min(2, "Please enter your preferred course"),
  preferredCountry: z.string().min(1, "Please select preferred country"),

  // Step 3: Career Goals
  studyGoals: z.string().min(10, "Please briefly describe your study goals"),
  budgetRange: z.string().min(1, "Please select your budget range"),
  intakePreference: z.string().min(1, "Please select your preferred intake"),
  englishTestStatus: z.string().min(1, "Please select your English test status"),

  // Step 4: Uploads (using simple string for now, will handle files in API via FormData if needed, but in standard RHF we can just validate file presence if needed. We'll use optional strings or any for simplicity in this implementation)
  resume: z.any().optional(),
  passport: z.any().optional(),
  academicDocs: z.any().optional(),

  // Step 5: Booking
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTimeSlot: z.string().min(1, "Please select a preferred time slot"),
  mode: z.string().min(1, "Please select counseling mode"),
});

export type CounselingFormValues = z.infer<typeof counselingSchema>;
