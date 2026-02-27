// import React from 'react';
// import Health from "../../assets/health.jpg"
// import dental from "../../assets/dental.jpg"
// import Ivf from "../../assets/ivf.jpg"
// import Phara from "../../assets/phara.jpg"
// import Healthtech from "../../assets/healthtech.jpg"
// import Multi from "../../assets/multi.jpg"
// import Diag from "../../assets/diagnisttic.jpg"
// import healthindus from "../../assets/industryhealth.png"
// import Cosmetic from "../../assets/cosmetic.jpg"
// import industryhealth from "../../assets/industryhealth.png"
import DigitalTransformationfortheHealthcareIndustryImage from "../../assets/DigitalTransformationfortheHealthcareIndustry.png"
import MultiSpecialtyHospitalsImage from "../../assets/MultiSpecialtyHospitals.png"
import IVFFertilityClinicsImage from "../../assets/IVFFertilityClinics.png"
import DentalClinicsImage from "../../assets/DentalClinics.png"
import CosmeticAestheticCentersImage from "../../assets/CosmeticAestheticCenters.png"
import DiagnosticLabsImage from "../../assets/DiagnosticLabs.png"
import HealthTechTelemedicinePlatformsImage from "../../assets/HealthTechTelemedicinePlatforms.png"
import PharmaceuticalCompaniesImage from "../../assets/PharmaceuticalCompanies.png"
import React, { useRef, useEffect } from "react";
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

