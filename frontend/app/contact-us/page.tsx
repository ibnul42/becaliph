import React from "react";
import ContactForm from "./ContactForm";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import MapIcon from "@/components/icons/MapIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import Link from "next/link";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";

export const metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <div className="flex-grow mb-10">
      {/* Header banner */}
      <header className="h-[327px] mx-4 rounded-[10px] flex items-center justify-center text-[#ffb84d] bg-[url('/assets/contact.png')] bg-center bg-cover bg-no-repeat [background-blend-mode:overlay] bg-[rgba(0,0,0,0.70)]">
        <div className="tracking-[2px] font-bold text-4xl">CONTACT US</div>
      </header>
      <main className="max-w-7xl mx-auto my-6 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
          {/* Left column */}
          <section
            aria-labelledby="contact-title"
            className="bg-white p-4 md:p-7 rounded-xl shadow-[0_6px_18px_rgba(12,20,30,0.06)] h-full flex flex-col justify-between"
          >
            <h3 id="contact-title" className="m-0 text-[28px] font-medium">
              Let’s discuss on something cool together
            </h3>

            <div className="mt-6 text-[#333] leading-relaxed space-y-5">
              <div className="flex items-center gap-3">
                <EnvelopeIcon size={18} fill="currentColor" />
                <span className="hover:underline hover:cursor-pointer">
                  SaulDesign@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <PhoneIcon size={18} fill="currentColor" />
                <span>+123 456 789</span>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <MapIcon size={20} fill="currentColor" />
                <span>123 Street 456 House</span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                aria-label="facebook"
                href="/"
                target="_blank"
                className="w-10 h-10 rounded-full inline-flex items-center justify-center 
             bg-primary-900 hover:bg-primary-800 no-underline 
             transition-colors duration-500 group"
              >
                <FacebookIcon
                  size={20}
                  fill="white"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <Link
                aria-label="instagram"
                href="/"
                target="_blank"
                className="w-10 h-10 rounded-full inline-flex items-center justify-center 
             bg-primary-900 hover:bg-primary-800 no-underline 
             transition-colors duration-500 group"
              >
                <InstagramIcon
                  size={20}
                  fill="white"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <Link
                aria-label="twitter"
                href="/"
                target="_blank"
                className="w-10 h-10 rounded-full inline-flex items-center justify-center 
             bg-primary-900 hover:bg-primary-800 no-underline 
             transition-colors duration-500 group"
              >
                <TwitterIcon
                  size={20}
                  fill="white"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            </div>
          </section>

          {/* Right column */}
          <aside>
            <ContactForm />
          </aside>
        </div>
      </main>
    </div>
  );
}
