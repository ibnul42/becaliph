"use client";

import React, { useState, FormEvent } from "react";

const INTERESTS = [
  "UI/UX design",
  "Web design",
  "Graphic design",
  "Marketing",
  "Other",
];

export default function ContactForm() {
  const [selected, setSelected] = useState<string>("UI/UX design");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const toggleInterest = (i: string) => setSelected(i);

  const validateEmail = (e: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          interest: selected,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-white p-4 md:p-7 rounded-xl shadow-[0_10px_30px_rgba(12,20,30,0.06)] min-h-[360px]">
      <div className="mb-4">
        <div className="text-sm text-gray-600">I&apos;m interested in...</div>
        <div className="flex flex-wrap gap-2 mt-2.5">
          {INTERESTS.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => toggleInterest(i)}
              aria-pressed={selected === i}
              className={`px-3 py-2 rounded-full text-sm md:text-base border transition-colors duration-150 cursor-pointer 
                ${
                  selected === i
                    ? "bg-primary-900 text-white border-primary-900 hover:bg-primary-800 hover:border-primary-800"
                    : "bg-white text-[#444] border-[#e6e6e6] hover:text-white hover:border-primary-800 hover:bg-primary-800"
                }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-3">
        <label className=" text-[#333]">
          <div className="text-xs mb-1.5">Your name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-3 py-2 text-[14px] border-t border-l border-r border-b-2 border-[#e6e6e6] rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 focus-within:border-b-2 focus:border-b-primary-900"
            required
          />
        </label>

        <label className=" text-[#333]">
          <div className="text-xs mb-1.5">Your email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-3 py-2 text-[14px] border-t border-l border-r border-b-2 border-[#e6e6e6] rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 focus-within:border-b-2 focus:border-b-primary-900"
            required
            type="email"
          />
        </label>

        <label className=" text-[#333]">
          <div className="text-xs mb-1.5">Your message</div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="w-full px-3 py-2 text-[14px] border-t border-l border-r border-b-2 border-[#e6e6e6] rounded-md focus:outline-none focus:ring-1 focus:ring-primary-900 focus-within:border-b-2 focus:border-b-primary-900 min-h-[110px] resize-y"
            required
          />
        </label>

        <div className="flex items-center gap-3">
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
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div role="status" className="text-green-600 ">
              Message sent. We will get back to you shortly.
            </div>
          )}
        </div>

        {error && (
          <div role="alert" className="text-red-600 mt-1.5 ">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
