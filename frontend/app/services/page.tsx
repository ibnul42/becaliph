import Image from "next/image";
import React from "react";
import cn from "clsx";
import Link from "next/link";

const items = [
  {
    title: "Marketing",
    desc: "If you Looking for fuel your growth with a consistent flow of qualified leads Our digital marketing services are for your assistance.",
    image: "/assets/marketing.png",
  },
  {
    title: "E-commerce support",
    desc: "End-to-end solutions to boost your online store. We handle product listings, image editing, customer support, Accounting and more.",
    image: "/assets/ecommerce.png",
  },
  {
    title: "Design Solution",
    desc: "Get ready to attract and inspire both current and future customers with our vibrant and engaging graphic designs! Our talented team of designers is here to create custom graphics that truly showcase the unique value and personality of your business and brand. Let’s work together to bring your vision to life!",
    image: "/assets/design.png",
  },
  {
    title: "Brand Value Creation",
    desc: "Long-term success starts with a strong brand. Our digital services, efforts focus on building sustainable brand value.",
    image: "/assets/brand.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "Content Writing",
    desc: "Words that work for your brand. Our content is tailored to engage your audience, boost SEO, and drive action across digital platforms",
    image: "/assets/content.png",
  },
  {
    title: "web development",
    desc: "Modern, responsive, and user-focused websites that make a powerful first impression. Build Your Digital Presence.",
    image: "/assets/web.png",
  },
  {
    title: "Video Editing",
    desc: "Bring your story to your Audience with sleek, professional editing that captivates and connects. Ideal for promos, ads, social media, and more.",
    image: "/assets/video.png",
  },
];

export default function page() {
  return (
    <div className="container mx-auto py-5 px-3">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-primary-900 text-center font-semibold">
        Your solution starts here
      </h1>
      <p className="text-sm md:text-lg text-primary-900 text-center">
        Explore our services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 py-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "px-2 lg:px-3 py-3 lg:py-5 flex gap-2 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.1)] my-1 rounded-lg",
            )}
          >
            <div className="p-2 flex rounded-lg overflow-hidden relative w-20 md:w-25 lg:w-30 xl:w-40 shrink-0 items-center justify-center group">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover object-center  transition-all group-hover:scale-105"
              />
            </div>
            <div className="space-y-2 flex flex-col justify-between">
              <section className="space-y-2">
                <p className="text-lg md:text-xl font-semibold capitalize">
                  {item.title}
                </p>
                <p className="text-[#545454] text-xs lg:text-sm line-clamp-4">
                  {item.desc}
                </p>
              </section>
              <Link
                href={`/services/${item.title.toLocaleLowerCase()}`}
                className="w-full max-w-80 text-center bg-primary-900 hover:bg-primary-800 transition-all cursor-pointer py-2 rounded-full text-white text-sm lg:text-base uppercase font-semibold"
              >
                explore now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
