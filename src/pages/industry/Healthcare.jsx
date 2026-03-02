import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Health from "../../assets/health.jpg";
import dental from "../../assets/dental.jpg";
import Ivf from "../../assets/ivf.jpg";
import Phara from "../../assets/phara.jpg";
import Healthtech from "../../assets/healthtech.jpg";
import Multi from "../../assets/multi.jpg";
import Diag from "../../assets/diagnisttic.jpg";
import industryhealth from "../../assets/industryhealth.png";
import Cosmetic from "../../assets/cosmetic.jpg";
import DigitalTransformationfortheHealthcareIndustryImage from "../../assets/DigitalTransformationfortheHealthcareIndustry.png"
import MultiSpecialtyHospitalsImage from "../../assets/MultiSpecialtyHospitals.png"
import IVFFertilityClinicsImage from "../../assets/IVFFertilityClinics.png"
import DentalClinicsImage from "../../assets/DentalClinics.png"
import CosmeticAestheticCentersImage from "../../assets/CosmeticAestheticCenters.png"
import DiagnosticLabsImage from "../../assets/DiagnosticLabs.png"
import HealthTechTelemedicinePlatformsImage from "../../assets/HealthTechTelemedicinePlatforms.png"
import PharmaceuticalCompaniesImage from "../../assets/PharmaceuticalCompanies.png"
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
  Database,
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
      "Reputation & review management",
    ],
    closing:
      "We help healthcare websites rank for high-intent medical queries while maintaining Google's healthcare content standards.",
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
      "ROI & cost-per-lead tracking",
    ],
    closing:
      "Every campaign is backed by analytics dashboards to measure real patient inflow, not vanity metrics.",
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
      "Landing pages for procedures",
    ],
    closing:
      "We create credible, research-backed, SEO-optimized content that builds long-term patient trust.",
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
      "Short-form educational videos",
    ],
    closing:
      "Our strategy balances empathy with performance — building patient engagement and brand recall.",
  },
  {
    title: "Online Reputation Management (ORM)",
    icon: ShieldCheck,
    desc: "Trust is everything in healthcare.",
    points: [
      "Review monitoring & response management",
      "Sentiment analysis",
      "Crisis communication strategy",
      "Brand credibility enhancement",
    ],
    closing:
      "We protect and strengthen your digital reputation across platforms.",
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
      "Speed & technical optimization",
    ],
    closing:
      "Adkryoss ensures your digital experience matches the quality of care you provide offline.",
  },
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
    img: MultiSpecialtyHospitalsImage,
    desc: "Comprehensive digital strategies to increase patient inflow and strengthen institutional trust."
  },
  {
    title: "IVF & Fertility Clinics",
    img: IVFFertilityClinicsImage,
    desc: "High-intent patient acquisition campaigns focused on sensitivity, privacy, and credibility."
  },
  {
    title: "Dental Clinics",
    img: DentalClinicsImage,
    desc: "Localized SEO and appointment-driven paid campaigns to increase treatment bookings."
  },
  {
    title: "Cosmetic & Aesthetic Centers",
    img: CosmeticAestheticCentersImage,
    desc: "Brand-focused digital strategies that balance performance marketing with premium positioning."
  },
  {
    title: "Diagnostic Labs",
    img: DiagnosticLabsImage,
    desc: "Search visibility and conversion optimization for health checkups and test bookings."
  },
  {
    title: "Pharmaceutical Companies",
    img: PharmaceuticalCompaniesImage,
    desc: "Compliance-aware digital marketing strategies that enhance brand credibility and awareness."
  },
  {
    title: "HealthTech & Telemedicine Platforms",
    img: HealthTechTelemedicinePlatformsImage,
    desc: "Scalable performance campaigns designed to drive app installs, consultations, and digital adoption."
  },
];

const futureHealthcare = [
  { title: "AI-Driven Personalization", icon: Brain },
  { title: "Voice Search Optimization", icon: Mic },
  { title: "Hyper-Local Patient Targeting", icon: MapPin },
  { title: "Predictive Analytics", icon: BarChart3 },
  { title: "Integrated CRM & Automation", icon: Database },
];

