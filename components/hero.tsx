import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import HeroImage from "../public/images/im2.jpg";
export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-[600px] md:min-h-[700px] flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HeroImage}
          alt="Azienda Agricola Serrea - Italian farm in Basilio"
          className="w-full h-full object-cover opacity-40 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6 animate-fade-in text-center">
            Azienda Agricola Serrea – Fresh & Organic Italian Farming
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-8 animate-fade-in-delay text-center">
            Experience authentic Italian farming in the heart of Basilio. Our
            family-owned farm has been cultivating premium organic crops for
            generations, combining traditional methods with sustainable
            practices to bring you the finest agricultural products.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2 justify-center">
            <Link
              href="#about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity "
            >
              Learn More
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
