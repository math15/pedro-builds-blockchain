import { Send, Phone, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const projectTypes = [
    "DeFi Protocol",
    "NFT Marketplace", 
    "Smart Contracts",
    "Cross-chain Bridge",
    "Web3 dApp",
    "Blockchain Consulting",
    "Other"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's Build <span className="text-glow-primary">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in working with me? Drop me a message, and let's discuss 
            how we can take your project to the next level.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-glow space-y-6">
                <h3 className="text-2xl font-bold text-glow-accent">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">pedroramos90119@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+1 251 426 6420</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Remote / Global</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card-glow space-y-6">
                <h3 className="text-xl font-bold text-glow-secondary">Connect</h3>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => window.open('https://github.com', '_blank')}
                    className="p-3 bg-muted rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-primary)] group"
                  >
                    <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </button>
                  <button 
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                    className="p-3 bg-muted rounded-lg hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-accent)] group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-accent transition-colors" />
                  </button>
                  <button 
                    onClick={() => window.open('https://twitter.com', '_blank')}
                    className="p-3 bg-muted rounded-lg hover:bg-secondary/20 transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-secondary)] group"
                  >
                    <Twitter className="w-5 h-5 group-hover:text-secondary transition-colors" />
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="card-cyber space-y-4">
                <h3 className="text-lg font-bold text-glow-primary">Response Time</h3>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-glow" />
                  <span className="text-muted-foreground">Usually within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-glow">
                <h3 className="text-2xl font-bold text-glow-primary mb-8">Start a Project</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">
                        Project Type *
                      </label>
                      <select
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">
                        Budget (Optional)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-15k">$5K - $15K</option>
                        <option value="15k-30k">$15K - $30K</option>
                        <option value="30k-50k">$30K - $50K</option>
                        <option value="50k+">$50K+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-cyber w-full group flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;