import { useState } from "react";
function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "DevBoard – Developer Task Tracker",
      description: "A full stack Kanban board app with Login, Signup, and Dashboard. Features JWT authentication, task management with priority levels, dark mode toggle and real-time updates.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      live: "https://dev-board-taupe.vercel.app",
      github: "https://github.com/sai27031/Dev-board",
      color: "blue",
      domain: "Full Stack",
    },
    {
      title: "ParkMate – Smart Parking System",
      description: "A smart parking reservation website to solve parking challenges at crowded venues. Includes real-time parking spot finder and vehicle location tracker.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "https://github.com/sai27031",
      color: "green",
      domain: "Frontend",
    },
    {
      title: "Alpha Trading – AI Financial Platform",
      description: "An AI-powered financial platform that simplifies stock market interactions with portfolio tracking, real-time data, and smart recommendations.",
      tech: ["Python", "React", "AI/ML", "REST APIs"],
      live: "https://alpha-trading-ashen.vercel.app",
      github: "https://github.com/sai27031",
      color: "purple",
      domain: "AI/ML",
    },
    {
      title: "Spam Email Detector – ML Classifier",
      description: "A machine learning model to automatically detect spam emails and messages. Uses NLP preprocessing with tokenization and TF-IDF vectorization for accurate spam/ham classification.",
      tech: ["Python", "Machine Learning", "NLP", "TF-IDF"],
      live: "#",
      github: "https://github.com/sai27031",
      color: "orange",
      domain: "AI/ML",
    },
    {
      title: "CareerAI - Service based website",
      description: "An AI-powered SaaS platform built for job seekers.",
      tech: ["React", "Next.js", "JavaScript", "CSS", "Node.js", "Supabase", "Groq API"],
      live: "https://career-ai-silk-iota.vercel.app",
      github: "https://github.com/sai27031",
      color: "violet",
      domain: "Full Stack",
    },
    {
      title: "Shopsavyy - Smart E - Commerece platform ",
      description: "Shopsavvy is an AI powered E- Commerce website where you can buy the items (clothes , electronics ) etc.. It is build by using JavaScript , React , CSS for styling . And AI has been integrated using Groq Api key .",
      tech: ["React", "Node.js", "JavaScript", "CSS", "MangoDB", "Groq API", "JWT"],
      live: "https://shopsavyy.vercel.app/",
      github: "https://github.com/sai27031/Shopsavyy-",
      color: "Red",
      domain: "Full Stack",
    },

  ];

  const colorMap = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    orange: "border-orange-500",
    violet: "border-violet-500",
    Red: "border-Red-500",

  };

  const tagColorMap = {
    blue: "bg-blue-900 text-blue-300",
    green: "bg-green-900 text-green-300",
    purple: "bg-purple-900 text-purple-300",
    orange: "bg-orange-900 text-orange-300",
    violet: "bg-violet-900 text-violet-300",
    Red: "bg-Red-900 text-Red-300",
  };

  const domainColorMap = {
    "Full Stack": "bg-blue-900 text-blue-300 border border-blue-700",
    "Frontend": "bg-green-900 text-green-300 border border-green-700",
    "AI/ML": "bg-purple-900 text-purple-300 border border-purple-700",
  };

  const domains = ["All", ...new Set(projects.map(p => p.domain))];

  const domainCounts = projects.reduce((acc, p) => {
    acc[p.domain] = (acc[p.domain] || 0) + 1;
    return acc;
  }, {});

  const filtered = activeFilter === "All" ? projects : projects.filter(p => p.domain === activeFilter);

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl px-6 py-3 text-center border border-gray-700">
            <div className="text-2xl font-bold text-white">{projects.length}</div>
            <div className="text-gray-400 text-xs mt-1">Total Projects</div>
          </div>
          {Object.entries(domainCounts).map(([domain, count]) => (
            <div key={domain} className="bg-gray-800 rounded-xl px-6 py-3 text-center border border-gray-700">
              <div className="text-2xl font-bold text-white">{count}</div>
              <div className="text-gray-400 text-xs mt-1">{domain}</div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {domains.map(domain => (
            <button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
                activeFilter === domain
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700"
              }`}
            >
              {domain} {domain !== "All" && `(${domainCounts[domain]})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filtered.map(project => (
            <div key={project.title} className={`bg-gray-800 rounded-xl p-6 border-t-4 ${colorMap[project.color]} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${domainColorMap[project.domain]}`}>
                  {project.domain}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 mt-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className={`px-2 py-1 rounded text-xs font-medium ${tagColorMap[project.color]}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 border border-gray-600 text-gray-300 text-center py-2 rounded-lg text-sm hover:bg-gray-700 transition">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;