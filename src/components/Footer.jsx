import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { categories } from "../data/categories";

// Inline SVG social icons (lucide-react v0.5+ removed brand icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" mmmx2="17.51" y2="6.5" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-[#0f1c2e] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="Rashtriya Tubes & Fittings Logo" 
                className="h-14 w-auto object-contain bg-white/10 rounded p-1" 
              />
              <div>
                <div className="text-white font-black text-lg flex items-baseline">
                  R<span className="text-[26px] font-serif italic text-orange-500 px-px">A</span>shtriya
                </div>
                <div className="text-orange-400 text-[11px] font-bold tracking-widest uppercase mt-0.5">
                  Tubes & Fittings
                </div>
                <div className="mt-1.5 inline-flex items-center gap-1 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-2 py-0.5 rounded border border-orange-400/20 shadow-sm transform -skew-x-6">
                  <span className="text-[10px] font-black italic tracking-wider transform skew-x-6">36TH ANNIVERSARY</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Trusted supplier of premium stainless steel, carbon steel, and
              industrial fittings. Delivering quality and reliability since
              inception.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, href: "#", label: "Facebook" },
                { Icon: InstagramIcon, href: "#", label: "Instagram" },
                { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                { Icon: TwitterIcon, href: "#", label: "X / Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orange-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-orange-500">
              Quick Links
            </h4>
            <ul className="space-y-3 mt-4">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm group"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform text-orange-500"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-orange-500">
              Product Categories
            </h4>
            <ul className="space-y-3 mt-4">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm group"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform text-orange-500"
                    />
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-orange-500">
              Contact Us
            </h4>
            <ul className="space-y-4 mt-4">
              <li>
                <div className="flex gap-3">
                  <MapPin
                    size={16}
                    className="text-orange-500 mt-0.5 shrink-0"
                  />
                  <span className="text-gray-400 text-sm">
                    <strong>Office:</strong> 101, 1st Floor, B-Wing, Pankaj Heights, Mumbai<br/>
                    <strong>Factory:</strong> Vasai East, Palghar, Maharashtra<br/>
                    <strong>Warehouse:</strong> KEC, Panvel, Raigarh
                  </span>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-1">
                  {["98104-28612", "011-2323-1567", "4011-3969"].map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/[-\s]/g, "")}`}
                      className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      <Phone size={14} className="text-orange-500 shrink-0" />
                      {num}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-1">
                  {[
                    "rashtriya94@yahoo.co.in",
                    "dhanvisteel1010@gmail.com",
                  ].map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm break-all"
                    >
                      <Mail size={14} className="text-orange-500 shrink-0" />
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rashtriya Tubes & Fittings. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Bharat Jain — Industrial Supplies, Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
