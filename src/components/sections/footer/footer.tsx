import React from "react";
import Image from "next/image";

export function Footer() {
  const contactInfo = [
    { label: "Work inquires:", email: "work@vaultflow.com" },
    { label: "PR and speaking:", email: "press@vaultflow.com" },
    { label: "New business:", email: "newbusiness@vaultflow.com" },
  ];

  const socialLinks = ["Twitter", "Instagram", "Tik Tok"];

  return (
    <footer className="flex flex-col items-center px-5 py-8 md:py-16 relative self-stretch w-full flex-[0_0_auto] bg-[#0b0121]">
      <div className="items-start p-4 md:p-6 flex flex-col w-full max-w-[1200px] relative flex-[0_0_auto]">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
          
          {/* Section Contact et Careers */}
          <div className="flex-col items-start gap-6 md:gap-10 flex-1 grow flex relative w-full md:w-auto">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-[normal]">
                Contact
              </h3>

              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="relative self-stretch [font-family:'Montserrat',Helvetica] font-light text-white text-base md:text-lg tracking-[-0.18px] leading-[normal] break-all md:break-normal"
                  >
                    {contact.label} {contact.email}
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-[normal]">
                Careers
              </h3>

              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-light text-white text-base md:text-lg tracking-[-0.18px] leading-[normal] break-all md:break-normal">
                Careers@vaultflow.com
              </div>
            </div>
          </div>

          {/* Section Address et Social */}
          <div className="flex-col items-start gap-6 md:gap-10 flex-1 grow flex relative w-full md:w-auto">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-[normal]">
                Address
              </h3>

              <div className="flex w-full md:w-[210px] items-start relative flex-[0_0_auto]">
                <address className="relative flex-1 mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-light text-white text-base md:text-lg tracking-[-0.18px] leading-[normal] not-italic">
                  398 11th Street, Floor 2<br />
                  San Francisco, CA 94103
                </address>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-xl md:text-2xl tracking-[-0.24px] leading-[normal]">
                Social
              </h3>

              <nav className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="relative w-fit [font-family:'Montserrat',Helvetica] font-light text-white text-base md:text-lg tracking-[-0.18px] leading-[normal] hover:opacity-80 transition-opacity"
                  >
                    {social}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Section Logo */}
          <div className="w-full md:w-[180px] items-center justify-center md:items-end  md:justify-end self-stretch flex relative mt-6 md:mt-0">
            <div className="flex w-[138px] h-[22px] items-end justify-end gap-2.5 relative">
              <div className="relative w-[140px] h-[22px] mr-[-2.00px]">
                <div className="absolute top-0 left-0">
                  <Image src="/nav.png" alt='Logo' width={400} height={300}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative w-full mt-6 md:mt-0 md:absolute md:bottom-6 md:left-6 [font-family:'Montserrat',Helvetica] font-light text-[#929292] text-sm md:text-base tracking-[-0.16px] leading-[normal] text-center md:text-left">
          © 2023 Vaultflow. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};