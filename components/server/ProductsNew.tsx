//possible this will be offshored with shopify. for now plan on using links to drive-by-rpg
import { getNewProducts } from "@/util/getNewProducts";
import Image from "next/image";
import Link from "next/link";

export default function ProductsNew() {
    const newProducts = getNewProducts()
    return (
        <section className="w-full flex flex-col items-center sm:p-10 p-2 my-6">
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-4 sm:w-3/4">
                {newProducts && newProducts.map(product => (
                    <div className="flex flex-col" key={product.id}>
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{product.name}</h2>
                            <p>{product.date}</p>
                        </div>
                        <div className="relative h-[50dvh] hover:opacity-90">
                            <Link href={product.dtrpg} target="_blank">
                                <Image src={product.img} alt={product.name} fill className="object-fill rounded-lg" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sm:w-3/4 w-full flex justify-end items-start hover:text-stone-400 sm:text-xl font-extrabold">
                <Link href={'/modules?page=1'}>All Modules</Link>
            </div>
        </section>
    )
}