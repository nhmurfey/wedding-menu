"use client";

export default function Header() {
  return (
    <header className="pt-16 pb-12 px-4 text-center">
      <div className="max-w-lg mx-auto">
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-dusty-rose" />
          <span className="text-dusty-rose text-xs tracking-[0.3em] uppercase">
            The Wedding of
          </span>
          <div className="h-px w-16 bg-dusty-rose" />
        </div>

        {/* Names */}
        <h1 className="font-serif text-5xl md:text-7xl text-ink tracking-wide leading-tight">
          Holly
        </h1>
        <p className="font-serif text-2xl md:text-3xl text-dusty-rose my-2 italic">
          &amp;
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ink tracking-wide leading-tight">
          Nathan
        </h1>

        {/* Date */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-mustard" />
          <p className="text-brown-light text-sm tracking-[0.25em] uppercase">
            April 15th, 2026
          </p>
          <div className="h-px w-12 bg-mustard" />
        </div>

        {/* Subtitle */}
        <div className="mt-10 wes-frame inline-block px-8 py-4">
          <p className="font-serif text-lg md:text-xl text-ink-light italic">
            A Guide to the Evening&apos;s Menu
          </p>
          <p className="text-brown-light text-xs tracking-[0.2em] uppercase mt-2">
            Food &bull; Wine &bull; Stories
          </p>
        </div>
      </div>
    </header>
  );
}