const Healthcare = () => {
  const [visibleSections, setVisibleSections] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          } else {
            // Reset when out of view for re-animation on scroll up
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: false,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // Adjust trigger point
      }
    );

    // Observe all sections with data-section attribute
    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        data-section="hero"
        className={`relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden transition-all duration-700 ease-out ${
          visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

        {/* Animated Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-float-slower"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

          {/* LEFT CONTENT */}
          <div className="text-left max-w-[600px] space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Healthcare Digital Marketing Services
              </span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-6 text-blue-100 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Data-Driven Growth for Hospitals, Clinics & Healthcare Brands
            </h3>

            <p className="text-gray-200 text-md leading-relaxed max-w-[600px] animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Drive More Appointments. Build Patient Trust. Stay Compliant.
              <br /><br />
              In today's digital-first healthcare ecosystem, patients search, compare, and decide online. We help healthcare providers become the first and most trusted choice across search engines, social platforms, and digital touchpoints.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center animate-float" style={{ animationDelay: "0.4s" }}>
              {/* Image Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              <img
                src={industryhealth}
                alt="Healthcare Digital Marketing Services"
                loading="lazy"
                className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                           transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION SECTION */}
      <section
        data-section="digital-trans"
        className={`bg-gray-150 py-28 transition-all duration-700 ease-out ${
          visibleSections["digital-trans"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-full px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-right">
                Digital Transformation for the Healthcare Industry
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
                Healthcare marketing is no longer about visibility alone. It's about
                credibility, patient experience, and measurable growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
                From multi-specialty hospitals to diagnostic labs and health-tech startups,{" "}
                <span className="font-semibold text-gray-900">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span>{" "}
                delivers performance-driven digital strategies tailored to the healthcare sector.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
                We combine medical marketing expertise, regulatory awareness, and data
                intelligence to create scalable digital ecosystems that increase patient
                acquisition while maintaining ethical communication standards.
              </p>
            </div>
            <div className="flex justify-end animate-float" style={{ animationDelay: "0.4s" }}>
              <img
                src={DigitalTransformationfortheHealthcareIndustryImage}
                alt="Healthcare Digital Transformation"
                loading="lazy"
                className="w-130 h-120 lg:w-150 lg:h-130 rounded-2xl shadow-2xl object-fit"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HEALTHCARE MARKETING EXPERTISE */}
      <section
        data-section="expertise"
        className={`bg-gray-100 py-24 transition-all duration-700 ease-out ${
          visibleSections.expertise ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our Healthcare Marketing Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Performance-driven digital strategies built specifically for hospitals,
              clinics, and healthcare brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-blue-100 rounded-2xl p-8 transition-all duration-500 hover:bg-teal-700 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-white/20 transition">
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 group-hover:text-white/90">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4 group-hover:text-white/90">
                    {service.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-white">
                    {service.closing}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HEALTHCARE MARKETING FRAMEWORK */}
      <section
        data-section="framework"
        className={`bg-white py-24 transition-all duration-700 ease-out ${
          visibleSections.framework ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our Healthcare Marketing Framework
            </h2>
            <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              A structured, compliance-aware approach designed for measurable patient acquisition and long-term growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareFramework.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-blue-100 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                    <Icon className="w-7 h-7 text-blue-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section
        data-section="clients"
        className={`bg-gray-50 py-24 transition-all duration-700 ease-out ${
          visibleSections.clients ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Each healthcare vertical requires a customized marketing blueprint —
              and we build it accordingly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {healthcareClients.map((item, index) => (
              <div
                key={index}
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up ${
                  index === healthcareClients.length - 1 ? "lg:col-start-2" : ""
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        data-section="why-choose"
        className={`bg-white py-24 transition-all duration-700 ease-out ${
          visibleSections["why-choose"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-right">
                Why Choose Us for Healthcare Digital Marketing?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
                <span className="font-semibold text-gray-900">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span>{" "}
                blends creativity with compliance and performance with precision —
                helping healthcare organizations scale responsibly in a competitive
                digital environment.
              </p>
            </div>
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
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-md transition animate-fade-in-left"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <p className="text-gray-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE-READY HEALTHCARE MARKETING */}
      <section
        data-section="future"
        className={`bg-blue-50 py-24 transition-all duration-700 ease-out ${
          visibleSections.future ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Future-Ready Healthcare Marketing
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              The future of healthcare marketing lies in intelligent automation,
              predictive analytics, and patient-first digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureHealthcare.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-blue-100 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                    <Icon className="w-6 h-6 text-blue-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-section="cta"
        className={`bg-linear-to-r from-blue-700 to-blue-900 py-24 text-white transition-all duration-700 ease-out ${
          visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
              Let's Build a Healthier Digital Presence
            </h2>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Healthcare decisions are deeply personal. Your digital presence must
              reflect trust, authority, and care.
            </p>
            <p className="text-blue-100 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Partner with{" "}
              <span className="font-semibold text-white">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              to create measurable, compliant, and sustainable healthcare marketing growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button
                className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition shadow-lg hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Start Your Healthcare Growth Strategy →
              </button>
              <button
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                Speak to a Healthcare Marketing Expert
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              Ready to transform your healthcare brand digitally? Let's start building your patient acquisition engine today.
            </p>
          </div>
        </div>
      </section>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(40px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        /* Ensure animations play on scroll up by re-triggering */
        [data-section] {
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
};

export default Healthcare;