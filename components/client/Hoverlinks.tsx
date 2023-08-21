'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Hoverlinks() {
    const path = usePathname()
    return (
        <>
            <Link className={`w-fit hover:text-stone-400 ${path.replace('/', "") === "" ? 'text-stone-400' : null}`} href={'/'}>Home</Link>
            <Link className={`w-fit hover:text-stone-400 ${path.includes('/modules') ? 'text-stone-400' : null}`} href={'/modules?page=1'}>Modules</Link>
            <Link className={`w-fit hover:text-stone-400 ${path.includes('/contact') ? 'text-stone-400' : null}`} href={'/contact'}>Contact</Link>
            <Link className={`w-fit hover:text-stone-400 ${path.includes('/about') ? 'text-stone-400' : null}`} href={'/about'}>About Us</Link>
        </>
    )
}