"use client";

import { useState } from "react";
import { courses } from "@/data/menu";
import Header from "@/components/Header";
import Schedule from "@/components/Schedule";
import MenuToggle from "@/components/MenuToggle";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [isVegetarian, setIsVegetarian] = useState(false);

  const hasAnyVegetarian = courses.some((c) => c.vegetarian);

  return (
    <main className="flex-1">
      <Header />

      {/* Schedule */}
      <Schedule />

      {/* Divider */}
      <div className="py-8">
        <div className="max-w-xs mx-auto flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-dusty-rose-light" />
          <span className="text-dusty-rose text-xs tracking-[0.3em] uppercase">
            The Menu
          </span>
          <div className="h-px flex-1 bg-dusty-rose-light" />
        </div>
      </div>

      {/* Menu toggle */}
      {hasAnyVegetarian && (
        <MenuToggle isVegetarian={isVegetarian} onChange={setIsVegetarian} />
      )}

      {/* Courses */}
      <div className="space-y-20 py-8">
        {courses.map((course, i) => (
          <CourseCard
            key={course.id}
            course={course}
            index={i}
            isVegetarian={isVegetarian}
            totalCourses={courses.length}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
