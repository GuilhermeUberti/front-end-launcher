import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GameSection from '@/components/GameSection'
import Footer from '@/components/Footer'
import WhyGiftPlay from '@/components/WhyGiftPlay'
import LauncherPackSection from '@/components/LauncherPackSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <GameSection />
      <LauncherPackSection />
      <WhyGiftPlay />
      <Footer />
    </main>
  )
}
