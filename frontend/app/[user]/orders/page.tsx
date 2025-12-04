import SingleOrder from "@/components/SingleOrder";
import React from "react";

export default function page() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <p className="text-2xl font-medium mb-4">Orders in progress</p>
        <SingleOrder
          title="Logo Design"
          cost="$1000"
          deadline="10d, 10h, 10m"
          details
        />
        <SingleOrder title="Web Design" cost="$1000" deadline="10d, 10h, 10m" details />
        <SingleOrder title="Marketing" cost="$1000" deadline="10d, 10h, 10m" details />
        <SingleOrder
          title="Content Writing"
          cost="$1000"
          deadline="10d, 10h, 10m"
          details
        />
      </div>
      <div className="space-y-5">
        <p className="text-2xl font-medium mt-5 mb-4">Completed Orders</p>
        <SingleOrder
          title="Website Redesign"
          cost="$2000"
          completed="5d, 4h, 3m"
          star={5}
          details
        />
        <SingleOrder
          title="Website Redesign"
          cost="$2000"
          completed="5d, 4h, 3m"
          star={4}
          details
        />
        <SingleOrder
          title="Website Redesign"
          cost="$2000"
          completed="5d, 4h, 3m"
          star={5}
          details
        />
      </div>
    </div>
  );
}
