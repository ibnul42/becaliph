"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-t from-[#053C5E] via-[#3E869E] to-[#053C5E] text-[#053C5E] px-4 py-10 mb-10">
      <div className="flex w-full max-w-7xl">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center w-1/2 text-white p-8 space-y-6">
          <p>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <Link href="tel:+4733378901" className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 0177777777
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Link
                href="mailto:info@abcd.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> info@abcd.com
              </Link>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 max-w-lg bg-white rounded-xl p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl text-[#053C5E] font-bold text-center mb-6">
            Signup
          </h2>
          <form className="space-y-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-[#053C5E] rounded-full outline-none focus:ring-2 focus:ring-sky-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border border-[#053C5E] rounded-full outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-2 bg-[#053C5E] text-white rounded-full hover:bg-[#053C5E]/90 transition cursor-pointer"
            >
              Signup
            </button>

            {/* Signup link */}
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-[#508DC9] hover:underline">
                Login
              </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Signup buttons */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border rounded-full py-2 hover:bg-gray-100 transition cursor-pointer"
            >
              <Image
                src="/assets/google.png"
                width={100}
                height={100}
                alt="Google"
                className="w-5 h-5"
              />
              Signup with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border rounded-full py-2 hover:bg-gray-100 transition cursor-pointer"
            >
              <Image
                src="/assets/apple.png"
                width={100}
                height={100}
                alt="Apple"
                className="w-5 h-5"
              />
              Signup with Apple
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
