export function PremiumBadge({ text = "Premium" }: { text?: string }) {
  return (
    <span className="whitespace-nowrap rounded-full bg-violet-gradient px-3 py-2.5 font-heading text-sm font-extrabold uppercase tracking-wider text-foreground">
      {text}
    </span>
  );
}
