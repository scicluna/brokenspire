'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
    const path = usePathname()
    const [drawer, setDrawer] = useState(false)
    return (
        <>
            <button className="fixed top-5 left-5 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12  hover:scale-105"
                    onClick={() => setDrawer(prev => !prev)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </button>
            <section className={`fixed top-0 left-0 h-full sm:w-1/6 w-3/4 bg-stone-600 z-30 transition-all duration-200 ${drawer ? 'translate-x-none' : '-translate-x-[400%]'}`}>
                <button className="absolute top-0 right-0 p-2" onClick={() => setDrawer(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  hover:scale-105 hover:text-stone-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col h-full w-full text-3xl gap-6 p-4">
                    <h1 className="font-light text-xl">Have a look around!</h1>
                    <div className="flex flex-col gap-4 p-2">
                        <Link href={'/'} className={`flex items-center gap-2 hover:text-stone-400 ${path.replace('/', "") === "" ? 'text-stone-400' : null}`} onClick={() => setDrawer(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <p>Home</p>
                        </Link>
                        <Link href={'/modules?page=1'} className={`flex items-center gap-2 hover:text-stone-400 ${path.includes('/modules') ? 'text-stone-400' : null}`} onClick={() => setDrawer(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            <p>Modules</p>
                        </Link>
                        <Link href={'/contact'} className={`flex items-center gap-2 hover:text-stone-400 ${path.includes('/contact') ? 'text-stone-400' : null}`} onClick={() => setDrawer(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <p>Contact</p>
                        </Link>
                        <Link href={'/about'} className={`flex items-center gap-2 hover:text-stone-400 ${path.includes('/about') ? 'text-stone-400' : null}`} onClick={() => setDrawer(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p>About Us</p>
                        </Link>
                    </div>
                </div>
            </section >
            <section className={`fixed top-0 left-0 h-full w-full bg-black z-20  ${drawer ? 'pointer-events-auto opacity-80' : 'pointer-events-none opacity-0'} transition-opacity duration-300`} onClick={() => setDrawer(false)} />
        </>
    )
}