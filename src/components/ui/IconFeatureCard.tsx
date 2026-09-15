import Image from "next/image";

type IconFeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export function IconFeatureCard({ icon, title, description, className = "" }: IconFeatureCardProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-6 rounded-[20px] border-2 border-gold bg-background/75 p-6 backdrop-blur-[6px] sm:flex-row sm:gap-10 sm:p-10 lg:w-[calc(50%-1rem)] ${className}`}
    >
      <Image src={icon} alt="" width={80} height={80} className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
      <div className="flex flex-1 flex-col items-center gap-3 text-center sm:items-start sm:gap-5 sm:text-left">
        <h3 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">{title}</h3>
        <p className="font-body text-lg text-foreground sm:text-xl">{description}</p>
      </div>
    </div>
  );
}
