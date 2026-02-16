import React from "react";
import {
  TrendingUp,
  Brain,
  BarChart3,
  Target,
  Layers,
  Search,
  ArrowRight,
} from "lucide-react";

const Future = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Future of Digital Marketing in 2026:
              <br />
              Data, AI & Performance at Scale
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              Predictable, scalable growth powered by AI and data intelligence.
            </p>

            <button className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Strategy <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Analytics dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/*EVOLUTION CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            From Visibility to Measurable Growth
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-gray-50 p-10 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <TrendingUp className="mx-auto mb-6 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mb-4">A Decade Ago</h3>
              <p className="text-gray-600">
                Traffic, engagement and awareness were the primary focus.
              </p>
            </div>

            <div className="bg-blue-50 p-10 rounded-2xl border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <Target className="mx-auto mb-6 text-blue-700" size={40} />
              <h3 className="text-xl font-semibold mb-4 text-blue-700">In 2026</h3>
              <p className="text-gray-700">
                Revenue attribution, customer lifetime value and AI personalization dominate.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/*AI SECTION*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            AI in Digital Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: Brain, text: "Predictive audience segmentation" },
              { icon: BarChart3, text: "Smart bidding optimization" },
              { icon: Layers, text: "AI content personalization" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                >
                  <Icon className="mx-auto text-blue-600 mb-4" size={36} />
                  <p className="text-gray-700">{item.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* DATA STRATEGY*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Analytics"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Data-Driven Marketing Strategy
            </h2>

            <div className="space-y-4">
              {[
                "Advanced attribution modeling",
                "Behavioral analytics",
                "Conversion funnel optimization",
                "Customer lifetime forecasting",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition"
                >
                  <BarChart3 size={18} className="text-blue-600" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/*PERFORMANCE KPIs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Performance Marketing KPIs
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Cost per Lead",
              "Customer Acquisition Cost",
              "ROAS",
              "Revenue per Visitor",
              "Conversion Rate",
            ].map((kpi, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 font-medium"
              >
                {kpi}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEO SECTION  */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              The Role of SEO & Search in 2026
            </h2>

            <p className="text-gray-700 mb-6">
              SEO now focuses on structured data, authority building,
              and experience-driven ranking signals.
            </p>

            <button className="flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
              Learn More <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
              alt="SEO concept"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            The Future is Intelligent, Integrated & ROI-Driven
          </h2>

          <p className="text-blue-100 mb-8">
            The question is not whether marketing will evolve —
            it’s whether your strategy will evolve with it.
          </p>

          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
            Request Growth Strategy <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Future;
