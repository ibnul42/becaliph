import React from "react";
import TestimonialCard from "./TestimonialCard";
import Button from "../Button";

const testimonials = [
  {
    name: "Agnes Lackman",
    role: "Lead Creative Coordinator",
    image: "/profile.jpg", // replace with real path
    text: "If you are a business owner, and you don’t have Xolar in your toolkit just yet, I highly recommend that you check it out.",
  },
  {
    name: "Agnes Lackman",
    role: "Lead Creative Coordinator",
    image: "/profile.jpg",
    text: "If you are a business owner, and you don’t have Xolar in your toolkit just yet, I highly recommend that you check it out.",
  },
  {
    name: "Agnes Lackman",
    role: "Lead Creative Coordinator",
    image: "/profile.jpg",
    text: "If you are a business owner, and you don’t have Xolar in your toolkit just yet, I highly recommend that you check it out.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          What people say about us
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 container mx-auto px-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button bgColor="bg-[#053C5E]" hoverColor="hover:bg-[#053C5E]/90">
          All Review
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
