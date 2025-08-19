import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection () {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 relative w-full bg-[#0b0121]">
      <div className="container-responsive">
        <Card className="items-center p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl shadow-[inset_0px_0.5px_0px_#ffffff80,0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)] flex flex-col w-full max-w-5xl mx-auto border-0">
          <CardContent className="flex flex-col items-center gap-6 sm:gap-8 relative p-0 text-center">
            <h1 className="font-bold text-[#ebebeb] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight max-w-4xl">
              Our powerful analytics provides invaluable insights.
            </h1>

            <p className="font-normal text-[#ebebeb] text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
              Unlock the power of data with our cutting-edge analytics product.
              Get instant insights with our user-friendly Analytics Dashboard, and
              take advantage of our innovative digital credit tokens to reward
              your customers and incentivize engagement.
            </p>

            <Button
              variant="outline"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-solid border-[#ebebeb] bg-transparent hover:bg-[#ebebeb] hover:text-[#0b0121] h-auto transition-all duration-300 mt-4"
            >
              <span className="text-[#ebebeb] hover:text-[#0b0121] font-normal text-base sm:text-lg whitespace-nowrap transition-colors">
                Download the app
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};