import Image from "next/image";
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin} from "react-icons/fa"

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center pt-24 pb-16 px-6 max-w-3xl mx-auto">
            {/* 1.Profile Picture */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                <Image
                    src="/profile.jpg"
                    alt="Scarlett"
                    fill
                    className="object-cover rounded-full shadow-lg border-4 border-white"
                    priority
                />
            </div>

            {/* 2. Main Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 tracking-tight">
                <span className="inline-block animate-wave origin-[70%_70%] mr-2">👋</span>
                Hello, I'm Scarlett.
            </h1>

            {/*3. Subtext */}
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed">
                I build apps connecting great ideas with reality.
                Let's create something friendly, functional, and approachable together.
            </p>

            {/* 4. "View My Work" Button */}
            <button className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 mb-10">
                View My Work
            </button>

            {/** 5. Social Icons */}
            <div className="flex gap-8 text-brand-dark opacity-80">
                <a
                    href="https://github.com/scarlet-hu"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand hover:scale-110 transition-transform"
                    aria-label="Github"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand hover:scale-110 transition-transform"
                    aria-label="Linkedin"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>
        </section>
    )
}