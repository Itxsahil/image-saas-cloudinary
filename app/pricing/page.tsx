export default function Pricing() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Pricing</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Simple & Transparent. Get Started for Free!</p>
  
        {/* Pricing Card */}
        <div className="mt-8 w-full max-w-lg p-6 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Free Plan</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Perfect for startups & small teams.</p>
          
          <div className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            $0 <span className="text-lg font-medium">/ Lifetime</span>
          </div>
  
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>✔ Unlimited Access</li>
            <li>✔ Basic Support</li>
            <li>✔ Essential Features</li>
          </ul>
  
          <button className="mt-6 w-full px-4 py-2 text-white bg-rose-500 hover:bg-rose-600 dark:bg-rose-400 dark:hover:bg-rose-500 rounded-lg transition-all">
            Get Started for Free
          </button>
        </div>
      </section>
    );
  }
  