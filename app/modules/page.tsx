'use client'
import { products } from "@/products/products"
import { useSearchParams, useRouter } from 'next/navigation'

export default function Modules() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '1')
    const PRODUCTSPERPAGE = 10

    return (
        <section>
            {products && products.slice(PRODUCTSPERPAGE * (page - 1), PRODUCTSPERPAGE * (page)).map(product => (
                <h1 key={product.id}>{product.name}</h1>
            ))}
            {PRODUCTSPERPAGE * page < products.length && <button onClick={() => router.push(`/modules?page=${page + 1}`)}>See More!</button>}
        </section>
    )
}