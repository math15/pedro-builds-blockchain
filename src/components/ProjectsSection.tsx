import { ExternalLink, Github, Zap, Shield, TrendingUp, Users, ArrowRight } from "lucide-react";
import defiPlatformImg from "@/assets/project-defi-platform.jpg";
import nftMarketplaceImg from "@/assets/project-nft-marketplace.jpg";
import bridgeNetworkImg from "@/assets/project-bridge-network.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tokenized Reimbursement Platform",
      description: "Revolutionary platform that reduced settlement times by 80% using smart contract automation",
      achievements: ["$2M+ processed", "500+ users", "99.9% uptime"],
      technologies: ["Solidity", "React", "Node.js", "PostgreSQL"],
      category: "DeFi",
      icon: TrendingUp,
      image: defiPlatformImg,
      gradient: "from-primary to-primary/60",
      glowColor: "primary"
    },
    {
      title: "NFT Marketplace Platform",
      description: "High-volume marketplace with advanced features like auctions, royalties, and cross-chain trading",
      achievements: ["50K+ NFTs", "10K+ users", "$5M+ volume"],
      technologies: ["Solidity", "IPFS", "React", "Web3.js"],
      category: "NFT",
      icon: Users,
      image: nftMarketplaceImg,
      gradient: "from-accent to-accent/60",
      glowColor: "accent"
    },
    {
      title: "Cross-Chain Bridge Network",
      description: "Secure bridge connecting Ethereum, Solana, and Hyperledger ecosystems with automated liquidity",
      achievements: ["3 chains", "$10M+ secured", "24/7 monitoring"],
      technologies: ["Rust", "Solidity", "Cosmos SDK", "TypeScript"],
      category: "Infrastructure",
      icon: Shield,
      image: bridgeNetworkImg,
      gradient: "from-secondary to-secondary/60",
      glowColor: "secondary"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Featured <span className="text-glow-secondary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out some of the projects I've been a part of. Each one represents a unique challenge, 
            and I'm proud of the innovative solutions I've developed for these blockchain applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Card */}
              <div className="card-glow h-full cursor-pointer transition-all duration-500 group-hover:scale-105 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 bg-background/90 backdrop-blur-sm text-${project.glowColor} rounded-lg border border-${project.glowColor}/20 text-sm font-medium`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-background" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className={`text-xl font-bold text-glow-${project.glowColor} group-hover:text-${project.glowColor} transition-colors`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted rounded-lg">
                        <div className={`text-sm font-bold text-${project.glowColor}`}>
                          {achievement.split(' ')[0]}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-background border border-border rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-primary/20 transition-colors group">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-accent/20 transition-colors group">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 pointer-events-none`} />
              </div>

              {/* Floating Badge */}
              <div className={`absolute -top-2 -right-2 p-2 bg-${project.glowColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-glow`}>
                <Zap className="w-4 h-4 text-background" />
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <button className="btn-neon group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;