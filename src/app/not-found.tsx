import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-primary">Page not found</h1>
        <p className="mt-4 text-neutral-dark/70">
          Looks like this page took a bad penalty. Let&apos;s get you back on the ice.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
