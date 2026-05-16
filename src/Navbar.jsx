function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800 px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-500">
          Sai Sujan
        </h1>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
          <a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
             Resume 
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"> 
            Resume 
            </a>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;