import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Award, TrendingUp } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">Sobre a CorpSolutions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Há mais de 10 anos no mercado, somos especialistas em transformar desafios empresariais em oportunidades
              de crescimento através de soluções inovadoras e personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Target className="text-accent" size={32} />
                </div>
                <CardTitle className="font-[var(--font-playfair)]">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Capacitar empresas com soluções tecnológicas e estratégicas que impulsionam o crescimento sustentável
                  e a inovação contínua.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <CardTitle className="font-[var(--font-playfair)]">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a principal parceira em transformação digital e consultoria empresarial no
                  mercado brasileiro.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Award className="text-accent" size={32} />
                </div>
                <CardTitle className="font-[var(--font-playfair)]">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Excelência, inovação, transparência e compromisso com o sucesso dos nossos clientes em cada projeto
                  que desenvolvemos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-[var(--font-playfair)]">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fundada em 2014, a CorpSolutions nasceu da visão de um grupo de profissionais experientes que
                identificaram a necessidade de oferecer soluções corporativas verdadeiramente personalizadas e eficazes
                para empresas de todos os portes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ao longo dos anos, desenvolvemos uma metodologia única que combina análise profunda dos processos
                empresariais com as mais modernas tecnologias disponíveis no mercado. Isso nos permite entregar
                resultados que não apenas atendem, mas superam as expectativas dos nossos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje, orgulhamo-nos de ter ajudado mais de 500 empresas a alcançarem seus objetivos, desde startups em
                crescimento até grandes corporações estabelecidas. Nossa equipe multidisciplinar continua crescendo e
                evoluindo para atender às demandas de um mercado em constante transformação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-playfair)]">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais altamente qualificados e apaixonados por transformar negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold mx-auto mb-4">
                  RS
                </div>
                <h3 className="font-semibold text-lg mb-2">Roberto Silva</h3>
                <p className="text-accent font-medium mb-3">CEO & Fundador</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mais de 15 anos de experiência em consultoria empresarial e transformação digital. Especialista em
                  estratégia corporativa e inovação.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold mx-auto mb-4">
                  MC
                </div>
                <h3 className="font-semibold text-lg mb-2">Marina Costa</h3>
                <p className="text-accent font-medium mb-3">CTO</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Engenheira de software com vasta experiência em desenvolvimento de soluções tecnológicas escaláveis e
                  arquitetura de sistemas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold mx-auto mb-4">
                  LS
                </div>
                <h3 className="font-semibold text-lg mb-2">Lucas Santos</h3>
                <p className="text-accent font-medium mb-3">Diretor de Marketing</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Especialista em marketing digital e growth hacking, com foco em estratégias de crescimento sustentável
                  para empresas B2B.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
