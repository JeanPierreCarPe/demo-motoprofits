"use client";

import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items, className = "" }: { items: AccordionItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`flex w-full flex-col gap-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[16px] border-2 border-foreground/25 bg-surface-alt"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span className="font-heading text-lg font-extrabold text-foreground sm:text-xl">
                {item.question}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 19 12"
                fill="none"
                className={`shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
              >
                <path d="M9.5 12L0 2.5L2.5 0L9.5 7L16.5 0L19 2.5L9.5 12Z" fill="currentColor" />
              </svg>
            </button>
            {isOpen && (
              <p className="px-5 pb-6 font-body text-base leading-6 text-foreground/80 sm:px-7 sm:text-lg">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
