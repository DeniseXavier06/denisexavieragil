import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Workflow, 
  Database, 
  Users, 
  Brain, 
  BarChart3, 
  Palette,
  GitBranch,
  MessageSquare
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Workflow,
      title: "Metodologias Ágeis",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Scrum", "Kanban", "Design Thinking", "Lean", "SAFe", "OKRs"]
    },
    {
      icon: Users,
      title: "Product Management",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: ["Product Discovery", "Backlog Management", "Roadmap Planning", "User Stories", "Stakeholder Management", "MVP Definition"]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Power BI", "SQL Server", "ETL", "KPIs & Metrics", "Data Analysis", "Dashboards"]
    },
    {
      icon: Palette,
      title: "UX & Design",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Figma", "Prototyping", "User Testing", "Design Systems", "Wireframing", "User Journey"]
    },
    {
      icon: Database,
      title: "Ferramentas & Tecnologia",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: ["Jira", "Azure DevOps", "GitLab", "Confluence", "Miro", "Notion"]
    },
    {
      icon: Brain,
      title: "Processos & Modelagem",
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["BPMN", "Process Mapping", "Requirements Analysis", "Documentation", "Integration Design", "API Management"]
    },
    {
      icon: GitBranch,
      title: "Integrações Governamentais",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["GovBr", "SEI", "FalaBr", "SUITE", "BNDES", "WhatsApp Business"]
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: ["Servant Leadership", "Facilitation", "Conflict Resolution", "Active Listening", "Communication", "Coaching"]
    }
  ];

  const certifications = [
    {
      name: "Certified Scrum Master® (CSM)",
      issuer: "Scrum Alliance",
      year: "2025",
      badge: "CSM"
    },
    {
      name: "Certified Scrum Product Owner® (CSPO)",
      issuer: "Scrum Alliance",
      year: "2023",
      badge: "CSPO"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="skills">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display mb-4">Skills & Competências</h2>
            <p className="text-lg text-muted-foreground">
              Expertise técnica e comportamental para liderar transformações ágeis
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-smooth gradient-card border-2 border-transparent hover:border-primary/20">
                <div className={`p-3 ${category.bgColor} rounded-lg w-fit mb-4`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="border-muted-foreground/20 hover:border-primary/40 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl mb-8 text-center">Certificações</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-smooth gradient-primary border-0">
                  <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <span className="text-2xl font-bold text-white">{cert.badge}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{cert.name}</h3>
                  <p className="text-white/80">{cert.issuer}</p>
                  <p className="text-white/60 mt-1">{cert.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
