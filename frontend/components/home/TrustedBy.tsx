import React from "react";
import Image from "next/image";

const logos = [
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
  "/assets/pinterest.svg",
]; // replace with real logos

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-white w-screen overflow-hidden">
      <h3 className="text-center text-2xl md:text-3xl font-semibold mb-8">
        Trusted by Ambitious Startups, Brands & Agencies
      </h3>

      <div className="relative w-full overflow-hidden">
        <div className="marquee flex gap-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={120}
                className="w-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
              <p className="text-gray-300 font-bold">Pinterest</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
