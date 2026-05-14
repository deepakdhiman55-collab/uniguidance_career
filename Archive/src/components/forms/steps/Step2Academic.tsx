import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CounselingFormValues } from "@/lib/validations/counseling";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";

interface StepProps {
  register: UseFormRegister<CounselingFormValues>;
  errors: FieldErrors<CounselingFormValues>;
}

export function Step2Academic({ register, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#F8FAFC]">Academic Information</h3>
        <p className="text-[#E2E8F0]">Share your educational background</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="highestQualification">Highest Qualification</Label>
            <Select
              id="highestQualification"
              {...register("highestQualification")}
              error={errors.highestQualification?.message}
              placeholder="Select Qualification"
              options={[
                { label: "High School (12th)", value: "high_school" },
                { label: "Bachelor's Degree", value: "bachelors" },
                { label: "Master's Degree", value: "masters" },
                { label: "Diploma", value: "diploma" },
                { label: "Other", value: "other" },
              ]}
            />
          </div>
          <div>
            <Label htmlFor="passingYear">Passing Year</Label>
            <Input
              id="passingYear"
              type="number"
              placeholder="e.g. 2023"
              {...register("passingYear")}
              error={errors.passingYear?.message}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="percentageCgpa">Percentage / CGPA</Label>
          <Input
            id="percentageCgpa"
            placeholder="e.g. 85% or 8.5 CGPA"
            {...register("percentageCgpa")}
            error={errors.percentageCgpa?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="preferredCourse">Preferred Course</Label>
            <Input
              id="preferredCourse"
              placeholder="e.g. Master of Computer Science"
              {...register("preferredCourse")}
              error={errors.preferredCourse?.message}
            />
          </div>
          <div>
            <Label htmlFor="preferredCountry">Preferred Country</Label>
            <Select
              id="preferredCountry"
              {...register("preferredCountry")}
              error={errors.preferredCountry?.message}
              placeholder="Select Country"
              options={[
                { label: "United States", value: "USA" },
                { label: "United Kingdom", value: "UK" },
                { label: "Canada", value: "Canada" },
                { label: "Australia", value: "Australia" },
                { label: "Germany", value: "Germany" },
                { label: "New Zealand", value: "New Zealand" },
                { label: "Other", value: "Other" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
