import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-black text-[#1e3a5f] mb-2">
          Inquiry Received!
        </h3>
        <p className="text-gray-500 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-orange-500 font-semibold hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your full name"
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
              errors.name
                ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300"
                : "border-gray-200 bg-gray-50 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/15 focus:bg-white"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-orange-500">*</span>
          </label>
          <input
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit phone number" },
            })}
            placeholder="98XXXXXXXX"
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
              errors.phone
                ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300"
                : "border-gray-200 bg-gray-50 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/15 focus:bg-white"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address
        </label>
        <input
          {...register("email", {
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" },
          })}
          placeholder="you@company.com"
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
            errors.email
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-300"
              : "border-gray-200 bg-gray-50 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/15 focus:bg-white"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Company Name
        </label>
        <input
          {...register("company")}
          placeholder="Your company or organization"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/15 focus:bg-white text-sm outline-none transition-all"
        />
      </div>

      {/* Product Requirement */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Product Requirement <span className="text-orange-500">*</span>
        </label>
        <select
          {...register("product", { required: "Please select a product category" })}
          className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
            errors.product
              ? "border-red-400 bg-red-50"
              : "border-gray-200 bg-gray-50 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/15 focus:bg-white"
          }`}
        >
          <option value="">Select product category</option>
          <option>Pipes & Tubes Welded</option>
          <option>Pipes & Tubes Seamless</option>
          <option>Sheet / Coil / Plate</option>
          <option>Wire & Rods</option>
          <option>Angle & Flat / Patti</option>
          <option>Industrial Valves & Flange</option>
          <option>Fasteners & Bolt / Nuts</option>
          <option>Fittings</option>
          <option>Other</option>
        </select>
        {errors.product && (
          <p className="text-red-500 text-xs mt-1">{errors.product.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Describe your requirement — grade, size, quantity, etc."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/15 focus:bg-white text-sm outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={18} /> Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}
