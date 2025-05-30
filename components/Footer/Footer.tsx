"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="fixed bottom-0 left-0 right-0 bg-brand-02 z-10 shadow-sm">
        <div className="">
          <div className="grid grid-cols-2 gap-4 md:gap-16 p-4 max-w-4xl mx-auto text-center">
            <div className="md:justify-self-end self-center">
              <p>
                <a
                  href="mailto:barryfearon@gmail.com"
                  className="text-white hover:text-gray-300 transition text-sm"
                >
                  barryfearon@gmail.com
                </a>
              </p>

              <p>
                <a
                  href="tel:+447624452446"
                  className="text-white hover:text-gray-300 transition text-sm"
                >
                  +44 (0)7624 452446
                </a>
              </p>
            </div>
            <div className="md:justify-self-start self-center">
              {" "}
              <Link
                href="/downloads/Barry-Fearon-Creative-Director-Project-Leader.pdf"
                target="_blank"
                className="cursor-pointer inline-block border border-white text-white px-4 py-2 rounded hover:bg-brand-01 hover:text-white transition text-sm"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
