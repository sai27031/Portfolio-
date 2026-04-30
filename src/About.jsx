function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Hi! I'm Sai Sujan 👋
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a 3rd year B.Tech Computer Science student specializing 
              in AI & ML at Sreyas Institute of Engineering and Technology, 
              Hyderabad, graduating in 2027.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm passionate about building full stack web applications 
              that solve real problems. I recently built DevBoard — a 
              complete project management tool using React, Node.js and 
              MongoDB that is live on the internet.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm actively looking for frontend and full stack internship 
              opportunities where I can contribute, learn and grow as a developer.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Name</p>
                <p className="text-white font-medium">Talanki Sai Sujan</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white font-medium">saisujan2707@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white font-medium">Hyderabad, India</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Status</p>
                <p className="text-green-400 font-medium">Open to Internships ✅</p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <h4 className="text-4xl font-bold text-blue-500 mb-2">3+</h4>
              <p className="text-gray-400">Projects Built</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <h4 className="text-4xl font-bold text-blue-500 mb-2">5+</h4>
              <p className="text-gray-400">Certifications</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <h4 className="text-4xl font-bold text-blue-500 mb-2">10+</h4>
              <p className="text-gray-400">Technologies</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <h4 className="text-4xl font-bold text-blue-500 mb-2">1</h4>
              <p className="text-gray-400">Live App</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;