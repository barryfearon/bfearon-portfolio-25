"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-sm">
        <div className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm relative">
          <h1 className="font-bold text-lg text-brand-01">Barry Fearon</h1>
          <div className="space-x-4 text-sm font-medium">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-01 transition"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-brand-01 transition"
            >
              Portfolio
            </Link>
            <Link
              href="/experience"
              className="text-gray-700 hover:text-brand-01 transition"
            >
              Experience
            </Link>
            <Link
              href="/contact-me"
              className="text-gray-700 hover:text-brand-01 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
