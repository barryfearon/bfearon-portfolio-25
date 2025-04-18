"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Dialog } from "@headlessui/react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptcha = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!captchaVerified) {
      e.preventDefault();
      alert("Please complete the reCAPTCHA");
    } else {
      setShowModal(true);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6 text-gray-900 py-30">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Get in Touch</h1>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
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
          </div>

          <ReCAPTCHA
            sitekey="6Ldl_BwrAAAAAO0rsPRhIVF3UmqtwuHW6EHrMhjS"
            onChange={handleCaptcha}
            className="mt-4"
          />

          <button
            type="submit"
            className="bg-brand-01 text-white px-6 py-2 rounded hover:bg-brand-02 transition mt-4"
          >
            Send Message
          </button>
        </form>
      </div>

      <Dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md rounded-lg shadow-lg p-6 text-center">
            <Dialog.Title className="text-xl font-semibold mb-2">
              Thank You!
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-600 mb-4">
              Your message has been submitted successfully. I&apos;ll get back
              to you soon.
            </Dialog.Description>
            <button
              className="mt-2 bg-brand-01 text-white px-4 py-2 rounded hover:bg-brand-02 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
}
