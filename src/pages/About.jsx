import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import IndustriesServed from "../components/sections/IndustriesServed";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CTABanner from "../components/sections/CTABanner";

const productRange = [
  {
    title: "Stainless Steel Pipes & Tubes",
    desc: "Welded and seamless pipes in SS 304, 316, 316L, 202 grades for all industrial applications.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    title: "Pipe Fittings",
    desc: "Complete range of elbows, tees, reducers, couplings, and end caps in multiple material grades.",
    image: "https://images.unsplash.com/photo-1581093804475-577d72e35310?w=600&q=80",
  },
  {
    title: "Industrial Flanges",
    desc: "Slip-on, weld-neck, blind, and threaded flanges in ASTM and IS standards.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
  },
  {
    title: "Sheets, Plates & Coils",
    desc: "HR, CR, and SS sheets in 2B, BA, No.4, and mirror finish for structural and decorative use.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80",
  },
  {
    title: "Industrial Raw Materials",
    desc: "Wire rods, angle bars, flat bars, channels, beams, and other structural steel sections.",
    image: "https://images.unsplash.com/photo-1565636291267-7f37f91e3b0b?w=600&q=80",
  },
];

const whyPoints = [
  "ISO certified material supply",
  "Test certificates provided",
  "Custom cutting & processing",
  "Competitive bulk pricing",
  "30+ years of expertise",
  "Pan-India supply capability",
  "ASTM, DIN, IS grade materials",
  "Fast turnaround on orders",
];

export default function About() {
  return (
    <main>
      {/* ─── HERO BANNER ─── */}
      <section
        className="relative py-24 md:py-32 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,28,46,0.85), rgba(15,28,46,0.9)), url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              About Rashtriya
              <br />
              <span className="text-orange-500">Tubes & Fittings</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              Delivering industrial excellence through premium quality metals
              and fittings since our inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── COMPANY INTRO ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-badge">Our Story</span>
              <h2 className="section-heading mb-6">
                Pioneering Industrial{" "}
                <span className="text-orange-500">Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Rashtriya Tubes & Fittings is a trusted name in the metal and
                  piping industry, specializing in the supply of superior-grade
                  Stainless Steel, Carbon Steel, Mild Steel, Alloy Steel, and
                  Industrial Fittings.
                </p>
                <p>
                  We deliver products designed to withstand demanding industrial
                  applications while ensuring high performance, corrosion
                  resistance, and long service life.
                </p>
                <p>
                  Backed by strong sourcing capabilities, technical expertise,
                  and a customer-centric approach, we offer solutions that meet
                  national and international quality standards.
                </p>
                <p className="font-semibold text-[#1e3a5f]">
                  We believe in delivering not just products, but dependable
                  industrial solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Industrial pipes"
                className="rounded-2xl shadow-2xl shadow-blue-900/20 w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-black">30+</div>
                <div className="text-sm font-semibold opacity-90">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT RANGE ─── */}
      <section className="py-20 industrial-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge">Product Range</span>
            <h2 className="section-heading">
              What We <span className="text-orange-500">Supply</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productRange.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge">Our Purpose</span>
            <h2 className="section-heading">
              Vision & <span className="text-orange-500">Mission</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-[#1e3a5f] text-white rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be India's most trusted and innovative industrial metals and
                fittings supplier — setting the benchmark for quality, service,
                and reliability in the B2B industrial supply chain.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-orange-500 text-white rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-orange-100 leading-relaxed">
                To deliver superior-grade industrial products with unmatched
                consistency, technical support, and competitive pricing — helping
                our customers build stronger, safer, and more efficient
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (inline) ─── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-heading">
              Reasons to <span className="text-orange-500">Trust Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
              >
                <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <IndustriesServed />

      {/* ─── CTA ─── */}
      <CTABanner />
    </main>
  );
}
