import herobanner from "@/public/images/brokenspirelogo.jpg"
import logoblur from "@/public/images/logoblur.jpg"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="h-[70dvh] sm:h-[100dvh] relative">
            <Image src={herobanner} alt={"brokenspire banner"} fill placeholder="blur" blurDataURL={`${logoblur}`} />
        </section>
    )
}