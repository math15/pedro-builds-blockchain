import { MapPin, Calendar, Trophy, Star } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Cognizant",
      role: "Software Engineer",
      period: "2022 - Present",
      location: "Remote",
      level: 3,
      achievements: [
        "Built Ethereum and Solana smart contracts for tokenized finance and NFT assets",
        "Launched cross-chain bridges connecting multiple blockchain networks",
        "Developed tokenized reimbursement platforms reducing settlement times by 80%",
        "Led security audits ensuring $5M+ in smart contract value protection"
      ],
      technologies: ["Ethereum", "Solana", "Solidity", "Rust", "Web3.js"],
      color: "primary"
    },
    {
      company: "Vorvex",
      role: "Full Stack Engineer",
      period: "2021 - 2022",
      location: "Remote",
      level: 2,
      achievements: [
        "Deployed 20+ ERC-20/721 tokens with custom tokenomics",
        "Built high-volume NFT marketplaces processing $2M+ transactions",
        "Implemented staking contracts with 95% uptime reliability",
        "Integrated KYC/AML providers for compliant token launches"
      ],
      technologies: ["React", "Node.js", "Solidity", "IPFS", "PostgreSQL"],
      color: "accent"
    },
    {
      company: "TechArk Solutions",
      role: "Full Stack Developer",
      period: "2019 - 2021",
      location: "Hybrid",
      level: 1,
      achievements: [
        "Developed early Ethereum dApps during DeFi summer",
        "Integrated Bitcoin payment systems for e-commerce platforms",
        "Built hybrid storage solutions for blockchain event archiving",
        "Optimized gas costs resulting in 40% transaction fee reduction"
      ],
      technologies: ["JavaScript", "Python", "Bitcoin", "Ethereum", "MongoDB"],
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            My Journey <span className="text-glow-accent">So Far</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of experience, I've worked across various high-impact projects 
            in the blockchain space, driving adoption for decentralized finance, NFTs, and Web3 platforms.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="relative pl-20">
                  {/* Level Badge */}
                  <div className={`absolute left-0 top-6 w-16 h-16 bg-gradient-to-br from-${exp.color} to-${exp.color}/60 rounded-full flex items-center justify-center border-4 border-background`}>
                    <span className="text-background font-bold text-lg">L{exp.level}</span>
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute left-20 top-2 flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm">
                    <Trophy className={`w-4 h-4 text-${exp.color}`} />
                    <span className="font-semibold">Quest Completed</span>
                  </div>

                  {/* Experience Card */}
                  <div className="card-glow space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-glow-primary">{exp.company}</h3>
                        <p className="text-lg font-semibold text-accent">{exp.role}</p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-secondary flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-${exp.color} mt-2 flex-shrink-0`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-secondary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className={`px-3 py-1 bg-${exp.color}/10 text-${exp.color} rounded-lg border border-${exp.color}/20 text-sm font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to unlock the next level together?
          </p>
          <button className="btn-cyber">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;