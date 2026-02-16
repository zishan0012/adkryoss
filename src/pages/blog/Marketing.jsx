import React from "react";
import {
  Workflow,
  Mail,
  Users,
  Database,
  BarChart3,
  Target,
  Zap,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const Marketing = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Marketing Automation & CRM Integration:
              <br />
              The Scalable Growth Engine for Modern Businesses
            </h1>

            <p className="text-blue-100 text-lg mb-8">
              Automate smarter. Convert faster. Scale without chaos.
            </p>

            <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full font-semibold transition">
              Build Automation System <ArrowRight size={18} />
            </button>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Marketing Automation Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY AUTOMATION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Marketing Automation Is No Longer Optional
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Modern buyers expect instant responses, personalization,
              and seamless omnichannel experiences.
              Manual systems cannot deliver this at scale.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="CRM Dashboard"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= WHAT IS AUTOMATION + CRM ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            What Is Marketing Automation & CRM Integration?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              { icon: Mail, text: "Email & Workflow Automation" },
              { icon: Users, text: "Lead Scoring & Segmentation" },
              { icon: Database, text: "CRM Pipeline Integration" },
              { icon: BarChart3, text: "Revenue Tracking & Attribution" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Icon className="mx-auto text-teal-500 mb-4" size={32} />
                  <p className="font-medium text-gray-700">{item.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= LEAD NURTURING ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Automated Lead Nurturing Workflows
            </h2>
            <p className="text-gray-700">
              Trigger behavior-based email sequences,
              abandoned cart reminders, and consultation follow-ups
              automatically to increase engagement and conversions.
            </p>
          </div>

          <div className="text-center">
            <Workflow className="mx-auto text-teal-500" size={80} />
          </div>

        </div>
      </section>

      {/* ================= B2B VS B2C ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            B2B vs B2C Automation Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-10 rounded-2xl hover:shadow-xl transition">
              <h3 className="font-semibold text-teal-600 mb-4">B2B</h3>
              <p className="text-gray-700">
                Long sales cycles, multi-touch nurturing,
                CRM opportunity tracking, and educational content workflows.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl hover:shadow-xl transition">
              <h3 className="font-semibold text-teal-600 mb-4">B2C</h3>
              <p className="text-gray-700">
                Cart abandonment automation, loyalty campaigns,
                seasonal promotions, and behavioral retargeting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= ADVANCED TRENDS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Advanced Automation Trends in 2026
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "AI-Driven Predictive Analytics",
              "Conversational Marketing Automation",
              "Lifecycle Marketing Automation",
            ].map((trend, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Zap className="mx-auto text-teal-500 mb-4" size={32} />
                <p className="font-medium text-gray-700">{trend}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= TOOLS SECTION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Popular Marketing Automation Tools in 2026
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "HubSpot",
              "Salesforce Marketing Cloud",
              "Marketo",
              "Zoho CRM",
              "ActiveCampaign",
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Target className="mx-auto text-teal-500 mb-3" size={24} />
                {tool}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-white font-bold mb-6">
            Build a Scalable Marketing Infrastructure
          </h2>

          <p className="text-blue-100 mb-8">
            Marketing automation and CRM integration are no longer growth hacks —
            they are foundational systems for sustainable success.
          </p>

          <button className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
            Implement Automation Strategy <ArrowRight size={18} />
          </button>

        </div>
      </section>
    </>
  );
};

export default Marketing;
