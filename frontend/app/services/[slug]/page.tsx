import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import cn from "clsx";

const services = [
  { title: "Marketing", slug: "marketing", desc: "..." },
  { title: "E-commerce support", slug: "ecommerce-support", desc: "..." },
  // same data (or import from a shared file)
];

const items = [
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
  {
    title: "UI/UX Design",
    desc: "Whether it's a website, app, or dashboard – I design intuitive, user-focused interfaces that look great and work even better.",
    image: "/assets/ui.png",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-semibold text-primary-900">
          Design Solution
        </h1>
        <p className="uppercase text-lg font-medium">
          Designs that speak for you brand
        </p>
        <p className="text-primary-900 text-sm">
          Our design solutions are all about bringing your brand to life in a
          fun and engaging way! We focus on creating visuals that truly reflect
          who you are and leave a memorable mark. Whether it’s logos, marketing
          materials, or social media graphics, we’re here to help ensure that
          every piece reflects your unique voice, values, and vision – all while
          keeping things consistent and professional. Let’s work together to
          make something fantastic!
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "p-4 flex gap-2 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.1)] my-1 rounded-lg"
              //   {
              //     "col-span-2 gap-10":
              //       item.title === "Design Solution" ||
              //       item.title === "Video Editing",
              //   }
            )}
          >
            <div className="flex items-center rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="rounded-lg h-auto w-full"
              />
            </div>
            <div className="space-y-2 flex flex-col justify-between">
              <section className="space-y-2">
                <p className="text-2xl font-semibold capitalize">
                  {item.title}
                </p>
                <p className="text-[#545454] text-sm line-clamp-4">
                  {item.desc}
                </p>
              </section>
              <Link
                // href={`/services/${item.title.toLocaleLowerCase()}`}
                href={`/services/marketing`}
                className="w-full max-w-80 text-center bg-primary-900 hover:bg-primary-800 transition-all cursor-pointer py-2 rounded-full text-white uppercase font-semibold"
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
