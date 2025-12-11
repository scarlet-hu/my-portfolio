'use client'
import Image from "next/image";
import { Pizza, Lightbulb, Clapperboard } from "lucide-react";


const travelPhotos = [
    {
        id: 1,
        location: "Nara Park, Japan",
        description: "A simple, relaxing park filled with nature, temples, and gentle deer.",
        image: "/lifestyle/nara-park.jpg"
    },

    {
        id: 2,
        location: "Antelope Canyon, USA",
        description: "Where carved sandstone waves catch fire in the light",
        image: "/lifestyle/antelope canyon 2.jpg"
    },

    {
        id: 3,
        location: "Kumono Kodo Trail, Japan",
        description: "Mid-section, love the trail",
        image: "/lifestyle/kumono.jpg"
    },

]

//Data for the bottom cards (Lists)
const lists = [
    {
        id: 2,
        title: "Favorite Things",
        icon: <Lightbulb size={32} className="text-brand" />,
        items: ["Watch TV Shows & Movies", "Hiking/Have a walk on a sunny day", "Breathe fresh airs"]
    },
    {
        id: 3,
        title: "Favorite Movies & TV Shows",
        icon: <Clapperboard size={32} className="text-brand" />,
        items: ["Interstellar", "La La Land", "Severance", "Westworld Season 1", "The Night Agent Season 1"]
    },
    {
        id: 3,
        title: "Food Adventures",
        icon: <Pizza size={32} className="text-brand" />,
        items: ["Fruit Tea", "Beef Rice Noodle Soup", "Pistachio Ice Cream (This flavor tastes sooo good)"]
    },
];

export default function MyWorld() {

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Main Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-widest text-text-muted mb-2">
                        My World
                    </h2>
                </div>

                {/* Part 1: Travel Highlights */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold font-heading mb-8 text-text-main">
                        Travel Highlights
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            travelPhotos.map((photo) => (
                                <div key={photo.id} className="group cursor-pointer">
                                    {/* Image Container with rounded corners */}
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md mb-4">
                                        <Image
                                            src={photo.image}
                                            alt={photo.location}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <h4 className="font-bold text-lg text-text-main">{photo.location}</h4>
                                    <p className="font-bold text-lg text-text-main">{photo.description}</p>

                                </div>

                            ))
                        }
                    </div>
                </div>

                {/* Part 2: Info Cards (Food & Favorites) */}
                <div className="w-full">
                    {/* Container */}
                    <div
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
                    >

                        {lists.map((card) => (
                            <div
                                key={card.id}
                                // CALCULATION: (100% - gap) / 2 columns
                                // gap-8 is 2rem. So we subtract 1rem from 50% to fit 2 perfectly.
                                // On mobile (default), we make it full width (min-w-full) or slightly smaller (min-w-[85%]) to show hint of next card.
                                className="
                        flex-shrink-0 
                        min-w-[85%] md:min-w-[calc(50%-1rem)] 
                        snap-center 
                        bg-brand/5 p-10 rounded-3xl flex flex-col items-center text-center 
                        hover:shadow-lg transition-shadow duration-300
                    "
                            >
                                <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
                                    {card.icon}
                                </div>

                                <h3 className="text-xl font-bold font-heading mb-6 text-brand-dark">
                                    {card.title}
                                </h3>

                                <ul className="space-y-3">
                                    {card.items.map((item, index) => (
                                        <li key={index} className="text-text-muted text-sm font-medium">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}
