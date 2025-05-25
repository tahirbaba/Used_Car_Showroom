'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // You can connect to an API or database here later
    setTimeout(() => setSubmitted(false), 5000); // Hide success message after 5 seconds
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Have questions about buying or selling a car? Reach out to our team and we will respond quickly!
          </p>
          <div className="space-y-4 text-gray-600 text-base">
            <p><strong>📍 Address:</strong> Al Markaz, Gilani Mazar, Block 13-a, st-2, Gulshan-e-Iqbal, Karachi</p>
            <p><strong>📞 Phone:</strong> +92 312 9114002</p>
            <p><strong>📧 Email:</strong> muhammadtahirhasni@gamil.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-xl p-8 space-y-6">
          {submitted && (
            <div className="text-green-600 font-medium border border-green-200 bg-green-50 p-4 rounded-lg">
              ✅ Your message has been sent successfully!
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
