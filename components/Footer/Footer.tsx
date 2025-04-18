"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="fixed bottom-0 left-0 right-0 bg-white z-10 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 h-20">
          <div className="text-center">
            <p>
              <a
                href="mailto:barryfearon@gmail.com"
                className="text-gray-700 hover:text-brand-01 transition"
              >
                barryfearon@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+447624452446"
                className="text-gray-700 hover:text-brand-01 transition"
              >
                +44 (0)7624 452446
              </a>
            </p>
          </div>
          <div>
            {" "}
            <Link
              href="/downloads/Barry-Fearon-Creative-Director-Project-Leader.pdf"
              target="_blank"
              className="inline-block border border-brand-01 text-brand-01 px-4 py-2 rounded hover:bg-brand-01 hover:text-white transition"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
