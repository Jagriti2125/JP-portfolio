const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0d1117] to-[#1a1f2c] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-neon-purple/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Software Developer pursuing my BTech in Information Technology at Rajiv Gandhi Institute of Petroleum Technology (2022-2026). With a strong academic record (SPI: 8.96 in Sem 5), I combine theoretical knowledge with practical experience in full-stack development.
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-neon-purple">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium text-white">BTech in Information Technology</p>
                    <p className="text-gray-400">Rajiv Gandhi Institute of Petroleum Technology</p>
                    <p className="text-neon-blue">2022-2026 | SPI: 8.96 (Sem 5)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              {/* Image container with hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-neon-purple/10 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="About Me"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-neon-blue/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;