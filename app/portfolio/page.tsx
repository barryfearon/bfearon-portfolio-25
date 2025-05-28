"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    title: "ESRI GIS System (Manx Utilities)",
    description:
      "Leading digital transformation and stakeholder coordination for a £1.5M GIS migration project.",
    image: "/images/portfolio/mua/mua-esri-logo-200x200.png",
    url: "/portfolio-mua",
    category: "Government",
  },
  {
    title: "Gaming Mechanics",
    description:
      "Led UX and design strategy for a cross-platform iGaming product. Focused on user flows, branding, and agile team coordination.",
    image: "/images/portfolio/gml/gml-logo-500x405.png",
    url: "/portfolio-gml",
    category: "iGaming",
  },
  {
    title: "Track My Time Now",
    description:
      "A time tracking app that showcases UX/UI design and product leadership for a SaaS product.",
    image: "/images/portfolio/tmtn/tmtn-logo-500x140.png",
    url: "/portfolio-tmtn",
    category: "Productivity",
  },
  {
    title: "LynxBet",
    description:
      "Directed design for a high-pressure iGaming launch with responsive web and native mobile app interfaces.",
    image: "/images/portfolio/lynxbet/lynx-bet-orange-logo-500x120.png",
    url: "/portfolio-lynxbet",
    category: "iGaming",
  },
  {
    title: "WRAW - The Wellbeing Project",
    description:
      "Redesigned a wellbeing platform’s core product for modern usability and scalability.",
    image: "/images/portfolio/wraw/wraw-logo-500x200.png",
    url: "/portfolio-wraw",
    category: "Health",
  },
  {
    title: "Utmost Wealth International",
    description:
      "Produced UX journeys, wireframes, and prototypes for web and tablet tools used by global advisers. Collaborated across teams to ensure consistency and compliance.",
    image: "/images/portfolio/utmost/utmost_international_logo.svg",
    url: "#",
    category: "Finance",
  },
  {
    title: "AXA Wealth International",
    description:
      "Enhanced security and UX through OTP integration and streamlined registration journeys for financial services clients.",
    image: "/images/portfolio/axa/axa-wealth-logo-500x234.png",
    url: "/portfolio-axa",
    category: "Finance",
  },
];

const categories = [
  "All",
  "iGaming",
  "Finance",
  "Government",
  "Health",
  "Productivity",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-30 pb-40 md:py-30 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Portfolio</h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-brand-01 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3 justify-items-center">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={project.url}
                  className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition block"
                >
                  <div className="bg-white p-4 flex justify-center h-60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6 bg-gray-100 h-40">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-01 transition">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}
