import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, Target, TrendingUp, Heart, CheckCircle } from "lucide-react";
import plannerCapa from "@/assets/planner-capa.png";
import plannerMensal from "@/assets/planner-mensal.png";
import plannerSemanal from "@/assets/planner-semanal.png";
import plannerDiario from "@/assets/planner-diario.png";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const features = [
    {
      icon: Calendar,
      title: "Planejamento Mensal Estratégico",
      items: [
        "Visão Clara do Mês: Defina objetivos estratégicos, entregas principais e identifique os times envolvidos",
        "Cultura e Pessoas: Planeje como nutrir um time motivado, focado, colaborativo e seguro",
        "Fluxo e Capacidade: Monitore a capacidade da equipe e faça ajustes proativos",
        "Métricas Essenciais: Acompanhe Lead Time, Throughput, WIP e Qualidade",
        "Gestão de Riscos: Identifique riscos estratégicos e crie planos de mitigação",
        "Desenvolvimento do Líder: Foque em comunicação, gestão de conflitos, delegação e feedback",
      ],
    },
    {
      icon: Target,
      title: "Foco Semanal Tático",
      items: [
        "Objetivo da Semana: Defina o foco principal alinhado aos valores ágeis",
        "Saúde do Time: Monitore o clima e identifique sinais de alerta",
        "Gestão do Sprint/Ciclo: Organize prioridades e identifique impedimentos",
        "Comunicação Eficaz: Estruture cerimônias e reuniões críticas",
        "Melhoria Contínua: Reflita e planeje experimentos para a próxima semana",
        "Autogestão do Líder: Avalie sua energia e defina limites",
      ],
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Diário Produtivo",
      items: [
        "Prioridades e Tarefas: Organize seu dia com clareza",
        "Metas e Compromissos: Mantenha-se alinhado aos seus objetivos",
        "Anotações e Reflexões: Espaço para insights e planejamento",
      ],
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Clareza e Foco",
      description: "Transforme a complexidade em ações claras e direcionadas",
    },
    {
      icon: Users,
      title: "Impacto no Time",
      description: "Desenvolva uma cultura de alta performance e bem-estar",
    },
    {
      icon: Heart,
      title: "Crescimento Pessoal",
      description: "Invista no seu desenvolvimento como líder, de forma intencional",
    },
    {
      icon: CheckCircle,
      title: "Resultados Consistentes",
      description: "Conecte a estratégia à execução diária, garantindo entregas de valor",
    },
  ];

  const images = [
    { src: plannerCapa, alt: "Capa do Planner Líder Ágil 2026" },
    { src: plannerMensal, alt: "Planejamento Mensal" },
    { src: plannerSemanal, alt: "Planejamento Semanal" },
    { src: plannerDiario, alt: "Planejamento Diário" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-secondary/20 text-secondary-light border-secondary/30 hover:bg-secondary/30">
                🚀 Lançamento 2026
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                Planner do<br />
                <span className="text-secondary-light">Líder Ágil</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                A ferramenta definitiva para organizar sua mente, suas prioridades e a performance da sua equipe.
              </p>
              <p className="text-white/80">
                Desenvolvido para líderes que vivem a agilidade, este planner oferece uma estrutura completa para você planejar, executar e refletir em todos os níveis.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-primary font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("https://pay.kiwify.com.br/ynSQyRk", "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Adquirir Agora
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src={plannerCapa}
                alt="Planner do Líder Ágil 2026"
                className="max-w-sm w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
            Você é um líder ágil que busca excelência?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Se você se sente sobrecarregado pela complexidade do dia a dia e quer ir além da gestão de tarefas para realmente <strong>inspirar seu time</strong>, <strong>otimizar processos</strong> e <strong>alcançar objetivos estratégicos</strong>, este planner foi feito para você.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center text-primary mb-12">
            Conheça o Planner por Dentro
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center text-primary mb-12">
            O que você encontrará neste planner transformador
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-slate-100 hover:border-secondary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-xl">
                      <feature.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg text-primary">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">
            Por que este planner é indispensável para você?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-4">
                  <benefit.icon className="h-8 w-8 text-secondary-light" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
            Chega de improvisos!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Leve sua liderança ágil para o próximo nível com uma ferramenta que realmente entende suas necessidades.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary-light text-primary font-semibold shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
            onClick={() => window.open("https://pay.kiwify.com.br/ynSQyRk", "_blank")}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Adquira Agora o seu Planner do Líder Ágil
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
