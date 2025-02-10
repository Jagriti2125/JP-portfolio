
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1f2c] to-[#0d1117] text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyZDNlIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-semibold text-neon-purple mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-6">
                  <a
                    href="mailto:jagritidevelop21@gmail.com"
                    className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors group"
                  >
                    <div className="p-3 rounded-full bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors">
                      <Mail className="w-6 h-6 text-neon-blue" />
                    </div>
                    <span>jagritidevelop21@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            
            <form className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white placeholder-gray-400"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white placeholder-gray-400"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white placeholder-gray-400"
                  required
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white py-3 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
