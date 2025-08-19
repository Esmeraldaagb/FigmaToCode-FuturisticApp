import Image from "next/image";
import React from "react";

const img = [
  { id: 1, img: "/l1.png" },
  { id: 2, img: "/l2.png" },
  { id: 3, img: "/l3.png" },
  { id: 4, img: "/l4.png" },
  { id: 5, img: "/l5.png" },
  { id: 6, img: "/l6.png" },
  { id: 7, img: "/l7.png" },
];

export function LogoTitle() {
  return (
    <section className="flex flex-col gap-10 px-5 py-[60px] bg-[#0b0121] w-full items-center">
      <p className="text-center [font-family:'Montserrat',Helvetica] font-normal text-xl leading-[26px] text-[#ffffffcc]">
        Trusted by teams at over <span className="font-medium">1,000</span> of
        the world&apos;s leading organizations
      </p>

     
      <div className="flex flex-wrap justify-center items-center gap-10">
        {img.map((item) => (
          <Image
            key={item.id}
            alt="Company logos"
            src={item.img}
            width={100}
            height={50}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
