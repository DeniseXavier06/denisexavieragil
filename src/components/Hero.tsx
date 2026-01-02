import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import profilePhoto from "@/assets/denise-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <p className="text-sm font-medium text-secondary-light">Scrum Master • Product Owner • Agile Leader</p>
            </div>
            
            <h1 className="font-display text-white leading-tight">
              Denise Xavier
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Transformando visões em resultados através de metodologias ágeis e liderança servidora
            </p>
            
            <div className="space-y-3 text-white/80">
              <p className="flex items-center gap-2">
                <span className="text-secondary-light font-semibold">18+ anos</span> de experiência em Tecnologia da Informação
              </p>
              <p className="flex items-center gap-2">
                <span className="text-secondary-light font-semibold">Certificações:</span> CSM® e CSPO®
              </p>
              <p className="flex items-center gap-2">
                <span className="text-secondary-light font-semibold">Mestrado</span> em Ciência da Computação
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-light shadow-secondary transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-smooth"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FileText className="mr-2 h-5 w-5" />
                Ver Experiência
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/denise-xavier-66a372117"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-smooth"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto:denisexavier062019@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-smooth"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Denise Xavier - Scrum Master" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
