import { FiTruck, FiBook, FiMapPin, FiUsers } from "react-icons/fi"

export function Services() {
  const services = [
    {
      icon: FiTruck,
      title: "Farm-to-Door Delivery",
      description:
        "Fresh produce delivered directly to your doorstep within 24 hours of harvest. Available throughout the region with flexible scheduling.",
    },
    {
      icon: FiBook,
      title: "Educational Workshops",
      description:
        "Learn sustainable farming techniques, organic gardening, and composting through our hands-on workshops and seminars.",
    },
    {
      icon: FiMapPin,
      title: "Farm Tours",
      description:
        "Experience our farm firsthand with guided tours. See our sustainable practices and meet the team behind your food.",
    },
    {
      icon: FiUsers,
      title: "Agricultural Consulting",
      description:
        "Expert guidance for aspiring farmers and gardeners. Get personalized advice on organic farming and sustainable practices.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Beyond fresh produce, we offer comprehensive services to support your organic lifestyle and farming
            aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
