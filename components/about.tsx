import { FiCheck, FiAward, FiHeart, FiUsers } from "react-icons/fi"

export function About() {
  const features = [
    {
      icon: FiAward,
      title: "Certified Organic",
      description: "USDA certified organic farming practices for the highest quality produce",
    },
    {
      icon: FiHeart,
      title: "Sustainable Methods",
      description: "Eco-friendly farming that protects our environment for future generations",
    },
    {
      icon: FiUsers,
      title: "Family-Owned",
      description: "Third generation farm with deep roots in our community since 1952",
    },
    {
      icon: FiCheck,
      title: "Quality Assured",
      description: "Every harvest is carefully inspected to ensure premium freshness",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">About GreenHarvest Farms</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            For over 70 years, we've been cultivating the finest organic produce with care, dedication, and respect for
            the land. Our commitment to sustainable agriculture ensures every product meets the highest standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
