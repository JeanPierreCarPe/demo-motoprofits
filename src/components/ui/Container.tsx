import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div className={`w-full max-w-[1440px] ${className}`} {...props}>
      {children}
    </div>
  );
}
