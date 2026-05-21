import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, ArrowRight, Eye } from "lucide-react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import CTABanner from "../components/sections/CTABanner";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const activeCategory = searchParams.get("category") || "all";

  const setCategory = (slug) => {
    if (slug === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", slug);
    }
    setSearchParams(searchParams);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.categorySlug === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.grade?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

  const activeCategoryLabel =
    activeCategory === "all"
      ? "All Products"
      : categories.find((c) => c.slug === activeCategory)?.title || "Products";

  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,28,46,0.88), rgba(15,28,46,0.92)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Product <span className="text-orange-500">Catalogue</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Browse our complete range of industrial metals, pipes, fittings, and
            raw materials.
          </p>
        </div>
      </section>

      <div className="bg-[#f8fafc] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Search + filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products by name, grade, or description..."
                className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-gray-200 bg-white focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/10 outline-none text-sm shadow-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-700 shadow-sm"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar */}
            <aside
              className={`shrink-0 w-64 ${
                sidebarOpen
                  ? "fixed inset-0 z-40 bg-black/50 md:relative md:inset-auto md:bg-transparent"
                  : "hidden md:block"
              }`}
              onClick={(e) => {
                if (e.target === e.currentTarget) setSidebarOpen(false);
              }}
            >
              <div
                className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-5 h-fit sticky top-24 ${
                  sidebarOpen
                    ? "fixed left-0 top-0 h-full w-72 rounded-none overflow-y-auto z-50"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-black text-[#1e3a5f] text-base">
                    Categories
                  </h3>
                  {sidebarOpen && (
                    <button onClick={() => setSidebarOpen(false)}>
                      <X size={20} className="text-gray-400" />
                    </button>
                  )}
                </div>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setCategory("all")}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        activeCategory === "all"
                          ? "bg-orange-500 text-white"
                          : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                      }`}
                    >
                      All Products
                      <span className="ml-2 text-xs opacity-60">
                        ({products.length})
                      </span>
                    </button>
                  </li>
                  {categories.map((cat) => {
                    const count = products.filter(
                      (p) => p.categorySlug === cat.slug
                    ).length;
                    return (
                      <li key={cat.id}>
                        <button
                          onClick={() => setCategory(cat.slug)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                            activeCategory === cat.slug
                              ? "bg-orange-500 text-white"
                              : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                          }`}
                        >
                          {cat.title}
                          <span className="ml-2 text-xs opacity-60">
                            ({count})
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Products are added regularly. Contact us for specific
                    requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-3 flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Send Inquiry <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-black text-[#1e3a5f] text-lg">
                    {activeCategoryLabel}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
                    found
                  </p>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-bold text-gray-700 text-lg mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500 mb-5">
                    Try a different search term or category.
                  </p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setCategory("all");
                    }}
                    className="text-orange-500 font-semibold hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group hover:-translate-y-1"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.grade && (
                          <span className="absolute top-3 left-3 bg-[#1e3a5f]/90 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                            {product.grade}
                          </span>
                        )}
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="absolute inset-0 flex items-center justify-center bg-[#0f1c2e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-white text-[#1e3a5f] font-bold px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                            <Eye size={16} /> Quick View
                          </div>
                        </button>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-[#1e3a5f] text-base mb-1">
                          {product.name}
                        </h3>
                        {product.size && (
                          <p className="text-orange-500 text-xs font-semibold mb-2">
                            Size: {product.size}
                          </p>
                        )}
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="flex-1 bg-[#1e3a5f] hover:bg-[#2a5298] text-white text-sm font-bold py-2.5 rounded-lg transition-colors"
                          >
                            View Details
                          </button>
                          <Link
                            to="/contact"
                            className="flex-1 bg-orange-50 hover:bg-orange-500 text-orange-500 hover:text-white text-sm font-bold py-2.5 rounded-lg transition-all text-center"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Scalability note */}
              <div className="mt-10 bg-white border border-dashed border-gray-300 rounded-2xl p-8 text-center">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-bold text-gray-700 mb-2">
                  More Products Coming Soon
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Our catalogue is regularly updated. Contact us for specific
                  product inquiries.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-orange-600 transition-colors"
                >
                  Send Product Inquiry <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
              >
                <X size={18} className="text-gray-700" />
              </button>
              {selectedProduct.grade && (
                <span className="absolute bottom-4 left-4 bg-[#1e3a5f] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                  Grade: {selectedProduct.grade}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-black text-[#1e3a5f] text-xl mb-2">
                {selectedProduct.name}
              </h3>
              {selectedProduct.size && (
                <p className="text-orange-500 text-sm font-semibold mb-3">
                  Available Size: {selectedProduct.size}
                </p>
              )}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {selectedProduct.description}
              </p>
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-center transition-colors text-sm"
                >
                  Request Quote
                </Link>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 border border-gray-200 text-gray-600 font-bold py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTABanner />
    </main>
  );
}
