import { Shield, Zap, Code2, Cpu, Layers, Wallet } from "lucide-react";

const IntroSection = () => {
  const skills = [
    { name: "Smart Contracts", icon: Code2, level: 95, color: "primary" },
    { name: "Web3 Development", icon: Layers, level: 90, color: "accent" },
    { name: "dApp Engineering", icon: Cpu, level: 88, color: "secondary" },
    { name: "Blockchain Security", icon: Shield, level: 92, color: "primary" },
    { name: "DeFi Protocols", icon: Wallet, level: 85, color: "accent" },
    { name: "Performance", icon: Zap, level: 90, color: "secondary" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Who Am <span className="text-glow-primary">I</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-glow-accent font-semibold">Pedro Ramos</span>, a passionate 
                Senior Blockchain Engineer with a knack for creating cutting-edge decentralized applications.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                With expertise in <span className="text-primary font-semibold">Solidity</span>, {" "}
                <span className="text-accent font-semibold">Rust</span>, and {" "}
                <span className="text-secondary font-semibold">Move</span>, I've contributed to a variety 
                of Web3 ecosystems – from DeFi protocols to NFT platforms.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                With a proven track record, I help businesses adopt blockchain technology 
                <span className="text-glow-primary font-semibold"> securely</span> and {" "}
                <span className="text-glow-accent font-semibold">efficiently</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-neon"
                >
                  See My Work
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-ghost"
                >
                  Let's Talk
                </button>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-glow-secondary mb-8">
                Tech Stack & Expertise
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="card-cyber p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <skill.icon className={`w-5 h-5 text-${skill.color}`} />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className={`text-sm font-bold text-${skill.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/60 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-8 text-glow-accent">
              Technologies I Work With
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Ethereum", "Solana", "Hyperledger", "Polygon", "BSC", "Avalanche", "OpenZeppelin", "Hardhat", "Foundry", "React", "Node.js", "TypeScript"].map((tech, index) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-muted rounded-lg border border-border hover:border-primary/50 transition-colors cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;