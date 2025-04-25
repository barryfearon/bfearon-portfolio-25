"use client";

const experiences = [
  {
    title: "ESRI GIS Project Lead",
    company: "Manx Utilities",
    date: "Nov 2023 – Present",
    description:
      "Leading the delivery of a £1.5M GIS migration project. Overseeing stakeholder coordination, sprint planning, and phased infrastructure development for electricity, water, and fibre networks.",
  },
  {
    title: "Creative Director",
    company: "Gaming Mechanics Ltd",
    date: "Jan 2021 – Present",
    description:
      "Driving product strategy and UX design for AI-driven tools and iGaming platforms. Leading cross-functional teams, client pitches, brand identity, and delivery management.",
  },
  {
    title: "Head of Design / Product Design",
    company: "Ioway Internet Gaming Enterprise",
    date: "Sept 2019 – Jan 2021",
    description:
      "Directed UI/UX for GreySnowPoker.com, the first Native American poker platform under Isle of Man regulation. Delivered web and mobile experiences for a non-profit model.",
  },
  {
    title: "Digital Design & Communications Analyst",
    company: "AXA / Utmost Wealth International",
    date: "Aug 2013 – Sept 2019",
    description:
      "Designed interfaces for global financial services. Worked across teams in China, Singapore, and Europe to deliver brand-aligned and accessible digital tools.",
  },
  {
    title: "Digital Marketing Consultant",
    company: "Guru Marketing",
    date: "Mar 2010 – Aug 2013",
    description:
      "Developed strategies for SEO, web, PPC, and CRM across various sectors. Managed client relationships and built scalable marketing solutions.",
  },
  {
    title: "Event Director",
    company: "Darkhorse Music Ltd",
    date: "Aug 2008 – Present",
    description:
      "Founded and operated a grassroots music and arts festival. Responsible for licensing, emergency planning, site management, artist booking, and safety oversight.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-30 pb-40 md:py-30 px-4 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Experience</h1>
        <ul className="space-y-10">
          {experiences.map((exp, index) => (
            <li key={index} className="border-l-4 border-brand-01 pl-6">
              <h2 className="text-xl font-semibold">{exp.title}</h2>
              <p className="text-sm text-brand-02 font-medium">
                {exp.company} · {exp.date}
              </p>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                {exp.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
