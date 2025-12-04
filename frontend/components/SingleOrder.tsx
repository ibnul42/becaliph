import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

interface SingleOrderProps {
  thumbnail?: string; // optional – you can show image or fallback
  title: string;
  cost?: string;
  deadline?: string;
  completed?: string;
  details?: boolean;
  file?: string;
  star?: number;
  review?: string;
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
  details,
  file,
  star,
  review,
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

      {/* Review */}
      {review && <p className="flex-grow text-sm line-clamp-4">{review}</p>}

      {review && (
        <div className="space-y-1.5">
          <StarRating value={star || 0} />
          <button
            onClick={onViewDetails}
            className="px-3 py-2 rounded-full bg-primary-900 text-white whitespace-nowrap"
          >
            View Details
          </button>
        </div>
      )}

      {/* Info Items */}
      {cost && <InfoItem title="Cost" value={cost} />}

      {deadline && <InfoItem title="Deadline" value={deadline} />}
      {completed && <InfoItem title="Completed" value={completed} />}

      {/* Feedback */}
      {star && !review && <InfoItem title="Feedback" star={star} />}
      {/* Button */}
      <div className="">
        {file && (
          <div className="flex gap-2">
            <button
              onClick={onViewDetails}
              className="px-3 py-2 rounded-full bg-primary-900 text-white whitespace-nowrap"
            >
              View full Details
            </button>
            <button
              onClick={onViewDetails}
              className="px-3 py-2 rounded-full bg-primary-900 text-white whitespace-nowrap"
            >
              Download All Files
            </button>
          </div>
        )}
        {details && (
          <button
            onClick={onViewDetails}
            className="px-3 py-2 rounded-full bg-primary-900 text-white whitespace-nowrap"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value, star }) => (
  <div className="flex flex-col h-[-webkit-fill-available]">
    <p className="text-gray-500">{title}</p>
    {value && <p className="font-medium text-primary-900">{value}</p>}
    {star && <StarRating value={star} />}
  </div>
);
