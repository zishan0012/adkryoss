import React from "react";
import {
  BookOpen,
  Layers,
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const Content = () => {
  return (
    <>
      {/*HERO*/}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Content Marketing in 2026:
              <br />
              Building Authority, Organic Traffic & Revenue
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              Content is no longer just marketing — it’s your digital asset engine.
            </p>

            <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-full font-semibold transition">
              Build Authority Strategy <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Content Strategy"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/*EVOLUTION*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            The Evolution of Content Marketing
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "EEAT Principles",
              "Search Intent Alignment",
              "Topical Authority",
              "Semantic Depth",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <BookOpen className="mx-auto text-emerald-600 mb-4" size={36} />
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/*WHY FAIL*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Why Most Content Strategies Fail
          </h2>

          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition">
            <ul className="space-y-4 text-gray-700 text-left">
              <li>• Focus only on keywords, not intent</li>
              <li>• No internal linking structure</li>
              <li>• Low-quality AI content</li>
              <li>• No distribution strategy</li>
              <li>• No performance measurement</li>
            </ul>
          </div>

        </div>
      </section>

      {/*PILLAR & CLUSTER*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            The Pillar & Cluster Model
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-emerald-50 p-8 rounded-2xl hover:shadow-xl transition">
              <Layers className="mx-auto text-emerald-700 mb-4" size={36} />
              <h3 className="font-semibold mb-4">Pillar Page</h3>
              <p className="text-gray-700">
                A comprehensive long-form content piece covering a broad topic in depth.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition">
              <Search className="mx-auto text-emerald-600 mb-4" size={36} />
              <h3 className="font-semibold mb-4">Cluster Pages</h3>
              <p className="text-gray-700">
                Supporting long-tail keyword articles linking back to the pillar.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition">
              <TrendingUp className="mx-auto text-emerald-600 mb-4" size={36} />
              <h3 className="font-semibold mb-4">Authority Growth</h3>
              <p className="text-gray-700">
                Improves rankings, crawl efficiency, and engagement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/*STRATEGY FRAMEWORK*/}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            SEO Content Marketing Strategy Framework
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Market & Competitor Research",
              "Keyword Cluster Mapping",
              "Content Calendar Planning",
              "Optimization & Distribution",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Target className="mx-auto text-emerald-600 mb-4" size={32} />
                <p className="font-medium text-gray-700">{step}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/*REVENUE BENEFITS*/}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            How Content Marketing Drives Revenue
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Sustainable organic traffic",
              "Higher conversion rates",
              "Stronger brand credibility",
              "Lower long-term acquisition costs",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <BarChart3 className="mx-auto mb-3 text-emerald-600" size={28} />
                {benefit}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA*/}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-white font-bold mb-6">
            Authority Is the New Competitive Advantage
          </h2>

          <p className="text-blue-100 mb-8">
            If your content isn’t building authority, it’s just noise.
          </p>

          {/* CTA COLOR CHANGED TO EMERALD */}
          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Build Content Ecosystem <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Content;
