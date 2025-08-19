import React from "react";
import  Image from "next/image";
export function Footer () {
  const contactInfo = [
    { label: "Work inquires:", email: "work@vaultflow.com" },
    { label: "PR and speaking:", email: "press@vaultflow.com" },
    { label: "New business:", email: "newbusiness@vaultflow.com" },
  ];

  const socialLinks = ["Twitter", "Instagram", "Tik Tok"];

  return (
    <footer className="flex flex-col items-center px-5 py-16 relative self-stretch w-full flex-[0_0_auto] bg-[#0b0121]">
      <div className="items-start p-6 flex flex-col w-full max-w-[1200px] relative flex-[0_0_auto]">
        <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start gap-10 flex-1 grow flex relative">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-2xl tracking-[-0.24px] leading-[normal]">
                Contact
              </h3>

              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="relative self-stretch [font-family:'Montserrat',Helvetica] font-light text-white text-lg tracking-[-0.18px] leading-[normal]"
                  >
                    {contact.label} {contact.email}
                  </div>
                ))}
              </div>
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-2xl tracking-[-0.24px] leading-[normal]">
                Careers
              </h3>

              <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-light text-white text-lg tracking-[-0.18px] leading-[normal]">
                Careers@vaultflow.com
              </div>
            </div>

            <div className="relative w-fit [font-family:'Montserrat',Helvetica] font-light text-[#929292] text-base tracking-[-0.16px] leading-[normal]">
              © 2023 Vaultflow. All Rights Reserved.
            </div>
          </div>

          <div className="flex-col items-start gap-10 flex-1 grow flex relative">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-2xl tracking-[-0.24px] leading-[normal]">
                Address
              </h3>

              <div className="flex w-[210px] items-start relative flex-[0_0_auto]">
                <address className="relative flex-1 mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-light text-white text-lg tracking-[-0.18px] leading-[normal] not-italic">
                  398 11th Street, Floor 2<br />
                  San Francisco, CA 94103
                </address>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-2xl tracking-[-0.24px] leading-[normal]">
                Social
              </h3>

              <nav className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="relative w-fit [font-family:'Montserrat',Helvetica] font-light text-white text-lg tracking-[-0.18px] leading-[normal] hover:opacity-80 transition-opacity"
                  >
                    {social}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="w-[180px] items-end justify-end self-stretch flex relative">
            <div className="flex w-[138px] h-[22px] items-end justify-end gap-2.5 relative">
              <div className="relative w-[140px] h-[22px] mr-[-2.00px]">
                <div className="absolute top-0 left-0">
                    <Image src="/nav.png" alt='Logo' width={400} height={300}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
