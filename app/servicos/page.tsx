import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Users, Code, Megaphone, Headphones, CheckCircle, ArrowRight, BarChart3, Shield, Zap } from "lucide-react"

export default function ServicosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">Nossos Serviços</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soluções completas e personalizadas para impulsionar o crescimento do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultoria Empresarial */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Users className="text-accent" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-[var(--font-playfair)]">Consultoria Empresarial</CardTitle>
                    <CardDescription className="text-base">Estratégias personalizadas para seu negócio</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Analisamos profundamente seus processos e desenvolvemos estratégias customizadas para otimizar
                  operações, reduzir custos e aumentar a eficiência organizacional.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Análise de processos empresariais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Planejamento estratégico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Otimização de recursos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Gestão de mudanças</span>
                  </li>
                </ul>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/contato">
                    Solicitar Consultoria <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Desenvolvimento de Software */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Code className="text-accent" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-[var(--font-playfair)]">Desenvolvimento de Software</CardTitle>
                    <CardDescription className="text-base">Soluções tecnológicas sob medida</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Desenvolvemos aplicações web, mobile e desktop personalizadas para automatizar processos, melhorar a
                  produtividade e modernizar sua infraestrutura tecnológica.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Aplicações web responsivas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Aplicativos mobile (iOS/Android)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Sistemas de gestão (ERP/CRM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Integração de APIs</span>
                  </li>
                </ul>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/contato">
                    Iniciar Projeto <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Marketing Digital */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Megaphone className="text-accent" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-[var(--font-playfair)]">Marketing Digital</CardTitle>
                    <CardDescription className="text-base">Estratégias para crescimento online</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Criamos e executamos estratégias de marketing digital para aumentar sua presença online, gerar mais
                  leads qualificados e converter visitantes em clientes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">SEO e otimização para buscadores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Campanhas de Google Ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Marketing de conteúdo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Gestão de redes sociais</span>
                  </li>
                </ul>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/contato">
                    Começar Campanha <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Suporte Técnico */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Headphones className="text-accent" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-[var(--font-playfair)]">Suporte Técnico</CardTitle>
                    <CardDescription className="text-base">Assistência especializada 24/7</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Oferecemos suporte técnico especializado para manter seus sistemas funcionando perfeitamente, com
                  monitoramento proativo e resolução rápida de problemas.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Suporte 24/7 via chat e telefone</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Monitoramento proativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Manutenção preventiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-sm">Backup e recuperação</span>
                  </li>
                </ul>
                <Button asChild className="bg-accent hover:bg-accent/90">
                  <Link href="/contato">
                    Contratar Suporte <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">Serviços Complementares</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções adicionais para atender todas as necessidades do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <BarChart3 className="text-accent" size={32} />
                </div>
                <CardTitle>Análise de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Transformamos seus dados em insights valiosos para tomada de decisões estratégicas
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Shield className="text-accent" size={32} />
                </div>
                <CardTitle>Segurança Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Implementamos soluções de segurança robustas para proteger seus dados e sistemas
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Zap className="text-accent" size={32} />
                </div>
                <CardTitle>Automação de Processos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Automatizamos tarefas repetitivas para aumentar a eficiência e reduzir erros
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">Pronto para Começar?</h2>
          <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos serviços podem transformar seu negócio
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link href="/contato">
              Solicitar Orçamento Gratuito <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
