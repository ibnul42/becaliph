"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import HomeIcon from "@/components/icons/HomeIcon";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import ImageIcon from "@/components/icons/ImageIcon";
import UserIcon from "@/components/icons/UserIcon";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="w-full shadow-sm bg-white z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Logo
          src="/assets/logo.svg"
          width={40}
          height={40}
          showText={true}
          text="BECALIPH"
          textSize="text-xl"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-[#ED9E15] font-medium"
                  : "text-gray-700 hover:text-[#ED9E15]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href="/signup"
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100"
          >
            SIGN UP
          </Link>
          <Link
            href="/login"
            className="bg-[#ED9E15] text-white px-6 py-2 rounded-full hover:bg-[#ED9E15]/85"
          >
            LOG IN
          </Link>
        </div>
      </div>

      <MobileNavigation />
    </header>
  );
}

const MobileNavigation = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-primary-900 h-14 rounded-t-3xl shadow-2xl">
        <div className="flex justify-between items-center h-full text-white px-4">
          {/* Icon 1: Home */}
          <button className="flex flex-col items-center p-2">
            <HomeIcon size={25} className="transition-colors duration-300" />
          </button>

          {/* Icon 2: Briefcase */}
          <button className="flex flex-col items-center p-2">
            <BriefcaseIcon
              size={25}
              className="transition-colors duration-300"
            />
          </button>

          {/* Icon 3 (Center): Envelope - The Popping Element
           */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
            <button
              className="w-20 h-20 rounded-full flex items-center justify-center 
                         bg-white border-[5px] border-primary-900 text-primary-900 
                         shadow-xl transition-all duration-300 hover:scale-105"
            >
              <EnvelopeIcon size={35} fill="currentColor" />
            </button>
          </div>
          <div className="w-10 h-10"></div>

          {/* Icon 4: Image/Gallery */}
          <button className="flex flex-col items-center p-2">
            <ImageIcon size={25} className="transition-colors duration-300" />
          </button>

          {/* Icon 5: User */}
          <button className="flex flex-col items-center p-2">
            <UserIcon size={25} className="transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
