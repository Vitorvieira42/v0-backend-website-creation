import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-playfair)]">CorpSolutions</h3>
            <p className="text-sm leading-relaxed">
              Oferecemos soluções corporativas inovadoras para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-accent transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>Consultoria Empresarial</li>
              <li>Desenvolvimento de Software</li>
              <li>Marketing Digital</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@corpsolutions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 CorpSolutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
