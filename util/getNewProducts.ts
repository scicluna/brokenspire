import { products } from "@/products/products"

export function getNewProducts() {
    return products.slice(-2)
}