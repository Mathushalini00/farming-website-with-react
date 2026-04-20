import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Gallery />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
