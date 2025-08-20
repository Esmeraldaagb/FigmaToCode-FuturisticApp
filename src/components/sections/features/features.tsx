import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Radar,ChartLine,Code } from "lucide-react";

const featuresData = [
  {
    id: 1,
    icon: <ChartLine className="text-white"/>,
    title: "Analytics Dashboard",
    description:
      "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.",
    linkText: "View dashboard",
    shadowColor: "shadow-[0px_0px_36.45px_#591dddbf]",
    bgColor:"bg-[#591dddbf]"
  },
  {
    id: 2,
       icon: <Radar className="text-white"/>,
    title: "Digital Credit Tokens",
    description:
      "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
    linkText: "View tokens",
    shadowColor: "shadow-[0px_0px_36.45px_#9525c9bf]",
    bgColor:"bg-[#9525c9bf]"

  },
];

export function Features () {
  return (
    <section className="flex flex-col items-center gap-20 px-5 py-0 relative  bg-[#0b0121] w-full flex-[0_0_auto]">
      <header className="flex flex-col w-full max-w-[470px] items-center gap-6 px-0 py-6 relative flex-[0_0_auto] ">
        <div className="w-full max-w-[450px] items-start justify-center gap-2.5 p-2.5 flex relative flex-[0_0_auto]">
          <h2 className="relative flex-1 mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-[#ebebeb] text-3xl md:text-5xl text-center tracking-[-0.32px] leading-[44px] md:leading-[57.6px]">
            Features that work for your future.
          </h2>
        </div>

        <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#ebebeb] text-lg text-center tracking-[0] leading-[28.8px]">
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </p>
      </header>

      <div className="flex flex-col w-full max-w-[1200px] items-start gap-20 p-2.5 relative flex-[0_0_auto]">
        {/* Première rangée de features */}
        <div className="flex flex-col md:flex-row items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center relative flex-1 grow w-full"
            >
              <Card className="gap-4 p-[40px] md:p-[60px] rounded-[20px] shadow-[inset_0px_0.5px_0px_#ffffff80,0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c] bg-[#0b0121]  border-0 relative self-stretch w-full flex-[0_0_auto]">
                <CardContent className="flex flex-col items-start p-0">
                  <div
                    className={`flex items-center justify-center ${feature.shadowColor} ${feature.bgColor} rounded-lg  w-[50px] h-[50px] relative`}
                  >
                    {feature.icon}
                  </div>

                  <div className="gap-2.5 flex flex-col items-start relative mt-4 w-full">
                    <h3 className="relative  mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-[#ebebeb] text-[24px] md:text-[32px] tracking-[-0.16px] leading-[32px] md:leading-[41.6px]">
                      {feature.title}
                    </h3>

                    <p className="relative  [font-family:'Montserrat',Helvetica] font-normal text-[#ebebeb] text-sm tracking-[0] leading-[21px]">
                      {feature.description}
                    </p>

                    <div className="flex  w-full items-start gap-4 pt-4 pb-0 px-0 relative">
                      <Button
                        variant="link"
                        className="inline-flex items-center justify-center gap-2 relative p-0 h-auto"
                      >
                        <span className="relative w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-6 underline whitespace-nowrap">
                          {feature.linkText}
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Card de collaboration de code*/}
        <Card className="flex flex-col lg:flex-row items-start gap-4 p-[40px] md:p-[60px] relative  w-full flex-[0_0_auto] rounded-[20px] shadow-[inset_0px_0.5px_0px_#ffffff80,0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c] bg-[#0b0121]  border-0">
          <CardContent className="flex flex-col lg:flex-row items-start gap-4 p-0 w-full">
            <div className="flex-col w-full lg:w-[460px] items-start gap-6 flex relative">
              <div className="shadow-[0px_0px_36.45px_#c925abbf] flex w-[50px] h-[50px] bg-[#C925AB] rounded-lg items-center justify-center relative">
                <Code className="text-white"/>
              </div>

              <div className="gap-2.5 flex flex-col items-start relative  w-full flex-[0_0_auto]">
                <h3 className="relative  mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-[#ebebeb] text-[24px] md:text-[32px] tracking-[-0.16px] leading-[32px] md:leading-[41.6px]">
                  Code collaboration
                </h3>

                <p className="relative  [font-family:'Montserrat',Helvetica] font-normal text-[#ebebeb] text-sm tracking-[0] leading-[21px]">
                  Our advanced code synchronization technology ensures that your
                  data is always up-to-date and accurate, no matter where {"it's"}
                  coming from. Whether {"you're"} integrating data from multiple
                  sources or working with a team of developers, our
                  synchronization technology makes it easy to collaborate and
                  ensure that your data is consistent and reliable.
                </p>

                <div className="inline-flex items-start gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
                  <Button variant="link" className="p-0 h-auto">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-6 underline whitespace-nowrap">
                      View code collaboration
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-col items-end flex-1 grow flex relative w-full lg:w-auto mt-6 lg:mt-0">
              <div className="flex flex-col w-full lg:w-[467px] items-start relative flex-[0_0_auto] rounded-[20px] shadow-[0px_0px_0px_1.17px_#ffffff1a,0px_0px_0px_2.33px_#0000000d,0px_-2px_40px_#bb9bff26,0px_-2px_10px_#e9dfff4c,inset_0px_0.58px_0px_#ffffff80,inset_0px_0.5px_0px_#ffffff80]">
                <Image
                  className="relative w-full lg:w-[467px] h-[200px] md:h-[300px] rounded-[20px] object-cover"
                  alt="Image"
                  src="/Image.png"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};