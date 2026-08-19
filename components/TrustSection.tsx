const badges = [
  { emoji: "🌿", label: "Fresh From Kodaikanal" },
  { emoji: "🍯", label: "Pure Mountain Honey" },
  { emoji: "🍫", label: "Homemade Chocolates" },
  { emoji: "🥬", label: "Fresh Farm Vegetables" },
  { emoji: "📦", label: "Carefully Packed" },
  { emoji: "❤️", label: "Packed With Love" },
];

export default function TrustSection() {
  return (
    <section className="bg-cream-dark">
      <div className="container-px mx-auto max-w-7xl py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">From Kodaikanal With Love ❤️</h2>
          <p className="mt-4 text-sm text-charcoal/70 sm:text-base">
            We bring the natural goodness of Kodaikanal directly to you — carefully selected fruits, pure mountain
            honey, delicious homemade chocolates and fresh hill vegetables.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="card flex flex-col items-center gap-2 px-3 py-6 text-center transition hover:-translate-y-0.5"
            >
              <span className="text-3xl">{badge.emoji}</span>
              <span className="text-xs font-semibold text-forest sm:text-sm">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
