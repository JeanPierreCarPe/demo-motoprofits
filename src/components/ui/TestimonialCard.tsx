import Image from "next/image";
import { Testimonial } from "@/data/siteContent";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="flex flex-col items-center gap-8 rounded-[20px] border-2 border-foreground/25 bg-surface-alt p-6 sm:gap-10 sm:p-10">
      <Image src="/images/quote-icon.svg" alt="" width={56} height={40} className="h-8 w-11" />
      <p className="text-center font-body text-lg text-foreground sm:text-2xl">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="flex flex-col items-center gap-3">
        <cite className="font-heading text-xl font-extrabold not-italic text-gold sm:text-2xl">
          {testimonial.author}
        </cite>
        <span className="text-center font-body text-foreground/75">{testimonial.role}</span>
      </footer>
      <div className="flex w-full items-center gap-4">
        {testimonial.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 flex-col items-center gap-3 rounded-xl border-2 border-foreground/25 bg-surface-alt p-2.5"
          >
            <span className="font-heading text-xl font-extrabold text-gold drop-shadow-[0_0_20px_rgba(230,168,78,0.5)] sm:text-2xl">
              {stat.value}
            </span>
            <span className="font-body text-xs uppercase text-foreground/50 sm:text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </blockquote>
  );
}
