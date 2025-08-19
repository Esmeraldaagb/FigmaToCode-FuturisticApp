import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroStack() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 sm:gap-16 lg:gap-20 
      pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 w-full min-h-screen overflow-hidden">

      {/* Image en background */}
      <Image
        src="/hero.jpg"
        alt="Background Hero"
        fill
        className="absolute inset-0 object-cover object-center -z-10"
        priority
      />

      {/* Contenu */}
      <div className="container-responsive relative z-10 pt-18">
        <div className="flex flex-col items-center gap-10 sm:gap-16 lg:gap-20 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
            <Badge
              variant="outline"
              className="flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#ffffff4c] bg-transparent hover:bg-transparent max-w-full"
            >
              <span className="font-normal text-[#f2f4f8] text-sm sm:text-base lg:text-lg text-center">
                We just raised $20M in Series B. Learn more
              </span>
            </Badge>

            <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
              <h1 className="bg-gradient-to-b from-[#ececec] to-[#ececec00] bg-clip-text text-transparent font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight tracking-tight px-4">
                Modern analytics
                <br />
                for the modern world
              </h1>

              <div className="max-w-2xl mx-auto px-4">
                <p className="font-normal text-[#ebebeba6] text-base sm:text-lg lg:text-xl text-center leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 w-full max-w-md sm:max-w-none">
              <Button className="w-full sm:w-auto gap-2 px-6 py-3 bg-[#ebebeb] rounded-full h-auto hover:bg-[#ebebeb]/90 transition-colors">
                <span className="text-[#0b081c] font-normal text-base">
                  Download the app
                </span>
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-solid border-[#ebebeb] h-auto bg-transparent hover:bg-[#ebebeb]/10 transition-colors"
              >
                <span className="font-normal text-[#ebebeb] text-base">
                  Talk to an expert
                </span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center relative w-full h-64 sm:h-80 lg:h-96 xl:h-[472px] overflow-hidden">
            <Image
              src="/Image Wrapper.png"
              alt="Analytics Dashboard Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
