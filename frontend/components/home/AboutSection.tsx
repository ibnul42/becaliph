import React from "react";
import Image from "next/image";
import Button from "../Button";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            About Becaliph
          </h2>
          <p className="leading-relaxed mb-4">
            We’re providing services to Startups, Enterprises and Agencies.
            Becaliph delivers exceptional development services, innovative
            marketing strategies, and compelling visual narratives that elevate
            your brand into a captivating story that leaves a lasting
            impression.
          </p>
          <p className="leading-relaxed mb-6">
            At Becaliph, we believe that the secret to being a memorable...
          </p>
          <Button bgColor="bg-[#053C5E]" hoverColor="hover:bg-[#053C5E]/90">
            Learn More
          </Button>
        </div>

        {/* Right image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/assets/hero-about.png" // replace with your illustration
            alt="About Illustration"
            width={400}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
