import spiderhollows from "@/public/images/modules/spiderhollows.jpg"
import coinsforcorpses from "@/public/images/modules/coinsforcorpses.jpg"
import { StaticImageData } from "next/image"

export type Product = {
    id: number
    name: string
    date: string
    img: StaticImageData
    dtrpg: string
}

//add new entries in order
export const products: Product[] = [
    { id: 0, name: "Death in the Spider Hollows", date: "8/17/2023", img: spiderhollows, dtrpg: "https://www.drivethrurpg.com/" },
    { id: 1, name: "Coins for Corpses", date: "8/25/2023", img: coinsforcorpses, dtrpg: "https://www.drivethrurpg.com/" },

]