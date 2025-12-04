"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import React from "react";

export default function DashboardOtions() {
  const pathname = usePathname();
  const params = useParams();

  const user = params.user; // dynamic segment

  const linkClasses = (href: string) =>
    `py-2 block transition-all ${
      pathname === href
        ? "text-primary-900 font-medium underline underline-offset-3"
        : "text-[#515050] hover:text-primary-900"
    }`;

  return (
    <aside className="w-60 shrink-0 space-y-10">
      <div className="border-[0.5px] border-gray-300 px-5 py-3 rounded-md">
        <Link
          href={`/${user}/orders`}
          className={linkClasses(`/${user}/orders`)}
        >
          All Orders
        </Link>

        <Link
          href={`/${user}/completed`}
          className={linkClasses(`/${user}/completed`)}
        >
          Download Delivery Files
        </Link>

        <Link
          href={`/${user}/reviews`}
          className={linkClasses(`/${user}/reviews`)}
        >
          My Reviews
        </Link>
      </div>

      <div className="border-[0.5px] border-gray-300 px-5 py-3 rounded-md">
        <Link
          href={`/${user}/profile`}
          className={linkClasses(`/${user}/profile`)}
        >
          Edit Profile
        </Link>

        <Link
          href={`/${user}/invoices`}
          className={linkClasses(`/${user}/invoices`)}
        >
          Order Invoices
        </Link>

        <Link
          href={`/${user}/billing`}
          className={linkClasses(`/${user}/billing`)}
        >
          My Billing Information
        </Link>

        <Link
          href={`/${user}/payments`}
          className={linkClasses(`/${user}/payments`)}
        >
          My Payment Methods
        </Link>
      </div>
    </aside>
  );
}
