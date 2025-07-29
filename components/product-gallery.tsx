import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  // Comida Asiática
  {
    name: "Ramen Tradicional",
    category: "Comida Asiática",
    image: "/placeholder.svg?height=250&width=350",
    description: "Auténtico ramen japonés con caldo rico y fideos frescos",
  },
  {
    name: "Sushi Variado",
    category: "Comida Asiática",
    image: "/placeholder.svg?height=250&width=350",
    description: "Selección premium de sushi fresco y rolls especiales",
  },
  {
    name: "Pad Thai",
    category: "Comida Asiática",
    image: "/placeholder.svg?height=250&width=350",
    description: "Clásico tailandés con fideos de arroz y salsa tamarindo",
  },
  {
    name: "Dim Sum",
    category: "Comida Asiática",
    image: "/placeholder.svg?height=250&width=350",
    description: "Variedad de dumplings al vapor estilo cantonés",
  },
  // Ropa de Senderismo
  {
    name: "Chaqueta Impermeable",
    category: "Ropa de Senderismo",
    image: "/placeholder.svg?height=250&width=350",
    description: "Chaqueta técnica resistente al agua y transpirable",
  },
  {
    name: "Botas de Montaña",
    category: "Ropa de Senderismo",
    image: "/placeholder.svg?height=250&width=350",
    description: "Botas resistentes con excelente tracción y soporte",
  },
  {
    name: "Mochila de Trekking",
    category: "Ropa de Senderismo",
    image: "/placeholder.svg?height=250&width=350",
    description: "Mochila ergonómica de 40L para aventuras largas",
  },
  {
    name: "Pantalones Técnicos",
    category: "Ropa de Senderismo",
    image: "/placeholder.svg?height=250&width=350",
    description: "Pantalones ligeros y resistentes para todo terreno",
  },
]

export function ProductGallery() {
  return (
    <section id="productos" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-thalo-green mb-4">Lo que puedes comprar</h2>
          <p className="text-xl text-forest-dark max-w-2xl mx-auto">
            Descubre nuestra selección de comida asiática auténtica y equipamiento de senderismo de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-forest-light/20 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className={`${
                      product.category === "Comida Asiática" ? "bg-terracotta text-white" : "bg-thalo-green text-white"
                    }`}
                  >
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-thalo-green mb-2">{product.name}</h3>
                <p className="text-forest-dark/80 text-sm">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
