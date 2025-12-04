import SingleOrder from "@/components/SingleOrder";
import React from "react";

export default function page() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <p className="text-2xl font-medium mb-4">Download delivery file</p>
        <SingleOrder
          title="Logo Design"
          file="yes"
        />
        <SingleOrder
          title="Logo Design"
          file="yes"
        />
        <SingleOrder
          title="Logo Design"
          file="yes"
        />
      </div>
    </div>
  );
}
