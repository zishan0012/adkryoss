import React from 'react';
import Health from "../../assets/health.jpg"
import dental from "../../assets/dental.jpg"
import Ivf from "../../assets/ivf.jpg"
import Phara from "../../assets/phara.jpg"
import Healthtech from "../../assets/healthtech.jpg"
import Multi from "../../assets/multi.jpg"
import Diag from "../../assets/diagnisttic.jpg"
import Cosmetic from "../../assets/cosmetic.jpg"
import industryhealth from "../../assets/industryhealth.png"
import {
  Search,
  Target,
  FileText,
  Users,
  ShieldCheck,
  Globe,
  ClipboardCheck,
   Map,
    Activity, 
    LineChart,
    CheckCircle,
    Brain, 
  Mic, 
  MapPin, 
  BarChart3, 
  Database 
} from "lucide-react";
const healthcareServices = [
  {
    title: "Search Engine Optimization (SEO) for Healthcare",
    icon: Search,
    desc: "Be visible where patients search.",
    points: [
      "Local SEO for hospitals & clinics",
      "Doctor profile optimization",
      "Symptom & treatment-based keyword targeting",
      "E-A-T focused content strategy",
      "Reputation & review management"
    ],
    closing:
      "We help healthcare websites rank for high-intent medical queries while maintaining Google’s healthcare content standards."
  },
  {
    title: "Performance Marketing for Patient Acquisition",
    icon: Target,
    desc: "Generate qualified appointment bookings.",
    points: [
      "Google Ads for treatments & procedures",
      "Paid campaigns for specialized departments",
      "Location-based targeting",
      "Conversion rate optimization",
      "ROI & cost-per-lead tracking"
    ],
    closing:
      "Every campaign is backed by analytics dashboards to measure real patient inflow, not vanity metrics."
  },
  {
    title: "Healthcare Content Marketing",
    icon: FileText,
    desc: "Educate. Inform. Build authority.",
    points: [
      "Medical blogs & health guides",
      "Doctor-led thought leadership content",
      "Video health explainers",
      "Patient testimonials & case studies",
      "Landing pages for procedures"
    ],
    closing:
      "We create credible, research-backed, SEO-optimized content that builds long-term patient trust."
  },
  {
    title: "Social Media Marketing for Healthcare",
    icon: Users,
    desc: "Humanize your healthcare brand.",
    points: [
      "Awareness campaigns",
      "Health day promotions",
      "Doctor branding",
      "Community engagement",
      "Short-form educational videos"
    ],
    closing:
      "Our strategy balances empathy with performance — building patient engagement and brand recall."
  },
  {
    title: "Online Reputation Management (ORM)",
    icon: ShieldCheck,
    desc: "Trust is everything in healthcare.",
    points: [
      "Review monitoring & response management",
      "Sentiment analysis",
      "Crisis communication strategy",
      "Brand credibility enhancement"
    ],
    closing:
      "We protect and strengthen your digital reputation across platforms."
  },
  {
    title: "Healthcare Website & UX Optimization",
    icon: Globe,
    desc: "Your website is your digital hospital front desk.",
    points: [
      "Patient-centric design",
      "Mobile-first UX",
      "Appointment booking integration",
      "HIPAA-conscious data handling approach",
      "Speed & technical optimization"
    ],
    closing:
      "Adkryoss ensures your digital experience matches the quality of care you provide offline."
  }
];
const healthcareFramework = [
  {
    title: "Industry & Compliance Analysis",
    desc: "We assess your services, specializations, competitors, and regulatory considerations.",
    icon: ClipboardCheck,
  },
  {
    title: "Patient Journey Mapping",
    desc: "From awareness to consultation, we design digital touchpoints aligned with patient behavior.",
    icon: Map,
  },
  {
    title: "Data-Driven Campaign Execution",
    desc: "SEO, paid media, content, and social campaigns executed with KPI-focused strategy.",
    icon: Activity,
  },
  {
    title: "Performance Tracking & Optimization",
    desc: "Real-time dashboards, analytics insights, and continuous refinement for sustained growth.",
    icon: LineChart,
  },
];
const healthcareClients = [
  {
    title: "Multi-Specialty Hospitals",
    img: Multi,
    desc: "Comprehensive digital strategies to increase patient inflow and strengthen institutional trust."
  },
  {
    title: "IVF & Fertility Clinics",
    img: Ivf,
    desc: "High-intent patient acquisition campaigns focused on sensitivity, privacy, and credibility."
  },
  {
    title: "Dental Clinics",
    img: dental,
    desc: "Localized SEO and appointment-driven paid campaigns to increase treatment bookings."
  },
  {
    title: "Cosmetic & Aesthetic Centers",
    img: Cosmetic,
    desc: "Brand-focused digital strategies that balance performance marketing with premium positioning."
  },
  {
    title: "Diagnostic Labs",
    img: Diag,
    desc: "Search visibility and conversion optimization for health checkups and test bookings."
  },
  {
    title: "Pharmaceutical Companies",
    img: Phara,
    desc: "Compliance-aware digital marketing strategies that enhance brand credibility and awareness."
  },
  {
    title: "HealthTech & Telemedicine Platforms",
    img: Healthtech,
    desc: "Scalable performance campaigns designed to drive app installs, consultations, and digital adoption."
  }
];
const futureHealthcare = [
  {
    title: "AI-Driven Personalization",
    icon: Brain,
  },
  {
    title: "Voice Search Optimization",
    icon: Mic,
  },
  {
    title: "Hyper-Local Patient Targeting",
    icon: MapPin,
  },
  {
    title: "Predictive Analytics",
    icon: BarChart3,
  },
  {
    title: "Integrated CRM & Automation",
    icon: Database,
  },
];

