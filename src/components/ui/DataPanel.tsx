import { ReactNode } from "react";

type DataPanelProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function DataPanel({ title, children, className = "" }: DataPanelProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-10 rounded-[20px] border-2 border-gold bg-surface-alt p-6 backdrop-blur-[6px] sm:p-10 lg:w-[calc(50%-1rem)] ${className}`}
    >
      <h3 className="font-heading text-2xl font-extrabold text-gold sm:text-3xl">{title}</h3>
      <div className="flex w-full flex-col items-start gap-5">{children}</div>
    </div>
  );
}
