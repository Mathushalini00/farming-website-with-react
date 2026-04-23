"use client";

import { FiCheck, FiAward, FiHeart, FiUsers } from "react-icons/fi";
import Image from "next/image";
import AboutUs from "../public/images/about.jpeg";
export function About() {
  const values = [
    {
      icon: FiAward,
      title: "The Gold Standard",
      description:
        " Our regenerative practices exceed USDA requirements, focusing on soil vitality and nutrient density.",
    },
    {
      icon: FiHeart,
      title: "Ethical Stewardship",
      description:
        "We view ourselves as temporary guardians of this land, employing water-positive techniques and carbon-sequestering crops.",
    },
    {
      icon: FiUsers,
      title: "A Living Legacy",
      description:
        "The Serrea family has nurtured these hills since 2024, passing down secrets of the soil through three generations.",
    },
    {
      icon: FiCheck,
      title: "Curated Freshness",
      description:
        "Our 'Dawn-to-Door' promise: every item is hand-selected at its peak ripeness and delivered within hours.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-background transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heritage Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="aspect-[5/5] rounded-2xl bg-muted overflow-hidden shadow-2xl">
              <Image
                src={AboutUs}
                alt="Our Heritage"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Floating Badge - Dark mode compatible */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl border-4 border-background">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">
                Est.
              </span>
              <span className="text-2xl font-serif font-bold">2024</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm italic">
              Our Essence
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight">
              Basilico: The Heart of <br />
              <span className="italic text-muted-foreground/80 dark:text-muted-foreground">
                Italian Excellence.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In the rolling hills of Genova, "Basilico" is more than a herb—it
              is a symbol of hospitality, health, and heritage. Since 2024, the
              Serrea family has cultivated this "King of Herbs" alongside a
              curated selection.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our philosophy is simple: nature needs no correction. By nurturing
              the soil of our ancestral farm, we produce ingredients that carry
              the fragrance of the Mediterranean breeze and the warmth of the
              Italian sun.
            </p>
            <div className="pt-4">
              <button className="relative group text-foreground font-semibold uppercase text-sm tracking-widest">
                <span className="relative z-10">Explore Our Heritage</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-medium text-card-foreground mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
