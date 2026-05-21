import { industries } from "../../data/industries";

export default function IndustriesServed() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge">Industries We Serve</span>
          <h2 className="section-heading">
            Trusted Across{" "}
            <span className="text-orange-500">Multiple Industries</span>
          </h2>
          <p className="section-subheading mx-auto mt-4 text-center">
            Our industrial-grade products power critical operations across
            diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-14 h-14 bg-[#1e3a5f]/8 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <ind.Icon
                  size={26}
                  className="text-[#1e3a5f] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-[#1e3a5f] text-sm mb-2 group-hover:text-orange-600 transition-colors">
                {ind.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed hidden group-hover:block">
                {ind.description}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:hidden">
                {ind.description.substring(0, 55)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
