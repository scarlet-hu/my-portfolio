import Image from "next/image";
import { ArrowRight } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Iris",
        category: "Web App",
        image: "/projects/Iris.png",
        description: "A full-stack Kanban solution integrating instant messaging, task tracking, and data visualization",
        link: "#"
    },
    {
        id: 2,
        title: "MiniSpark",
        category: "multi-threaded processing Framework",
        image: "/projects/join copy.png",
        description: " A multi-threaded distributed data processing framework",
        link: "https://github.com/scarlet-hu/MiniSpark"
    },
    {
        id: 3,
        title: "Todo List",
        category: "Web App",
        image: "/projects/todolist.png",
        description: "Making daily progress visualizable",
        link: "#"
    }
]

export default function Projects() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-widest text-text-muted mb-2">
                        Featured Projects
                    </h2>
                </div>



                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group">
                            {/* Image Card */}
                            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-[4/3]">
                                {/* Note:  have images in /public/projects/ or use a placeholder URL */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Hover Overlay (Optional Polish) */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Text Content */}
                            < h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-brand transition-colors" >
                                {project.title}
                            </h3>
                            <p className="text-text-muted text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* "View Live" Link #TODO: maybe change the text back to view live later */}
                            <a
                                href={project.link}
                                className="inline-flex items-center text-brand font-bold text-sm hover:underline"
                            >
                                View Project
                                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                    ))}


                </div>
            </div>

        </section >
    )
}