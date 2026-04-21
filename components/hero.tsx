import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
// Ensure this image exists in your public/images folder
import HeroImage from "../public/images/im2.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImage}
          alt="Azienda Agricola Serrea - Italian farm in Basilico"
          fill
          priority
          className="object-cover opacity-60 transition-transform duration-[10s] ease-smooth hover:scale-110"
        />
        {/* Modern Organic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-serrea-cream/20 via-serrea-cream/40 to-serrea-cream" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-serrea-green leading-[1.1] mb-8 tracking-tight">
            Azienda Agricola <br />
            <span className="text-serrea-leaf">Serrea</span>
          </h1>

          <p className="text-lg md:text-xl text-serrea-green/80 leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            Experience authentic Italian farming in the heart of Basilico. Our
            family-owned farm combines traditional methods with sustainable
            practices to bring you the finest organic products.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="#about"
              className="group inline-flex items-center gap-3 bg-serrea-green text-serrea-cream px-8 py-4 rounded-full font-medium transition-all duration-500 ease-smooth hover:bg-serrea-leaf hover:shadow-xl"
            >
              Learn More
              <FiArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>

            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-serrea-green text-serrea-green hover:bg-serrea-green/5 transition-all duration-500"
            >
              Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
