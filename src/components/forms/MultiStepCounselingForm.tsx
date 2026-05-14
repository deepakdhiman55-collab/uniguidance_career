"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { counselingSchema, CounselingFormValues } from "@/lib/validations/counseling";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { SuccessPopup } from "@/components/ui/SuccessPopup";

import { Step1BasicDetails } from "./steps/Step1BasicDetails";
import { Step2Academic } from "./steps/Step2Academic";
import { Step3Career } from "./steps/Step3Career";
import { Step4Upload } from "./steps/Step4Upload";
import { Step5Booking } from "./steps/Step5Booking";

const steps = [
  { id: 1, name: "Basic Details", fields: ["fullName", "mobileNumber", "email", "city", "country"] },
  { id: 2, name: "Academic Info", fields: ["highestQualification", "passingYear", "percentageCgpa", "preferredCourse", "preferredCountry"] },
  { id: 3, name: "Career Goals", fields: ["studyGoals", "budgetRange", "intakePreference", "englishTestStatus"] },
  { id: 4, name: "Uploads", fields: ["resume", "passport", "academicDocs"] },
  { id: 5, name: "Booking", fields: ["preferredDate", "preferredTimeSlot", "mode"] },
];

export function MultiStepCounselingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [leadId, setLeadId] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<CounselingFormValues>({
    resolver: zodResolver(counselingSchema),
    mode: "onChange",
  });

  const nextStep = async () => {
    const fieldsToValidate = steps[currentStep - 1].fields as (keyof CounselingFormValues)[];
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: CounselingFormValues) => {
    setIsSubmitting(true);
    try {
      // Create FormData to handle file uploads
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (value !== undefined && value !== null) {
          formData.append(key, value as string);
        }
      });

      const response = await fetch("/api/counseling/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      setLeadId(result.leadId || "UG-" + Math.floor(1000 + Math.random() * 9000));
      setShowSuccess(true);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <div className="w-full p-6 md:p-10 relative overflow-hidden rounded-3xl text-slate-200 bg-transparent">
        {/* Floating abstract luxury shapes */}
        <div className="absolute top-[-100px] right-[-100px] w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB, transparent)" }} />
        <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: "linear-gradient(135deg, #0F172A, #D4AF37, transparent)", opacity: 0.4 }} />

        {/* CSS for custom particles can be added if needed, but these gradients provide the elegant feel */}

        <div className="relative z-10">
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={steps.length} 
            steps={steps.map(s => s.name)} 
          />

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {currentStep === 1 && <Step1BasicDetails register={register} errors={errors} />}
                  {currentStep === 2 && <Step2Academic register={register} errors={errors} />}
                  {currentStep === 3 && <Step3Career register={register} errors={errors} />}
                  {currentStep === 4 && <Step4Upload register={register} errors={errors} setValue={setValue} />}
                  {currentStep === 5 && <Step5Booking register={register} errors={errors} />}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex justify-between pt-6 border-t border-white/20">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1 || isSubmitting}
                className={currentStep === 1 ? "invisible" : ""}
              >
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button type="button" onClick={nextStep}>
                  Next Step
                </Button>
              ) : (
                <Button type="submit" variant="gold" isLoading={isSubmitting}>
                  Complete Registration
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>

      <SuccessPopup 
        isOpen={showSuccess} 
        onClose={() => {
          setShowSuccess(false);
          window.location.href = "/"; // Redirect to home or reset form
        }} 
        leadId={leadId} 
      />
    </>
  );
}
