import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore resources and products from Aderayo Olamide Adelanwa.",
};

export default function ShopPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Shop</p>

        <h1>Something is taking shape.</h1>

        <p>
          A curated selection of resources and products is currently in
          development. More details will be available soon.
        </p>
      </section>
    </main>
  );
}