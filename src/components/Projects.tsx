import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Rocket, Database, Bot, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Database,
      title: "Portal de Financiamento Externo FPE",
      client: "Setor Público",
      description: "Avaliar e apoiar a viabilidade de programas e projetos do setor público que contem com financiamento externo proveniente de organismos internacionais ou agências estrangeiras.",
      achievements: [
        "Gestão completa do ciclo de desenvolvimento do produto",
        "Integração com organismos internacionais e agências estrangeiras",
        "Facilitação de cerimônias ágeis e gestão de backlog",
        "Análise de viabilidade de programas e projetos estratégicos"
      ],
      technologies: ["Scrum", "Product Owner", "BPMN", "Jira", "Azure DevOps"]
    },
    {
      icon: Rocket,
      title: "API Compras",
      client: "Governo Federal",
      description: "Disponibilizar, de forma integrada e padronizada, informações e serviços relacionados aos processos de compras públicas, promovendo transparência, automação e eficiência nas contratações governamentais.",
      achievements: [
        "Integração padronizada de processos de compras públicas",
        "Automação de contratações governamentais",
        "Promoção de transparência nos processos públicos",
        "Gestão ágil com foco em eficiência operacional"
      ],
      technologies: ["Scrum Master", "API Design", "Jira", "GitLab", "Integrations"]
    },
    {
      icon: Database,
      title: "Sistema de Dados Governamentais",
      client: "Ministério dos Transportes",
      description: "Desenvolvimento completo de sistema integrado para gestão de dados governamentais com múltiplas integrações críticas.",
      achievements: [
        "Integração com GovBr, SEI, FalaBr e SUITE",
        "Gestão de backlog complexo com múltiplos stakeholders",
        "Redução de 30% no retrabalho através de documentação clara",
        "Facilitação de cerimônias ágeis para squad de 12 pessoas"
      ],
      technologies: ["Scrum", "Azure DevOps", "SQL Server", "Power BI", "BPMN"]
    },
    {
      icon: Bot,
      title: "Chatbot Mauá com IA",
      client: "First Decision",
      description: "Chatbot inteligente com reconhecimento de intenções e automação de atendimento para cidadãos.",
      achievements: [
        "Integração com WhatsApp, SEI, GovBr e FalaBr",
        "Reconhecimento de intenções com IA",
        "Parametrização de campanhas automatizadas",
        "Dashboards em tempo real para monitoramento de KPIs"
      ],
      technologies: ["Product Owner", "Figma", "GitLab", "Azure", "IA"]
    },
    {
      icon: BarChart3,
      title: "Plataforma de BI e Analytics",
      client: "First Decision",
      description: "Desenvolvimento de painéis analíticos estratégicos para tomada de decisão baseada em dados.",
      achievements: [
        "Dashboards Power BI para KPIs estratégicos",
        "ETL e modelagem de dados complexos",
        "Análise de métricas de atendimento e performance",
        "Automação de relatórios gerenciais"
      ],
      technologies: ["Power BI", "SQL", "ETL", "Data Analysis", "KPIs"]
    },
    {
      icon: Rocket,
      title: "Sistema de Embarcações",
      client: "Órgão Governamental",
      description: "Solução completa para gestão e controle de embarcações com integração BNDES.",
      achievements: [
        "Modelagem BPMN de processos complexos",
        "Integração com APIs BNDES",
        "Prototipação e testes de aceitação",
        "Gestão ágil com entregas incrementais"
      ],
      technologies: ["Kanban", "BPMN", "Figma", "Jira", "API Integration"]
    }
  ];

  const publications = [
    {
      title: "Goals Plan PETICGOV - Modelo Híbrido Ágil para Governança em Tecnologia da Informação",
      type: "Livro / Dissertação de Mestrado",
      year: "2019",
      description: "Modelo híbrido ágil para governança em TIC com foco em objetivos e entregas mensuráveis"
    },
    {
      title: "METODOLOGIAS DE GOVERNANÇA ÁGIL EM TIC: Uma Quasi-Revisão Sistemática",
      type: "Artigo Científico",
      year: "2019",
      description: "Revisão sistemática sobre metodologias de governança ágil em tecnologia"
    },
    {
      title: "ADOÇÃO DE GESTÃO DO CONHECIMENTO E BIG DATA NA SAÚDE PÚBLICA",
      type: "Artigo Científico",
      year: "2018",
      description: "Estudo sobre aplicação de Big Data na gestão do conhecimento em saúde"
    }
  ];

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display mb-4">Projetos Estratégicos</h2>
            <p className="text-lg text-muted-foreground">
              Iniciativas de grande impacto em transformação digital e gestão ágil
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-smooth gradient-card border-2 border-transparent hover:border-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 gradient-primary rounded-lg">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1">{project.title}</h3>
                    <p className="text-sm text-secondary font-medium">{project.client}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold">Resultados e Conquistas:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary mt-0.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-secondary/10 text-secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Publications */}
          <div>
            <h2 className="font-display text-3xl mb-8 text-center">Publicações Acadêmicas</h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-smooth gradient-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="font-semibold text-lg flex-1">{pub.title}</h3>
                        <Badge variant="outline" className="border-primary/30">
                          {pub.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-secondary font-medium mb-2">{pub.type}</p>
                      <p className="text-sm text-muted-foreground">{pub.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://lattes.cnpq.br/5369002984786487"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-smooth font-medium"
              >
                Ver todas as publicações no Curriculum Lattes
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
