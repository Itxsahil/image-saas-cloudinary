"use client";

export default function Footer() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "SaaSify"; // Default to "SaaSify" if the env variable is not set

  return (
    <footer className="w-full flex items-center border-t border-transparent backdrop-blur-lg dark:border-gray-800 z-50 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} 
          <a
            href="https://x.com/SahilKh32102162"  // Replace with your actual Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rose-500 hover:text-rose-600"
          >
            {" "}Sahil Khan
          </a>. 
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
