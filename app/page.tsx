import Hero from "@/components/server/Hero";
import ProductsNew from "@/components/server/ProductsNew";
import Statement from "@/components/server/Statement";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Statement />
      <ProductsNew />
    </main>
  )
}
