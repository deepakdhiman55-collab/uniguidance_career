import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Uniguidance Career Consultant",
  description: "Read the Uniguidance Career Consultant Terms and Conditions. Understand the rules and regulations for using our global education services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Header Section */}
      <section className="pt-40 pb-16 px-[5%] bg-gray-50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last Updated: May 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-blue">
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Uniguidance Career Consultant ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>

          <h2>2. Educational Counseling Services</h2>
          <p>
            We provide advisory services related to international education, university admissions, scholarship applications, and visa guidance. While we strive to provide accurate and up-to-date information:
          </p>
          <ul>
            <li>We do not guarantee admission to any specific university. Admission decisions are strictly at the discretion of the respective educational institutions.</li>
            <li>We do not guarantee the issuance of student visas. Visa approvals are at the sole discretion of the respective country's embassy or consulate.</li>
            <li>Any timelines provided for application processing are estimates and subject to change based on university and immigration backlogs.</li>
          </ul>

          <h2>3. User Representations</h2>
          <p>
            By using our services, you represent and warrant that:
          </p>
          <ol>
            <li>All registration and application information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ol>

          <h2>4. Fees and Payments</h2>
          <p>
            While our initial consultations and AI profile evaluations may be offered free of charge, comprehensive admission and visa processing services may incur professional fees. All fee structures will be transparently discussed and agreed upon via a signed Service Level Agreement (SLA) before any paid services commence.
          </p>

          <h2>5. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: legal@uniguidance.com.
          </p>
        </div>
      </section>
    </main>
  );
}
