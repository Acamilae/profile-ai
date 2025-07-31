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

  // SOLO la función de respuestas personalizada:
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // ...Aquí copia toda tu lógica de respuestas del script.js...
    if (input.includes("camila")) {
      return "¡Camila España es increíble! Es una persona muy creativa y aventurera. Sus hobbies incluyen tejer (hace piezas hermosas), leer, senderismo por montañas, viajar por carretera descubriendo nuevos lugares, y cocinar platos deliciosos. Encuentra el equilibrio perfecto entre actividades manuales y exploración del mundo."
    }

    if (input.includes("rocío")) {
      return "Rocío es nuestra artista y amante de las historias. Le encanta leer libros de todos los géneros, escuchar música mientras trabaja, ver series de TV en familia (especialmente dramas y comedias), y su especialidad es diseñar imágenes de separadores para libros únicos y creativos. Combina perfectamente su pasión por la lectura con el diseño visual."
    }

    if (input.includes("karol")) {
      return "Karol es una persona multifacética fascinante. Sus pasiones incluyen la música (toca instrumentos y compone), hacer ejercicio regularmente (yoga, running, gym), leer libros de desarrollo personal y ficción, crear y apreciar arte en todas sus formas, y está constantemente aprendiendo cosas nuevas - desde idiomas hasta habilidades técnicas."
    }

    if (input.includes("ricardo")) {
      return "Ricardo Gutiérrez es nuestro experto en tecnología y deportes. Es apasionado por el mundo digital, programación, nuevas tecnologías y tendencias tech. También es un gran entusiasta del fútbol - tanto jugando como viendo partidos. Valora mucho el trabajo en equipo, la disciplina y siempre busca aplicar estos principios tanto en el deporte como en el trabajo."
    }

    if (input.includes("andrea")) {
      return "Andrea Carolina es pura energía positiva. Su filosofía es disfrutar la vida al máximo. Le encanta ver series (desde comedias hasta thrillers), conversar profundamente con amigos, bailar cualquier ritmo, escuchar música de todos los géneros, viajar y descubrir nuevas culturas, y sobre todo reír con sus amigos. Cree firmemente que la vida es un regalo que debemos celebrar cada día."
    }

    if (input.includes("equipo") || input.includes("miembros") || input.includes("grupo")) {
      return "Nuestro equipo está formado por 5 personas increíbles: Camila España (creativa y aventurera), Rocío (artista y lectora), Karol (multifacética y siempre aprendiendo), Ricardo Gutiérrez (tech y fútbol), y Andrea Carolina (energía pura y alegría de vivir). Cada uno aporta talentos únicos. ¿Te gustaría saber más sobre alguno en particular?"
    }

    // ...y así con el resto de respuestas...

    // Respuesta por defecto
    return "Interesante pregunta. Estoy aquí para ayudarte con información sobre: 👥 Nuestro equipo (Camila, Rocío, Karol, Ricardo, Andrea), 🍜 Comida asiática (Ramen, Sushi, Pad Thai, Dim Sum), 🏔️ Equipamiento de senderismo (Chaquetas, Botas, Mochilas, Pantalones). ¿Sobre qué te gustaría saber más?"
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
