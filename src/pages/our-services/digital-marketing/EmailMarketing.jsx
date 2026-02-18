import React from "react";
import mail from "../../../assets/mail.png"
import {
  Route,
  Users,
  Workflow,
  PenTool,
  Beaker,
  BarChart3,
  Mail,
  UserPlus,
  ShoppingCart,
  Briefcase,
  ShieldCheck,
  ShoppingBag,
  Cpu,
  HeartPulse,
  Rocket,
  BarChart2,
  Brain,
  DollarSign,
  Layers,
  Database,
  Cloud,
  Plug,
  MailOpen,
  Megaphone,
  UserCheck,
  RefreshCcw,
  Calendar,
  Receipt,
  Gift,
  Check,
} from "lucide-react";

const emailApproachSteps = [
  {
    step: "01",
    title: "Strategy & Funnel Mapping",
    desc: "We audit your existing funnel, define key touchpoints, and map automated journeys aligned with your business goals.",
    icon: Route,
  },
  {
    step: "02",
    title: "Audience Segmentation",
    desc: "Behavior-based segmentation, predictive analytics, and dynamic list building to ensure every message feels personal.",
    icon: Users,
  },
  {
    step: "03",
    title: "Automation & Workflow Setup",
    desc: "Welcome sequences, abandoned cart flows, lead nurturing, upsell automation, reactivation campaigns, and lifecycle marketing.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "Conversion-Focused Creative",
    desc: "Mobile-first design, compelling copy, psychological triggers, and strong CTAs that drive measurable action.",
    icon: PenTool,
  },
  {
    step: "05",
    title: "Testing & Optimization",
    desc: "A/B testing, subject line experiments, deliverability monitoring, heatmap analysis, and continuous improvement cycles.",
    icon: Beaker,
  },
  {
    step: "06",
    title: "Reporting & Insights",
    desc: "Clear dashboards tracking open rates, CTR, revenue attribution, list growth, churn rate, and customer lifetime value.",
    icon: BarChart3,
  },
];

const emailServices = [
  {
    title: "Email Campaign Management",
    desc: "End-to-end planning, designing, and execution of targeted promotional and transactional campaigns.",
    icon: Mail,
  },
  {
    title: "Marketing Automation",
    desc: "Advanced automation workflows using tools like Mailchimp, HubSpot, Klaviyo, Zoho, and custom CRM integrations.",
    icon: Workflow,
  },
  {
    title: "Lead Nurturing Campaigns",
    desc: "Build trust and guide prospects through structured engagement sequences.",
    icon: UserPlus,
  },
  {
    title: "E-commerce Email Marketing",
    desc: "Abandoned cart recovery, product recommendation flows, post-purchase upsells, and win-back campaigns.",
    icon: ShoppingCart,
  },
  {
    title: "B2B Email Marketing",
    desc: "Account-based email strategies, webinar funnels, drip campaigns, and lead scoring models.",
    icon: Briefcase,
  },
  {
    title: "Email Copywriting & Design",
    desc: "Persuasive messaging and responsive templates optimized for engagement and conversions.",
    icon: PenTool,
  },
  {
    title: "Deliverability Optimization",
    desc: "Domain authentication (SPF, DKIM, DMARC), inbox placement strategies, and spam score reduction.",
    icon: ShieldCheck,
  },
];

