import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/azserrea.png";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaThreads } from "react-icons/fa6";
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Story", href: "#about" },
      // { label: "Careers", href: "#" },
      // { label: "Press", href: "#" },
    ],
    products: [
      { label: "Fresh Produce", href: "#products" },
      { label: "Seasonal Items", href: "#products" },
      { label: "Gift Baskets", href: "#products" },
      { label: "Wholesale", href: "#" },
    ],
    resources: [
      // { label: "Blog", href: "#blog" },
      { label: "Recipes", href: "#blog" },
      { label: "Growing Guide", href: "#blog" },
      { label: "FAQ", href: "#" },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center h-full">
              <div className="relative w-24 h-18 md:w-32 md:h-20 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={Logo}
                  alt="Azienda Agricola Serrea Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Italian family farm delivering premium crops using sustainable
              practices and traditional farming methods in the heart of Basilio.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577135920132"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/az.serrea/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40aziendaserrea.202%3F_r%3D1%26_t%3DZN-91jSFfqJrKY%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5tcYIzh-sNm096NLm8i8B8gE5njpLvvsv-yetVj8DXvD48SgpGxezC5qe-Y_aem_QbfqBE4mCjKeo2FJXe4hHw&e=AT5PmtqCoD2YzDn4cRrdvBvZ_9PUJIsJGayELCNjo1rHfpaJaDWxclascd6AGCDdpTFnskOYGQSJyE6Ha8rwz6n7LXbN7Y3t5xKPPbN3WgiOBd0AjrS4zpE1gQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>

              <a
                href="https://www.threads.com/@az.serrea?xmt=AQF0RXhFIUrIBEZG3yf3juJo29oElEtNi6ZhzLlOT8WwSvY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Threads"
              >
                <FaThreads className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-28 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Azienda Agricola Serrea. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted & Developed by
            <span className="font-medium text-foreground flex items-center gap-1">
              Mathu <span className="text-green-500">💚</span>
            </span>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
