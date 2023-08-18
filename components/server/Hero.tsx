import herobanner from "@/public/images/brokenspirelogo.jpg"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="h-[70dvh] sm:h-[100dvh] relative mb-6">
            <Image src={herobanner} alt={"brokenspire banner"} fill priority={true} />
            <h1 className="absolute bottom-6 right-6 sm:text-7xl text-3xl font-extrabold text-stone-400">BROKEN SPIRE GAMES</h1>
        </section>
    )
}