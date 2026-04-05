"use client";

import { barDrinks } from "@/data/menu";

export default function BarMenu() {
  if (barDrinks.length === 0) return null;

  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <div className="max-w-xs mx-auto flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-dusty-rose-light" />
          <span className="text-dusty-rose text-xs tracking-[0.3em] uppercase">
            The Bar
          </span>
          <div className="h-px flex-1 bg-dusty-rose-light" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 grid gap-6 sm:grid-cols-2">
        {barDrinks.map((drink) => (
          <div
            key={drink.name}
            className="wes-frame p-5 bg-dusty-rose-light/10 text-center"
          >
            <h3 className="font-serif text-lg text-ink mb-1">
              {drink.name}
            </h3>
            <p className="text-dusty-rose text-xs tracking-[0.15em] uppercase mb-3">
              {drink.year}
            </p>
            <p className="text-ink-light text-sm leading-relaxed italic mb-3">
              {drink.description}
            </p>
            {(drink.movie || drink.pokemon) && (
              <div className="text-[0.65rem] tracking-[0.1em] uppercase text-brown-light space-x-3">
                {drink.movie && <span>Movie: {drink.movie.name}</span>}
                {drink.pokemon && <span>Pokemon: {drink.pokemon.name}</span>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
