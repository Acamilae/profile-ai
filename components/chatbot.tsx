"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from "lucide-react"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

const teamMembers = [
  {
    name: "Camila España",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    biography:
      "Una persona creativa y aventurera que encuentra equilibrio entre las actividades manuales y la exploración del mundo.",
    hobbies: ["Tejer", "Leer", "Senderismo", "Viajar por carretera", "Cocinar"],
  },
  {
    name: "Rocio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    biography:
      "Amante de las historias y el arte visual, combina su pasión por la lectura con el diseño creativo para crear piezas únicas.",
    hobbies: ["Leer", "Escuchar música", "Ver series de TV", "Diseñar separadores para libros"],
  },
  {
    name: "Karol",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    biography:
      "Una persona multifacética que equilibra el cuidado físico con el crecimiento intelectual y la apreciación artística.",
    hobbies: ["Música", "Hacer ejercicio", "Leer", "Arte", "Aprender cosas nuevas"],
  },
  {
    name: "Ricardo Gutierrez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    biography:
      "Apasionado por la tecnología y el mundo digital. Es un entusiasta del fútbol, tanto como espectador como jugador, valorando el trabajo en equipo y la disciplina.",
    hobbies: ["Tecnología", "Fútbol", "Mundo digital", "Trabajo en equipo"],
  },
  {
    name: "Andrea Carolina",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    biography:
      "Me encanta disfrutar de la vida, compartir momentos con mis seres queridos. La vida es un regalo y quiero disfrutarla al máximo.",
    hobbies: ["Ver series", "Conversar", "Bailar", "Escuchar música", "Viajar", "Reír con amigos"],
  },
]

const products = [
  // Comida Asiatica
  {
    name: "Ramen Tradicional",
    category: "Comida Asiatica",
    categoryClass: "category-asian",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    description: "Auténtico ramen japonés con caldo rico y fideos frescos",
  },
  {
    name: "Sushi Variado",
    category: "Comida Asiatica",
    categoryClass: "category-asian",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    description: "Selección premium de sushi fresco y rolls especiales",
  },
  {
    name: "Pad Thai",
    category: "Comida Asiatica",
    categoryClass: "category-asian",
    image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300&fit=crop",
    description: "Clásico tailandés con fideos de arroz y salsa tamarindo",
  },
  {
    name: "Dim Sum",
    category: "Comida Asiatica",
    categoryClass: "category-asian",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    description: "Variedad de dumplings al vapor estilo cantonés",
  },
  // Ropa de Senderismo
  {
    name: "Chaqueta Impermeable",
    category: "Ropa de Senderismo",
    categoryClass: "category-hiking",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    description: "Chaqueta técnica resistente al agua y transpirable",
  },
  {
    name: "Botas de Montaña",
    category: "Ropa de Senderismo",
    categoryClass: "category-hiking",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
    description: "Botas resistentes con excelente tracción y soporte",
  },
  {
    name: "Mochila de Trekking",
    category: "Ropa de Senderismo",
    categoryClass: "category-hiking",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    description: "Mochila ergonómica de 40L para aventuras largas",
  },
  {
    name: "Pantalones Tecnicos",
    category: "Ropa de Senderismo",
    categoryClass: "category-hiking",
    image: "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=400&h=300&fit=crop",
    description: "Pantalones ligeros y resistentes para todo terreno",
  },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual del equipo. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)

    setInputValue("")
  }

  // Usando los datos para responder dinámicamente
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Buscar por nombre de miembro
    const member = teamMembers.find(m =>
      input.includes(m.name.toLowerCase().split(' ')[0]) || input.includes(m.name.toLowerCase().split(' ')[1]?.toLowerCase() || '')
    )
    if (member) {
      return `${member.name}: ${member.biography} Hobbies: ${member.hobbies.join(", ")}`
    }

    // Buscar por producto
    const product = products.find(p => input.includes(p.name.toLowerCase()))
    if (product) {
      return `${product.name}: ${product.description}`
    }

    // Respuesta por categoría
    if (input.includes("comida asiática") || input.includes("comida asiatica") || input.includes("comida")) {
      const comida = products.filter(p => p.category === "Comida Asiatica")
      return `Estos son nuestros platos de comida asiática: ${comida.map(p => p.name).join(", ")}`
    }
    if (input.includes("ropa") || input.includes("senderismo") || input.includes("montaña")) {
      const ropa = products.filter(p => p.category === "Ropa de Senderismo")
      return `Estos son nuestros productos de senderismo: ${ropa.map(p => p.name).join(", ")}`
    }

    // Respuesta sobre equipo
    if (input.includes("equipo") || input.includes("miembros")) {
      return `Nuestro equipo está formado por: ${teamMembers.map(m => m.name).join(", ")}. ¿Te gustaría saber más sobre alguno?`
    }

    // Respuesta por defecto
    return "Gracias por tu mensaje. Puedes preguntarme por algún miembro del equipo o algún producto y te daré más información."
  }

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-forest-light/5 to-warm-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-thalo-green mb-4">¿Tienes Preguntas?</h2>
          <p className="text-xl text-forest-dark max-w-2xl mx-auto">
            Nuestro asistente virtual está aquí para ayudarte
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!isOpen ? (
            <div className="text-center">
              <Button
                onClick={() => setIsOpen(true)}
                size="lg"
                className="bg-thalo-green hover:bg-thalo-green/90 text-white px-8 py-4 text-lg"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Iniciar Chat
              </Button>
            </div>
          ) : (
            <Card className="w-full max-w-2xl mx-auto border-forest-light/20">
              <CardHeader className="bg-thalo-green text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Asistente Virtual
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isUser ? "bg-terracotta text-white" : "bg-forest-light/10 text-forest-dark"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-forest-light/20 p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Escribe tu mensaje..."
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} className="bg-thalo-green hover:bg-thalo-green/90">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
