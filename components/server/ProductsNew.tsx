//possible this will be offshored with shopify. for now plan on using links to drive-by-rpg
import { getNewProducts } from "@/util/getNewProducts";
import Image from "next/image";
import Link from "next/link";

export default function ProductsNew() {
    const newProducts = getNewProducts()
    return (
        <section className="w-full flex flex-col items-center sm:p-10 p-2">
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-4 h-[100dvh] sm:h-[60dvh] sm:w-3/4">
                {newProducts && newProducts.map(product => (
                    <div className="flex flex-col" key={product.id}>
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{product.name}</h2>
                            <p>{product.date}</p>
                        </div>
                        <div className="relative h-full hover:opacity-95">
                            <Link href={product.dtrpg}>
                                <Image src={product.img} alt={'...'} fill className="object-fill" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-3/4 flex justify-end items-start">
                <Link href={'/modules'}>All Modules</Link>
            </div>
        </section>
    )
}