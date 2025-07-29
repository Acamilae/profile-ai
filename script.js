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

  if (input.includes("equipo") || input.includes("miembros")) {
    return "Nuestro equipo está formado por 5 personas increíbles: Camila, Rocío, Karol, Ricardo y Andrea. Cada uno aporta sus talentos únicos al grupo."
  }
  if (input.includes("productos") || input.includes("comida") || input.includes("senderismo")) {
    return "Ofrecemos una selección de comida asiática auténtica y equipamiento de senderismo de alta calidad. ¿Te interesa alguna categoría en particular?"
  }
  if (input.includes("contacto") || input.includes("información")) {
    return "Puedes encontrar más información sobre cada miembro del equipo en la sección de perfiles. ¿Hay algo específico que te gustaría saber?"
  }
  if (input.includes("hola") || input.includes("hi")) {
    return "¡Hola! Me alegra saludarte. Estoy aquí para ayudarte con cualquier pregunta sobre nuestro equipo y productos."
  }

  return "Gracias por tu mensaje. Estoy aquí para ayudarte con información sobre nuestro equipo y productos. ¿Hay algo específico que te gustaría saber?"
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
