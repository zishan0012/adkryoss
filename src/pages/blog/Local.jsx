import React from "react";
import {
  MapPin,
  Star,
  Search,
  Link,
  MessageSquare,
  TrendingUp,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const Local = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Local SEO & Hyperlocal Marketing in 2026:
              <br />
              The Complete Growth Blueprint
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              If your business isn’t dominating local search,
              your competitors are.
            </p>

            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition">
              Dominate Local Search <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764b8a"
              alt="Google Maps Local Search"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHAT IS LOCAL SEO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              What Is Local SEO in 2026?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Local SEO is the process of optimizing your digital presence
              to rank for location-based searches and dominate
              high-intent “near me” queries.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
              alt="Local Search Results"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY LOCAL SEO MATTERS ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Why Local SEO Is More Powerful Than Ever
          </h2>
          <p className="text-gray-700 mb-8">
            Over 70% of local searches result in action within 24 hours.
            Local visibility drives immediate revenue.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Mobile-First Indexing",
              "Voice Search Growth",
              "Zero-Click Map Pack Dominance",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <TrendingUp className="mx-auto text-green-500 mb-4" size={32} />
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= RANKING FACTORS ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12">
            Primary Local SEO Ranking Factors
          </h2>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              { icon: MapPin, text: "Google Business Optimization" },
              { icon: Search, text: "Local Keyword Strategy" },
              { icon: MessageSquare, text: "Online Reviews" },
              { icon: Link, text: "Local Citations & Backlinks" },
              { icon: Star, text: "Engagement Signals" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="mx-auto text-green-500 mb-4" size={32} />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= HYPERLOCAL SECTION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1483721310020-03333e577078"
              alt="Hyperlocal Targeting"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Hyperlocal Marketing: Next-Level Targeting
            </h2>
            <p className="text-gray-700">
              Hyperlocal marketing targets specific neighborhoods,
              communities, and micro-locations to increase
              lead quality and conversion rates.
            </p>
          </div>

        </div>
      </section>

      {/* ================= AI IN LOCAL SEO ================= */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12">
            AI & Local Search Optimization
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Conversational Search Optimization",
              "AI-Powered Analytics",
              "Engagement-Based Ranking Signals",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Target className="mx-auto text-green-500 mb-4" size={32} />
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= REVENUE SECTION ================= */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            How Local SEO Drives Revenue
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Higher Conversion Rates",
              "Reduced Paid Dependency",
              "Inbound Lead Generation",
              "Improved Customer Retention",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <BarChart3 className="mx-auto text-green-500 mb-3" size={24} />
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-white font-bold mb-6">
            Local Visibility Equals Market Control
          </h2>

          <p className="text-blue-100 mb-8">
            Master Google Map Pack rankings, hyperlocal targeting,
            and AI-driven personalization to dominate your market.
          </p>

          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Start Local SEO Strategy <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Local;
