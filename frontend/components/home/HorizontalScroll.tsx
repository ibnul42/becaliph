"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

type Card = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Design Solution",
    description:
      "From graphic design to full-scale branding — we turn visions into visuals. Bring Your Ideas to Life.",
    buttonText: "Explore",
  },
  {
    id: 2,
    title: "Website",
    description:
      "Modern, responsive, and user-focused websites that make a powerful first impression. Build Your Digital Presence.",
    buttonText: "Explore",
  },
  {
    id: 3,
    title: "Content Writing",
    description:
      "Words that work for your brand. Our content is tailored to engage your audience, boost SEO, and drive action across digital platforms.",
    buttonText: "Explore",
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "If you are looking to fuel your growth with a consistent flow of qualified leads, our digital marketing services are for your assistance.",
    buttonText: "Explore",
  },
  {
    id: 5,
    title: "Brand Value Creation",
    description:
      "Long-term success starts with a strong brand. Our digital services, efforts focus on building sustainable brand value.",
    buttonText: "Explore",
  },
  {
    id: 6,
    title: "Ecommerce Support",
    description:
      "End-to-end solutions to boost your online store. We handle product listings, image editing, customer support, Accounting and more — so you can focus on sales.",
    buttonText: "Explore",
  },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      const children = Array.from(container.children);

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const el = child as HTMLElement;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;

        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="overflow-hidden py-10 max-w-screen">
      <div
        ref={containerRef}
        className="flex overflow-x-auto custom-scrollbar px-4"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={clsx(
              "shrink-0 w-[300px] md:w-[450px] rounded-2xl flex gap-5 bg-white px-2 py-4 md:px-4 md:py-4 lg:px-6 lg:py-6 shadow-lg transition-all duration-300 mb-4",
              index === activeIndex
                ? "scale-105 opacity-100"
                : "scale-90 opacity-40",
            )}
          >
            <section className="w-68 md:w-80 flex items-center justify-center rounded-lg">
                <div className="aspect-square w-full h-auto bg-secondary-800 rounded-xl"></div>
            </section>
            <section className="space-y-2">
              <h3 className="text-lg md:text-2xl font-medium">{card.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 line-clamp-4 md:line-clamp-3">{card.description}</p>
              <Link
                href="/"
                className="bg-primary-700 hover:bg-primary-800 transition-all rounded-full px-6 py-2 text-xs text-white"
              >
                {card.buttonText}
              </Link>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
