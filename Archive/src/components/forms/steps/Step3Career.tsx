import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CounselingFormValues } from "@/lib/validations/counseling";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";

interface StepProps {
  register: UseFormRegister<CounselingFormValues>;
  errors: FieldErrors<CounselingFormValues>;
}

export function Step3Career({ register, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#F8FAFC]">Career Goals</h3>
        <p className="text-[#E2E8F0]">Let's align with your future aspirations</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="studyGoals">Study Goals</Label>
          <div className="w-full relative">
            <textarea
              id="studyGoals"
              placeholder="Briefly describe your goals after completing the course..."
              rows={4}
              className={`flex w-full rounded-xl border border-white/20 bg-white/40 px-4 py-3 text-sm text-gray-800 shadow-sm transition-all backdrop-blur-md placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent ${
                errors.studyGoals ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
              {...register("studyGoals")}
            />
            {errors.studyGoals && (
              <p className="absolute -bottom-5 left-1 text-xs text-red-500">
                {errors.studyGoals.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="budgetRange">Budget Range (Per Year)</Label>
            <Select
              id="budgetRange"
              {...register("budgetRange")}
              error={errors.budgetRange?.message}
              placeholder="Select Budget"
              options={[
                { label: "$10,000 - $20,000", value: "10k-20k" },
                { label: "$20,000 - $30,000", value: "20k-30k" },
                { label: "$30,000 - $50,000", value: "30k-50k" },
                { label: "$50,000+", value: "50k+" },
              ]}
            />
          </div>
          <div>
            <Label htmlFor="intakePreference">Intake Preference</Label>
            <Select
              id="intakePreference"
              {...register("intakePreference")}
              error={errors.intakePreference?.message}
              placeholder="Select Intake"
              options={[
                { label: "Fall (Aug/Sep)", value: "fall" },
                { label: "Spring (Jan/Feb)", value: "spring" },
                { label: "Summer (May/Jun)", value: "summer" },
                { label: "Not sure yet", value: "unsure" },
              ]}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="englishTestStatus">English Proficiency Test</Label>
          <Select
            id="englishTestStatus"
            {...register("englishTestStatus")}
            error={errors.englishTestStatus?.message}
            placeholder="Select Status"
            options={[
              { label: "Already taken IELTS/PTE/TOEFL", value: "taken" },
              { label: "Planning to take soon", value: "planning" },
              { label: "Need coaching/guidance", value: "need_coaching" },
              { label: "Not required / Not planning", value: "not_required" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
