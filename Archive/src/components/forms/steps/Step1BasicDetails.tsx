import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CounselingFormValues } from "@/lib/validations/counseling";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

interface StepProps {
  register: UseFormRegister<CounselingFormValues>;
  errors: FieldErrors<CounselingFormValues>;
}

export function Step1BasicDetails({ register, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#F8FAFC]">Basic Details</h3>
        <p className="text-[#E2E8F0]">Tell us a bit about yourself</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            {...register("fullName")}
            error={errors.fullName?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input
              id="mobileNumber"
              placeholder="+1 234 567 8900"
              {...register("mobileNumber")}
              error={errors.mobileNumber?.message}
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="e.g. New York"
              {...register("city")}
              error={errors.city?.message}
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="e.g. United States"
              {...register("country")}
              error={errors.country?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
