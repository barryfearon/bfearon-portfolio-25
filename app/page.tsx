"use client";

import Image from "next/image";
import Link from "next/link";
import Headshot from "../public/images/barry-fearon-cd-cartoon@2x.png";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 text-center md:text-start min-h-screen flex items-center justify-center pt-30 pb-40 md:py-16 px-4 md:px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-end">
          <Image
            src={Headshot}
            alt="Barry Fearon Headshot"
            width={200}
            height={300}
            className="rounded-full shadow-lg transition-transform transform hover:scale-105"
            priority
            placeholder="blur"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">Barry Fearon</h1>
          <h2 className="text-lg text-gray-600 mb-4">
            Creative Director · Scrum Master · UX/UI Specialist
          </h2>
          <p className="text-base leading-relaxed mb-6">
            A dynamic and forward-thinking Creative Director with extensive
            experience across gaming, financial services, and government.
            Currently leading the implementation of a £1.5M GIS migration
            project for Manx Utilities, coordinating stakeholder engagement and
            digital transformation efforts. Skilled in delivering innovative,
            user-centred solutions with a strong foundation in agile
            methodologies, digital product design, and cross-functional
            leadership.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/experience"
              className="bg-brand-01 text-white px-6 py-2 rounded-lg shadow hover:bg-brand-02 transition"
            >
              View Experience
            </Link>
            <Link
              href="/contact-me"
              className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
