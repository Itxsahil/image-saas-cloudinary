export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        We&apos;d love to hear from you!
      </p>

      <form className="mt-8 w-full max-w-lg p-6 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700">
        <label className="block mb-2 text-gray-900 dark:text-white">Your Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-rose-500 focus:border-rose-500"
          placeholder="Enter your name"
        />

        <label className="block mt-4 mb-2 text-gray-900 dark:text-white">Your Email</label>
        <input 
          type="email" 
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-rose-500 focus:border-rose-500"
          placeholder="Enter your email"
        />

        <label className="block mt-4 mb-2 text-gray-900 dark:text-white">Your Message</label>
        <textarea 
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-rose-500 focus:border-rose-500"
          rows={4} 
          placeholder="Write your message..."
        ></textarea>

        <button className="mt-6 w-full px-4 py-2 text-white bg-rose-500 hover:bg-rose-600 dark:bg-rose-400 dark:hover:bg-rose-500 rounded-lg transition-all">
          Send Message
        </button>
      </form>
    </section>
  );
}
