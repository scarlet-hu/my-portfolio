// src/app/page.tsx
import Hero from "@/src/components/sections/Hero";
// import CoreValues from "@/src/components/sections/CoreValues";
// import Projects from "@/components/sections/Projects";
// import MyWorld from "@/components/sections/MyWorld";
// import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-text-main">
      <Hero />
      {/* <CoreValues />
      <Projects />
      <MyWorld />
      <Footer /> */}
    </main>
  );
}