const partners = [
  { name: "E-commerce & D2C Brands", icon: ShoppingBag },
  { name: "SaaS & Tech Companies", icon: Cpu },
  { name: "B2B Service Providers", icon: Briefcase },
  { name: "Healthcare & Education Businesses", icon: HeartPulse },
  { name: "Startups & Growing Enterprises", icon: Rocket },
];
const differentiators = [
  {
    title: "Data-Led Decisions",
    desc: "Every campaign is driven by insights, not assumptions.",
    icon: BarChart2,
  },
  {
    title: "AI-Powered Personalization",
    desc: "We leverage automation and predictive segmentation to create hyper-relevant messaging.",
    icon: Brain,
  },
  {
    title: "Revenue Attribution Focus",
    desc: "We track beyond open rates — measuring actual revenue impact.",
    icon: DollarSign,
  },
  {
    title: "Omnichannel Integration",
    desc: "Email integrated with paid ads, SEO, CRM, and retargeting for maximum performance.",
    icon: Layers,
  },
  {
    title: "Compliance & Security",
    desc: "GDPR compliance, CAN-SPAM adherence, and secure database management.",
    icon: ShieldCheck,
  },
];
const techStack = [
  "HubSpot",
  "Mailchimp",
  "Klaviyo",
  "ActiveCampaign",
  "Zoho CRM",
  "Salesforce",
  "Sendinblue",
  "Custom CRM & API Integrations",
];
const campaignTypes = [
  { title: "Newsletter Campaigns", icon: MailOpen },
  { title: "Promotional Launch Campaigns", icon: Megaphone },
  { title: "Drip Campaigns", icon: Layers },
  { title: "Onboarding Sequences", icon: UserCheck },
  { title: "Re-engagement Campaigns", icon: RefreshCcw },
  { title: "Event & Webinar Emails", icon: Calendar },
  { title: "Transactional Emails", icon: Receipt },
  { title: "Loyalty & Referral Campaigns", icon: Gift },
];
const processSteps = [
  "Discover",
  "Strategize",
  "Build",
  "Automate",
  "Optimize",
  "Scale",
];

