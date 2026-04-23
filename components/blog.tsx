// import { FiArrowRight } from "react-icons/fi"

// export function Blog() {
//   const posts = [
//     {
//       title: "5 Benefits of Responsible Farming",
//       excerpt: "Discover why sustainable farming is better for your health, the environment, and local communities.",
//       date: "March 15, 2024",
//       image: "/seasonal-vegetable-garden.jpg",
//     },
//     {
//       title: "Seasonal Growing Guide",
//       excerpt: "Learn which crops thrive in each season and how to maximize your garden yield throughout the year.",
//       date: "March 10, 2024",
//       image: "/seasonal-vegetable-garden.jpg",
//     },
//     {
//       title: "Farm-to-Table Recipes",
//       excerpt: "Delicious recipes featuring fresh produce straight from our fields to inspire your next meal.",
//       date: "March 5, 2024",
//       image: "/fresh-vegetables-farm-to-table-cooking.jpg",
//     },
//   ]

//   return (
//     <section id="blog" className="py-16 md:py-24 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Latest News & Tips</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
//             Stay updated with farming tips, seasonal guides, and news from our farm.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {posts.map((post, index) => (
//             <article
//               key={index}
//               className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
//             >
//               <div className="aspect-video overflow-hidden">
//                 <img
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-6">
//                 <time className="text-sm text-muted-foreground">{post.date}</time>
//                 <h3 className="text-xl font-semibold text-card-foreground mt-2 mb-3 text-balance">{post.title}</h3>
//                 <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{post.excerpt}</p>
//                 <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
//                   Read More
//                   <FiArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
