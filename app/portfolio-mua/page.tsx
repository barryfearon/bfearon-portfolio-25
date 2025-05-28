"use client";

import Image from "next/image";

import muaLogo from "../../public/images/portfolio/mua/mua-esri-logo-200x100.png";

// const desktopImages = [
//   "/images/portfolio/axa/2FA-Spec-v1.3-5.png",
//   "/images/portfolio/axa/2FA-Spec-v1.3-6.png",
//   "/images/portfolio/axa/2FA-Spec-v1.3-7.png",
//   "/images/portfolio/axa/2FA-Spec-v1.3-8.png",
//   "/images/portfolio/axa/2FA-Spec-v1.3-9.png",
//   "/images/portfolio/axa/2FA-Spec-v1.3-10.png",
// ];

export default function MuaPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-30 pb-40 md:py-30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-center mb-8">
          <Image
            src={muaLogo}
            alt="MUA Logo"
            title="Manx Utilities"
            width={200}
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">
          ESRI GIS System – Manx Utilities
        </h1>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          As Project Coordinator for Manx Utilities, I was responsible for
          driving the successful delivery of a multi-phase GIS transformation
          project, leading coordination efforts internally while working
          alongside external partners including ESRI UK & Ireland. The
          initiative involved migrating from the legacy Smallworld system to the
          ESRI ArcGIS Utility Network, with the goal of streamlining workflows,
          enhancing data visibility, and supporting utility operations across
          electricity, water, wastewater, and fibre.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          My role was broad and hands-on—overseeing internal engagement,
          aligning stakeholders, managing change, and facilitating collaboration
          across departments such as Customer Services, Engineering, Field
          Operations, Legal, and Safety. I was the central liaison between
          internal users and the external development team, ensuring that
          technical delivery remained closely aligned with business needs.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          Working alongside UX designers and GIS specialists, I contributed to
          the planning and rollout of over 20 new web-based applications. I
          supported the design and review of wireframes, mapped user journeys,
          and helped prioritise features based on real-world operational needs.
          I led the user acceptance testing (UAT) process—developing test plans,
          gathering structured feedback via SharePoint and Power Apps, and
          coordinating issue resolution across multiple stakeholder groups.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          In addition to delivery oversight, I played a key role in change
          management—organising team demos, developing training materials, and
          supporting internal adoption of the new platform. The project was
          delivered in multiple releases (R1.1 to R1.3), each introducing new
          tools that improved mapping, asset management, and cross-departmental
          visibility.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The result was a scalable, user-aligned GIS ecosystem that modernised
          how Manx Utilities manages its critical infrastructure. The project
          showcased the value of coordinated leadership, structured testing, and
          a user-focused rollout approach in delivering complex enterprise
          software transformations.
        </p>

        {/* <h2 className="text-2xl font-semibold mb-4">UX / UI Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {desktopImages.map((src, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden shadow-sm"
            >
              <Image
                src={src}
                alt={`Manx Utilities & ESRI GIS ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div> */}
      </div>
    </main>
  );
}
