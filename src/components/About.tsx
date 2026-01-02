import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Foco em Valor",
      description: "Entrega de soluções centradas no usuário com foco em impacto real e mensurável"
    },
    {
      icon: Users,
      title: "Liderança Servidora",
      description: "Facilitação de colaboração, transparência e crescimento contínuo das equipes"
    },
    {
      icon: TrendingUp,
      title: "Transformação Digital",
      description: "Condução de processos ágeis em projetos estratégicos do setor público e privado"
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Competências em BPMN, UX, BI, SQL aliadas a soft skills de alto nível"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display mb-6">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Profissional com mais de 18 anos de experiência em Tecnologia da Informação, 
            atuando nos últimos anos como líder de equipes ágeis, Scrum Master e Product Owner 
            em projetos estratégicos do setor público e privado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-smooth border-2 hover:border-primary/20 gradient-card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 max-w-4xl mx-auto gradient-card border-2 border-primary/10">
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl text-center mb-8">
              Especialista em Metodologias Ágeis
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">Expertise Técnica</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Scrum, Kanban, Design Thinking</li>
                  <li>• Facilitação de cerimônias ágeis</li>
                  <li>• Gestão de backlog e roadmap</li>
                  <li>• Métricas e KPIs de desempenho</li>
                  <li>• BPMN e modelagem de processos</li>
                  <li>• Prototipação e UX</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 text-secondary">Competências Interpessoais</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Liderança servidora</li>
                  <li>• Comunicação clara e efetiva</li>
                  <li>• Escuta ativa e empatia</li>
                  <li>• Mediação de conflitos</li>
                  <li>• Facilitação e coaching</li>
                  <li>• Gestão de stakeholders</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
