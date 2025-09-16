import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, Zap, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[var(--font-playfair)] text-balance text-white">
            Soluções Corporativas que Transformam Negócios
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto text-pretty">
            Impulsione o crescimento da sua empresa com nossas soluções inovadoras e personalizadas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/contato">
                Começar Agora <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/servicos">Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">
              Por que Escolher a CorpSolutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Oferecemos soluções completas e personalizadas para atender às necessidades específicas do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Zap className="text-accent" size={32} />
                </div>
                <CardTitle>Inovação Constante</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Utilizamos as mais recentes tecnologias e metodologias para entregar soluções de ponta
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Users className="text-accent" size={32} />
                </div>
                <CardTitle>Equipe Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Profissionais altamente qualificados com vasta experiência em diversos setores
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Shield className="text-accent" size={32} />
                </div>
                <CardTitle>Segurança Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Implementamos os mais altos padrões de segurança para proteger seus dados e processos
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">
              Nossos Principais Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluções abrangentes para todas as necessidades do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="font-semibold text-lg mb-3">Consultoria Empresarial</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Estratégias personalizadas para otimizar processos e aumentar a eficiência
              </p>
              <Link href="/servicos" className="text-accent hover:underline font-medium">
                Saiba mais →
              </Link>
            </div>

            <div className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="font-semibold text-lg mb-3">Desenvolvimento de Software</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Soluções tecnológicas sob medida para automatizar e modernizar seu negócio
              </p>
              <Link href="/servicos" className="text-accent hover:underline font-medium">
                Saiba mais →
              </Link>
            </div>

            <div className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="font-semibold text-lg mb-3">Marketing Digital</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Estratégias digitais para aumentar sua presença online e gerar mais leads
              </p>
              <Link href="/servicos" className="text-accent hover:underline font-medium">
                Saiba mais →
              </Link>
            </div>

            <div className="p-6 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="font-semibold text-lg mb-3">Suporte Técnico</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Suporte especializado 24/7 para manter seus sistemas sempre funcionando
              </p>
              <Link href="/servicos" className="text-accent hover:underline font-medium">
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">
              O que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "A CorpSolutions transformou completamente nossos processos. Aumentamos nossa eficiência em 40% em
                  apenas 3 meses."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Excelente suporte e soluções inovadoras. Recomendo para qualquer empresa que busca crescimento."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">João Santos</p>
                    <p className="text-sm text-muted-foreground">Diretor, InnovaCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Profissionais altamente qualificados e resultados que superaram nossas expectativas."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Ana Costa</p>
                    <p className="text-sm text-muted-foreground">Gerente, StartupXYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares
          </p>
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/contato">
              Solicitar Orçamento <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
