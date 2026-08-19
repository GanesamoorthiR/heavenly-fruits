import { Star } from "lucide-react";

const sampleReviews = [
  { name: "Priya S.", text: "Loved the freshness — you can really tell it's from the hills." },
  { name: "Arun K.", text: "Well packed and arrived in great condition. Will order again." },
  { name: "Meena R.", text: "Great quality, tastes so much better than store-bought." },
];

export default function ProductReviews() {
  return (
    <section className="mt-14 border-t border-forest/10 pt-10">
      <h2 className="font-serif text-2xl font-bold text-forest">People love Kodaikanal freshness ❤️</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {sampleReviews.map((review) => (
          <div key={review.name} className="card p-5">
            <div className="flex gap-0.5 text-honey">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-honey text-honey" />
              ))}
            </div>
            <p className="mt-3 text-sm text-charcoal/70">&ldquo;{review.text}&rdquo;</p>
            <p className="mt-3 text-xs font-semibold text-forest">{review.name}</p>
            <p className="text-[11px] uppercase tracking-wide text-charcoal/40">Sample customer review</p>
          </div>
        ))}
      </div>
    </section>
  );
}
