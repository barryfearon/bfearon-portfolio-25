"use client";

import Image from "next/image";
import Link from "next/link";
import gmlLogo from "../../public/images/portfolio/gml/gml-logo-500x405.png";

const mobileImages = [
  //Wireframes
  "/images/portfolio/gml/TemplateHeroMobileWire.png",
  "/images/portfolio/gml/TemplateSectionParallaxImagesMobileWire.png",
  "/images/portfolio/gml/TemplateSectionContentMobileWire.png",
  "/images/portfolio/gml/BlogTemplateMobileWire.png",

  //Mobile Prototypes
  "/images/portfolio/gml/homepage-mobile-01.png",
  "/images/portfolio/gml/software-image.png",
  "/images/portfolio/gml/homepage-mobile-soft-dev.png",
  "/images/portfolio/gml/our-blog-01.png",
  "/images/portfolio/gml/our-blog-articles-01.png",
  "/images/portfolio/gml/our-work-wraw.png",
  "/images/portfolio/gml/our-work-quote.png",
  "/images/portfolio/gml/the-team-bf.png",
];

const desktopImages = [
  "/images/portfolio/gml/gml-homepage-desktop-proto.png",
  "/images/portfolio/gml/OurWorkDesktopLynxbet.png",
  "/images/portfolio/gml/homepage-desktop-soft-dev.png",
  "/images/portfolio/gml/OurBlogDesktop.png",
];

export default function GmlPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-30 pb-40 md:py-30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-center mb-8">
          <Image src={gmlLogo} alt="lynxbet logo" title="LynxBet" width={300} />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Mobile & Desktop Design
        </h1>

        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-4">
          <Link
            href="https://gamingmechanics.com"
            target="_blank"
            className="text-brand-01 underline hover:text-brand-02"
          >
            www.gamingmechanics.com
          </Link>
        </p>

        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          I led the end-to-end UX and UI design for the Gaming Mechanics
          website—an interactive, mobile-first platform to showcase the
          company’s AI-driven software services. The project began with
          strategic discovery sessions to define the brand’s position and
          audience needs. I developed low-fidelity wireframes to establish
          content hierarchy and user journeys, followed by clickable prototypes
          to validate structure and usability.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          Figma played a central role throughout, enabling real-time
          collaboration and feedback with internal stakeholders and the
          development team. Once validated, I translated the approved designs
          into a responsive front-end layout using Bootstrap 5, ensuring
          accessibility and visual consistency across breakpoints.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The final build was delivered in React and Next.js, integrating
          dynamic features such as animations, video, and modular content
          components. I worked closely with engineers to maintain design
          integrity and contributed to a structured QA process to ensure smooth
          handover and deployment.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-12">
          The result is a clean, modern, and performant site that reflects
          Gaming Mechanics’ innovation-first ethos and provides a compelling
          entry point to the company’s product ecosystem.
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
