import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "First Decision",
      role: "Scrum Master & Product Owner",
      period: "2021 - Atual",
      type: "work",
      achievements: [
        "Redução de 30% no retrabalho através de documentação funcional mais clara",
        "Facilitação de cerimônias ágeis para múltiplas squads",
        "Gestão completa de produtos digitais governamentais",
        "Integrações complexas com GovBr, SEI, FalaBr, SUITE e BNDES",
        "Desenvolvimento de chatbot com IA para atendimento cidadão",
        "Criação de dashboards no Power BI para KPIs estratégicos",
        "Liderança técnica e gestão de backlog em projetos estratégicos"
      ],
      technologies: ["Scrum", "Kanban", "Jira", "Azure DevOps", "Power BI", "SQL Server", "Figma", "GitLab"]
    },
    {
      company: "UniRios",
      role: "Professora de Sistemas de Informação",
      period: "2012 - Atual",
      type: "work",
      achievements: [
        "Disciplinas: Engenharia de Software, UX, Qualidade de Software e Modelagem",
        "Mentoria de projetos com aplicação de Scrum, Kanban e Design Thinking",
        "Ex-coordenadora dos cursos de TI e da Comissão Própria de Avaliação (CPA)",
        "Orientação de TCC com metodologias ágeis e BPMN"
      ],
      technologies: ["Scrum", "Kanban", "Design Thinking", "BPMN", "UX Design"]
    }
  ];

  const education = [
    {
      degree: "Mestrado em Ciência da Computação",
      institution: "Universidade Federal da Bahia (UFBA)",
      period: "2017 - 2019",
      description: "Foco em Governança Ágil em TIC"
    },
    {
      degree: "Especialização em Gestão de Projetos",
      institution: "UniRios",
      period: "2011 - 2012",
      description: "Gestão de Projetos e Metodologias Ágeis"
    },
    {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "UniRios",
      period: "2006 - 2010",
      description: "Desenvolvimento de Software e Análise de Sistemas"
    }
  ];

  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display mb-4">Experiência Profissional</h2>
            <p className="text-lg text-muted-foreground">
              Trajetória consolidada em transformação digital e liderança ágil
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-8 mb-20">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-smooth gradient-card border-2 border-transparent hover:border-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-bold text-xl">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2 mt-4 text-muted-foreground">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div>
            <h2 className="font-display text-3xl mb-8 text-center">Formação Acadêmica</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-smooth gradient-card">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-secondary font-medium mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
