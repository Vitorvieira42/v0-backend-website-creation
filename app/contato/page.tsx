import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos prontos para ajudar sua empresa a alcançar novos patamares. Entre em contato conosco e vamos
              conversar sobre suas necessidades.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-[var(--font-playfair)]">Envie sua Mensagem</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-[var(--font-playfair)]">Informações de Contato</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Você também pode entrar em contato conosco através dos canais abaixo:
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Mail className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">contato@corpsolutions.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Phone className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Telefone</h3>
                        <p className="text-muted-foreground">(11) 9999-9999</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <MapPin className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Endereço</h3>
                        <p className="text-muted-foreground">
                          Av. Paulista, 1000
                          <br />
                          São Paulo, SP - 01310-100
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Clock className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 8h às 18h
                          <br />
                          Sábado: 9h às 13h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-[var(--font-playfair)]">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Qual é o prazo médio para desenvolvimento de um projeto?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    O prazo varia conforme a complexidade do projeto. Projetos simples podem ser concluídos em 2-4
                    semanas, enquanto soluções mais complexas podem levar de 2-6 meses. Sempre fornecemos um cronograma
                    detalhado após a análise inicial.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vocês oferecem suporte após a entrega do projeto?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Sim! Oferecemos diferentes planos de suporte e manutenção para garantir que sua solução continue
                    funcionando perfeitamente. Isso inclui atualizações, correções e suporte técnico especializado.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Como funciona o processo de orçamento?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Após o primeiro contato, agendamos uma reunião para entender suas necessidades. Em seguida,
                    elaboramos uma proposta detalhada com escopo, cronograma e investimento. O orçamento é sempre
                    gratuito e sem compromisso.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
