type SectionHeadingProps = {
  eyebrowLeft: string;
  eyebrowRight: string;
  paragraph?: string;
  leftGold?: boolean;
};

export function SectionHeading({
  eyebrowLeft,
  eyebrowRight,
  paragraph,
  leftGold = false,
}: SectionHeadingProps) {
  const goldClass =
    "bg-gold-gradient bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(230,168,78,0.6)]";

  return (
    <div className="flex flex-col items-center gap-6 text-center sm:gap-8 lg:gap-10">
      <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-heading text-4xl font-extrabold uppercase sm:gap-y-2 sm:text-5xl lg:gap-x-7 lg:text-6xl">
        <span className={leftGold ? goldClass : "text-foreground"}>{eyebrowLeft}</span>
        <span className={leftGold ? "text-foreground" : goldClass}>{eyebrowRight}</span>
      </h2>
      {paragraph && (
        <p className="max-w-3xl text-lg text-foreground sm:text-xl">{paragraph}</p>
      )}
    </div>
  );
}
