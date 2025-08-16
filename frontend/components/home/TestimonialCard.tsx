// components/TestimonialCard.tsx
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
  stars?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  text,
  stars = 5,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center max-w-md mx-auto">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-16 h-16 rounded-full mx-auto -mt-12 border-4 border-white shadow"
      />
      <h3 className="mt-4 font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{role}</p>
      <div className="flex justify-center my-2">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">
            ★
          </span>
        ))}
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default TestimonialCard;
