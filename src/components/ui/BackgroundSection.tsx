import Image from "next/image";
import { ReactNode } from "react";

type BackgroundSectionProps = {
  backgroundImage: string;
  overlayClassName?: string;
  className?: string;
  children: ReactNode;
};

export function BackgroundSection({
  backgroundImage,
  overlayClassName = "bg-black/70",
  className = "",
  children,
}: BackgroundSectionProps) {
  return (
    <section
      className={`relative flex flex-col items-center gap-12 overflow-hidden px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24 ${className}`}
    >
      <Image src={backgroundImage} alt="" fill className="-z-20 object-cover" aria-hidden />
      <div className={`absolute inset-0 -z-10 ${overlayClassName}`} aria-hidden />
      {children}
    </section>
  );
}
