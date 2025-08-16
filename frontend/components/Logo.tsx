import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  text?: string;
  textColor?: string;
  textSize?: string;
  link?: string;
};

export default function Logo({
  src = "/assets/logo.svg",
  alt = "Logo",
  width = 32,
  height = 32,
  showText = false,
  text = "BECALIPH",
  textColor = "text-[#ED9E15]",
  textSize = "text-xl",
  link = "/",
}: LogoProps) {
  return (
    <Link href={link} className="flex items-center space-x-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
      {showText && (
        <span className={`${textColor} ${textSize} font-bold tracking-widest`}>
          {text}
        </span>
      )}
    </Link>
  );
}
