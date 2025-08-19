'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function NavbarSection (){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: "Features" },
    { label: "Pricing" },
    { label: "About us" },
  ];

  return (
    <nav className="flex items-center justify-center px-4 sm:px-6 py-4 relative w-full bg-[#0b0121] z-50">
      <div className="container-responsive">
        <div className="flex items-center justify-between">

          <div className="flex ">
            <div className="flex  gap-2">
              <div className=" relative">
                <Image
                  src="/nav.png"
                  alt="Vaultflow"
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
            
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="px-3 py-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="font-normal text-[#ebebeb] text-base">
                  {item.label}
                </div>
              </div>
            ))}

            <Button className="gap-2 px-5 py-2 bg-[#ebebeb] rounded-full border border-solid h-auto hover:bg-[#d4d4d4] transition-colors">
              <span className="font-normal text-[#0b081c] text-sm sm:text-base whitespace-nowrap">
                Download the app
              </span>
            </Button>

            <Button
              variant="outline"
              className="gap-2 px-5 py-2 rounded-full border border-solid border-[#ebebeb] h-auto bg-transparent hover:bg-[#ebebeb]/10 transition-colors"
            >
              <span className="font-normal text-[#ebebeb] text-sm sm:text-base whitespace-nowrap">
                Talk to an expert
              </span>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-[#ebebeb]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0b0121] border-t border-[#ebebeb]/20 py-4">
            <div className="container-responsive">
              <div className="flex flex-col gap-4">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="font-normal text-[#ebebeb] text-base">
                      {item.label}
                    </div>
                  </div>
                ))}
                
                <div className="flex flex-col gap-3 pt-4">
                  <Button className="w-full gap-2 px-5 py-3 bg-[#ebebeb] rounded-full h-auto hover:bg-[#d4d4d4] transition-colors">
                    <span className="font-normal text-[#0b081c] text-base">
                      Download the app
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full gap-2 px-5 py-3 rounded-full border border-solid border-[#ebebeb] h-auto bg-transparent hover:bg-[#ebebeb]/10 transition-colors"
                  >
                    <span className="font-normal text-[#ebebeb] text-base">
                      Talk to an expert
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};