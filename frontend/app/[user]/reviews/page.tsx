import SingleOrder from "@/components/SingleOrder";
import React from "react";

export default function page() {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <p className="text-2xl font-medium mb-4">My Reviews</p>
        <SingleOrder
          title="Logo Design"
            star={5}
            review="Great work! The logo perfectly captures our brand's essence. Great work! The logo perfectly captures our brand's essence. Great work! The logo perfectly captures our brand's essence. Great work! The logo perfectly captures our brand's essence."
        />
        <SingleOrder
          title="Logo Design"
            star={4}
            review="Great work! The logo perfectly captures our brand's essence."
        />
      </div>
    </div>
  );
}
