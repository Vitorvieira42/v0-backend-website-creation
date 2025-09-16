"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary font-[var(--font-playfair)]">
            CorpSolutions
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="text-foreground hover:text-accent transition-colors">
              Sobre
            </Link>
            <Link href="/servicos" className="text-foreground hover:text-accent transition-colors">
              Serviços
            </Link>
            <Link href="/contato" className="text-foreground hover:text-accent transition-colors">
              Contato
            </Link>
          </nav>

          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90">
            <Link href="/contato">Fale Conosco</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-accent transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-foreground hover:text-accent transition-colors">
                Sobre
              </Link>
              <Link href="/servicos" className="text-foreground hover:text-accent transition-colors">
                Serviços
              </Link>
              <Link href="/contato" className="text-foreground hover:text-accent transition-colors">
                Contato
              </Link>
              <Button asChild className="bg-accent hover:bg-accent/90 w-fit">
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
