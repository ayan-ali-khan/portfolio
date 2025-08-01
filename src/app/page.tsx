import ContactSection from "@/components/ContactSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02] antialiased">
      {/* <div className="text-2xl text-center">Hello</div> */}
      <HeroSection/>
      <FeaturedProjects />
      <ContactSection />
      <footer>
        <p className='font-semibold text-base text-center md:text-md text-neutral-300 max-w-lg mx-auto'>Made with ❤️ by Ayan</p>
      </footer>
    </main>
  );
}
