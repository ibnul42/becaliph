import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#053C5E] text-white pt-10 rounded-t-2xl">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-[#ED9E15] mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#ED9E15]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#ED9E15]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-[#ED9E15]">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ED9E15]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ED9E15]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-[#ED9E15] mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            <li>Brand Value Creation</li>
            <li>Ecommerce Support</li>
            <li>Video Editing</li>
            <li>Remote Job Employees</li>
            <li>Design Solution</li>
            <li>Website Design & Development</li>
            <li>Content Writing</li>
            <li>Marketing</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold text-[#ED9E15] mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-[#ED9E15]" />
              <span>0177777777</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-[#ED9E15]" />
              <span>info@abcd.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00253C] text-center text-xs py-3 mt-8">
        © copyright | all rights reserved
      </div>
    </footer>
  );
}
