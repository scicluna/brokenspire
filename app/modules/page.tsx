'use client'
import { products } from "@/products/products"
import { useSearchParams, useRouter } from 'next/navigation'
import Link from "next/link"
import AllProducts from "@/components/server/AllProducts"

export default function Modules() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '1')
    const PRODUCTSPERPAGE = 10
    const range = (n: number) => Array.from(Array(n).keys())

    return (
        <section className="h-full w-full flex flex-col items-center sm:p-10 py-12 min-h-[100dvh]">
            <AllProducts page={page} PRODUCTSPERPAGE={PRODUCTSPERPAGE} />
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