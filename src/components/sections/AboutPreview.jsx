import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "30+ Years of Industry Experience",
  "Pan-India Distribution Network",
  "ISO Certified Product Range",
  "10,000+ Products in Stock",
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Industrial warehouse"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-2xl shadow-blue-900/20 p-5 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-xl">30</span>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-sm">Years of</div>
                  <div className="text-orange-500 font-black text-sm">Industrial Excellence</div>
                </div>
              </div>
            </div>
            {/* Accent dot grid */}
            <div
              className="absolute -top-5 -left-5 w-24 h-24 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, #1e3a5f 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          {/* Text side */}
          <div>
            <span className="section-badge">About Us</span>
            <h2 className="section-heading mb-5">
              Your Trusted Partner in{" "}
              <span className="text-orange-500">Industrial Metals</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rashtriya Tubes & Fittings is a trusted name in the metal and
              piping industry, specializing in the supply of superior-grade
              Stainless Steel, Carbon Steel, Mild Steel, Alloy Steel, and
              Industrial Fittings.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We deliver products designed to withstand demanding industrial
              applications while ensuring high performance, corrosion
              resistance, and long service life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2a5298] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/25"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
