# Nuestro Equipo - Website (Vanilla JS)

Una página web moderna y minimalista creada con HTML, CSS y JavaScript vanilla que presenta los perfiles de nuestro equipo de 5 personas, junto con una galería de productos y un chatbot integrado.

## 🚀 Características

- **100% Vanilla**: HTML, CSS y JavaScript puro (sin frameworks)
- **Diseño Minimalista**: Colores cálidos y tipografía elegante
- **Perfiles del Equipo**: 5 perfiles detallados con biografías y hobbies
- **Galería de Productos**: Comida asiática y equipamiento de senderismo
- **Chatbot Integrado**: Asistente virtual interactivo
- **Responsive Design**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones

## 🛠️ Tecnologías Utilizadas

- **HTML**: Estructura de la página
- **CSS**: Estilos y diseño visual
- **JavaScript**: Funcionalidad interactiva

## 📦 Instalación y Desarrollo

- No necesita Node.js
- No necesita npm install
- No necesita build process
- Solo abre `index.html` en tu navegador

## 🚀 Despliegue

### Vercel (Recomendado)
1. Descarga todos los archivos
2. Sube la carpeta a GitHub
3. Conecta tu repositorio en [vercel.com](https://vercel.com)
4. ¡Listo! Se desplegará automáticamente

### Netlify
1. Descarga los archivos
2. Arrastra la carpeta completa a [netlify.com](https://netlify.com)
3. ¡Desplegado instantáneamente!

### GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará disponible en `username.github.io/repository-name`

### Cualquier Hosting
1. Descarga los archivos
2. Sube todos los archivos (.html, .css, .js) a tu hosting
3. ¡Funciona inmediatamente!

## 📁 Estructura de Archivos

\`\`\`
├── index.html          # Página principal
├── styles.css          # Todos los estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
\`\`\`

## ✨ Funcionalidades

### Navegación
- Menú responsive con hamburguesa en móviles
- Scroll suave entre secciones
- Navegación fija en la parte superior

### Perfiles del Equipo
- 5 perfiles con imágenes, biografías y hobbies
- Animaciones de entrada escalonadas
- Tarjetas con efectos hover

### Galería de Productos
- 8 productos categorizados
- Imágenes de alta calidad de Unsplash
- Efectos hover y transiciones suaves

### Chatbot
- Interfaz de chat interactiva
- Respuestas automáticas inteligentes
- Historial de conversación
- Timestamps en mensajes

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
\`\`\`css
:root {
    --thalo-green: #004d40;
    --terracotta: #d2691e;
    --forest-light: #66bb6a;
    --forest-dark: #2e7d32;
    --warm-cream: #faf7f2;
}
\`\`\`

### Modificar Contenido
- **Perfiles**: Edita el array `teamMembers` en `script.js`
- **Productos**: Modifica el array `products` en `script.js`
- **Chatbot**: Personaliza la función `getBotResponse()` en `script.js`

### Cambiar Imágenes
- Las imágenes actuales son de Unsplash
- Reemplaza las URLs en los arrays de datos
- O sube tus propias imágenes y cambia las rutas

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Móviles y tablets
- ✅ Todos los tamaños de pantalla
- ✅ Sin dependencias externas (excepto fuentes e iconos)

## 🔧 Sin Configuración

- No necesita Node.js
- No necesita npm install
- No necesita build process
- Solo abre `index.html` en tu navegador

¡Tu página web está lista para usar! 🎉
