import Image from "next/image";

export default function Logo({ className = "h-20" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Byte & Bite"
        width={300}
        height={97}
        priority
        unoptimized
        className="h-full w-auto object-contain"
      />
    </a>
  );
}
