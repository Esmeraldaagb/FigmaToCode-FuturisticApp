'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Features" },
    { label: "Pricing" },
    { label: "About us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-center px-4 sm:px-6 py-4 bg-[#0b0121] z-50 shadow-md">
      <div className="container-responsive flex items-center justify-between w-full">
        {/* Logo */}
        <div className="relative justify-start">
          <Image
            src="/nav.png"
            alt="Vaultflow"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>

        {/* Desktop navigation */}
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

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-[#ebebeb] ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0b0121] border-t border-[#ebebeb]/20 flex flex-col justify-between h-[calc(100vh-64px)]">
            {/* Haut du menu */}
            <div className="container-responsive py-4">
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


              </div>
            </div>

            <div className="p-4 ">
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
        )}
      </div>
    </nav>
  );
}
