import React from "react";
import {
  Brain,
  Search,
  BarChart3,
  Target,
  Sparkles,
  LineChart,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const AI = () => {
  return (
    <>
      {/*HERO*/}
      <section className="relative py-28 bg-gradient-to-r from-purple-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AI in Digital Marketing:
              <br />
              Transforming Online Growth in 2026
            </h1>

            <p className="text-purple-100 text-lg mb-8">
              AI is redefining digital marketing. Brands that adapt will lead.
            </p>

            <button className="flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore AI Strategy <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Marketing"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/*UNDERSTANDING AI*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Understanding AI in Digital Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: BarChart3, text: "Analyze massive consumer datasets" },
              { icon: Target, text: "Predict customer behavior" },
              { icon: Sparkles, text: "Personalize user experiences" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="mx-auto text-purple-600 mb-4" size={36} />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/*AI IN SEO*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
              alt="AI SEO"
              className="rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              AI in SEO: Smarter Optimization
            </h2>

            <div className="space-y-4">
              {[
                "Advanced keyword clustering",
                "Content gap analysis",
                "Predictive ranking models",
                "AI-driven technical audits",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:bg-purple-50 transition"
                >
                  <Search size={18} className="text-purple-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/*AI IN PERFORMANCE*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            AI in Performance Marketing & Paid Ads
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Smart bidding automation",
              "Predictive audience targeting",
              "Creative variation testing",
              "Real-time optimization",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Brain className="mx-auto text-purple-600 mb-4" size={36} />
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/*PERSONALIZATION*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              AI-Powered Personalization
            </h2>

            <div className="space-y-4">
              {[
                "Product recommendations",
                "Dynamic email campaigns",
                "Behavior-based retargeting",
                "Chatbots & conversational AI",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:bg-purple-50 transition"
                >
                  <Sparkles size={18} className="text-purple-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4f50e7b6a9"
              alt="AI Personalization"
              className="rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>

      {/*PREDICTIVE ANALYTICS*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            AI & Predictive Analytics
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Sales forecasting",
              "High-intent audience prediction",
              "Churn probability modeling",
              "Campaign performance projections",
              "Customer lifecycle modeling",
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-medium"
              >
                <LineChart className="mx-auto mb-3 text-purple-600" size={28} />
                {metric}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/*RISKS*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Risks of Over-Automation
          </h2>

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition">
            <ShieldAlert className="mx-auto text-red-500 mb-4" size={40} />
            <p className="text-gray-700">
              Over-reliance on AI can lead to generic brand voice,
              reduced authenticity, and algorithm dependency.
              Balanced integration ensures long-term credibility.
            </p>
          </div>

        </div>
      </section>

      {/*CTA*/}
      <section className="py-28 bg-purple-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-white font-bold mb-6">
            AI Is a Multiplier — Not a Replacement
          </h2>

          <p className="text-purple-100 mb-8">
            Combine artificial intelligence with strategy and human insight
            to build scalable, measurable growth systems.
          </p>

          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
            Build AI Strategy <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default AI;
