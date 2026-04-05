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

type Tab = "timeline" | "menu" | "bar" | "photos";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("timeline");
  const [isVegetarian, setIsVegetarian] = useState(false);

  const hasAnyVegetarian = courses.some((c) => c.vegetarian);

  const tabs: { id: Tab; label: string }[] = [
    { id: "timeline", label: "The Day" },
    { id: "menu", label: "The Menu" },
    { id: "bar", label: "The Bar" },
    { id: "photos", label: "Photos" },
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

      {activeTab === "photos" && (
        <section className="py-16 px-4">
          <div className="max-w-md mx-auto text-center space-y-8">
            <div>
              <p className="text-dusty-rose text-xs tracking-[0.3em] uppercase mb-3">
                Share Your Moments
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
                Photos
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-8 bg-dusty-rose" />
                <span className="text-dusty-rose text-[0.6rem] tracking-[0.5em]">✦</span>
                <div className="h-px w-8 bg-dusty-rose" />
              </div>
              <p className="text-ink-light text-sm leading-relaxed mb-8">
                Snap away! Upload your photos from the day and we&apos;ll all get to relive it together.
              </p>
            </div>
            <a
              href="https://pov.camera/qr/E341BC19-F4B7-4294-ADAB-6D34D7C501F9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block wes-frame px-8 py-4 bg-dusty-rose-light/20 text-ink font-serif text-lg hover:bg-dusty-rose-light/30 transition-colors"
            >
              Upload Photos
            </a>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
