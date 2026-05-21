import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Stainless Steel Pipes",
    subtitle: "SS 304 | SS 316 | SS 316L",
    description:
      "Premium-grade stainless steel pipes engineered for high-pressure and corrosive environments.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    cta: "Explore Pipes",
    link: "/products?category=pipes-tubes-welded",
  },
  {
    id: 2,
    title: "Industrial Fittings",
    subtitle: "Elbows | Tees | Reducers | Couplings",
    description:
      "Complete range of pipe fittings in stainless, carbon, and alloy steel for every industrial need.",
    image:
      "https://images.unsplash.com/photo-1581093804475-577d72e35310?w=1600&q=80",
    cta: "View Fittings",
    link: "/products?category=fittings",
  },
  {
    id: 3,
    title: "Flanges & Valves",
    subtitle: "Slip-On | Weld-Neck | Ball Valves",
    description:
      "High-performance flanges and valves built to withstand extreme temperature and pressure.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80",
    cta: "View Flanges",
    link: "/products?category=industrial-valves-flange",
  },
  {
    id: 4,
    title: "Sheets, Plates & Coils",
    subtitle: "HR | CR | SS | Chequered",
    description:
      "Structural and fabrication-grade steel sheets and plates in all grades and thicknesses.",
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1600&q=80",
    cta: "View Sheets",
    link: "/products?category=sheet-coil-plate",
  },
  {
    id: 5,
    title: "Industrial Raw Materials",
    subtitle: "Wire | Rods | Angles | Flats",
    description:
      "A complete sourcing solution for all your industrial raw material requirements.",
    image:
      "https://images.unsplash.com/photo-1565636291267-7f37f91e3b0b?w=1600&q=80",
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
                  <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                    {slide.subtitle}
                  </span>
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
