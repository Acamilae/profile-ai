// Datos del equipo
const teamMembers = [
  {
    name: "Camila España",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    biography:
      "Una persona creativa y aventurera que encuentra equilibrio entre las actividades manuales y la exploración del mundo.",
    hobbies: ["Tejer", "Leer", "Senderismo", "Viajar por carretera", "Cocinar"],
  },
  {
    name: "Rocío",
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
    name: "Ricardo Gutiérrez",
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

// Datos de productos
const products = [
  // Comida Asiática
  {
    name: "Ramen Tradicional",
    category: "Comida Asiática",
    categoryClass: "category-asian",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    description: "Auténtico ramen japonés con caldo rico y fideos frescos",
  },
  {
    name: "Sushi Variado",
    category: "Comida Asiática",
    categoryClass: "category-asian",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    description: "Selección premium de sushi fresco y rolls especiales",
  },
  {
    name: "Pad Thai",
    category: "Comida Asiática",
    categoryClass: "category-asian",
    image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300&fit=crop",
    description: "Clásico tailandés con fideos de arroz y salsa tamarindo",
  },
  {
    name: "Dim Sum",
    category: "Comida Asiática",
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
    name: "Pantalones Técnicos",
    category: "Ropa de Senderismo",
    categoryClass: "category-hiking",
    image: "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=400&h=300&fit=crop",
    description: "Pantalones ligeros y resistentes para todo terreno",
  },
]

// Variables del chatbot
const messages = [
  {
    id: 1,
    text: "¡Hola! Soy el asistente virtual del equipo. ¿En qué puedo ayudarte hoy?",
    isUser: false,
    timestamp: new Date(),
  },
]

// Inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  renderTeamMembers()
  renderProducts()
  initializeChatbot()
  setInitialTime()
})

// Navegación
function initializeNavigation() {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    const icon = navToggle.querySelector("i")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-times")
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      const icon = navToggle.querySelector("i")
      icon.classList.add("fa-bars")
      icon.classList.remove("fa-times")
    })
  })

  // Smooth scroll para navegación
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Renderizar miembros del equipo
function renderTeamMembers() {
  const teamGrid = document.getElementById("team-grid")

  teamMembers.forEach((member, index) => {
    const memberCard = document.createElement("div")
    memberCard.className = "team-card fade-in"
    memberCard.style.animationDelay = `${index * 0.1}s`

    memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="team-member-image">
            <h3 class="team-member-name">${member.name}</h3>
            <div class="team-member-bio">
                <h4>Biografía</h4>
                <p>${member.biography}</p>
            </div>
            <div class="hobbies-container">
                <h4>Hobbies</h4>
                <div class="hobbies-list">
                    ${member.hobbies.map((hobby) => `<span class="hobby-badge">${hobby}</span>`).join("")}
                </div>
            </div>
        `

    teamGrid.appendChild(memberCard)
  })
}

// Renderizar productos
function renderProducts() {
  const productsGrid = document.getElementById("products-grid")

  products.forEach((product, index) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card fade-in"
    productCard.style.animationDelay = `${index * 0.1}s`

    productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-category ${product.categoryClass}">
                    ${product.category}
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
            </div>
        `

    productsGrid.appendChild(productCard)
  })
}

// Inicializar chatbot
function initializeChatbot() {
  const chatToggle = document.getElementById("chat-toggle")
  const chatWindow = document.getElementById("chat-window")
  const chatClose = document.getElementById("chat-close")
  const chatInput = document.getElementById("chat-input")
  const chatSend = document.getElementById("chat-send")

  chatToggle.addEventListener("click", () => {
    chatWindow.classList.remove("hidden")
    chatToggle.style.display = "none"
  })

  chatClose.addEventListener("click", () => {
    chatWindow.classList.add("hidden")
    chatToggle.style.display = "inline-flex"
  })

  chatSend.addEventListener("click", sendMessage)

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })
}

// Enviar mensaje del chat
function sendMessage() {
  const chatInput = document.getElementById("chat-input")
  const messageText = chatInput.value.trim()

  if (!messageText) return

  // Agregar mensaje del usuario
  const userMessage = {
    id: messages.length + 1,
    text: messageText,
    isUser: true,
    timestamp: new Date(),
  }

  messages.push(userMessage)
  renderMessage(userMessage)

  chatInput.value = ""

  // Simular respuesta del bot después de 1 segundo
  setTimeout(() => {
    const botResponse = {
      id: messages.length + 1,
      text: getBotResponse(messageText),
      isUser: false,
      timestamp: new Date(),
    }

    messages.push(botResponse)
    renderMessage(botResponse)
  }, 1000)
}

