import { features } from "../../data/features";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0f1c2e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-500/15 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            The Rashtriya{" "}
            <span className="text-orange-500">Advantage</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Over 36+ years of trusted service, quality commitment, and customer-first values
            set us apart in the industrial supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.id}
              className="group bg-white/5 hover:bg-white/10 border border-white/8 hover:border-orange-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-orange-500/15 group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <feat.Icon
                  size={22}
                  className="text-orange-400 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
