export function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-thalo-green mb-6">
            Estos somos 
            <span className="block text-terracotta">nosotros</span>
          </h1>
          <p className="text-xl md:text-2xl text-forest-dark mb-8 max-w-3xl mx-auto leading-relaxed">
            Un grupo diverso de personas apasionadas, cada una con sus propios intereses, hobbies y perspectivas únicas
            que enriquecen nuestro trabajo conjunto.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-thalo-green to-terracotta mx-auto"></div>
        </div>
      </div>
    </section>
  )
}