gsap.registerPlugin(ScrollTrigger);

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
      "We help healthcare websites rank for high-intent medical queries while maintaining Google’s healthcare content standards.",
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
   


  // ========== REFS FOR ALL SECTIONS ==========
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);

  const digitalTransSectionRef = useRef(null);
  const digitalTransHeadingRef = useRef(null);
  const digitalTransPara1Ref = useRef(null);
  const digitalTransPara2Ref = useRef(null);
  const digitalTransPara3Ref = useRef(null);
  const digitalTransImageRef = useRef(null);


  const expertiseCardsRef = useRef([]);
  const expertiseHeaderRef = useRef(null);
  const expertiseSubHeaderRef = useRef(null);

  const frameworkCardsRef = useRef([]);
  const frameworkHeaderRef = useRef(null);
  const frameworkSubHeaderRef = useRef(null);

      


  const clientsCardsRef = useRef([]);
  const clientsHeaderRef = useRef(null);
  const clientsSubHeaderRef = useRef(null);

  const whyChooseSectionRef = useRef(null);
  const whyChooseHeadingRef = useRef(null);
  const whyChooseParaRef = useRef(null);
  const whyChooseListRef = useRef([]);

  const futureCardsRef = useRef([]);
  const futureHeaderRef = useRef(null);
  const futureSubHeaderRef = useRef(null);

  const ctaSectionRef = useRef(null);
  const ctaHeadingRef = useRef(null);
  const ctaPara1Ref = useRef(null);
  const ctaPara2Ref = useRef(null);
  const ctaButton1Ref = useRef(null);
  const ctaButton2Ref = useRef(null);
  const ctaClosingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => st.kill());

      const isMobile = window.innerWidth < 768;
      const baseDuration = isMobile ? 0.9 : 1.2;
      const baseY = isMobile ? 30 : 50;
      const staggerDelay = isMobile ? 0.1 : 0.15;
      const floatAmount = isMobile ? 4 : 8;
      const floatDuration = isMobile ? 3 : 2.5;

      // ----- HERO SECTION -----
      if (heroSectionRef.current) {
        gsap.set([heroHeadingRef.current, heroSubHeadingRef.current, heroParagraphRef.current, heroImageRef.current], {
          opacity: 0,
          y: baseY,
        });
        gsap.set(heroImageRef.current, { scale: 0.95 });

        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        heroTl
          .to(heroHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(heroSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.6")
          .to(heroParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.5")
          .to(heroImageRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.5");

        gsap.to(heroImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- DIGITAL TRANSFORMATION SECTION -----
      if (digitalTransSectionRef.current) {
        gsap.set([digitalTransHeadingRef.current, digitalTransPara1Ref.current, digitalTransPara2Ref.current, digitalTransPara3Ref.current, digitalTransImageRef.current], {
          opacity: 0,
          y: baseY,
        });
        gsap.set(digitalTransImageRef.current, { scale: 0.95 });

        const dtTl = gsap.timeline({
          scrollTrigger: {
            trigger: digitalTransSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        dtTl
          .to(digitalTransHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to([digitalTransPara1Ref.current, digitalTransPara2Ref.current, digitalTransPara3Ref.current], {
            opacity: 1,
            y: 0,
            duration: baseDuration * 0.8,
            stagger: 0.1,
            ease: "power2.out",
          }, "-=0.5")
          .to(digitalTransImageRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8");

        gsap.to(digitalTransImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: digitalTransSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- EXPERTISE CARDS (healthcareServices) -----
      if (expertiseCardsRef.current.length) {
        gsap.set([expertiseHeaderRef.current, expertiseSubHeaderRef.current], { opacity: 0, y: baseY });
        gsap.set(expertiseCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

        const expTl = gsap.timeline({
          scrollTrigger: {
            trigger: expertiseCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        expTl
          .to(expertiseHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(expertiseSubHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(expertiseCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        expertiseCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.6,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- FRAMEWORK CARDS -----
      if (frameworkCardsRef.current.length) {
        gsap.set([frameworkHeaderRef.current, frameworkSubHeaderRef.current], { opacity: 0, y: baseY });
        gsap.set(frameworkCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

        const fwTl = gsap.timeline({
          scrollTrigger: {
            trigger: frameworkCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        fwTl
          .to(frameworkHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(frameworkSubHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(frameworkCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        frameworkCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.6,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- CLIENTS CARDS (healthcareClients) -----
      if (clientsCardsRef.current.length) {
        gsap.set([clientsHeaderRef.current, clientsSubHeaderRef.current], { opacity: 0, y: baseY });
        gsap.set(clientsCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

        const clTl = gsap.timeline({
          scrollTrigger: {
            trigger: clientsCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        clTl
          .to(clientsHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(clientsSubHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(clientsCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        clientsCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- WHY CHOOSE US -----
      if (whyChooseSectionRef.current) {
        gsap.set([whyChooseHeadingRef.current, whyChooseParaRef.current], { opacity: 0, y: baseY });
        gsap.set(whyChooseListRef.current, { opacity: 0, y: 20 });

        const chooseTl = gsap.timeline({
          scrollTrigger: {
            trigger: whyChooseSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        chooseTl
          .to(whyChooseHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(whyChooseParaRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(whyChooseListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4");
      }

      // ----- FUTURE CARDS -----
      if (futureCardsRef.current.length) {
        gsap.set([futureHeaderRef.current, futureSubHeaderRef.current], { opacity: 0, y: baseY });
        gsap.set(futureCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

        const futTl = gsap.timeline({
          scrollTrigger: {
            trigger: futureCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        futTl
          .to(futureHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(futureSubHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(futureCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        futureCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- CTA SECTION -----
      if (ctaSectionRef.current) {
        gsap.set([ctaHeadingRef.current, ctaPara1Ref.current, ctaPara2Ref.current, ctaButton1Ref.current, ctaButton2Ref.current, ctaClosingRef.current], {
          opacity: 0,
          y: baseY,
        });

        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        ctaTl
          .to(ctaHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to([ctaPara1Ref.current, ctaPara2Ref.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5")
          .to([ctaButton1Ref.current, ctaButton2Ref.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.3")
          .to(ctaClosingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.2");
      }

      ScrollTrigger.refresh();
    }, [
      heroSectionRef,
      digitalTransSectionRef,
      expertiseCardsRef,
      frameworkCardsRef,
      clientsCardsRef,
      whyChooseSectionRef,
      futureCardsRef,
      ctaSectionRef,
    ]);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      {/* <section
        ref={heroSectionRef}
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
          <div className="text-left text-white">
            <h2 ref={heroHeadingRef} className="text-4xl md:text-4xl font-bold leading-tight text-white">
              Healthcare Digital Marketing Services
            </h2>
            <h2 ref={heroSubHeadingRef} className="text-2xl md:text-xl font-semibold leading-snug text-white">
              Data-Driven Growth for Hospitals, Clinics & Healthcare Brands
            </h2>
            <p ref={heroParagraphRef} className="text-white md:text-md leading-relaxed max-w-[600px]">
              Drive More Appointments. Build Patient Trust. Stay Compliant. In today’s digital-first healthcare ecosystem, patients search,
              compare, and decide online. We help healthcare providers become the
              first and most trusted choice across search engines, social platforms,
              and digital touchpoints.
            </p>
          </div>
          <div ref={heroImageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={industryhealth}
                alt="Healthcare Digital Marketing"
                loading="lazy"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

<section
ref={heroSectionRef}
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">

      <h2 ref={heroHeadingRef} className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Healthcare Digital Marketing Services
        </span>
      </h2>

      <h3 ref={heroSubHeadingRef} className="text-xl md:text-2xl font-semibold leading-snug mb-6 text-blue-100">
        Data-Driven Growth for Hospitals, Clinics & Healthcare Brands
      </h3>

      <p ref={heroParagraphRef} className="text-gray-200 text-md leading-relaxed max-w-[600px]">
        Drive More Appointments. Build Patient Trust. Stay Compliant.
        <br /><br />
        In today’s digital-first healthcare ecosystem, patients search, compare, and decide online. We help healthcare providers become the first and most trusted choice across search engines, social platforms, and digital touchpoints.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div ref={heroImageRef} className="flex justify-center md:justify-end opacity-0 animate-[fadeUp_1.2s_ease-out_forwards]">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={industryhealth}
          alt="Healthcare Digital Marketing Services"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

      </div>

    </div>

  </div>

  {/* Custom Animations */}
  <style>
    {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(30px);
        }
      }
    `}
  </style>

</section>


      {/* DIGITAL TRANSFORMATION SECTION */}
      <section ref={digitalTransSectionRef} className="bg-gray-150 py-28">
        <div className="w-full px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl space-y-8">
              <h2 ref={digitalTransHeadingRef} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Digital Transformation for the Healthcare Industry
              </h2>
              <p ref={digitalTransPara1Ref} className="text-xl text-gray-700 leading-relaxed">
                Healthcare marketing is no longer about visibility alone. It’s about
                credibility, patient experience, and measurable growth.
              </p>
              <p ref={digitalTransPara2Ref} className="text-lg text-gray-700 leading-relaxed">
                From multi-specialty hospitals to diagnostic labs and health-tech startups,{" "}
                <span className="font-semibold text-gray-900">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span>{" "}
                delivers performance-driven digital strategies tailored to the healthcare sector.
              </p>
              <p ref={digitalTransPara3Ref} className="text-lg text-gray-700 leading-relaxed">
                We combine medical marketing expertise, regulatory awareness, and data
                intelligence to create scalable digital ecosystems that increase patient
                acquisition while maintaining ethical communication standards.
              </p>
            </div>
            <div ref={heroImageRef} className="flex justify-end">
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
      <section className="bg-gray-100 py-24">
        <div className="px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 ref={expertiseHeaderRef} className="text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Marketing Expertise
            </h2>
            <p ref={expertiseSubHeaderRef} className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  ref={el => (expertiseCardsRef.current[index] = el)}
                  className="group bg-white border border-blue-100 rounded-2xl p-8 transition-all duration-500 hover:bg-teal-700 hover:shadow-2xl hover:-translate-y-2"
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
      <section className="bg-white py-24">
        <div className="px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 ref={frameworkHeaderRef} className="text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Marketing Framework
            </h2>
            <p ref={frameworkSubHeaderRef} className="text-lg text-gray-600">
              A structured, compliance-aware approach designed for measurable patient acquisition and long-term growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareFramework.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  ref={el => (frameworkCardsRef.current[index] = el)}
                  className="group bg-white border border-blue-100 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
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
      <section className="bg-gray-50 py-24">
        <div className="px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 ref={clientsHeaderRef} className="text-4xl font-bold text-gray-900 mb-4">
              Who We Work With
            </h2>
            <p ref={clientsSubHeaderRef} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each healthcare vertical requires a customized marketing blueprint —
              and we build it accordingly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {healthcareClients.map((item, index) => (
              <div
                key={index}
                ref={el => (clientsCardsRef.current[index] = el)}
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  index === healthcareClients.length - 1 ? "lg:col-start-2" : ""
                }`}
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
      <section ref={whyChooseSectionRef} className="bg-white py-24">
        <div className="px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-2xl space-y-6">
              <h2 ref={whyChooseHeadingRef} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Why Choose Us for Healthcare Digital Marketing?
              </h2>
              <p ref={whyChooseParaRef} className="text-lg text-gray-700 leading-relaxed">
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
                  ref={el => (whyChooseListRef.current[index] = el)}
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

      {/* FUTURE-READY HEALTHCARE MARKETING */}
      <section className="bg-blue-50 py-24">
        <div className="px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 ref={futureHeaderRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Future-Ready Healthcare Marketing
            </h2>
            <p ref={futureSubHeaderRef} className="text-gray-600 text-lg max-w-3xl mx-auto">
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
                  ref={el => (futureCardsRef.current[index] = el)}
                  className="group bg-white border border-blue-100 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
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
      <section ref={ctaSectionRef} className="bg-linear-to-r from-blue-700 to-blue-900 py-24 text-white">
        <div className="px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 ref={ctaHeadingRef} className="text-white md:text-5xl font-bold mb-6 leading-tight">
              Let’s Build a Healthier Digital Presence
            </h2>
            <p ref={ctaPara1Ref} className="text-blue-100 text-lg mb-6 leading-relaxed">
              Healthcare decisions are deeply personal. Your digital presence must
              reflect trust, authority, and care.
            </p>
            <p ref={ctaPara2Ref} className="text-blue-100 mb-10 leading-relaxed">
              Partner with{" "}
              <span className="font-semibold text-white">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              to create measurable, compliant, and sustainable healthcare marketing growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button
                ref={ctaButton1Ref}
                className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition shadow-lg hover:shadow-xl"
              >
                Start Your Healthcare Growth Strategy →
              </button>
              <button
                ref={ctaButton2Ref}
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition"
              >
                Speak to a Healthcare Marketing Expert
              </button>
            </div>
            <p ref={ctaClosingRef} className="text-blue-200 text-sm mt-10">
              Ready to transform your healthcare brand digitally? Let’s start building your patient acquisition engine today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Healthcare;