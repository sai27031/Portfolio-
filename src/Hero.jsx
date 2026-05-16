function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        <p className="text-blue-500 font-medium text-lg mb-4">
          Hi there, I am
        </p>

        <h1 className="text-6xl font-bold text-white mb-4">
          Sai Sujan
        </h1>

        <h2 className="text-3xl font-semibold text-gray-400 mb-6">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed">
          fourth year CSE student specializing in AI and ML, passionate about
          building full stack web applications. I love turning ideas into
          real products using React, Node.js and MongoDB.
        </p>

        <div className="flex gap-4 mb-12">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            View My Work
          </a>
          <a href="#contact" className="border border-blue-600 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
            Contact Me
          </a>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JavaScript'].map(tech => (
            <span key={tech} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700">
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;