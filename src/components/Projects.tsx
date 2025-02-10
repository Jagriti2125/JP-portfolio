
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "ShareAPlate",
      description: "A food donation platform connecting donors with local food banks, managing food distribution efficiently.",
      tech: ["React", "Vite", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/",
      liveDemo: "https://demo.com",
      color: "neon-purple",
      featured: true,
      status: "Completed"
    },
    {
      title: "Abstract Journal",
      description: "Productivity app with journaling & reminders for tracking daily activities and personal growth.",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/",
      color: "neon-blue"
    },
    {
      title: "RecipeRewind",
      description: "Platform showcasing traditional Indian cuisines with historical context and cultural significance.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/",
      color: "neon-pink"
    },
    {
      title: "ThreadOfKindness",
      description: "Cloth donation platform facilitating connections between donors and organizations in need.",
      tech: ["React", "Vite", "MongoDB"],
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/",
      color: "neon-green"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0d1117] to-[#1a1f2c] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyZDNlIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue animate-gradient">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-white/5 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/10"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'morph 8s ease-in-out infinite'
                }}
              >
                {project.status && (
                  <Badge className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md">
                    {project.status}
                  </Badge>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-neon-purple/20 text-neon-purple backdrop-blur-md">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className={`text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-${project.color} to-white`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full text-sm backdrop-blur-sm border border-${project.color}/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className={`flex-1 border-${project.color} text-${project.color} hover:bg-${project.color}/10 backdrop-blur-sm`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    {project.liveDemo && (
                      <Button
                        variant="outline"
                        className={`flex-1 border-${project.color} text-${project.color} hover:bg-${project.color}/10 backdrop-blur-sm`}
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
