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
          As Project Coordinator for Manx Utilities, I am responsible for
          driving the successful delivery of a multi-phase GIS transformation
          project, leading internal coordination efforts while working alongside
          external partners including ESRI UK & Ireland. The initiative involves
          migrating from the legacy Smallworld system to the ESRI ArcGIS Utility
          Network, with the aim of streamlining workflows, enhancing data
          visibility, and supporting utility operations across electricity,
          water, wastewater, and fibre.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          My role is broad and delivery-focused—overseeing internal engagement,
          aligning stakeholders, managing change, and facilitating collaboration
          across departments such as Customer Services, Engineering, Field
          Operations, Legal, and Safety. I act as the central liaison between
          internal users and the external development team, ensuring that
          technical outputs remain aligned with business goals and operational
          needs.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          As part of the core management team, I coordinate timelines, track
          progress across multiple workstreams, and manage dependencies to
          ensure that milestones are achieved on schedule. I lead planning
          sessions, prioritise functional requirements, and maintain clear
          communication channels between technical teams and operational
          stakeholders.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          I also take a hands-on role in testing, working across both mobile and
          desktop environments. I lead the user acceptance testing (UAT)
          process—developing test plans, executing test cases, capturing
          structured feedback via SharePoint and Power Apps, and ensuring timely
          resolution of issues. My involvement helps maintain quality and
          usability standards across the release cycle.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          In addition to delivery oversight, I support change management and
          internal adoption—organising team demos, creating support materials,
          and coordinating training to embed new processes. The project is
          delivered in staged releases (R1.1 to R1.3), each introducing new
          digital tools that improve mapping, asset tracking, and
          cross-departmental collaboration.
        </p>

        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The result is a modern, scalable GIS ecosystem that enhances how Manx
          Utilities manages critical infrastructure. This project demonstrates
          my ability to lead complex enterprise implementations through a
          combination of strong project management, testing expertise, and
          stakeholder-focused delivery.
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
