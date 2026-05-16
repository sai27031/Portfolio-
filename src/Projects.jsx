function Projects() {
  const projects = [
    {
      title: "DevBoard – Developer Task Tracker",
      description: "A full stack Kanban board app with Login, Signup, and Dashboard. Features JWT authentication, task management with priority levels, dark mode toggle and real-time updates.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      live: "https://dev-board-taupe.vercel.app",
      github: "https://github.com/sai27031/Dev-board",
      color: "blue",
    },
    {
      title: "ParkMate – Smart Parking System",
      description: "A smart parking reservation website to solve parking challenges at crowded venues. Includes real-time parking spot finder and vehicle location tracker.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "https://github.com/sai27031",
      color: "green",
    },
    {
      title: "Alpha Trading – AI Financial Platform",
      description: "An AI-powered financial platform that simplifies stock market interactions with portfolio tracking, real-time data, and smart recommendations.",
      tech: ["Python", "React", "AI/ML", "REST APIs"],
      live: "https://alpha-trading-ashen.vercel.app",
      github: "https://github.com/sai27031",
      color: "purple",
    },
    {
  title: "Spam Email Detector – ML Classifier",
  description: "A machine learning model to automatically detect spam emails and messages. Uses NLP preprocessing with tokenization and TF-IDF vectorization for accurate spam/ham classification.",
  tech: ["Python", "Machine Learning", "NLP", "TF-IDF"],
  live: "#",
  github: "https://github.com/sai27031",
  color: "orange",
},
  ];

  const colorMap = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    orange: "border-orange-500",
  };

  const tagColorMap = {
    blue: "bg-blue-900 text-blue-300",
    green: "bg-green-900 text-green-300",
    purple: "bg-purple-900 text-purple-300",
    orange: "bg-orange-900 text-orange-300", 
  };

  

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.title} className={`bg-gray-800 rounded-xl p-6 border-t-4 ${colorMap[project.color]} flex flex-col justify-between`}>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
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