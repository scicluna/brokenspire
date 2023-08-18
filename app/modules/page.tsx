'use client'
import { products } from "@/products/products"
import { useSearchParams, useRouter } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"

export default function Modules() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '1')
    const PRODUCTSPERPAGE = 10
    const range = (n: number) => Array.from(Array(n).keys())

    return (
        <section className="h-full w-full flex flex-col items-center p-10 min-h-[100dvh]">
            <div className="grid grid-cols-2 gap-5 w-3/4 p-2">
                {products && products.slice(PRODUCTSPERPAGE * (page - 1), PRODUCTSPERPAGE * (page)).map(product => (
                    <div className="flex flex-col h-full" key={product.id}>
                        <div className="w-full flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{product.name}</h2>
                            <p>{product.date}</p>
                        </div>
                        <div className="relative h-[50dvh] w-full hover:opacity-95">
                            <Link href={product.dtrpg}>
                                <Image src={product.img} alt={product.name} fill />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex sm:w-3/4 justify-around p-2">
                <div className="w-full flex justify-start items-start text-xl font-bold">
                    {page !== 1 && <button onClick={() => router.push(`/modules?page=${page - 1}`)}>Prev</button>}
                </div>
                <div className="flex gap-2 text-xl font-bold">
                    {range(Math.ceil(products.length / PRODUCTSPERPAGE)).map((_, i) => (
                        <Link key={i} href={`/modules?page=${i + 1}`} className={`${page === i + 1 ? 'text-stone-600' : 'text-stone-300'}`}>
                            {i + 1}
                        </Link>
                    ))}
                </div>
                <div className=" w-full flex justify-end items-start text-xl font-bold">
                    {PRODUCTSPERPAGE * page < products.length && <button onClick={() => router.push(`/modules?page=${page + 1}`)}>Next</button>}
                </div>
            </div>
        </section>
    )
}