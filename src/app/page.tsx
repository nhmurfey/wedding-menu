"use client";

import { useState } from "react";
import { courses } from "@/data/menu";
import Header from "@/components/Header";
import Schedule from "@/components/Schedule";
import MenuToggle from "@/components/MenuToggle";
import CourseCard from "@/components/CourseCard";
import BarMenu from "@/components/BarMenu";
import FallingLeaves from "@/components/FallingLeaves";
import Footer from "@/components/Footer";

type Tab = "timeline" | "menu" | "bar";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("timeline");
  const [isVegetarian, setIsVegetarian] = useState(false);

  const hasAnyVegetarian = courses.some((c) => c.vegetarian);

  const tabs: { id: Tab; label: string }[] = [
    { id: "timeline", label: "The Day" },
    { id: "menu", label: "The Menu" },
    { id: "bar", label: "The Bar" },
  ];

  return (
    <main className="flex-1 relative">
      <FallingLeaves />
      <Header />

      {/* Tabs */}
      <div className="sticky top-0 z-20 bg-cream/90 backdrop-blur-sm border-b border-cream-dark">
        <div className="max-w-md mx-auto flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 text-xs tracking-[0.25em] uppercase transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "text-dusty-rose border-b-2 border-dusty-rose"
                  : "text-brown-light hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "timeline" && <Schedule />}

      {activeTab === "menu" && (
        <>
          {/* Menu toggle */}
          <div className="pt-8">
            {hasAnyVegetarian && (
              <MenuToggle
                isVegetarian={isVegetarian}
                onChange={setIsVegetarian}
              />
            )}
          </div>

          {/* Courses */}
          <div className="space-y-20 py-8">
            {courses
              .filter((course) => !isVegetarian || course.vegetarian)
              .map((course, i) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={i}
                  isVegetarian={isVegetarian}
                  totalCourses={
                    courses.filter((c) => !isVegetarian || c.vegetarian).length
                  }
                />
              ))}
          </div>
        </>
      )}

      {activeTab === "bar" && <BarMenu />}

      <Footer />
    </main>
  );
}
