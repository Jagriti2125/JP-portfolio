import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: number | null = null;
    
    const startAnimation = () => {
      let iteration = 0;
      const originalText = "Jagriti Priya";
      
      clearInterval(interval as number);
      
      interval = setInterval(() => {
        if (titleRef.current) {
          titleRef.current.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          
          if (iteration >= originalText.length) {
            clearInterval(interval as number);
          }
          
          iteration += 1/3;
        }
      }, 30) as unknown as number;
    };

    startAnimation();
    const timer = setInterval(startAnimation, 5000);
    
    return () => {
      clearInterval(timer);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1f2c] to-[#0d1117] text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyZDNlIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1,
            }}
          >
            <div
              className={`w-8 h-8 rotate-45 ${
                i % 4 === 0
                  ? "bg-neon-blue"
                  : i % 4 === 1
                  ? "bg-neon-purple"
                  : i % 4 === 2
                  ? "bg-neon-pink"
                  : "bg-neon-green"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-7xl font-poppins font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue animate-fadeIn cursor-pointer"
            >
              Jagriti Priya
            </h1>
            <div className="relative h-12 overflow-hidden">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fadeIn typing-text" style={{ animationDelay: "0.2s" }}>
                Software Developer & Creative Technologist
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mt-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              Crafting digital experiences with code and creativity
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub", color: "neon-purple" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn", color: "neon-blue" },
              { icon: Mail, href: "mailto:jagritidevelop21@gmail.com", label: "Email", color: "neon-pink" }
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:scale-110`}
                aria-label={label}
              >
                <Icon className={`w-6 h-6 text-${color} group-hover:animate-wave`} />
              </a>
            ))}
          </div>

          <div className="space-x-4 animate-fadeIn" style={{ animationDelay: "0.8s" }}>
            <Button
              variant="default"
              className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white px-8 py-6 rounded-full font-inter text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={() => window.open('https://drive.google.com/drive/folders/YOUR_FOLDER_ID', '_blank')}
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 px-8 py-6 rounded-full font-inter text-lg backdrop-blur-sm hover:scale-105 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1117] to-transparent"></div>
    </section>
  );
};

export default Hero;
