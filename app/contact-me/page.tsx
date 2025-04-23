"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mjkyqplg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6 text-gray-900 py-30">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
              rows={5}
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-brand-01 text-white px-6 py-2 rounded hover:bg-brand-02 transition mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
