import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GameSection from '@/components/GameSection'
import Footer from '@/components/Footer'
import WhyGiftPlay from '@/components/WhyGiftPlay'
import PromoPackSection from '@/components/PromoPackSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <GameSection />
      <PromoPackSection />
      <WhyGiftPlay />
      <Footer />
    </main>
  )
}
