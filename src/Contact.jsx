function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-950">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="text-gray-400 mt-4">Feel free to reach out for internship opportunities!</p>
        </div>

        <div className="grid grid-cols-2 gap-12">

          {/* Left - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-white font-medium">saisujan2707@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white font-medium">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">LinkedIn</p>
                  <a href="https://linkedin.com/in/saisujan-605b63290" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                    linkedin.com/in/saisujan
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <span className="text-xl">🐙</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">GitHub</p>
                  <a href="https://github.com/sai27031" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                    github.com/sai27031
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Message Form */}
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows="4"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            Built with React & Tailwind CSS by <span className="text-blue-400 font-medium">Sai Sujan</span> 💙
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;