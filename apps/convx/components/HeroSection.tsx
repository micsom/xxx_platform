
export function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-black text-white">
      <h1 className="text-6xl font-serif tracking-tight mb-4 animate-fade-in">
        Design Less. Convert More.
      </h1>
      <p className="text-xl font-light max-w-xl animate-fade-in delay-200">
        ConvX is your AI-optimized landing page engine that crafts high-conversion pages while you focus on your product.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-black rounded-2xl hover:scale-105 transition-transform shadow-xl">
        Generate My Landing Page
      </button>
    </section>
  );
}
