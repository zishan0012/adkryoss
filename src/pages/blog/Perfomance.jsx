import React from "react";
import {
  TrendingUp,
  Target,
  BarChart3,
  Layers,
  ArrowRight,
  DollarSign,
  Activity,
  PieChart,
  LineChart,
} from "lucide-react";

const Perfomance = () => {
  return (
    <>
      {/* HERO*/}
      <section className="relative py-28 bg-gradient-to-r from-indigo-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Performance Marketing Agency:
              <br />
              The Science Behind Predictable Revenue Growth
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              Marketing should generate revenue — not just reports.
              Discover how measurable ROI drives scalable growth.
            </p>

            <button className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Request Strategy <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Performance analytics"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/*WHAT IS PERFORMANCE MARKETING*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            What is Performance Marketing?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: Target, text: "Conversion-focused advertising" },
              { icon: DollarSign, text: "ROI-driven campaigns" },
              { icon: BarChart3, text: "Advanced tracking & attribution" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="mx-auto text-blue-600 mb-4" size={36} />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/*WHY SHIFT TO ROI*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="ROI dashboard"
              className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Businesses Are Shifting to ROI-Driven Marketing
            </h2>

            <div className="space-y-4">
              {[
                "Lower Customer Acquisition Cost (CAC)",
                "Higher Return on Ad Spend (ROAS)",
                "Improved conversion rates",
                "Scalable lead generation systems",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:bg-blue-50 transition"
                >
                  <TrendingUp size={18} className="text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/*CORE PILLARS*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Core Pillars of High-Impact Performance Marketing
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { icon: Activity, text: "Paid Media Optimization" },
              { icon: Layers, text: "Full-Funnel Framework" },
              { icon: LineChart, text: "Conversion Rate Optimization" },
              { icon: PieChart, text: "Advanced Attribution Modeling" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="mx-auto text-blue-600 mb-4" size={36} />
                  <p className="font-medium text-gray-700">{item.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/*FUNNEL STRUCTURE*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Full-Funnel Performance Marketing Framework
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { title: "TOFU", desc: "Awareness campaigns targeting cold audiences." },
              { title: "MOFU", desc: "Retargeting and engagement campaigns." },
              { title: "BOFU", desc: "High-intent conversion-focused advertising." },
            ].map((stage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-700">
                  {stage.title}
                </h3>
                <p className="text-gray-600">{stage.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/*KPI SECTION*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Key Metrics That Define Success
          </h2>

          <div className="grid md:grid-cols-6 gap-6">

            {[
              "ROAS",
              "CPA",
              "CLV",
              "Conversion Rate",
              "CTR",
              "Revenue Growth %",
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                {metric}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/*CTA */}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-white font-bold mb-6">
            Performance Marketing is Not an Expense — It’s an Investment
          </h2>

          <p className="text-blue-100 mb-8">
            Transform your marketing into a measurable, scalable revenue engine.
          </p>

          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
            Start Scaling <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Perfomance;
