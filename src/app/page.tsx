import { Features } from "@/components/sections/features/features"
import { Footer } from "@/components/sections/footer/footer"
import { Hero } from "@/components/sections/hero/hero"
import { HeroStack } from "@/components/sections/heroStack/heroStack"
import { LogoTitle } from "@/components/sections/logoTitle/logoTitle"
import { Navbar } from "@/components/sections/navBar/navBar"

export default function Home() {
  return (
    <main className="flex flex-col w-full relative min-h-screen">
      <Navbar />
      <div className="">
          <HeroStack/>
          <LogoTitle/>
          <Features/>
          <Hero/>
          <Footer/>
      </div>
      
    </main>
  )
}