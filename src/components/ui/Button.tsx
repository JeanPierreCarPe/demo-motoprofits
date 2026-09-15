import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type SharedProps = {
  className?: string;
  href?: string;
};

type GoldButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  SharedProps;

function baseClasses(variant: "gold" | "outline" | "pill" | "dark", className: string) {
  if (variant === "gold") {
    return `flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gold-gradient px-7 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider text-surface-alt sm:text-base ${className}`;
  }
  if (variant === "outline") {
    return `flex h-12 items-center justify-center overflow-hidden rounded-lg border-2 border-foreground bg-foreground/10 p-2.5 font-heading text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-sm sm:text-base ${className}`;
  }
  if (variant === "dark") {
    return `flex h-12 items-center justify-center overflow-hidden rounded-lg bg-surface-alt px-7 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider text-foreground sm:text-base ${className}`;
  }
  return `flex h-10 items-center justify-center overflow-hidden rounded-full border border-gold bg-surface-alt px-5 font-heading text-sm font-semibold tracking-wider text-foreground ${className}`;
}

export function GoldButton({ className = "", children, href, ...props }: GoldButtonProps) {
  if (href) {
    return (
      <Link href={href} className={baseClasses("gold", className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={baseClasses("gold", className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function OutlineButton({ className = "", children, href, ...props }: GoldButtonProps) {
  if (href) {
    return (
      <Link href={href} className={baseClasses("outline", className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={baseClasses("outline", className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function DarkButton({ className = "", children, href, ...props }: GoldButtonProps) {
  if (href) {
    return (
      <Link href={href} className={baseClasses("dark", className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={baseClasses("dark", className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function PillButton({ className = "", children, href, ...props }: GoldButtonProps) {
  if (href) {
    return (
      <Link href={href} className={baseClasses("pill", className)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={baseClasses("pill", className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
