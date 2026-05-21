import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import ContactForm from "../components/ContactForm";

const contactCards = [
  {
    Icon: MapPin,
    title: "Our Address",
    color: "bg-blue-500",
    lines: [
      "19-B Jindal House,",
      "Back Side Asaf Ali Road,",
      "New Delhi - 110002",
    ],
    action: null,
  },
  {
    Icon: Phone,
    title: "Phone Numbers",
    color: "bg-orange-500",
    lines: ["98104-28612", "011-2323-1567", "4011-3969"],
    action: "tel:+919810428612",
    actionLabel: "Call Now",
  },
  {
    Icon: Mail,
    title: "Email Addresses",
    color: "bg-green-500",
    lines: ["rashtriya94@yahoo.co.in", "dhanvisteel1010@gmail.com"],
    action: "mailto:rashtriya94@yahoo.co.in",
    actionLabel: "Send Email",
  },
  {
    Icon: Clock,
    title: "Business Hours",
    color: "bg-purple-500",
    lines: ["Monday – Saturday", "10:00 AM – 6:00 PM", "Sunday: Closed"],
    action: null,
  },
];

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,28,46,0.88), rgba(15,28,46,0.92)), url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Have a product requirement? Our industrial experts are ready to help
            you find the best solution.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <card.Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-[#1e3a5f] text-base mb-3">
                  {card.title}
                </h3>
                <div className="space-y-1">
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
                {card.action && (
                  <a
                    href={card.action}
                    className="mt-4 inline-flex items-center gap-1.5 text-orange-500 font-semibold text-sm hover:gap-2 transition-all"
                  >
                    {card.actionLabel}{" "}
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-10 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="mb-7">
                  <span className="section-badge">Send Inquiry</span>
                  <h2 className="section-heading mt-2">
                    Request a <span className="text-orange-500">Quote</span>
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">
                    Fill in your requirements and we'll respond within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Key Contact */}
              <div className="bg-[#1e3a5f] text-white rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-5 font-black text-xl">
                  BJ
                </div>
                <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">
                  Key Contact
                </p>
                <h3 className="font-black text-xl mb-1">Bharat Jain</h3>
                <p className="text-gray-300 text-sm mb-5">
                  Rashtriya Tubes & Fittings
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919810428612"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Phone size={15} className="text-orange-400 shrink-0" />{" "}
                    98104-28612
                  </a>
                  <a
                    href="mailto:rashtriya94@yahoo.co.in"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Mail size={15} className="text-orange-400 shrink-0" />{" "}
                    rashtriya94@yahoo.co.in
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="bg-gray-100 h-52 flex items-center justify-center flex-col gap-3 relative">
                  <iframe
                    title="Rashtriya Tubes & Fittings Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.238!3d28.636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzA5LjYiTiA3N8KwMTQnMTYuOCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 opacity-80"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-[#1e3a5f] text-sm">
                        Visit Us
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        19-B Jindal House, Back Side Asaf Ali Road, New Delhi -
                        110002
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919810428612"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-green-500/30"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L.057 23.998l6.304-1.441A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 01-5.031-1.371l-.361-.214-3.741.981.998-3.648-.235-.374A9.843 9.843 0 012.118 12C2.118 6.531 6.531 2.118 12 2.118S21.882 6.531 21.882 12 17.469 21.882 12 21.882z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-base">Chat on WhatsApp</p>
                  <p className="text-green-100 text-xs">Quick response guaranteed</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
