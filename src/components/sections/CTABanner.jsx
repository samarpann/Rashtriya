import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#1e3a5f]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
          Looking for Reliable Industrial{" "}
          <span className="text-orange-400">Pipes & Fittings?</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Contact us today for a customized quote. Our team of industrial
          experts is ready to help you find the right product solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/30 text-base"
          >
            Get Quote
            <ArrowRight size={18} />
          </Link>
          <a
            href="tel:+919810428612"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 text-base"
          >
            <PhoneCall size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
