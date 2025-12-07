import Image from "next/image";
import { Pizza, Lightbulb } from "lucide-react"


const travelPhotos = [
    {
        id: 1,
        location: "Kyoto, Japan",
        description: "Hiking and experienced local Kyoto culture",
        image: "/lifestyle/nara-park.jpg"
    },

    {
        id: 2,
        location: "Arizona, USA",
        description: "otherworldly landscape",
        image:"/lifestyle/nara-park.jpg"
    },

    {
        id: 3,
        location: "Nara, Japan",
        description: "Nara Park",
        image:"/lifestyle/nara-park.jpg"
    },

]

//Data for the bottom cards (Lists)
const lists = [
    {
        id: 1,
        title: "Food Adventures",
        icon: <Pizza size={32} className="text-brand" />,
        items: ["Fruit Tea"]
    },
    {
        id: 2,
        title: "Favorite Things",
        icon: <Lightbulb size={32} className="text-brand" />,
        items: ["Watch TV Shows", "Hiking/Have a walk on a sunny day", "Breathe fresh airs"]
    }
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {lists.map((card) => (
                        <div
                        key={card.id} 
                        className="bg-brand/5 p-10 rounded-3xl flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                        >
                        <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
                            {card.icon}
                        </div>

                        <h3 className="text-xl font-bold font-heading mb-6 text-brand-dark">
                            {card.title}
                        </h3>
                        
                        <ul className="space-y-3">
                            {card.items.map((item,index) => (
                               <li key={index} className="text-text-muted text-sm font-medium">
                                    • {item}
                               </li> 
                            ))}
                        </ul>
                        </div>

                    ))}

                </div>


            </div>

        </section>
    )
}