const Healthcare = () => {
    return (
        <>
 <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-blue-900/85"></div> */}

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left text-white">
        <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
          Healthcare Digital Marketing Services
        </h2>

        <h2 className="text-2xl md:text-xl font-semibold leading-snug text-white">
          Data-Driven Growth for Hospitals, Clinics & Healthcare Brands
        </h2>

        <p className="text-white md:text-md leading-relaxed max-w-[600px]">
          Drive More Appointments. Build Patient Trust. Stay Compliant.
        {/* </p>

        <p className="text-gray-300 leading-relaxed text-lg"> */}
          In today’s digital-first healthcare ecosystem, patients search,
          compare, and decide online. We help healthcare providers become the
          first and most trusted choice across search engines, social platforms,
          and digital touchpoints.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
             <img
               src={industryhealth}
               alt="Section Image"
               className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
             />
           </div>
         </div>

    </div>
 
</section>

<section className="bg-gray-150 py-28">
  <div className="w-full px-8 lg:px-16">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl space-y-8">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Digital Transformation for the Healthcare Industry
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed">
          Healthcare marketing is no longer about visibility alone. It’s about 
          credibility, patient experience, and measurable growth.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          From multi-specialty hospitals to diagnostic labs and health-tech startups,{" "}
          <span className="font-semibold text-gray-900">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>{" "}
          delivers performance-driven digital strategies tailored to the healthcare sector.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          We combine medical marketing expertise, regulatory awareness, and data 
          intelligence to create scalable digital ecosystems that increase patient 
          acquisition while maintaining ethical communication standards.
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-end">
        <img
          src={Health}  
          alt="Healthcare Digital Transformation"
          className="w-130 h-120 lg:w-150 lg:h-130 
               rounded-2xl shadow-2xl object-fit"
        />
      </div>

    </div>

  </div>
</section>

<section className="bg-gray-100 py-24">
  <div className="px-8 lg:px-16">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Healthcare Marketing Expertise
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Performance-driven digital strategies built specifically for hospitals,
        clinics, and healthcare brands.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {healthcareServices.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="group bg-white border border-blue-100 rounded-2xl p-8
            transition-all duration-500 hover:bg-teal-700
            hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-gray-100
              flex items-center justify-center mb-6
              group-hover:bg-white/20 transition">
              <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3
              group-hover:text-white">
              {service.title}
            </h3>

            {/* Short Desc */}
            <p className="text-sm text-gray-600 mb-4
              group-hover:text-white/90">
              {service.desc}
            </p>

            {/* Points */}
            <ul className="space-y-2 text-sm text-gray-600 mb-4
              group-hover:text-white/90">
              {service.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            {/* Closing Line */}
            <p className="text-sm font-medium text-gray-700
              group-hover:text-white">
              {service.closing}
            </p>

          </div>
        );
      })}
    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="px-8 lg:px-16">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Our Healthcare Marketing Framework
      </h2>
      <p className="text-lg text-gray-600">
        A structured, compliance-aware approach designed for measurable patient acquisition and long-term growth.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {healthcareFramework.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group bg-white border border-blue-100 rounded-2xl p-8
            transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-full bg-blue-50
              flex items-center justify-center mb-6
              group-hover:bg-blue-600 transition">
              <Icon className="w-7 h-7 text-blue-700 group-hover:text-white" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              {item.desc}
            </p>
          </div>
        );
      })}

    </div>
  </div>
