"use client";

import Image from "next/image";

import tmtnLogo from "../../public/images/portfolio/tmtn/tmtn-logo-500x140.png";

const mobileImages = [
  //Wireframes
  "/images/portfolio/tmtn/wireframe-summary-screen.png",
  "/images/portfolio/tmtn/wireframe-personel-filter-options.png",
  "/images/portfolio/tmtn/wireframe-employee-summary-screen.png",
  "/images/portfolio/tmtn/wireframe-employee-add-time.png",

  //App
  "/images/portfolio/tmtn/app-summary.png",
  "/images/portfolio/tmtn/app-list-personnel.png",
  "/images/portfolio/tmtn/app-start-timer.png",
  "/images/portfolio/tmtn/app-confirm-time-entry.png",
];

const desktopImages = [
  //Marketing Site
  "/images/portfolio/tmtn/home-page-01.png",
  "/images/portfolio/tmtn/homepage-icons.png",
  "/images/portfolio/tmtn//homepage-pricing.png",
  "/images/portfolio/tmtn/homepage-form.png",

  //Desktop
  "/images/portfolio/tmtn/dt-summary.png",
  "/images/portfolio/tmtn/dt-addnew-personnel.png",
  "/images/portfolio/tmtn/dt-start-timer-employee.png",
  "/images/portfolio/tmtn/dt-confirm-time-entry.png",
];

export default function LynxbetPage() {
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
          Cross-Platform iGaming Launch
        </h1>

        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          As Creative Director, I led the end-to-end delivery of LynxBet’s
          iGaming platform—a responsive website and progressive web app launched
          under a tight deadline ahead of the 2021–22 football season.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The project evolved across four key phases, starting with defining
          business requirements and shaping the product vision. I facilitated
          stakeholder workshops and developed wireframes and interactive
          prototypes to define the UX architecture and visual identity of the
          platform.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          Once the core structure was in place, I directed the design and
          implementation of the casino game lobby. This required close
          collaboration with front-end developers to balance aesthetics with
          usability, ensuring a seamless and responsive user experience.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          Next, I focused on the sportsbook interface—designing layouts tailored
          for live betting and market browsing, while accommodating the needs of
          a global sports audience. The design approach remained agile, with
          frequent iterations informed by internal testing and feedback loops.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          The final phase involved the rollout of a mobile-first progressive web
          app. I worked alongside the mobile team to ensure consistency between
          desktop and mobile views, with careful attention to performance,
          responsiveness, and interaction patterns.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-3">
          Beyond design, I played a hands-on role in project
          management—overseeing milestones, managing timelines and quality
          control, and coordinating with QA and development teams to ensure
          smooth delivery.
        </p>
        <p className="text-sm text-gray-700 max-w-3xl mx-auto mb-12">
          The result was a fully functional, cross-platform iGaming product
          launched on schedule, with a unified brand experience and scalable
          design system. The project showcased the value of tightly integrated
          creative direction, UX strategy, and agile collaboration.
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
