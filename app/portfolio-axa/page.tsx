"use client";

import Image from "next/image";

import axaLogo from "../../public/images/portfolio/axa/axa-logo.png";

const desktopImages = [
  "/images/portfolio/axa/2FA-Spec-v1.3-5.png",
  "/images/portfolio/axa/2FA-Spec-v1.3-6.png",
  "/images/portfolio/axa/2FA-Spec-v1.3-7.png",
  "/images/portfolio/axa/2FA-Spec-v1.3-8.png",
  "/images/portfolio/axa/2FA-Spec-v1.3-9.png",
  "/images/portfolio/axa/2FA-Spec-v1.3-10.png",
];

export default function AxaPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-30 pb-40 md:py-30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-center mb-8">
          <Image src={axaLogo} alt="lynxbet logo" title="LynxBet" width={300} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          One-Time Password Security Integration
        </h1>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          At AXA, I led the UX design for the rollout of One-Time Password (OTP)
          and two-factor authentication (2FA) capabilities—enhancements aimed at
          elevating user security across the client platform.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The project began with the design of a secure, SMS-based OTP
          registration process that required users to verify their mobile number
          and select their jurisdiction. The goal was to integrate security
          measures without adding friction to the user journey. Working closely
          with developers, I ensured the flow was intuitive and optimised for
          both desktop and mobile environments.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          As part of the second phase, I introduced a voluntary 2FA activation
          experience, later extended to support mandatory use cases for
          institutional clients. This included a device validation interface
          with modal prompts for code input, allowing users to authenticate new
          logins quickly and securely.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The redesign also extended to the profile management section, where
          users could manage their 2FA settings, view obscured device data, and
          deactivate or reset configurations with minimal effort. Staff tools
          were created in parallel, enabling admin users to search accounts,
          view device history, and assist customers by resetting 2FA setups
          through a dedicated management panel.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          These features were supported by a user-centric reporting layer,
          giving both users and support teams transparency over device usage and
          login history—further reinforcing trust and control.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The result was a more secure and streamlined platform experience, with
          scalable design patterns that supported AXA’s global user base and
          compliance requirements.
        </p>

        <h2 className="text-2xl font-semibold mb-4">UX / UI Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {desktopImages.map((src, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden shadow-sm"
            >
              <Image
                src={src}
                alt={`Gaming Mechanics desktop ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