</section>
<section className="bg-gray-50 py-24">
  <div className="px-8 lg:px-16">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Who We Work With
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Each healthcare vertical requires a customized marketing blueprint —
        and we build it accordingly.
      </p>
    </div>

    {/* Cards Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

  {healthcareClients.map((item, index) => (
    <div
      key={index}
      className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden
      transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
      ${index === healthcareClients.length - 1 ? "lg:col-start-2" : ""}`}
    >

          {/* Image */}
          <div className="h-56 overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="px-8 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* LEFT CONTENT */}
      <div className="max-w-2xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Why Choose Us for Healthcare Digital Marketing?
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">
            Adkryoss managed by Clink Consultancy Services Private Limited
          </span>{" "}
          blends creativity with compliance and performance with precision —
          helping healthcare organizations scale responsibly in a competitive
          digital environment.
        </p>
      </div>

      {/* RIGHT SIDE BENEFITS */}
      <div className="space-y-5">
        {[
          "Deep understanding of healthcare consumer behavior",
          "Ethical marketing approach aligned with medical guidelines",
          "Advanced analytics & attribution modeling",
          "Integrated marketing across SEO, paid, social & content",
          "Performance-focused reporting structure",
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-md transition"
          >
            <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
            <p className="text-gray-800 font-medium">{item}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

<section className="bg-blue-50 py-24">
  <div className="px-8 lg:px-16">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Future-Ready Healthcare Marketing
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        The future of healthcare marketing lies in intelligent automation,
        predictive analytics, and patient-first digital experiences.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {futureHealthcare.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="group bg-white border border-blue-100 
            rounded-2xl p-8 transition-all duration-500 
            hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-blue-100 
              flex items-center justify-center mb-6 
              group-hover:bg-blue-600 transition">
              <Icon className="w-6 h-6 text-blue-700 group-hover:text-white" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
          </div>
        );
      })}

    </div>

  </div>
</section>
<section className="bg-linear-to-r from-blue-700 to-blue-900 py-24 text-white">
  <div className="px-8 lg:px-16">

    <div className="max-w-4xl mx-auto text-center">

      {/* Heading */}
      <h2 className="text-white md:text-5xl font-bold mb-6 leading-tight">
        Let’s Build a Healthier Digital Presence
      </h2>

      {/* Description */}
      <p className="text-blue-100 text-lg mb-6 leading-relaxed">
        Healthcare decisions are deeply personal. Your digital presence must
        reflect trust, authority, and care.
      </p>

      <p className="text-blue-100 mb-10 leading-relaxed">
        Partner with{" "}
        <span className="font-semibold text-white">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>{" "}
        to create measurable, compliant, and sustainable healthcare marketing growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <button className="bg-white text-blue-800 px-8 py-4 rounded-full 
          font-semibold hover:bg-blue-100 transition shadow-lg hover:shadow-xl">
          Start Your Healthcare Growth Strategy →
        </button>

        <button className="border border-white px-8 py-4 rounded-full 
          font-semibold hover:bg-white hover:text-blue-800 transition">
          Speak to a Healthcare Marketing Expert
        </button>
      </div>

      {/* Closing Line */}
      <p className="text-blue-200 text-sm mt-10">
        Ready to transform your healthcare brand digitally? 
        Let’s start building your patient acquisition engine today.
      </p>

    </div>

  </div>
</section>

</>
    );
};

export default Healthcare;
