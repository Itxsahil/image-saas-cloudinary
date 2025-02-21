"use client";
import { useState } from "react";
import Features from "@/components/features";

export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "SaaSify"; // Default to "SaaSify" if the env variable is not set
  const accordionData = [
    {
      title: `Introduction to ${appName}`,
      content: `${appName} provides state-of-the-art AI tools to help creators, marketers, and developers save time and achieve incredible results. Whether you're resizing images for a presentation, removing backgrounds for e-commerce, or improving image quality, we've got you covered.`,
    },
    {
      title: "Powered by Advanced AI Models",
      content:
        "All tools are powered by advanced AI models, ensuring top-notch performance without sacrificing simplicity. These tools are designed for professionals but remain accessible to beginners.",
    },
    {
      title: `Why Thousands of Users Trust ${appName}`,
      content:
        "✔ Easy-to-use interface for non-techies\n✔ Advanced AI algorithms for professional results\n✔ Optimized for speed and efficiency\n✔ 100% free plan for individuals and startups",
    },
    {
      title: "Tailored for Diverse Use Cases",
      content: `${appName}'s tools are versatile enough to handle any image editing challenge. Whether you're a content creator, e-commerce store owner, or graphic designer, ${appName} helps you achieve your goals effortlessly.`,
    },
    {
      title: "Save Time and Resources",
      content:
        "By automating time-consuming image editing tasks, ${appName} enables you to focus on creativity and productivity. Leave the technical details to us and enjoy a seamless editing experience.",
    },
    {
      title: "Community of Satisfied Users",
      content:
        "Join thousands of happy users who rely on ${appName} daily for their professional and personal needs. Explore the tools and discover why ${appName} is the preferred choice for image editing.",
    },
  ];
  return (
    <main className="min-h-[200vh] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-32">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Transform Images with <span className="text-rose-500">{appName}</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Experience the ultimate AI-powered toolkit to resize, enhance, remove
          backgrounds, and apply stunning filters to your images. Simple,
          effective, and designed to make your workflow seamless.
        </p>
      </header>

      {/* Video Section */}
      <section className="mb-16 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Watch this quick tutorial to see how easily you can create
            professional-grade images using our tools.
          </p>
        </div>
        <div className="aspect-video bg-black w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video
            controls
            className="w-full h-full"
            poster="https://via.placeholder.com/800x450" // Replace with your video thumbnail
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Features Section */}

      <div className="mb-16">
        <Features />
      </div>

      {/* SEO Optimized Section */}
      <section className="mb-16 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose {appName}?
          </h2>
        </div>

        {/* Accordions */}
        <div className="mt-8 max-w-5xl mx-auto space-y-6">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
    </main>
  );
}

// Features Data
const features = [
  {
    title: "AI Image Resizer",
    description: "Resize images with high precision.",
  },
  {
    title: "AI Background Remover",
    description: "Instantly remove backgrounds from images.",
  },
  {
    title: "AI Image Quality Improver",
    description: "Enhance image clarity and resolution.",
  },
  {
    title: "AI Size Transformation",
    description: "Scale images without losing quality.",
  },
  {
    title: "AI Generative Fill",
    description: "Fill missing image parts using AI.",
  },
  {
    title: "AI Object Removal",
    description: "Erase unwanted objects seamlessly.",
  },
  {
    title: "AI Filters",
    description: "Apply creative filters to your images.",
  },
];

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3  text-gray-900 dark:text-white text-left font-medium focus:outline-none focus:ring"
      >
        {title}
        <span
          className={`ml-4 transform transition-transform text-xl ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ✦
        </span>
      </button>
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen && (
          <div className="px-4 py-3 text-gray-700 dark:text-gray-300">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
