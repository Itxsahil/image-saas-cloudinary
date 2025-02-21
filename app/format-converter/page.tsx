"use client";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { CloudUpload } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { CldImage } from "next-cloudinary";

function FormatChanger() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
    const [preview, setPreview] = useState<string | null>(null); // Store preview URL separately
  
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const [format, setFormat] = useState("jpg");
  const [publicId, setPublicId] = useState<string | null>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [downloading, setDownloading] = useState(false);

  const imageRef = useRef<HTMLImageElement | null>(null);

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
      setPublicId(data.publicId);
      setWidth(data.width);
      setHeight(data.height);
      setFormat(data.format);

      let progressValue = 0;
      const interval = setInterval(() => {
        progressValue += 20;
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "Image uploaded successfully",
            description: "Your image has been uploaded successfully.",
            variant: "default",
            duration: 3000,
          });
        }
      }, 200);
    } catch (error) {
      console.error(error);
      toast({
        title: "Upload Failed",
        description: "Something went wrong while uploading your image.",
        variant: "destructive",
      });
      setUploading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Store preview URL separately

      handleFileUpload(selectedFile);
    }
  }, [handleFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleDownload = () => {
    if (!imageRef.current) return;
    setDownloading(true);
    fetch(imageRef.current.src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `transformed.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .then(() => {
        setTimeout(() => {
          setDownloading(false); // Hide loader and return to normal button text
        }, 3000);
      });
  };

  const handleClean = () => {
    setFile(null);
    setPublicId(null);
    setWidth(null);
    setHeight(null);
    setPreview(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 ">
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">
        Image Format Changer
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Convert your images to different formats easily. Supported formats: JPG,
        PNG, WebP, and more.
      </p>

      <div className="flex flex-col items-center w-full max-w-md space-y-6">
        <div
          {...getRootProps()}
          className={`w-full p-8 flex flex-col items-center justify-center cursor-pointer border-4 border-dashed rounded-lg  transition-all ${
            isDragActive
              ? "border-rose-500 bg-rose-100 dark:bg-rose-900"
              : "border-gray-300 dark:border-gray-600"
          }`}
        >
          <input {...getInputProps()} />
          {preview ? (
            <div className="relative w-56 h-56 mt-4">
              <Image
                src={preview}
                alt="Uploaded image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <CloudUpload className="text-rose-500 mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Drag & drop an image here, or click to select one
              </p>
            </div>
          )}
        </div>

        {uploading && (
          <div className="w-full">
            <Progress value={progress} />
          </div>
        )}

        {file && !uploading && (
          <>
            <button
              onClick={handleClean}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
            >
              Remove Image
            </button>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
            >
              <option value="jpg">JPG</option>
              <option value="png">PNG</option>
              <option value="webp">WebP</option>
              <option value="jpeg">JPEG</option>
              <option value="gif">GIF</option>
              <option value="avif">AVIF</option>
            </select>
          </>
        )}
        {publicId && (
          <>
            <CldImage
              ref={imageRef}
              className=""
              src={`${publicId}.${format}`}
              width={width || 200}
              height={height || 200}
              alt="Converted Image"
            />

            <button
              onClick={handleDownload}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center"
              disabled={downloading} // Disable button while downloading
            >
              {downloading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0116 0h-2a6 6 0 00-12 0H4z"
                    ></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                "Download Image"
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default FormatChanger;
