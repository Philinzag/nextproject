import Image from "next/image";
import React from "react";

export const Hero = () => {
  const startDate = new Date(2015, 0, 1); // January 1, 2015
  const currentDate = new Date();
  const monthsOfExpe = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
  const yearsOfExpe = Math.floor(monthsOfExpe / 12);
  const monthsRemainder = monthsOfExpe % 12;
  const experienceText = monthsRemainder > 0 ? `${yearsOfExpe} years and ${monthsRemainder} months` : `${yearsOfExpe} years`;
  return (
    <div
      className="h-[80vh] w-full"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=1380&t=st=1695304187~exp=1695304787~hmac=fb61db3c31ca1c85ad89dfaacab44e089ffb1b9c8945437e089ca42ae14ab64b')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="h-full w-full flex bg-gradient-to-tr justify-center items-end from-[#171E38]/80 via-[#171E38]/80 to-[#2D375C]/70">
        {/* Text */}
        <div className="h-[60vh] w-1/3 space-y-10 pt-12">
          <h1 className=" text-4xl text-white">
            🥷 Am <span className="italic  text-yellow-500 font-semibold">Phil</span>
          </h1>
          <p className="text-gray-100 text-2xl font-thin leading-relaxed tracking-wider">
            {`Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. I have ${experienceText} of experience in Figma.`}
          </p>
        </div>
        {/* Image */}
        <div className="relative h-[64vh] w-1/3">
          {/* Import Image component from next JS */}
          <Image src={"/me.png"} fill alt="me" priority={true} className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
};