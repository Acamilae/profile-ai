import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Camila España",
    image: "https://i.imgur.com/umm2szm.png",
    biography:
      "Una persona creativa y aventurera que encuentra equilibrio entre las actividades manuales y la exploración del mundo.",
    hobbies: ["Tejer", "Leer", "Senderismo", "Viajar por carretera", "Cocinar"],
  },
  {
    name: "Rocío",
    image: "https://i.imgur.com/Oendr91.png",
    biography:
      "Amante de las historias y el arte visual, combina su pasión por la lectura con el diseño creativo para crear piezas únicas.",
    hobbies: ["Leer", "Escuchar música", "Ver series de TV", "Diseñar separadores para libros"],
  },
  {
    name: "Karol",
    image: "https://i.imgur.com/fuqtxMc.png",
    biography:
      "Una persona multifacética que equilibra el cuidado físico con el crecimiento intelectual y la apreciación artística.",
    hobbies: ["Música", "Hacer ejercicio", "Leer", "Arte", "Aprender cosas nuevas"],
  },
  {
    name: "Ricardo Gutiérrez",
    image: "https://i.imgur.com/9wRAWi2.png",
    biography:
      "Apasionado por la tecnología y el mundo digital. Es un entusiasta del fútbol, tanto como espectador como jugador, valorando el trabajo en equipo y la disciplina.",
    hobbies: ["Tecnología", "Fútbol", "Mundo digital", "Trabajo en equipo"],
  },
  {
    name: "Andrea Carolina",
    image: "https://i.imgur.com/m8MG9yt.png",
    biography:
      "Me encanta disfrutar de la vida, compartir momentos con mis seres queridos. La vida es un regalo y quiero disfrutarla al máximo.",
    hobbies: ["Ver series", "Conversar", "Bailar", "Escuchar música", "Viajar", "Reír con amigos"],
  },
]

export function TeamProfiles() {
  return (
    <section id="perfiles" className="py-20 px-4 bg-gradient-to-b from-warm-cream to-forest-light/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-thalo-green mb-4">Estos somos nosotros</h2>
          <p className="text-xl text-forest-dark max-w-2xl mx-auto">
            Cada miembro aporta su personalidad única y pasiones especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-forest-light/20 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-terracotta/20 group-hover:border-terracotta/40 transition-colors"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-thalo-green mb-2">{member.name}</h3>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-forest-dark mb-2">Biografía</h4>
                  <p className="text-forest-dark/80 leading-relaxed">{member.biography}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-forest-dark mb-3">Hobbies</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.hobbies.map((hobby, hobbyIndex) => (
                      <Badge
                        key={hobbyIndex}
                        variant="secondary"
                        className="bg-terracotta/10 text-terracotta hover:bg-terracotta/20 transition-colors"
                      >
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
