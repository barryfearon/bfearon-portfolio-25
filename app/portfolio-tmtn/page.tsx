"use client";

import Image from "next/image";
import Link from "next/link";
import tmtnLogo from "../../public/images/portfolio/tmtn/tmtn-logo-500x140.png";

const wireframeImages = [
  //Wireframes
  "/images/portfolio/tmtn/wireframe-summary-screen.png",
  "/images/portfolio/tmtn/wireframe-personel-filter-options.png",
  "/images/portfolio/tmtn/wireframe-employee-summary-screen.png",
  "/images/portfolio/tmtn/wireframe-employee-add-time.png",
];

const mobileImages = [
  //Marketing Site
  "/images/portfolio/tmtn/home-page-01.png",
  "/images/portfolio/tmtn/homepage-icons.png",
  "/images/portfolio/tmtn/homepage-pricing.png",
  "/images/portfolio/tmtn/homepage-form.png",
];

const desktopImages = [
  //Desktop
  "/images/portfolio/tmtn/dt-summary.png",
  "/images/portfolio/tmtn/dt-addnew-personnel.png",
  "/images/portfolio/tmtn/dt-start-timer-employee.png",
  "/images/portfolio/tmtn/dt-confirm-time-entry.png",
];

export default function TmtnPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-30 pb-40 md:py-30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-center mb-8">
          <Image
            src={tmtnLogo}
            alt="lynxbet logo"
            title="LynxBet"
            width={300}
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Mobile & Desktop Design
        </h1>

        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-4">
          <Link
            href="https://trackmytimenow.com/"
            target="_blank"
            className="text-brand-01 underline hover:text-brand-02"
          >
            trackmytimenow.com
          </Link>
        </p>

        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          As Creative Director, I oversaw the full creative development of Track
          My Time Now—a digital-first time tracking application designed to
          streamline how individuals and teams manage hours, clients, and
          projects.
        </p>

        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          I led the project from concept to completion, shaping the brand’s
          visual identity, user experience, and product storytelling to ensure
          clarity, simplicity, and usability were at the heart of the platform.
        </p>

        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          A standout component of the launch was the introductory explainer
          video, which plays a key role in introducing the product’s core
          benefits. I collaborated closely with the animation and script teams,
          providing creative direction and feedback throughout, and signed off
          on the final cut used on the live site.
        </p>

        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-12">
          The result is a polished, user-focused platform supported by engaging
          visual storytelling—built to remove friction from time tracking and
          help businesses work smarter, not harder.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Mobile Wireframe Designs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {wireframeImages.map((src, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden shadow-sm"
            >
              <Image
                src={src}
                alt={`Gaming Mechanics mobile ${index + 1}`}
                width={400}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Mobile UX/UI Designs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
          {mobileImages.map((src, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden shadow-sm"
            >
              <Image
                src={src}
                alt={`Gaming Mechanics mobile ${index + 1}`}
                width={400}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Desktop UX/UI Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {desktopImages.map((src, index) => (
            <div key={index} className="overflow-hidden">
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
