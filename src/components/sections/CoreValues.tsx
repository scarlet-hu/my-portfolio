import { Rocket, Send, Users } from "lucide-react";

const values = [
    {
        id: 1,
        title: "Create",
        text: "End-to-End. Whether it's wrestling with backend logic or tweaking CSS pixels, I’m happy as long as I’m building. I thrive in the space where systems and design meet.",
        icon: <Rocket size={40} />,
        // Shape: Top-left heavy
        shapeClass: "rounded-[38%_62%_63%_37%/41%_44%_56%_59%]",
    },
    {
        id: 2,
        title: "Explore",
        text: "I’m constantly tinkering with new frameworks and libraries to sharpen my skills and find better ways to code.",
        icon: <Send size={40} />,
        // Shape: Bottom-heavy
        shapeClass: "rounded-[55%_45%_39%_61%/50%_36%_64%_50%]",
    },
    {
        id: 3,
        title: "Deliver",
        text: 'Getting It Done. I’m a "shipper". I take pride in writing clean, reliable code and crossing the finish line without getting bogged down in analysis paralysis.',
        icon: <Users size={40} />,
        // Shape: Organic oval
        shapeClass: "rounded-[42%_58%_48%_52%/44%_58%_42%_56%]",
    },
]

export default function CoreValues() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-widest text-text-muted mb-2">
                        What I Do
                    </h2>

                    {/* #TODO: might want to add decorative line or small subtext*/}
                </div>

                {/* The Blob Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {values.map((value) => (
                        <div
                            key={value.id}
                            className={`
                        ${value.shapeClass} 
                        bg-brand 

                        /* --- LAYOUT --- */
                        text-white 
                        p-10 min-h-[320px] 
                        flex flex-col items-center justify-center text-center 
                        shadow-xl transition-transform hover:scale-105 duration-300
                        `}
                        >
                            <div className="mb-6 opacity-90">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-heading">
                                {value.title}
                            </h3>
                            <p className="text-sm leading-relaxed opacity-90 font-sans">
                                {value.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}