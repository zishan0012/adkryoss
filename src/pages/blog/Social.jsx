import React from "react";
import {
  TrendingUp,
  BarChart3,
  Target,
  Video,
  Users,
  ShoppingCart,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Social = () => {
  return (
    <>
      {/* ================= HERO (Same Blue Background) ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Social Media Marketing in 2026:
              <br />
              Data-Driven Strategies That Drive Real Business Growth
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              Social media is no longer about posting. It’s about performance.
            </p>

            <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-full font-semibold transition">
              Build Social Growth Strategy <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
              alt="Social Media Growth"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= EVOLUTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            The Evolution of Social Media Marketing
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              "Declining organic reach",
              "AI-driven paid advertising",
              "Short-form video dominance",
              "Privacy-first targeting",
              "Social commerce growth",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <TrendingUp className="mx-auto text-indigo-600 mb-3" size={28} />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY FAIL ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Why Traditional Strategies Fail
          </h2>

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition">
            <ul className="space-y-4 text-gray-700 text-left">
              <li>• Inconsistent posting</li>
              <li>• Trend-chasing without strategy</li>
              <li>• Ignoring analytics</li>
              <li>• Random post boosting</li>
              <li>• Focusing on vanity metrics</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= PLATFORM STRATEGY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Platform-Specific Strategy
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Instagram – Reels & Visual Storytelling",
              "LinkedIn – B2B Authority",
              "Facebook – Community & Retargeting",
              "YouTube Shorts – Discoverability",
              "X – Thought Leadership",
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Target className="mx-auto text-indigo-600 mb-3" size={28} />
                {platform}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= PAID SOCIAL ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Performance-Led Paid Social Campaigns
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "AI-powered audience targeting",
              "Lookalike modeling",
              "Retargeting funnels",
              "Conversion API integration",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <BarChart3 className="mx-auto text-indigo-600 mb-4" size={32} />
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= VIDEO DOMINANCE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Short-Form Video Dominance
            </h2>
            <p className="text-gray-700 mb-4">
              Short-form vertical video increases engagement, brand recall,
              and ad performance.
            </p>
            <p className="text-gray-600">
              Success depends on storytelling hooks, retention triggers,
              and strong CTAs.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <Video className="mx-auto text-indigo-600" size={80} />
          </div>

        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Community-Led Growth
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Interactive polls",
              "Live sessions",
              "User-generated content",
              "Brand ambassador programs",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Users className="mx-auto text-indigo-600 mb-3" size={28} />
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= ANALYTICS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Data-Driven Social Media Analytics
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Cost per acquisition (CPA)",
              "Customer lifetime value (CLV)",
              "Conversion rate",
              "Engagement quality",
              "Audience growth rate",
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Sparkles className="mx-auto text-indigo-600 mb-3" size={24} />
                {metric}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= SOCIAL COMMERCE ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Social Commerce & Direct Conversions
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Shoppable posts",
              "Live shopping events",
              "In-app product catalogs",
              "Direct checkout features",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <ShoppingCart className="mx-auto text-indigo-600 mb-3" size={28} />
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
            Turn Social Attention into Sustainable Revenue
          </h2>

          <p className="text-blue-100 mb-8">
            Social media marketing in 2026 is about performance,
            data, and strategic execution.
          </p>

          <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Start Scaling Social <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Social;
