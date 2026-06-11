import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import AboutPreview from "../components/sections/AboutPreview";
import ProductCategories from "../components/sections/ProductCategories";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import IndustriesServed from "../components/sections/IndustriesServed";
import CTABanner from "../components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative bg-hero-pattern min-h-[92vh] flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl"
              >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              >
                New Delhi's Trusted Industrial Supplier
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 uppercase tracking-wider"
              >
                Rashtriya
                <br />
                <span className="text-orange-500">Tubes &</span>
                <br />
                Fittings
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-xl leading-relaxed mb-10 max-w-xl"
              >
                Your Trusted Partner for Industrial Tubes, Pipes & Fittings.
                Premium quality. Timely delivery. Competitive pricing.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/40"
                >
                  View Products <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group h-[500px]">
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img
                  src="/industrial_files/japan-industrial-zone-mountain-fuji-shizuoka-prefecture_1028938-199346.jpg"
                  alt="Industrial Facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-10 left-0 right-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
              <div className="flex flex-wrap gap-8 mt-20">
                {[
                  { value: "30+", label: "Years Experience" },
                  { value: "10K+", label: "Products in Stock" },
                  { value: "500+", label: "Happy Clients" },
                  { value: "Pan India", label: "Distribution" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="h-10 w-0.5 bg-orange-500/60 hidden sm:block" />
                    <div>
                      <div className="text-orange-400 font-black text-xl leading-none">
                        {value}
                      </div>
                      <div className="text-gray-400 text-xs font-medium mt-0.5">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-6">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white/40"
          >
            <ChevronDown size={28} />
          </motion.div>
        </div>
      </section>

      {/* ─── CAROUSEL ─── */}
      <HeroCarousel />

      {/* ─── ABOUT PREVIEW ─── */}
      <AboutPreview />

      {/* ─── PRODUCT CATEGORIES ─── */}
      <ProductCategories />

      {/* ─── WHY CHOOSE US ─── */}
      <WhyChooseUs />

      {/* ─── INDUSTRIES ─── */}
      <IndustriesServed />

      {/* ─── CTA ─── */}
      <CTABanner />
    </main>
  );
}
