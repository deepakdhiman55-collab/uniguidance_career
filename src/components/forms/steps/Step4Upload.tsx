import React, { useState } from "react";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { CounselingFormValues } from "@/lib/validations/counseling";
import { UploadCloud, File, X } from "lucide-react";
import { Label } from "@/components/ui/Label";

interface StepProps {
  register: UseFormRegister<CounselingFormValues>;
  errors: FieldErrors<CounselingFormValues>;
  setValue: UseFormSetValue<CounselingFormValues>;
}

export function Step4Upload({ register, errors, setValue }: StepProps) {
  // Using simple local state to show uploaded file names visually
  const [files, setFiles] = useState<{ [key: string]: string }>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof CounselingFormValues) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [fieldName]: file.name }));
      setValue(fieldName, file); // We use setValue from React Hook Form for custom handling
    }
  };

  const removeFile = (fieldName: keyof CounselingFormValues) => {
    setFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[fieldName];
      return newFiles;
    });
    setValue(fieldName, undefined);
  };

  const FileUploadBox = ({ title, fieldName, isOptional = false }: { title: string, fieldName: keyof CounselingFormValues, isOptional?: boolean }) => (
    <div className="w-full">
      <Label>{title} {isOptional && <span className="text-gray-400 font-normal">(Optional)</span>}</Label>
      
      {!files[fieldName] ? (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-200 rounded-xl bg-white/40 hover:bg-white/60 transition-colors cursor-pointer backdrop-blur-md">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadCloud className="w-8 h-8 mb-3 text-blue-500" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">PDF, DOCX, or JPG (MAX. 5MB)</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => handleFileChange(e, fieldName)}
          />
        </label>
      ) : (
        <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <File className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700 truncate max-w-[200px] sm:max-w-[300px]">
              {files[fieldName]}
            </span>
          </div>
          <button 
            type="button" 
            onClick={() => removeFile(fieldName)}
            className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#F8FAFC]">Document Upload</h3>
        <p className="text-[#E2E8F0]">Provide necessary documents for a better evaluation</p>
      </div>

      <div className="space-y-6">
        <FileUploadBox title="Resume / CV" fieldName="resume" />
        <FileUploadBox title="Passport Copy" fieldName="passport" isOptional />
        <FileUploadBox title="Latest Academic Transcripts" fieldName="academicDocs" />
        
        <p className="text-xs text-center text-gray-500 mt-4">
          Note: These files will be uploaded securely and kept confidential.
        </p>
      </div>
    </div>
  );
}
