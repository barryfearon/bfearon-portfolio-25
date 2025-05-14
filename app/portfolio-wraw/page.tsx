"use client";

import Image from "next/image";

import wrawLogo from "../../public/images/portfolio/wraw/wraw-logo-500x200.png";

const mobileImages = [
  //Wireframes
  "/images/portfolio/wraw/homepage-wire.png",
  "/images/portfolio/wraw/intro-to-wraw-mobile-wire.png",
  "/images/portfolio/wraw/mood-map-history-wire.png",
  "/images/portfolio/wraw/results-page-mobile-wire.png",

  //Mobile Prototypes
  "/images/portfolio/wraw/intro-to-wraw-mobile-proto.png",
  "/images/portfolio/wraw/homepage-mobile-proto-01.png",
  "/images/portfolio/wraw/homepage-mobile-proto-02.png",
  "/images/portfolio/wraw/mood-mapping-proto.png",
  "/images/portfolio/wraw/wellbeing-journey-proto.png",
  "/images/portfolio/wraw/self-belief-proto.png",
  "/images/portfolio/wraw/sel-belief-proto-02.png",
];

const desktopImages = [
  "/images/portfolio/lynxbet/lynxbet-desktop-hero-banner.png",
  "/images/portfolio/lynxbet/lynxbet-desktop-hero-casino-banner.png",
  "/images/portfolio/lynxbet/lynxbet-desktop-hero-sports-banner.png",
  "/images/portfolio/lynxbet/lynxbet-desktop-payment-providers.png",
];

export default function WrawPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-30 pb-40 md:py-30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-center mb-8">
          <Image
            src={wrawLogo}
            alt="lynxbet logo"
            title="LynxBet"
            width={300}
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Cross-Platform iGaming Launch
        </h1>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          I led the design transformation of the WRAW platform—The Wellbeing
          Project’s digital tool for workplace resilience and wellbeing
          assessment. The brief was to overhaul a legacy system, resolve
          technical debt, and reimagine the product through a user-first lens.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          Starting with deep user research—surveys, interviews, and competitor
          analysis—I identified key pain points and expectations across user
          segments. From there, I developed detailed wireframes and interactive
          prototypes to map functionality, streamline user journeys, and enable
          early stakeholder feedback.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-12">
          Following iterative testing, I moved into full UI design, aligning the
          new interface with the organisation’s brand identity to deliver a
          visually engaging and highly usable product. The result was a modern,
          accessible platform that better reflected the organisation’s mission
          and improved the overall user experience from registration to
          reporting.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Mobile UI Designs</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Desktop UI Designs</h2>
        <div className="grid grid-cols-1 gap-6">
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
