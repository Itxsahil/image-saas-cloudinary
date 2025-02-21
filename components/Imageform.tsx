"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { CloudUpload } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export default function ImageUpload({ setImageDetails }: { setImageDetails: (details: any) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      handleFileUpload(selectedFile); // Auto-upload on selection
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setImageDetails(data); // Store image details in parent component

      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 20;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "Image uploaded successfully",
            description: "You can now transform your image!",
            variant: "default",
          });
        }
      }, 200);
    } catch (error) {
      console.error("Upload Error:", error);
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-72 p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800">
        <div
          {...getRootProps()}
          className={`w-full p-6 flex flex-col items-center justify-center cursor-pointer ${
            isDragActive ? "border-rose-500 bg-rose-100 dark:bg-rose-900" : ""
          }`}
        >
          <input {...getInputProps()} />
          {file ? (
            <div className="relative w-40 h-40 mt-4">
              <Image
                src={URL.createObjectURL(file)}
                alt="Uploaded image"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <CloudUpload size={48} className="text-rose-500 mb-2" />
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Drag & drop an image here, or click to select one
              </p>
            </div>
          )}
        </div>
      </div>

      {uploading && (
        <div className="w-72 mt-4">
          <Progress value={progress} />
        </div>
      )}

      {file && !uploading && (
        <button
          onClick={() => setFile(null)}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
        >
          Remove Image
        </button>
      )}
    </div>
  );
}
