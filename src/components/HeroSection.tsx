import { ArrowRight, Code, Zap } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(195_100%_50%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(270_75%_60%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(142_86%_55%/0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-semibold tracking-wide">
                <Code className="w-5 h-5" />
                <span>SENIOR BLOCKCHAIN ENGINEER</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Building the{" "}
                <span className="text-glow-primary">Future</span>{" "}
                of Blockchain,{" "}
                <span className="text-glow-accent">One Smart Contract</span>{" "}
                at a Time
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Hi, I'm <span className="text-glow-secondary font-semibold">Pedro Ramos</span> – 
                a passionate blockchain engineer specializing in DeFi, NFTs, and Web3 solutions. 
                Let's build something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-cyber group">
                Explore My Work
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-ghost group">
                <Zap className="w-5 h-5 mr-2" />
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-glow-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-glow-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-glow-secondary">$10M+</div>
                <div className="text-sm text-muted-foreground">Value Secured</div>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <img 
                src={heroAvatar} 
                alt="Pedro Ramos - Blockchain Developer"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl" />
            </div>
            
            {/* Floating Tech Stack */}
            <div className="absolute -top-4 -right-4 card-cyber p-3 animate-float">
              <div className="text-sm font-semibold text-primary">Solidity</div>
            </div>
            <div className="absolute top-1/2 -left-4 card-cyber p-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-sm font-semibold text-accent">Rust</div>
            </div>
            <div className="absolute -bottom-4 right-8 card-cyber p-3 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-sm font-semibold text-secondary">Web3</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;