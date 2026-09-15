import Image from "next/image";

type StepCardProps = {
  number: string;
  image: string;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
};

export function StepCard({ number, image, title, description, tags, className = "" }: StepCardProps) {
  return (
    <div
      className={`flex w-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-foreground/50 bg-surface shadow-[0_0_20px_0_rgba(0,0,0,0.5)] lg:w-[calc(50%-1rem)] ${className}`}
    >
      <div className="relative flex h-64 w-full items-start p-5 sm:h-80 lg:h-96">
        <Image src={image} alt={title} fill className="object-cover" />
        <span className="relative flex h-[68px] w-[100px] items-center justify-center rounded-full border-[3px] border-gold bg-surface-dark/75 font-heading text-3xl font-black uppercase tracking-[4px] text-gold backdrop-blur-[6px] sm:text-4xl">
          {number}
        </span>
      </div>
      <div className="flex w-full flex-col items-center gap-6 px-5 py-7 sm:gap-8">
        <h3 className="text-center font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
          {title}
        </h3>
        <p className="text-center font-body leading-6 text-foreground">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex w-full flex-wrap items-center gap-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="min-w-48 flex-1 rounded-lg bg-gold/20 px-4 py-2.5 text-center font-body font-bold capitalize text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
