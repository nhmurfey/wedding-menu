"use client";

interface MenuToggleProps {
  isVegetarian: boolean;
  onChange: (value: boolean) => void;
}

export default function MenuToggle({ isVegetarian, onChange }: MenuToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <button
        onClick={() => onChange(false)}
        className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
          !isVegetarian
            ? "border-dusty-rose bg-dusty-rose text-cream"
            : "border-dusty-rose-light text-dusty-rose hover:bg-dusty-rose-light/20"
        }`}
      >
        Standard
      </button>
      <span className="text-brown-light text-xs">or</span>
      <button
        onClick={() => onChange(true)}
        className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
          isVegetarian
            ? "border-sage bg-sage text-cream"
            : "border-sage-light text-sage hover:bg-sage-light/20"
        }`}
      >
        Vegetarian
      </button>
    </div>
  );
}
