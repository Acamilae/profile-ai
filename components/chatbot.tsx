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

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("equipo") || input.includes("miembros")) {
      return "Nuestro equipo está formado por 5 personas increíbles: Camila, Rocío, Karol, Ricardo y Andrea. Cada uno aporta sus talentos únicos al grupo."
    }
    if (input.includes("productos") || input.includes("comida") || input.includes("senderismo")) {
      return "Ofrecemos una selección de comida asiática auténtica y equipamiento de senderismo de alta calidad. ¿Te interesa alguna categoría en particular?"
    }
    if (input.includes("contacto") || input.includes("información")) {
      return "Puedes encontrar más información sobre cada miembro del equipo en la sección de perfiles. ¿Hay algo específico que te gustaría saber?"
    }

    return "Gracias por tu mensaje. Estoy aquí para ayudarte con información sobre nuestro equipo y productos. ¿Hay algo específico que te gustaría saber?"
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
