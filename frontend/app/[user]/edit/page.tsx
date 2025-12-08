"use client";
import React from "react";

export default function page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <div className=" text-[#333]">
          <label className="text-xs mb-1.5 font-medium">Full Name</label>
          <input
            // value=""
            // onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-3 py-2 text-[14px] border-t border-l border-r border-b-2 border-[#e6e6e6] rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 focus-within:border-b-2 focus:border-b-primary-900"
            required
          />
        </div>
        <div className=" text-[#333]">
          <label className="text-xs mb-1.5 font-medium">Email</label>
          <input
            // value=""
            // onChange={(e) => setName(e.target.value)}
            placeholder="john.doe@example.com"
            className="w-full px-3 py-2 text-[14px] border-t border-l border-r border-b-2 border-[#e6e6e6] rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 focus-within:border-b-2 focus:border-b-primary-900"
            required
          />
        </div>
        <div className=" text-[#333]">
          <label className="text-xs mb-1.5 font-medium">Phone Number</label>
          <input
            // value=""
            // onChange={(e) => setName(e.target.value)}
            type="tel"
            placeholder="+88 012 3456 7890"
            className="w-full px-3 py-2 text-[14px] border-t border-l border-r border-b-2 border-[#e6e6e6] rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 focus-within:border-b-2 focus:border-b-primary-900"
            required
          />
        </div>
        <div className=" text-[#333]">
          <label className="text-xs mb-1.5 font-medium">Change Password</label>
          <input
            // value=""
            // onChange={(e) => setName(e.target.value)}
            type="password"
            placeholder="******"
            className="w-full px-3 py-2 text-[14px] border-t border-l border-r border-b-2 border-[#e6e6e6] rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 focus-within:border-b-2 focus:border-b-primary-900"
            required
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-4 py-2.5 rounded-full text-[#FF0062] hover:text-[#FF0062]/80 border-none transition-all duration-200 cursor-pointer`}
          >
            Delete Account
          </button>
          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-4 py-2.5 rounded-full text-white border-none transition-all duration-200 cursor-pointer 
              ${
                status === "sending"
                  ? "bg-primary-600 cursor-not-allowed"
                  : "bg-primary-900 border-primary-900 hover:bg-primary-800 hover:border-primary-800"
              }`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
