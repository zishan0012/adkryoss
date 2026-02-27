import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import seoresellerhero from "../../../assets/SEO/seoresellerhero.png";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Shield,
  Users,
  Settings,
  Target,
  Search,
  Zap,
  Briefcase,
  Layers,
  Code,
  TrendingUp,
  Ghost,
  Globe
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SEOResellerServices = () => {
  const pageRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const whyRef = useRef(null);
  const offeringCardsRef = useRef([]);
  const solutionsRef = useRef(null);
  const frameworkItemsRef = useRef([]);
  const modelStepsRef = useRef([]);
  const whoCardsRef = useRef([]);
  const differentCardsRef = useRef([]);
  const industryCardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero - Ghost reveal
      gsap.from(heroContentRef.current, {
        x: -100,
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "power4.out"
      });
      gsap.from(heroImageRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power4.out"
      });

      // Why - Invisible rise
      if (whyRef.current) {
        gsap.from(whyRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top 85%"
          }
        });
      }

      // Offerings - Rapid scaling stagger
      offeringCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scale: 0.9,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%"
          }
        });
      });

      // Solutions - Slide in
      if (solutionsRef.current) {
        const textSide = solutionsRef.current.querySelector('.text-side');
        const imageSide = solutionsRef.current.querySelector('.image-side');
        if (textSide) {
          gsap.from(textSide, {
            x: -50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: solutionsRef.current,
              start: "top 80%"
            }
          });
        }
        if (imageSide) {
          gsap.from(imageSide, {
            x: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: solutionsRef.current,
              start: "top 80%"
            }
          });
        }
      }

      // Framework Items
      frameworkItemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 95%"
          }
        });
      });

      // Model Steps
      modelStepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.from(step, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: step,
            start: "top 95%"
          }
        });
      });

      // Who Cards
      whoCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 95%"
          }
        });
      });

      // Different Cards
      differentCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          x: i % 2 === 0 ? -30 : 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 90%"
          }
        });
      });

      // Industry Cards
      industryCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 95%"
          }
        });
      });

      // CTA - Portal expand
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%"
          }
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const offerings = [
    {
      title: "White-Label SEO Execution",
      desc: "End-to-end SEO delivered under your agency's brand — from strategy to reporting."
    },
    {
      title: "Dedicated SEO Team",
      desc: "Access strategists, technical experts, content specialists, and link-building professionals."
    },
    {
      title: "Transparent Reporting",
      desc: "Custom-branded reports with rankings, traffic growth, leads & insights."
    },
    {
      title: "Scalable Delivery Model",
      desc: "From 1 client to 100+ — our systems scale as your agency grows."
    }
  ];

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div ref={heroContentRef} className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              SEO Reseller Services
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-white mb-6">
              Scale Your Agency. Deliver Results. Stay Invisible.
            </p>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              White-label SEO solutions designed to help agencies expand
              revenue, retain clients, and dominate search — without hiring an
              in-house team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                to="/contact"
                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Speak to Our Expert →
              </Link>
              <Link
                to="#services"
                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Our Services →
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div ref={heroImageRef} className="flex justify-center md:justify-end relative z-10">
            <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
              <img
                src={seoresellerhero}
                alt="SEO Reseller Services"
                className="max-w-[350px] w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Why SEO Reseller Services? */}
      <section className="bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div ref={whyRef} className="pr-0 lg:pr-10 px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Why SEO Reseller Services?
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              The demand for SEO is exploding — but building an expert team,
              investing in tools, and managing execution can slow down your growth.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-5">
              That's where{" "}
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              steps in as your strategic backend SEO partner.
            </p>

            <p className="text-base md:text-lg font-medium text-gray-900">
              You focus on acquiring and managing clients. <br />
              <span className="text-blue-700 font-semibold">
                We focus on rankings, traffic, and measurable ROI.
              </span>
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="mt-10 lg:mt-0 flex justify-start lg:justify-end px-6">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="SEO Analytics Dashboard"
              className="w-72 md:w-80 lg:w-96 object-contain"
            />
          </div>

        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {offerings.map((item, i) => (
              <div ref={el => offeringCardsRef.current[i] = el} key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Our SEO Reseller Solutions */}
      <section ref={solutionsRef} className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div className="text-side">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our SEO Reseller Solutions
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              We don't just offer SEO services. We offer structured growth systems.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• SEO Strategy & Roadmap</li>
              <li>• On-Page SEO</li>
              <li>• Technical SEO</li>
              <li>• Content Marketing</li>
              <li>• Authority Building</li>
              <li>• Local & Enterprise SEO</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="image-side flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="SEO Growth Strategy"
              className="w-80 md:w-96 object-contain"
            />
          </div>

        </div>
      </section>

      {/* Complete SEO Execution Framework */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            Complete SEO Execution Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Competitor benchmarking & keyword gap analysis",
              "Technical optimization & schema implementation",
              "Core Web Vitals & site architecture improvements",
              "SEO blog creation & topic cluster strategy",
              "High-quality backlinks & digital PR outreach",
              "Google Business Profile & enterprise SEO"
            ].map((item, i) => (
              <div ref={el => frameworkItemsRef.current[i] = el} key={i}
                className="bg-white border border-blue-100 rounded-2xl p-8 hover:bg-teal-700 hover:text-white transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* How Our Reseller Model Works */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            How Our Reseller Model Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Onboarding & Discovery",
              "Strategy Development",
              "Execution",
              "Reporting & Scaling"
            ].map((step, i) => (
              <div ref={el => modelStepsRef.current[i] = el} key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
              >
                <span className="text-sm font-bold text-blue-700">
                  Step {i + 1}
                </span>
                <h3 className="text-lg font-semibold mt-2">
                  {step}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Who Is This For?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { name: "Digital Marketing Agencies", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72" },
              { name: "Web Development Companies", img: "https://images.unsplash.com/photo-1551434678-e076c223a692" },
              { name: "Freelancers", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" },
              { name: "Branding Agencies", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
              { name: "International Agencies", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" }
            ].map((item, i) => (
              <div ref={el => whoCardsRef.current[i] = el} key={i}
                className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6 font-semibold text-gray-900">
                  {item.name}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              "Performance-First Approach",
              "Process-Driven Execution",
              "Ethical White-Hat SEO",
              "Modern SEO Stack",
              "Complete Confidentiality"
            ].map((item, i) => (
              <div ref={el => differentCardsRef.current[i] = el} key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { name: "E-commerce", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
              { name: "SaaS & Tech", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
              { name: "Healthcare", img: "https://images.unsplash.com/photo-1505751172107-5962297c279d" },
              { name: "Real Estate", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa" },
              { name: "Education", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1" },
              { name: "Finance", img: "https://images.unsplash.com/photo-1454165833767-131438967469" },
              { name: "B2B Services", img: "https://images.unsplash.com/photo-1552664730-d307ca884978" }
            ].map((industry, i) => (
              <div ref={el => industryCardsRef.current[i] = el} key={i}
                className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6 font-semibold text-gray-900">
                  {industry.name}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="bg-gradient-to-r from-blue-700 to-blue-900 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-white md:text-4xl font-bold mb-6">
            Ready to Scale?
          </h2>

          <p className="text-white mb-10">
            Turn SEO into your agency's strongest recurring revenue stream.
          </p>

          <Link to="/contact" className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition inline-block no-underline">
            Partner With Us →
          </Link>

        </div>
      </section>
    </div>
  );
};

export default SEOResellerServices;
