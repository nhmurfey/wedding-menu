"use client";

import Image from "next/image";
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
}

export default function CourseCard({
  course,
  index,
  isVegetarian,
}: CourseCardProps) {
  const dish =
    isVegetarian && course.vegetarian ? course.vegetarian : course.dish;
  const frame = frameColors[index % frameColors.length];
  const accent = accentColors[index % accentColors.length];
  const bg = bgColors[index % bgColors.length];

  return (
    <article className="max-w-2xl mx-auto px-4">
      {/* Course number & name */}
      <div className="text-center mb-8">
        <p className={`text-xs tracking-[0.4em] uppercase ${accent} mb-2`}>
          Course {course.id} of 6
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
          <div className="relative w-full max-w-[280px] mx-auto aspect-[4/3] mb-6">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
            />
          </div>
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

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px flex-1 bg-cream-dark" />
          <span className="text-brown-light text-xs tracking-[0.2em] italic">
            paired with
          </span>
          <div className="h-px flex-1 bg-cream-dark" />
        </div>

        {/* Wine */}
        <div className="text-center">
          <div className="relative w-full max-w-[200px] mx-auto aspect-[4/3] mb-6">
            <Image
              src={course.wine.image}
              alt={course.wine.name}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-serif text-lg md:text-xl text-ink mb-1">
            {course.wine.name}
          </h3>
          <p className={`text-xs tracking-[0.15em] uppercase ${accent} mb-3`}>
            {course.wine.region}
          </p>
          <p className="text-ink-light text-sm leading-relaxed max-w-md mx-auto italic">
            {course.wine.description}
          </p>
        </div>
      </div>

      {/* Story & Pairing Rationale */}
      <div className="mt-8 max-w-lg mx-auto space-y-6">
        {/* Story */}
        <div className="text-center">
          <p className={`text-xs tracking-[0.3em] uppercase ${accent} mb-3`}>
            The Story
          </p>
          <p className="font-serif text-ink-light text-sm md:text-base leading-relaxed italic">
            &ldquo;{course.story}&rdquo;
          </p>
        </div>

        {/* Pairing */}
        <div className="text-center">
          <p className={`text-xs tracking-[0.3em] uppercase ${accent} mb-3`}>
            Why It Works
          </p>
          <p className="text-ink-light text-sm leading-relaxed">
            {course.pairingRationale}
          </p>
        </div>
      </div>
    </article>
  );
}
