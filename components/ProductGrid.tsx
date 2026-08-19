import { categories, getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid() {
  return (
    <section id="shop" className="container-px mx-auto max-w-7xl py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="section-heading">Shop Our Kodaikanal Collection</h2>
        <p className="mt-3 text-sm text-charcoal/70 sm:text-base">
          Handpicked with care. Availability may vary by season.
        </p>
      </div>

      <div className="mt-12 space-y-14">
        {categories.map((cat) => {
          const items = getProductsByCategory(cat.slug);
          if (items.length === 0) return null;
          return (
            <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl">{cat.emoji}</span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest sm:text-2xl">{cat.name}</h3>
                  <p className="text-xs text-charcoal/60 sm:text-sm">{cat.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
