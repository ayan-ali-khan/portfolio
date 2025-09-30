import LandingGrid from "@/components/LandingGrid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 antialiased dark:bg-black/97 dark:text-white">
      <LandingGrid />
      {/* <ContactSection /> */}
      <footer>
        <p className='font-semibold text-base text-center md:text-md text-neutral-500 max-w-lg mx-auto'>Design inspired by <span><a href="https://www.apple.com/" target="blank" className="text-black dark:text-white">apple. </a></span>Made with ❤️ by Ayan</p>
      </footer>
    </main>
  );
}
