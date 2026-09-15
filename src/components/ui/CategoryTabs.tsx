type CategoryTabsProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
  className?: string;
};

export function CategoryTabs({ categories, active, onChange, className = "" }: CategoryTabsProps) {
  return (
    <div className={`flex w-full flex-wrap items-start justify-center gap-4 sm:gap-8 ${className}`}>
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`h-10 whitespace-nowrap rounded-full border border-gold px-5 font-heading text-sm font-semibold tracking-wider sm:px-7 sm:text-base ${
              isActive
                ? "bg-gold/50 text-foreground shadow-[0_0_20px_0_rgba(230,168,78,0.25)]"
                : "bg-surface-alt text-foreground"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
