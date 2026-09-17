"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials, testimonialsSection } from "@/data/siteContent";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const goPrev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="relative flex flex-col items-center gap-8 overflow-hidden px-5 py-16 sm:px-10 sm:py-20 lg:flex-row lg:items-stretch lg:justify-center lg:gap-8 lg:px-20 lg:py-24">
      <Image
        key={testimonial.image}
        src={testimonial.image}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden />
      <div className="relative h-72 w-full max-w-[624px] overflow-hidden rounded-[20px] sm:h-96 lg:h-auto lg:flex-shrink-0">
        <Image
          key={testimonial.image}
          src={testimonial.image}
          alt={testimonial.author}
          fill
          sizes="(min-width: 1024px) 624px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-8 sm:gap-10">
        <h2 className="w-full text-center font-heading text-3xl font-extrabold capitalize leading-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[55px]">
          {testimonialsSection.headline}
        </h2>
        <TestimonialCard testimonial={testimonial} />
        <div className="flex items-center justify-center gap-8">
          <button type="button" aria-label="Previous testimonial" onClick={goPrev} className="text-gold">
            <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.8 25L0 12.5L12.8 0L16 3.125L6.4 12.5L16 21.875L12.8 25Z" fill="currentColor" />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.author}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-5 w-5 rounded-full transition-colors ${i === active ? "bg-gold" : "bg-white"}`}
              />
            ))}
          </div>
          <button type="button" aria-label="Next testimonial" onClick={goNext} className="text-gold">
            <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.2 0L16 12.5L3.2 25L0 21.875L9.6 12.5L0 3.125L3.2 0Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
