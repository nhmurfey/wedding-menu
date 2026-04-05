"use client";

export default function Footer() {
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-lg mx-auto">
        <div className="wes-frame-mustard inline-block px-10 py-8">
          <p className="font-serif text-2xl md:text-3xl text-ink mb-2">
            Thank You
          </p>
          <p className="text-ink-light text-sm leading-relaxed max-w-sm mx-auto">
            For being here, for your love and friendship, and for sharing this
            meal with us.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-mustard" />
            <span className="text-mustard text-[0.6rem] tracking-[0.5em]">
              ✦
            </span>
            <div className="h-px w-6 bg-mustard" />
          </div>
          <p className="font-serif text-dusty-rose italic mt-4">
            Holly &amp; Nathan
          </p>
        </div>
      </div>
    </footer>
  );
}
