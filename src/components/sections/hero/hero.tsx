import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="flex flex-col items-center px-5 py-[40px] md:py-[60px] relative self-stretch w-full flex-[0_0_auto] bg-[#0b0121]">
      <Card className="items-center gap-4 p-[30px] md:p-[60px] rounded-[20px] shadow-[inset_0px_0.5px_0px_#ffffff80,0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c] bg-[#0b0121] flex flex-col w-full max-w-[1200px] relative flex-[0_0_auto] border-0">
        <CardContent className="flex flex-col w-full max-w-[768px] items-center gap-6 relative flex-[0_0_auto] p-0">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-bold text-[#ebebeb] text-3xl sm:text-4xl lg:text-5xl text-center tracking-[0] leading-[36px] sm:leading-[48px] lg:leading-[57.6px]">
            Our powerful analytics provides invaluable insights.
          </h1>
          
          <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#ebebeb] text-base md:text-lg text-center tracking-[0] leading-[24px] md:leading-[27px]">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.
          </p>
          
          <Button
            variant="outline"
            className="px-6 py-3 rounded-[60px] border border-solid border-[#ebebeb] inline-flex items-center justify-center relative flex-[0_0_auto] bg-transparent hover:bg-[#ebebeb] hover:text-[#0b0121] h-auto transition-colors duration-200"
          >
            <span className="text-[#ebebeb] relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0b0121] transition-colors duration-200">
              Download the app
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};