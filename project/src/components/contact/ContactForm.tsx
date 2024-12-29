import React from 'react';

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-primary mb-2">
          Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-primary mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-primary mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 bg-dark-lighter border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20"
      >
        Send Message
      </button>
    </form>
  );
}