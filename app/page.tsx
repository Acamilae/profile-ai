import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TeamProfiles } from "@/components/team-profiles"
import { ProductGallery } from "@/components/product-gallery"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-cream font-elegant">
      <Navigation />
      <Hero />
      <TeamProfiles />
      <ProductGallery />
      <Chatbot />
      <Footer />
    </div>
  )
}
