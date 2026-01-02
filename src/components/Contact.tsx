import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 gradient-hero" id="contact">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display mb-4 text-white">Vamos Conversar?</h2>
            <p className="text-xl text-white/90">
              Aberta a novas oportunidades em empresas de tecnologia que valorizam metodologias ágeis
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:denisexavier062019@gmail.com"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">denisexavier062019@gmail.com</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+5575991346467"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-smooth">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-sm text-muted-foreground">(75) 99134-6467</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-lg">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Localização</p>
                        <p className="text-sm text-muted-foreground">Paulo Afonso, BA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social & Links */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-6">Conecte-se Comigo</h3>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/denise-xavier-66a372117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-smooth group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">Perfil profissional</p>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </a>

                    <a 
                      href="https://lattes.cnpq.br/5369002984786487"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-smooth group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <ExternalLink className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-medium">Curriculum Lattes</p>
                          <p className="text-sm text-muted-foreground">Produção acadêmica</p>
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-smooth" />
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-3">Disponibilidade</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Disponível para oportunidades remotas ou híbridas. 
                    Aberta a realocação para grandes centros tecnológicos.
                  </p>
                  <Button className="w-full gradient-primary border-0 text-white" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">
                Interessado em transformação ágil e liderança servidora? <br />
                Vamos construir juntos times de alta performance!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
