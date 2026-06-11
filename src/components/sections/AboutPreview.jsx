import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "36+ Years of Industry Experience",
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
                src="/HEADER/ABOUT.png"
                alt="Heavy industrial manufacturing"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full shadow-2xl border-[6px] border-white bg-white overflow-hidden z-10">
              <img src="/32-years-badge.png" alt="32 Years Anniversary" className="w-full h-full object-contain" />
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
              We have pleasure in introducing ourselves as one of the leading
              importers, stockists and dealers of all kinds of ferrous and
              non-ferrous metals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With our commitment to quality and services, we have emerged as
              the market leaders in this field over a period of more than a
              decade now, dealing in all grades of Stainless Steel, Carbon
              Steel, and Alloy Steel.
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
