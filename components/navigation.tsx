"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-warm-cream/95 backdrop-blur-sm z-50 border-b border-forest-light/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-thalo-green">Estos somos</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-thalo-green hover:text-terracotta transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("perfiles")}
              className="text-thalo-green hover:text-terracotta transition-colors"
            >
              Perfiles
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-thalo-green hover:text-terracotta transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-thalo-green hover:text-terracotta transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-4 py-2 text-thalo-green hover:bg-forest-light/10 rounded"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("perfiles")}
              className="block w-full text-left px-4 py-2 text-thalo-green hover:bg-forest-light/10 rounded"
            >
              Perfiles
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="block w-full text-left px-4 py-2 text-thalo-green hover:bg-forest-light/10 rounded"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left px-4 py-2 text-thalo-green hover:bg-forest-light/10 rounded"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