const frameworkPoints = [
  "Deep business understanding",
  "Audience data analysis",
  "Funnel-based email architecture",
  "Automation and integration setup",
  "Performance testing",
  "Revenue optimization and scaling",
];
const results = [
  "Increased customer retention",
  "Higher repeat purchase rate",
  "Improved customer lifetime value",
  "Reduced acquisition cost",
  "Consistent revenue from owned media",
];
const EmailMarketing = () => {
  return (
    <>
      {/* HERO SECTION */}
<section
  className="relative py-20 text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-blue-900/80"></div>

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Email Marketing Services
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold text-blue-200 mb-6">
        Turn Subscribers Into Revenue Machines
      </h2>

      <p className="text-blue-100 mb-4 max-w-xl leading-relaxed">
        Smart inbox strategies. Hyper-personalized journeys. Measurable growth.
      </p>

      <p className="text-blue-100 mb-8 max-w-xl leading-relaxed">
        At{" "}
        <span className="font-semibold text-white">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>
        , we build high-converting email ecosystems that nurture leads,
        re-engage audiences, and generate predictable ROI.
      </p>

      <div className="flex gap-4 flex-wrap">
        <button className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Book a Strategy Call →
        </button>

        <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">
          View Capabilities →
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <img
        src={mail}
        alt="Email Marketing"
        className="w-full max-w-[520px] h-[400px] object-cover rounded-xl shadow-2xl"
      />
    </div>

  </div>
</section>

      <div className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-500">
  <span className="hover:text-blue-600 cursor-pointer">
    Home
  </span>
  <span className="mx-2">›</span>
  <span className="hover:text-blue-600 cursor-pointer">
    Digital Marketing
  </span>
  <span className="mx-2">›</span>
  <span className="text-gray-900 font-medium">
    Email Marketing
  </span>
</div>
      <section className="bg-white py-20">
        
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Why Email Marketing Still Delivers the Highest ROI
        </h2>

        {/* Content */}
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Email isn’t dead. <span className="font-semibold text-gray-900">It’s evolving.</span>
          </p>

          <p>
            With AI-driven personalization, behavioral targeting, and automation
            workflows, email marketing today is smarter, faster, and more
            profitable than ever. Businesses that leverage strategic automation
            see stronger customer retention, higher repeat purchases, and
            improved lifetime value.
          </p>

          <p>
            At{" "}
            <span className="font-semibold text-gray-900">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span>
            , we build performance-focused email strategies designed around user
            intent, buying behavior, and actionable data insights — ensuring
            every message moves prospects closer to conversion.
          </p>
        </div>

      </div>
    </section>
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Email Marketing Approach
          </h2>

          <p className="text-gray-600 text-lg">
            We don’t send emails.{" "}
            <span className="font-semibold text-gray-900">
              We engineer customer journeys.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {emailApproachSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border rounded-2xl p-8
                hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-700 text-white
                    flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-blue-700">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Email Marketing Services
          </h2>
          <p className="text-gray-600 text-lg">
            End-to-end email marketing capabilities designed to drive engagement,
            retention, and predictable revenue growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emailServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group flex flex-col justify-between min-h-95
                rounded-2xl p-8 bg-white border border-blue-100
                transition-all duration-500 ease-out
                hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6
                    bg-gray-100 group-hover:bg-white/20 transition"
                  >
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>

                  <h3 className="text-lg font-semibold mb-4 text-gray-900 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-8">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center
                    border border-blue-200 text-blue-600
                    transition
                    group-hover:bg-white group-hover:text-teal-700"
                  >
                    →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Who We Work With
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {partners.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-3 px-6 py-4 rounded-full
                bg-white border border-blue-100
                hover:bg-blue-700 hover:border-blue-700
                transition"
              >
                <Icon className="w-5 h-5 text-blue-700 group-hover:text-white" />
                <span className="text-sm font-medium text-gray-900 group-hover:text-white">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          At{" "}
          <span className="font-semibold text-gray-900">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>
          , we tailor strategies based on your industry, audience behavior, and
          sales cycle complexity.
        </p>

      </div>
    </section>
     <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes Our Strategy Different
          </h2>
          <p className="text-gray-600 text-lg">
            Our approach is built at the intersection of data, technology, and
            revenue impact — not guesswork.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-blue-100 rounded-2xl p-8
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6
                  group-hover:bg-blue-700 transition">
                  <Icon className="w-6 h-6 text-blue-700 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Technology Stack We Work With
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We select tools based on scalability, business model, and growth stage.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {techStack.map((tool, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-xl p-6
              flex items-center justify-center text-gray-800 font-medium text-sm
              hover:shadow-lg hover:-translate-y-1 transition"
            >
              {tool}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 text-gray-600 text-sm">
          <Database className="w-4 h-4 text-blue-700" />
          <Cloud className="w-4 h-4 text-blue-700" />
          <Plug className="w-4 h-4 text-blue-700" />
          <span>
            Flexible stack selection with enterprise-grade security and
            integration readiness.
          </span>
        </div>

      </div>
    </section>
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Email Campaign Types We Execute
          </h2>
          <p className="text-gray-600 text-lg">
            From awareness to retention, we execute every email campaign type
            required across the customer lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaignTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 border border-blue-100 rounded-xl
                hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center
                  group-hover:bg-blue-700 transition">
                  <Icon className="w-6 h-6 text-blue-700 group-hover:text-white" />
                </div>
                <p className="font-medium text-gray-900 text-sm">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
     <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process Framework
          </h2>
          <p className="text-gray-600 text-lg">
            A structured methodology designed to deliver predictable, scalable,
            and sustainable growth.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="px-6 py-3 rounded-full bg-white border border-blue-200 font-medium text-gray-900">
                {step}
              </div>
              {index !== processSteps.length - 1 && (
                <span className="text-blue-600 font-semibold">→</span>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {frameworkPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <p className="text-gray-700 font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <p className="text-gray-700 text-lg font-medium">
            This structured approach ensures sustainable growth rather than
            short-term spikes.
          </p>
        </div>

      </div>
    </section>
    <section className="bg-linear-to-br from-[#020617] via-[#020617] to-[#020617] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
          Results You Can Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {results.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-5 rounded-xl
              bg-white/5 backdrop-blur-md border border-white/10
              hover:border-green-400/50 transition"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-black" />
              </div>
              <p className="text-sm md:text-base font-medium text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
        <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
          At{" "}
          <span className="font-semibold text-white">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>
          , we believe email marketing is not about sending bulk messages —
          it’s about building profitable digital relationships.
        </p>

      </div>
    </section>
    <section className="bg-linear-to-br from-[#90939e] via-[#7e7e81] to-[#ffffff] py-24">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build a Revenue-Generating Email Engine?
        </h2>
        <p className="text-blue-100 text-lg mb-6">
          Let’s transform your subscriber list into your most powerful growth
          asset.
        </p>
        <p className="text-blue-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Partner with{" "}
          <span className="font-semibold text-white">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>{" "}
          and unlock the full potential of intelligent email marketing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#020617] px-8 py-3 rounded-full font-semibold
            hover:bg-blue-100 hover:shadow-xl transition">
            Book a Strategy Consultation →
          </button>

          <button className="border border-white/30 px-8 py-3 rounded-full font-semibold
            hover:bg-white/10 transition">
            Talk to an Email Expert
          </button>
        </div>

      </div>
    </section>
      </>
    );
};

export default EmailMarketing;
