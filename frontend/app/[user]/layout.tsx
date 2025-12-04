import React from "react";
import DashboardOtions from "./DashboardOtions";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full px-3">
      {/* user info */}
      <section className="w-full my-10 flex flex-col gap-1 items-center">
        <div className="w-20 h-20 rounded-full bg-[#ED9E15]"></div>
        <p className="text-3xl text-primary-900 font-semibold">
          Tuhin Al Mamun
        </p>
        <p className="text-sm font-medium">@tuhinalmamun80</p>
      </section>
      <section className="my-5 flex gap-10">
        <DashboardOtions />
        <main className="flex-grow">{children}</main>
      </section>
    </div>
  );
}
