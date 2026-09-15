import { ReactNode } from "react";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  paragraph?: string;
  children: ReactNode;
};

export function CtaBand({ eyebrow, title, paragraph, children }: CtaBandProps) {
  return (
    <section className="flex flex-col items-center gap-8 px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-6 rounded-[20px] bg-gold-gradient p-8 text-center sm:gap-8 sm:p-14">
        <span className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-surface-alt/80 sm:text-sm">
          {eyebrow}
        </span>
        <h2 className="font-heading text-3xl font-extrabold uppercase leading-tight text-surface-alt sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {paragraph && (
          <p className="max-w-xl font-body text-lg text-surface-alt/90 sm:text-xl">{paragraph}</p>
        )}
        <div className="flex w-full max-w-sm flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {children}
        </div>
      </div>
    </section>
  );
}
