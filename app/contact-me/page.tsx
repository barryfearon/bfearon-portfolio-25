"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, submit, reset] = useForm("mjkyqplg");

  if (state.submitting) {
    return (
      <main className="bg-gray-50 min-h-screen text-gray-900">
        <div className="grid place-items-center max-w-2xl mx-auto h-screen">
          <div className="self-end">
            <h1 className="text-4xl font-bold mb-4 text-center">Sending...</h1>
            <p className="text-gray-900">
              Please wait while we send your message.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (state.succeeded) {
    return (
      <main className="bg-gray-50 min-h-screen text-gray-900">
        <div className="grid place-items-center max-w-2xl mx-auto h-screen">
          <div className="self-end">
            <h1 className="text-4xl font-bold mb-4 text-center">Success ;-)</h1>
            <p className="text-gray-900">
              Your message has been sent.
              <br />
              I&apos;ll respond as soon as possible.
            </p>
          </div>
          <button
            className="bg-brand-01 text-white px-6 py-2 rounded-lg shadow hover:bg-brand-02 transition self-start mt-4 cursor-pointer"
            onClick={reset}
          >
            Thanks!
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen grid px-4 ">
      <div className="self-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Get in Touch</h1>

          <form
            onSubmit={submit}
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
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
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
      </div>
    </main>
  );
}
