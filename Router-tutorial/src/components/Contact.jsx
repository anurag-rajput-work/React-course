import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left Info Box */}
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Get in touch
            </h1>
            <p className="text-gray-600 text-lg">
              Fill in the form to start a conversation
            </p>

            {/* Address */}
            <div className="flex items-start gap-4 text-gray-700">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-semibold">
                Acme Inc, Street, State, Postal Code
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 text-gray-700">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="font-semibold">+44 1234567890</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 text-gray-700">
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="font-semibold">info@acme.org</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
            <div>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 font-medium focus:border-orange-500 focus:outline-none transition"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 font-medium focus:border-orange-500 focus:outline-none transition"
              />
            </div>

            <div>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telephone Number"
                className="w-full py-3 px-4 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 font-medium focus:border-orange-500 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
