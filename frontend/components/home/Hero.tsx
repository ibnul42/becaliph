import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-t from-[#053C5E] via-[#3E869E] to-[#053C5E] text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-10">
        {/* Left: Globe Illustration */}
        <div className="flex justify-center">
          <Image
            src="/assets/hero.png" // replace with your actual asset
            alt="Digital Expertise"
            width={400}
            height={400}
            className="max-w-full"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left">
          <div className="flex flex-col gap-1 font-semibold text-2xl md:text-3xl leading-snug">
            <p className="md:text-4xl">Your Vision, </p>
            <p>
              <span>Our Digital</span>{" "}
              <span className="text-3xl md:text-4xl lg:text-6xl font-bold">Expertise.</span>
            </p>
            <p>Let’s build your dream</p>
            <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold ml-16">
              into reality.
            </span>
          </div>

          <p className="text-gray-200 mt-6 max-w-md">
            <span>Becaliph’s designs and services help your brand stand out with bold, strategic visuals.</span>
            <span className="flex gap-1">
              Have a look on Becaliph
              <Link href="/portfolio" className="underline text-[#ED9E15]">
                 Portfolio
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
