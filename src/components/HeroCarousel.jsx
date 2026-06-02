import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const CAROUSEL_IMG = (filename) => `/crousel/${encodeURIComponent(filename)}`;

const slides = [
  {
    id: 1,
    title: "Heavy-Duty Roll Forming",
    subtitle: "Precision Metal Shaping",
    description:
      "State-of-the-art automated machinery for seamless profile crafting and precision steel forming.",
    image: CAROUSEL_IMG("WhatsApp Image 2026-05-25 at 12.36.43 PM.jpeg"),
    cta: "Explore Pipes",
    link: "/products?category=welded-seamless-pipes",
  },
  {
    id: 2,
    title: "Automated Steel Processing",
    subtitle: "Advanced Fabrication Technology",
    description:
      "Cutting-edge robotic manufacturing systems delivering reliable quality and maximum industrial efficiency.",
    image: CAROUSEL_IMG("WhatsApp Image 2026-05-25 at 12.36.54 PM.jpeg"),
    cta: "View Sheets",
    link: "/products?category=sheet-coil-plate",
  },
  {
    id: 3,
    title: "High-Precision CNC Machining",
    subtitle: "Flanges, Valves & Components",
    description:
      "Computer-controlled heavy milling machinery for micro-tolerance valves and perfectly calibrated industrial flanges.",
    image: CAROUSEL_IMG("WhatsApp Image 2026-05-25 at 12.36.59 PM.jpeg"),
    cta: "View Valves",
    link: "/products?category=industrial-valves-flanges",
  },
  {
    id: 4,
    title: "Heavy Metal Smelting & Rolling",
    subtitle: "Industrial Raw Materials",
    description:
      "Massive roll mills and smelting plants engineered to produce high-tensile rods, wire coils, and structural angles.",
    image: CAROUSEL_IMG("WhatsApp Image 2026-05-25 at 12.37.05 PM.jpeg"),
    cta: "Explore Materials",
    link: "/products",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="h-[580px] md:h-[680px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full flex items-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(15,28,46,0.92) 0%, rgba(15,28,46,0.65) 60%, rgba(15,28,46,0.3) 100%), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="max-w-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block bg-orange-600/90 text-white text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border border-orange-500">
                      Celebrating 36 Years (1994 - 2026)
                    </span>
                    <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                      {slide.subtitle}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-7">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.link}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
                  >
                    {slide.cta}
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
