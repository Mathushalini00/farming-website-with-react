export function Products() {
  const products = [
    {
      name: "Lemons",
      description:
        "Fresh, zesty lemons packed with vibrant citrus flavor, perfect for juices and cooking",
      image: "/images/im1.jpg",
    },
    {
      name: "Basilico",
      description:
        "Aromatic basil leaves with a rich, herbal fragrance, ideal for Italian dishes and fresh garnishes",
      image: "/images/im2.jpg",
    },
    {
      name: "Sweet Corn",
      description: "Sweet, tender corn picked at peak freshness",
      image: "/images/im4.jpg",
    },
    {
      name: "Carrots",
      description: "Crunchy, sweet carrots rich in nutrients",
      image: "/images/im5.jpg",
    },
    {
      name: "Bell Peppers",
      description: "Colorful peppers with a crisp, sweet taste",
      image: "/images/im6.jpg",
    },
    {
      name: "Fresh Herbs Bundle",
      description: "Aromatic herbs including basil, parsley, and cilantro",
      image: "/images/im7.jpg",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Fresh Crops
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Discover our selection of premium produce, harvested daily using
            traditional Italian farming methods to ensure maximum freshness and
            nutritional value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
