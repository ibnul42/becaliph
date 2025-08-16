"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className={`${
                  pathname === link.href
                    ? "text-[#ED9E15] font-medium"
                    : "text-gray-700 hover:text-[#ED9E15]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/signup"
              onClick={toggleMenu}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100"
            >
              SIGN UP
            </Link>
            <Link
              href="/login"
              onClick={toggleMenu}
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
            >
              LOG IN
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
