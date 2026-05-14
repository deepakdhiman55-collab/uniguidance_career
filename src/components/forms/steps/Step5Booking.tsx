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

export function Step5Booking({ register, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#F8FAFC]">Book Your Session</h3>
        <p className="text-[#E2E8F0]">Choose a convenient time for counseling</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="preferredDate">Preferred Date</Label>
            <Input
              id="preferredDate"
              type="date"
              {...register("preferredDate")}
              error={errors.preferredDate?.message}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div>
            <Label htmlFor="preferredTimeSlot">Preferred Time Slot</Label>
            <Select
              id="preferredTimeSlot"
              {...register("preferredTimeSlot")}
              error={errors.preferredTimeSlot?.message}
              placeholder="Select Time Slot"
              options={[
                { label: "Morning (10:00 AM - 12:00 PM)", value: "morning" },
                { label: "Afternoon (1:00 PM - 3:00 PM)", value: "early_afternoon" },
                { label: "Late Afternoon (3:00 PM - 5:00 PM)", value: "late_afternoon" },
                { label: "Evening (5:00 PM - 7:00 PM)", value: "evening" },
              ]}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="mode">Counseling Mode</Label>
          <Select
            id="mode"
            {...register("mode")}
            error={errors.mode?.message}
            placeholder="Select Mode"
            options={[
              { label: "Online (Google Meet/Zoom)", value: "online" },
              { label: "Offline (Visit Office)", value: "offline" },
              { label: "Phone Call", value: "phone" },
            ]}
          />
        </div>

        <div className="mt-8 rounded-xl bg-blue-50 p-4 border border-blue-100">
          <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Our expert counselor will review your profile.</li>
            <li>You will receive a confirmation email with meeting details.</li>
            <li>We will call you to confirm your exact time slot.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