// Obtener respuesta del bot
function getBotResponse(userInput) {
  const input = userInput.toLowerCase()

  // Respuestas sobre miembros específicos del equipo
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

  // Respuestas sobre el equipo en general
  if (input.includes("equipo") || input.includes("miembros") || input.includes("grupo")) {
    return "Nuestro equipo está formado por 5 personas increíbles: Camila España (creativa y aventurera), Rocío (artista y lectora), Karol (multifacética y siempre aprendiendo), Ricardo Gutiérrez (tech y fútbol), y Andrea Carolina (energía pura y alegría de vivir). Cada uno aporta talentos únicos. ¿Te gustaría saber más sobre alguno en particular?"
  }

  // Respuestas específicas sobre comida asiática
  if (input.includes("ramen")) {
    return "¡Nuestro Ramen Tradicional es espectacular! Es auténtico ramen japonés con caldo rico y profundo, fideos frescos hechos a mano, chashu (cerdo braseado), huevo marinado, nori, cebollín y brotes de bambú. Disponible en variedades: Shoyu (soja), Miso (pasta de soja fermentada) y Tonkotsu (hueso de cerdo)."
  }

  if (input.includes("sushi")) {
    return "Nuestra selección de Sushi Variado incluye: Nigiri premium (salmón, atún, anguila), Maki rolls clásicos (California, Philadelphia, Spicy Tuna), Sashimi fresco del día, y nuestros rolls especiales de la casa. Todo preparado por chefs especializados con pescado de la más alta calidad y arroz de sushi perfectamente sazonado."
  }

  if (input.includes("pad thai")) {
    return "Nuestro Pad Thai es el clásico tailandés auténtico: fideos de arroz salteados con salsa de tamarindo, camarones o pollo, huevos revueltos, brotes de soja, cebollín, cacahuates tostados y lima fresca. Disponible en niveles de picante: suave, medio y picante. ¡Una explosión de sabores!"
  }

  if (input.includes("dim sum")) {
    return "Nuestro Dim Sum incluye una variedad exquisita: Har Gow (dumplings de camarón translúcidos), Siu Mai (dumplings de cerdo y camarón), Char Siu Bao (panecillos al vapor con cerdo BBQ), Cheung Fun (rollitos de fideos de arroz), y postres como Egg Tarts. Todos hechos al vapor en bambú tradicional."
  }

  // Respuestas específicas sobre equipamiento de senderismo
  if (input.includes("chaqueta") || input.includes("impermeable")) {
    return "Nuestra Chaqueta Impermeable es técnica de alta gama: membrana Gore-Tex para máxima impermeabilidad, transpirable para evitar condensación, costuras selladas, capucha ajustable, bolsillos con cremallera resistente al agua, y ventilaciones en axilas. Perfecta para montañismo, trekking y clima extremo."
  }

  if (input.includes("botas") || input.includes("montaña")) {
    return "Las Botas de Montaña ofrecen: suela Vibram con tracción superior, upper de cuero resistente al agua, soporte de tobillo reforzado, plantilla ergonómica, protección en puntera y talón, cordones resistentes, y membrana impermeable transpirable. Ideales para senderos rocosos, barro y terreno irregular."
  }

  if (input.includes("mochila") || input.includes("trekking")) {
    return "Nuestra Mochila de Trekking de 40L incluye: sistema de suspensión ergonómico, cinturón acolchado para distribuir peso, compartimentos organizadores, acceso frontal y superior, porta bastones, red para casco, funda para lluvia incluida, y materiales ultra-resistentes. Perfecta para aventuras de varios días."
  }

  if (input.includes("pantalones") || input.includes("técnicos")) {
    return "Los Pantalones Técnicos son: tejido ripstop ultra-resistente, secado rápido, protección UV, múltiples bolsillos con cremallera, rodillas pre-formadas para movilidad, cintura ajustable, tratamiento repelente al agua (DWR), y diseño ergonómico. Ideales para senderismo, escalada y actividades outdoor."
  }

  // Respuestas generales sobre productos
  if (input.includes("comida") || input.includes("asiática") || input.includes("restaurante")) {
    return "Nuestra comida asiática incluye: Ramen Tradicional japonés, Sushi Variado premium, Pad Thai tailandés auténtico, y Dim Sum cantonés. Cada plato es preparado con ingredientes frescos y recetas tradicionales. ¿Te interesa algún plato específico? Puedo darte más detalles."
  }

  if (
    input.includes("ropa") ||
    input.includes("senderismo") ||
    input.includes("montaña") ||
    input.includes("outdoor")
  ) {
    return "Nuestro equipamiento de senderismo incluye: Chaquetas Impermeables técnicas, Botas de Montaña con suela Vibram, Mochilas de Trekking ergonómicas de 40L, y Pantalones Técnicos resistentes. Todo diseñado para aventureros serios. ¿Qué tipo de actividad outdoor planeas?"
  }

  if (input.includes("productos") || input.includes("venden") || input.includes("ofrecen")) {
    return "Ofrecemos dos categorías principales: 🍜 COMIDA ASIÁTICA (Ramen, Sushi, Pad Thai, Dim Sum) y 🏔️ EQUIPAMIENTO DE SENDERISMO (Chaquetas, Botas, Mochilas, Pantalones). Todos nuestros productos son de alta calidad. ¿Te interesa alguna categoría específica?"
  }

  // Respuestas sobre precios y disponibilidad
  if (input.includes("precio") || input.includes("costo") || input.includes("cuánto")) {
    return "Los precios varían según el producto. Para comida asiática: platos desde $12-25. Para equipamiento de senderismo: desde $45-200 dependiendo del artículo. Te recomiendo contactarnos directamente para precios actualizados y ofertas especiales."
  }

  if (input.includes("disponible") || input.includes("stock") || input.includes("inventario")) {
    return "Mantenemos inventario regular de todos nuestros productos. Para verificar disponibilidad específica de tallas, colores o platos del día, te recomiendo contactarnos directamente o visitar nuestras instalaciones."
  }

  // Respuestas sobre contacto e información
  if (input.includes("contacto") || input.includes("información") || input.includes("ubicación")) {
    return "Puedes encontrar información detallada de cada miembro en la sección de perfiles de nuestro sitio. Para contacto directo, consultas específicas o pedidos, puedes escribirnos o visitarnos. ¿Hay algo específico sobre algún miembro o producto que te gustaría saber?"
  }

  if (input.includes("horario") || input.includes("abierto") || input.includes("horarios")) {
    return "Nuestros horarios de atención varían según el servicio. Para comida asiática y equipamiento de senderismo, te recomiendo contactarnos para conocer horarios actualizados y disponibilidad."
  }

  // Respuestas de saludo y cortesía
  if (input.includes("hola") || input.includes("hi") || input.includes("buenos") || input.includes("buenas")) {
    return "¡Hola! Me alegra mucho saludarte. Soy el asistente virtual del equipo y estoy aquí para ayudarte con cualquier pregunta sobre nuestros 5 increíbles miembros, nuestra deliciosa comida asiática, o nuestro equipamiento de senderismo profesional. ¿En qué puedo ayudarte hoy?"
  }

  if (input.includes("gracias") || input.includes("thanks")) {
    return "¡De nada! Es un placer ayudarte. Si tienes más preguntas sobre nuestro equipo, productos de comida asiática, equipamiento de senderismo, o cualquier otra cosa, no dudes en preguntar. ¡Estoy aquí para ti!"
  }

  if (input.includes("adiós") || input.includes("bye") || input.includes("chao")) {
    return "¡Hasta pronto! Fue genial conversar contigo. Recuerda que siempre puedes volver si tienes más preguntas sobre nuestro equipo o productos. ¡Que tengas un día increíble! 😊"
  }

  // Respuesta por defecto mejorada
  return "Interesante pregunta. Estoy aquí para ayudarte con información sobre: 👥 Nuestro equipo (Camila, Rocío, Karol, Ricardo, Andrea), 🍜 Comida asiática (Ramen, Sushi, Pad Thai, Dim Sum), 🏔️ Equipamiento de senderismo (Chaquetas, Botas, Mochilas, Pantalones). ¿Sobre qué te gustaría saber más?"
}

// Renderizar mensaje en el chat
function renderMessage(message) {
  const chatMessages = document.getElementById("chat-messages")
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${message.isUser ? "user-message" : "bot-message"}`

  messageDiv.innerHTML = `
        <div class="message-content">${message.text}</div>
        <div class="message-time">${message.timestamp.toLocaleTimeString()}</div>
    `

  chatMessages.appendChild(messageDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

// Establecer tiempo inicial
function setInitialTime() {
  const initialTime = document.getElementById("initial-time")
  if (initialTime) {
    initialTime.textContent = new Date().toLocaleTimeString()
  }
}

// Animaciones al hacer scroll
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".fade-in")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("fade-in")
    }
  })
}

window.addEventListener("scroll", handleScrollAnimations)
