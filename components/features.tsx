import React from "react";
import Link from "next/link";

function Features() {
  const listFeatures = [
    {
      id: 1,
      title: "Format Converter",
      description: "Convert Images to Different Formats",
      link: "/format-converter",
    },
    {
      id: 2,
      title: "Generative Fill",
      description: "Fill Missing Image Parts Using AI",
      link: "/generative-fill",
    },
    {
      id: 3,
      title: "Social Resizer",
      description: "Resize Images for Social Media",
      link: "/social-resizer",
    },
    // Add more features as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {listFeatures.map((feature) => (
        <div
          key={feature.id}
          className="group rounded-xl p-6  transition duration-300 cursor-pointer animate__animated animate__fadeInUp relative overflow-hidden before:content-[''] before:absolute before:w-[200%] before:h-[200%] before:bg-gradient-to-br before:from-pink-400/30 before:via-transparent before:to-transparent before:-top-full before:-left-full before:transform before:rotate-45 before:transition-all before:duration-700 hover:before:translate-x-[60%] hover:before:translate-y-[60%]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <h3 className="text-xl font-semibold dark:text-white">
                {feature.title}
              </h3>
            </div>
          </div>
          <p className="dark:text-gray-400 mb-4">{feature.description}</p>
          <div className="flex items-center text-pink-400 group-hover:text-pink-300 transition duration-300">
            <Link href={feature.link}>
              <span>Try</span>
            </Link>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
