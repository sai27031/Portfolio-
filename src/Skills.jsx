function Skills() {
  const skills = [
    { category: "Frontend", color: "blue", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Router"] },
    { category: "Backend", color: "green", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "bcrypt"] },
    { category: "Database", color: "yellow", items: ["MongoDB", "Mongoose"] },
    { category: "Tools", color: "purple", items: ["Git", "GitHub", "VS Code", "Vercel", "Render"] },
    { category: "Soft Skills", color: "pink", items: ["Problem Solving", "Team Collaboration", "Communication", "Leadership"] },
  ];

  const colorMap = {
    blue: "bg-blue-900 text-blue-300 border-blue-700",
    green: "bg-green-900 text-green-300 border-green-700",
    yellow: "bg-yellow-900 text-yellow-300 border-yellow-700",
    purple: "bg-purple-900 text-purple-300 border-purple-700",
    pink: "bg-pink-900 text-pink-300 border-pink-700",
  };

  const titleColorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };

  return (
    <section id="skills" className="py-20 px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.category} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className={`text-xl font-bold mb-4 ${titleColorMap[skill.color]}`}>
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className={`px-3 py-1 rounded-full text-sm border ${colorMap[skill.color]}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;