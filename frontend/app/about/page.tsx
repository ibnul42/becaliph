import Image from "next/image";
import React from "react";
import cn from "clsx";
import { Facebook, Linkedin, LinkedinIcon, Twitter } from "lucide-react";

const list = [
  {
    name: "Name",
    title: "Professional Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    name: "Name",
    title: "Professional Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    name: "Name",
    title: "Professional Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      <Image
        src="/assets/about.svg"
        alt="Description"
        width={500}
        height={300}
        className="w-full"
      />

      <div className="w-full max-w-6xl mx-auto px-3">
        <div className="text-center my-5 space-y-1.5">
          <p className="font-medium text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="my-5">
          <h1 className="text-3xl text-center font-semibold py-5">
            Meet the team
          </h1>
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-1 md:h-full bg-gray-300"></div>
            {list.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 md:gap-20 my-20"
              >
                <div
                  className={cn(
                    "flex-1 flex ",
                    index % 2 === 0 ? "justify-end" : "md:order-2"
                  )}
                >
                  <div className="w-72 h-72 bg-gray-300 rounded-md "></div>
                </div>
                <div
                  className={cn(
                    "space-y-2 overflow-hidden w-72",
                    index % 2 === 0 ? "md:order-2" : ""
                  )}
                >
                  <p className="text-xl font-semibold">Name</p>
                  <p className="text-lg font-medium">Professional Title</p>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                  <div className="">
                    <div className="flex gap-4 pt-1">
                      <Twitter
                        size={18}
                        className="cursor-pointer fill-primary-900 text-primary-900 transition"
                      />
                      <Facebook
                        size={18}
                        className="cursor-pointer fill-primary-900 text-primary-900 transition"
                      />
                      <LinkedinIcon
                        size={18}
                        className="cursor-pointer fill-primary-900 text-primary-900 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
