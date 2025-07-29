import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nuestro Equipo - Estos somos nosotros",
  description:
    "Conoce a nuestro increíble equipo de 5 personas con pasiones únicas y descubre nuestros productos de comida asiática y equipamiento de senderismo.",
  keywords: "equipo, perfiles, comida asiática, senderismo, productos",
  authors: [{ name: "Nuestro Equipo" }],
  openGraph: {
    title: "Nuestro Equipo - Estos somos nosotros",
    description: "Conoce a nuestro increíble equipo y descubre nuestros productos únicos",
    type: "website",
    locale: "es_ES",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
