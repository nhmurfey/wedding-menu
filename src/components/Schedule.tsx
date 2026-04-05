"use client";

import { schedule } from "@/data/menu";

export default function Schedule() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-lg mx-auto text-center">
        {/* Section title */}
        <div className="mb-12">
          <p className="text-sage text-xs tracking-[0.3em] uppercase mb-3">
            The Order of Events
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            The Day
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-sage" />
            <span className="text-sage text-[0.6rem] tracking-[0.5em]">
              ✦
            </span>
            <div className="h-px w-8 bg-sage" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sage-light -translate-x-1/2" />

          <div className="space-y-8">
            {schedule.map((event, i) => (
              <div key={i} className="relative">
                {/* Dot on timeline */}
                <div className="absolute left-1/2 top-3 w-2.5 h-2.5 rounded-full bg-sage border-2 border-cream -translate-x-1/2 z-10" />

                <div
                  className={`flex items-start gap-6 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Time */}
                  <div className="w-[calc(50%-1rem)] text-right">
                    {i % 2 === 0 ? (
                      <>
                        <p className="text-mustard text-lg font-semibold">
                          {event.time}
                        </p>
                        <p className="text-brown-light text-xs tracking-[0.15em] uppercase mt-1">
                          {event.title}
                        </p>
                      </>
                    ) : (
                      <p className="text-ink-light text-sm leading-relaxed italic">
                        {event.description}
                      </p>
                    )}
                  </div>

                  {/* Spacer for the center line */}
                  <div className="w-8 shrink-0" />

                  {/* Description */}
                  <div className="w-[calc(50%-1rem)] text-left">
                    {i % 2 === 0 ? (
                      <p className="text-ink-light text-sm leading-relaxed italic">
                        {event.description}
                      </p>
                    ) : (
                      <>
                        <p className="text-mustard text-lg font-semibold">
                          {event.time}
                        </p>
                        <p className="text-brown-light text-xs tracking-[0.15em] uppercase mt-1">
                          {event.title}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
