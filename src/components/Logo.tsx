import Image from "next/image";

export default function Logo({ className = "h-[80px]" }: { className?: string }) {
  return (
    <a href="#beranda" className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Byte & Bite"
        width={160}
        height={160}
        priority
        className="h-full w-auto object-contain"
      />
    </a>
  );
}