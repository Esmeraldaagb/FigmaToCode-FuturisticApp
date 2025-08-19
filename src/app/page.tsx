import { Footer } from "@/components/sections/footer/footer"
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
          <Footer/>
      </div>
      
    </main>
  )
}