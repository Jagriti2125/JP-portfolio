
const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: ["Frontend", "Backend", "Mobile", "Database"],
      icon: "🚀",
      colorClass: "text-purple-400"
    },
    {
      title: "Languages",
      skills: ["JavaScript/TypeScript", "Python", "C++", "HTML/CSS"],
      icon: "💻",
      colorClass: "text-blue-400"
    },
    {
      title: "Tools & Tech",
      skills: ["Git", "Docker", "AWS", "React/Vue"],
      icon: "⚡",
      colorClass: "text-emerald-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#1a1f2c] to-[#0d1117] text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyZDNlIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className={`text-xl font-semibold ${category.colorClass} mb-6`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`px-4 py-2 bg-white/5 rounded-lg ${category.colorClass} text-sm hover:bg-white/10 transition-colors cursor-default`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
