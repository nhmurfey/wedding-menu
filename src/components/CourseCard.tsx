"use client";

import { useState } from "react";
import { Course } from "@/data/menu";

const frameColors = [
  "wes-frame",         // dusty rose
  "wes-frame-sage",    // sage
  "wes-frame-mustard", // mustard
  "wes-frame",         // dusty rose
  "wes-frame-sage",    // sage
  "wes-frame-mustard", // mustard
];

const accentColors = [
  "text-dusty-rose",
  "text-sage",
  "text-mustard",
  "text-dusty-rose",
  "text-sage",
  "text-mustard",
];

const bgColors = [
  "bg-dusty-rose-light/20",
  "bg-sage-light/20",
  "bg-mustard-light/20",
  "bg-dusty-rose-light/20",
  "bg-sage-light/20",
  "bg-mustard-light/20",
];

interface CourseCardProps {
  course: Course;
  index: number;
  isVegetarian: boolean;
  totalCourses: number;
}

export default function CourseCard({
  course,
  index,
  isVegetarian,
  totalCourses,
}: CourseCardProps) {
  const [showExtras, setShowExtras] = useState(false);
  const dish =
    isVegetarian && course.vegetarian ? course.vegetarian : course.dish;
  const frame = frameColors[index % frameColors.length];
  const accent = accentColors[index % accentColors.length];
  const bg = bgColors[index % bgColors.length];
  const hasExtras =
    !!course.drink && (course.drink.pokemon || course.drink.movie);

  return (
    <article className="max-w-2xl mx-auto px-4">
      {/* Course number & name */}
      <div className="text-center mb-8">
        <p className={`text-xs tracking-[0.4em] uppercase ${accent} mb-2`}>
          Course {course.id} of {totalCourses}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink">
          {course.courseName}
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3">
          <div className={`h-px w-8 ${accent.replace("text-", "bg-")}`} />
          <span className={`${accent} text-[0.6rem] tracking-[0.5em]`}>✦</span>
          <div className={`h-px w-8 ${accent.replace("text-", "bg-")}`} />
        </div>
        {isVegetarian && course.vegetarian && (
          <p className="text-sage text-xs tracking-[0.15em] uppercase mt-3">
            ✿ Vegetarian
          </p>
        )}
      </div>

      {/* Main frame with dish & wine */}
      <div className={`${frame} p-6 md:p-10 ${bg}`}>
        {/* Dish */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-xl md:text-2xl text-ink mb-3">
            {dish.name}
          </h3>
          <p className="text-ink-light text-sm leading-relaxed max-w-md mx-auto">
            {dish.description}
          </p>
          {dish.allergens.length > 0 && (
            <p className="text-brown-light text-[0.65rem] tracking-[0.15em] uppercase mt-4">
              Contains: {dish.allergens.join(" · ")}
            </p>
          )}
        </div>

        {(course.drink || course.cocktails) && (
          <>
            {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px flex-1 bg-cream-dark" />
              <span className="text-brown-light text-xs tracking-[0.2em] italic">
                paired with
              </span>
              <div className="h-px flex-1 bg-cream-dark" />
            </div>

            {/* Drink */}
            {course.cocktails ? (
              <div>
                {course.drink && (
                  <>
                    <p className="text-center font-serif text-lg md:text-xl text-ink mb-6">
                      {course.drink.name}
                    </p>
                    <p className="text-center text-ink-light text-sm leading-relaxed italic mb-8">
                      {course.drink.description}
                    </p>
                  </>
                )}
                <div className="grid grid-cols-2 gap-6">
                  {course.cocktails.map((cocktail) => (
                    <div key={cocktail.name} className="text-center">
                      <p className={`text-xs tracking-[0.3em] uppercase ${accent} mb-2`}>
                        {cocktail.label}
                      </p>
                      <h3 className="font-serif text-base md:text-lg text-ink mb-2">
                        {cocktail.name}
                      </h3>
                      <p className="text-ink-light text-xs leading-relaxed italic">
                        {cocktail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : course.drink ? (
              <div className="text-center">
                <h3 className="font-serif text-lg md:text-xl text-ink mb-1">
                  {course.drink.name}
                </h3>
                {course.drink.region && (
                  <p className={`text-xs tracking-[0.15em] uppercase ${accent} mb-3`}>
                    {course.drink.region}
                  </p>
                )}
                <p className="text-ink-light text-sm leading-relaxed max-w-md mx-auto italic">
                  {course.drink.description}
                </p>
                {course.drink.tastingNotes && (
                  <p className="text-ink-light text-sm leading-relaxed max-w-md mx-auto mt-4">
                    {course.drink.tastingNotes}
                  </p>
                )}
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* Story & Pairing Rationale */}
      <div className="mt-8 max-w-lg mx-auto space-y-6">
        {/* Story */}
        <div className="text-center">
          <p className={`text-xs tracking-[0.3em] uppercase ${accent} mb-3`}>
            The Story
          </p>
          <p className="font-body text-ink-light text-sm md:text-base leading-relaxed italic">
            &ldquo;{course.story}&rdquo;
          </p>
        </div>

        {/* Pairing */}
        {course.pairingRationale && (
          <div className="text-center">
            <p className={`text-xs tracking-[0.3em] uppercase ${accent} mb-3`}>
              Why It Works
            </p>
            <p className="text-ink-light text-sm leading-relaxed">
              {course.pairingRationale}
            </p>
          </div>
        )}

        {/* Tap to reveal extras */}
        {hasExtras && course.drink && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowExtras(!showExtras)}
              className={`text-xs tracking-[0.3em] uppercase ${accent} border-b border-current pb-0.5 hover:opacity-70 transition-opacity cursor-pointer`}
            >
              {showExtras ? "Hide the nerdy bits" : "Tap for the nerdy bits"}
            </button>

            {showExtras && (
              <div className="mt-6 space-y-6 text-left">
                {/* Pokemon */}
                {course.drink.pokemon && (
                  <div className="text-center">
                    <p
                      className={`text-xs tracking-[0.3em] uppercase ${accent} mb-3`}
                    >
                      If this wine were a Pok&eacute;mon
                    </p>
                    <p className="font-serif text-ink text-base">
                      {course.drink.pokemon.name}
                    </p>
                  </div>
                )}

                {/* Movie */}
                {course.drink.movie && (
                  <div className="text-center">
                    <p
                      className={`text-xs tracking-[0.3em] uppercase ${accent} mb-3`}
                    >
                      If this wine were a children&apos;s movie
                    </p>
                    <p className="font-serif text-ink text-base">
                      {course.drink.movie.name}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
