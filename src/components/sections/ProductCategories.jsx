import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";

export default function ProductCategories() {
  return (
    <section className="py-20 industrial-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-badge">Our Products</span>
          <h2 className="section-heading">
            Complete Range of{" "}
            <span className="text-orange-500">Industrial Products</span>
          </h2>
          <p className="section-subheading mx-auto mt-4 text-center">
            From seamless pipes to industrial fittings — we supply everything
            your industrial operations require.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-400 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center text-lg shadow-lg">
                  {cat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-[#1e3a5f] text-base mb-2 group-hover:text-orange-500 transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  View Products <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300"
          >
            Browse All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
