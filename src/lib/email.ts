import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const ADMIN_EMAIL = "uniguidancecareerconsultant@gmail.com";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export const sendEmails = async (leadData: any) => {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("SMTP credentials not provided. Email sending mocked.");
    console.log("Mock Email to Student:", leadData.email);
    console.log("Mock Email to Admin:", ADMIN_EMAIL);
    return true;
  }

  try {
    // 1. Send confirmation to student
    await transporter.sendMail({
      from: `"Uniguidance Support" <${SMTP_USER}>`,
      to: leadData.email,
      subject: "Confirmation: Your Free Counseling Session - Uniguidance",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1e3a8a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Uniguidance</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #1e3a8a;">Hello ${leadData.fullName},</h2>
            <p>Thank you for taking the first step towards your global education journey! We have successfully received your profile and counseling request.</p>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Lead Reference ID:</strong> ${leadData.leadId}</p>
              <p style="margin: 10px 0 0;"><strong>Preferred Date:</strong> ${leadData.preferredDate}</p>
              <p style="margin: 10px 0 0;"><strong>Preferred Time:</strong> ${leadData.preferredTimeSlot}</p>
            </div>

            <p>Our expert counselor will review your profile and we will contact you shortly to confirm your exact session time.</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>Uniguidance Career Consultant Team</strong></p>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Uniguidance Career Consultant | Start Your Abroad Journey</p>
          </div>
        </div>
      `,
    });

    // 2. Send notification to admin
    await transporter.sendMail({
      from: `"Uniguidance System" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Lead: ${leadData.fullName} (${leadData.leadId})`,
      html: `
        <h2>New Counseling Lead</h2>
        <p>A new student has requested a counseling session.</p>
        <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
          <tr><th>Lead ID</th><td>${leadData.leadId}</td></tr>
          <tr><th>Name</th><td>${leadData.fullName}</td></tr>
          <tr><th>Email</th><td>${leadData.email}</td></tr>
          <tr><th>Mobile</th><td>${leadData.mobileNumber}</td></tr>
          <tr><th>City/Country</th><td>${leadData.city}, ${leadData.country}</td></tr>
          <tr><th>Highest Qual.</th><td>${leadData.highestQualification} (${leadData.passingYear})</td></tr>
          <tr><th>Score</th><td>${leadData.percentageCgpa}</td></tr>
          <tr><th>Preferred Course</th><td>${leadData.preferredCourse} in ${leadData.preferredCountry}</td></tr>
          <tr><th>Study Goals</th><td>${leadData.studyGoals}</td></tr>
          <tr><th>Budget</th><td>${leadData.budgetRange}</td></tr>
          <tr><th>Intake</th><td>${leadData.intakePreference}</td></tr>
          <tr><th>English Test</th><td>${leadData.englishTestStatus}</td></tr>
          <tr><th>Session Prep.</th><td>${leadData.preferredDate} | ${leadData.preferredTimeSlot} | ${leadData.mode}</td></tr>
        </table>
      `,
    });

    return true;
  } catch (error) {
    console.error("Error sending emails:", error);
    return false;
  }
};

export const sendAssessmentEmails = async (assessmentData: any) => {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("SMTP credentials not provided. Assessment email sending mocked.");
    console.log("Mock Welcome Email to Student:", assessmentData.email);
    console.log("Mock Assessment Lead to Admin:", ADMIN_EMAIL);
    return true;
  }

  try {
    // 1. Send Welcome Email to the candidate
    await transporter.sendMail({
      from: `"Uniguidance Support" <${SMTP_USER}>`,
      to: assessmentData.email,
      subject: "Welcome to Uniguidance! Your Profile Assessment Request is Received",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1e3a8a; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Uniguidance</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #1e3a8a;">Welcome ${assessmentData.fullName},</h2>
            <p>Thank you for submitting your rapid profile assessment request. We're thrilled to help you explore your study abroad opportunities in <strong>${assessmentData.country.toUpperCase()}</strong>!</p>
            
            <p>Our AI tools and expert counselors are currently reviewing your basic details. We will be in touch shortly on the phone number provided (<strong>${assessmentData.phone}</strong>) to discuss your academic background and map out your personalized journey.</p>
            
            <p>If you have any immediate questions, feel free to reply to this email.</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>Uniguidance Career Consultant Team</strong></p>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Uniguidance Career Consultant | Start Your Abroad Journey</p>
          </div>
        </div>
      `,
    });

    // 2. Send rapid assessment lead notification to admin
    await transporter.sendMail({
      from: `"Uniguidance System" <${SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Rapid Assessment Lead: ${assessmentData.fullName} (${assessmentData.assessmentId})`,
      html: `
        <h2>New Rapid Assessment Lead</h2>
        <p>A student has submitted the quick "Get Started" form from the Hero section.</p>
        <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr><th style="text-align:left;">Assessment ID</th><td>${assessmentData.assessmentId}</td></tr>
          <tr><th style="text-align:left;">Name</th><td>${assessmentData.fullName}</td></tr>
          <tr><th style="text-align:left;">Email</th><td>${assessmentData.email}</td></tr>
          <tr><th style="text-align:left;">Phone</th><td>${assessmentData.phone}</td></tr>
          <tr><th style="text-align:left;">Target Country</th><td style="text-transform: uppercase;">${assessmentData.country}</td></tr>
        </table>
        <p><em>Please reach out to the candidate soon to complete the full profile evaluation.</em></p>
      `,
    });

    return true;
  } catch (error) {
    console.error("Error sending assessment emails:", error);
    return false;
  }
};
