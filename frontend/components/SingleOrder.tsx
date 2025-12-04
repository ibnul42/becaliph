import Image from "next/image";
import React from "react";
import StarIcon from "./icons/StarIcon";

interface SingleOrderProps {
  thumbnail?: string; // optional – you can show image or fallback
  title: string;
  cost: string;
  deadline?: string;
  completed?: string;
  star?: number;
  onViewDetails?: () => void;
}

interface InfoItemProps {
  title: string;
  value?: string;
  star?: number;
}

export default function SingleOrder({
  thumbnail,
  title,
  cost,
  deadline,
  completed,
  star,
  onViewDetails,
}: SingleOrderProps) {
  return (
    <div className="p-2 border border-gray-300 overflow-hidden rounded-md flex gap-5 items-center">
      {/* Thumbnail */}
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          width={500}
          height={500}
          className="w-20 aspect-video rounded-md object-cover shrink-0"
        />
      ) : (
        <div className="w-20 aspect-video shrink-0 bg-gray-300 rounded-md" />
      )}

      {/* Title */}
      <p className="flex-grow font-medium">{title}</p>

      {/* Info Items */}
      <InfoItem title="Cost" value={cost} />

      {deadline && <InfoItem title="Deadline" value={deadline} />}
      {completed && <InfoItem title="Completed" value={completed} />}

      {/* Feedback */}
      {/* {star && <InfoItem title="Feedback" star={1} />} */}
      {/* Button */}
      <button
        onClick={onViewDetails}
        className="px-3 py-2 rounded-full bg-primary-900 text-white"
      >
        View Details
      </button>
    </div>
  );
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value, star }) => (
  <div className="flex flex-col h-full">
    <p className="text-gray-500">{title}</p>
    {value && <p className="font-medium text-primary-900">{value}</p>}
    {star && <StarIcon width={16} height={16} />}
  </div>
);
