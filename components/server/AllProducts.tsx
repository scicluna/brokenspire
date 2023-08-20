import { products } from "@/products/products"
import Link from "next/link"
import Image from "next/image"

interface AllProductsProps {
    PRODUCTSPERPAGE: number
    page: number
}

export default function AllProducts({ PRODUCTSPERPAGE, page }: AllProductsProps) {
    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 sm:w-3/4 p-2">
            {products && products.slice(PRODUCTSPERPAGE * (page - 1), PRODUCTSPERPAGE * (page)).map(product => (
                <div className="flex flex-col h-full" key={product.id}>
                    <div className="w-full flex justify-between items-center">
                        <h2 className="sm:text-2xl text-lg font-bold">{product.name}</h2>
                        <p>{product.date}</p>
                    </div>
                    <div className="relative h-[50dvh] w-full hover:opacity-90">
                        <Link href={product.dtrpg}>
                            <Image src={product.img} alt={product.name} fill className="rounded-lg" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
