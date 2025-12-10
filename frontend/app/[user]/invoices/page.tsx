import SingleOrder from "@/components/SingleOrder";
import React from "react";

export default function page() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <p className="text-2xl font-medium mb-4">Orders in progress</p>
        <SingleOrder title="Logo Design" cost="$100" invoices />
        <SingleOrder title="Web Design" cost="$1000" invoices />
        <SingleOrder title="Marketing" cost="$1000" invoices />
        <SingleOrder title="Content Writing" cost="$1000" invoices />
      </div>
    </div>
  );
}
