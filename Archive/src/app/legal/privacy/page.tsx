import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Uniguidance Career Consultant",
  description: "Read the Uniguidance Career Consultant Privacy Policy. Learn how we protect your data and privacy during your global education counseling.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Header Section */}
      <section className="pt-40 pb-16 px-[5%] bg-gray-50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last Updated: May 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-blue">
          <p>
            At Uniguidance Career Consultant ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our international education counseling services.
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Register on the website or fill out our counseling inquiry forms.</li>
            <li>Request an AI Profile Evaluation.</li>
            <li>Contact us via email, phone, or WhatsApp.</li>
            <li>Apply for visa processing or university admission services.</li>
          </ul>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include:
          </p>
          <ul>
            <li><strong>Personal Details:</strong> Names, phone numbers, email addresses, mailing addresses, and contact preferences.</li>
            <li><strong>Academic & Career Data:</strong> Previous education history, transcripts, standardized test scores (IELTS/PTE), and career aspirations.</li>
            <li><strong>Financial Information:</strong> Budget preferences for study abroad and necessary documentation for visa financial proof.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below:
          </p>
          <ul>
            <li><strong>To facilitate the counseling process:</strong> Assessing your academic profile to recommend the best universities and courses.</li>
            <li><strong>To send administrative information to you:</strong> We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
            <li><strong>To process applications:</strong> Submitting your details directly to partnered global universities on your behalf (with your explicit consent).</li>
            <li><strong>To send marketing and promotional communications:</strong> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences.</li>
          </ul>

          <h2>3. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. Specifically, we may need to process your data or share your personal information with:
          </p>
          <ul>
            <li><strong>Educational Institutions:</strong> Universities and colleges you have chosen to apply to.</li>
            <li><strong>Immigration Authorities:</strong> Relevant embassy or consulate services for visa processing.</li>
            <li><strong>Third-Party Vendors:</strong> Service providers performing services for us or on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
          </p>

          <h2>5. Your Privacy Rights</h2>
          <p>
            In some regions (like the EEA, UK, and UAE), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at privacy@uniguidance.com or contact our Global Headquarters in Dubai.
          </p>
        </div>
      </section>
    </main>
  );
}
