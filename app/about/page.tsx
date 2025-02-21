"use client";
export default function AboutUs() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "SaaSify"; // Default to "SaaSify" if the env variable is not set

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        About Us
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
        Welcome to <span className="text-rose-500 font-semibold">{appName} 🚀</span>, where we provide simple and elegant software solutions
        that help businesses grow. Our mission is to empower entrepreneurs with powerful yet affordable tools.
      </p>

      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-2 text-white bg-rose-500 hover:bg-rose-600 dark:bg-rose-400 dark:hover:bg-rose-500 rounded-lg transition-all">
          Learn More
        </button>
        <button className="px-6 py-2 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-400 rounded-lg transition-all">
          Contact Us
        </button>
      </div>
    </section>
  );
}
