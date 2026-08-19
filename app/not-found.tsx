import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-px mx-auto flex max-w-xl flex-col items-center py-24 text-center">
      <h1 className="font-serif text-4xl font-bold text-forest">404</h1>
      <p className="mt-3 text-sm text-charcoal/60">We couldn&apos;t find the page you were looking for.</p>
      <Link href="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
}
