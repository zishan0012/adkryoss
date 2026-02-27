import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutImage from "../../assets/About.jpeg";
import WhoWeAreImage from "../../assets/WhoWeAre.png";
import WhyPartnerImage from "../../assets/WhyPartner.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discover",
    desc: "We understand your business goals, competitors, audience behavior, and digital maturity level.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Strategize",
    desc: "We design a customized growth blueprint aligned with your KPIs, industry dynamics, and scalability objectives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "indigo",
  },
  {
    title: "Execute",
    desc: "Our cross-functional teams deploy campaigns across SEO, paid media, content, and social with precision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Optimize",
    desc: "Through real-time analytics, A/B testing, and data monitoring, we continuously improve performance metrics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M9 17V9m4 8v-4m4 4v-7" />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Scale",
    desc: "Once validated, we scale winning strategies to maximize ROI and long-term brand equity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8M14 7h7v7" />
      </svg>
    ),
    color: "red",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();
  //  const [activeStep, setActiveStep] = useState(null);
  //   return (
  //       <>


       

  const [activeStep, setActiveStep] = useState(null);

  {/* // ========== REFS FOR ALL SECTIONS ==========
  // Hero */}
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubheadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);

  // Who We Are
  const whoSectionRef = useRef(null);
  const whoHeadingRef = useRef(null);
  const whoImageRef = useRef(null);
  const whoRightContentRef = useRef(null);
  const whoPara1Ref = useRef(null);
  const whoPara2Ref = useRef(null);
  const whoBlendRef = useRef(null);
  const whoListItemsRef = useRef([]);
  const whoLastParaRef = useRef(null);

  // Why Choose Us (cards)
  const whySectionRef = useRef(null);
  const whyHeaderRef = useRef(null);
  const whyCardsRef = useRef([]);
  const whyOutcomeLeftRef = useRef(null);
  const whyOutcomeRightRef = useRef(null);
  const whyOutcomeParaRef = useRef(null);

  // Expertise
  const expertiseSectionRef = useRef(null);
  const expertiseHeaderRef = useRef(null);
  const expertiseCardsRef = useRef([]);

  // Working Model
  const workingSectionRef = useRef(null);
  const workingHeaderRef = useRef(null);
  const workingCardsRef = useRef([]);

  // Vision & Mission
  const visionSectionRef = useRef(null);
  const visionHeadingRef = useRef(null);
  const visionCardRef = useRef(null);
  const missionCardRef = useRef(null);

  // Industries
  const industriesSectionRef = useRef(null);
  const industriesHeaderRef = useRef(null);
  const industriesCardsRef = useRef([]);

  // Partner
  const partnerSectionRef = useRef(null);
  const partnerHeadingRef = useRef(null);
  const partnerListRef = useRef(null);
  const partnerImageRef = useRef(null);
  const partnerBottomRef = useRef(null);

  // CTA
  const ctaSectionRef = useRef(null);
  const ctaContentRef = useRef(null);
  const ctaButtonRef = useRef(null);

  // ========== GSAP ANIMATIONS + FLOATING ==========
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => st.kill());

      const isMobile = window.innerWidth < 768;
      const floatAmount = isMobile ? 4 : 8;
      const floatDuration = isMobile ? 3 : 2.5;
      const floatDelay = 1.5; // wait for entrance animation to finish

      // ----- Hero Section -----
      if (heroSectionRef.current) {
        gsap.set([heroHeadingRef.current, heroSubheadingRef.current, heroParagraphRef.current, heroImageRef.current], {
          opacity: 0,
          y: isMobile ? 30 : 50,
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
          .to(heroHeadingRef.current, { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" })
          .to(heroSubheadingRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
          .to(heroParagraphRef.current, { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" }, "-=0.6")
          .to(heroImageRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out(1.2)" }, "-=0.5");

        // Floating for hero image
        gsap.to(heroImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: floatDelay,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- Who We Are Section -----
      if (whoSectionRef.current) {
        gsap.set(whoHeadingRef.current, { opacity: 0, y: isMobile ? 30 : 50 });
        gsap.set(whoImageRef.current, { opacity: 0, x: isMobile ? -20 : -30, scale: 0.95 });
        gsap.set(whoRightContentRef.current, { opacity: 0, x: isMobile ? 20 : 30 });
        gsap.set([whoPara1Ref.current, whoPara2Ref.current, whoBlendRef.current, whoLastParaRef.current], { opacity: 0, y: 20 });
        gsap.set(whoListItemsRef.current, { opacity: 0, y: 15 });

        const whoTl = gsap.timeline({
          scrollTrigger: {
            trigger: whoSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        whoTl
          .to(whoHeadingRef.current, { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" })
          .to(whoImageRef.current, { opacity: 1, x: 0, scale: 1, duration: 1.4, ease: "back.out(1.2)" }, "-=0.8")
          .to(whoRightContentRef.current, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }, "-=1.0")
          .to(whoPara1Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
          .to(whoPara2Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
          .to(whoBlendRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
          .to(whoListItemsRef.current, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1)" }, "-=0.2")
          .to(whoLastParaRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.3");

        // Floating for who image
        gsap.to(whoImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: floatDelay,
          scrollTrigger: {
            trigger: whoSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- Why Choose Us Section -----
      if (whySectionRef.current) {
        gsap.set(whyHeaderRef.current, { opacity: 0, y: 40 });
        gsap.set(whyCardsRef.current, { opacity: 0, y: 60, scale: 0.95 });
        gsap.set([whyOutcomeLeftRef.current, whyOutcomeRightRef.current, whyOutcomeParaRef.current], { opacity: 0, y: 40 });

        const whyTl = gsap.timeline({
          scrollTrigger: {
            trigger: whySectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        whyTl
          .to(whyHeaderRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          .to(whyCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: 1.1, stagger: 0.15, ease: "back.out(1.2)" }, "-=0.4")
          .to(whyOutcomeLeftRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.2")
          .to(whyOutcomeRightRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
          .to(whyOutcomeParaRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6");

        // Floating for each card
        whyCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: floatDelay + i * 0.1,
              scrollTrigger: {
                trigger: whySectionRef.current,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- Expertise Section (no floating) -----
      if (expertiseSectionRef.current) {
        gsap.set(expertiseHeaderRef.current, { opacity: 0, y: 40 });
        gsap.set(expertiseCardsRef.current, { opacity: 0, y: 50, scale: 0.95 });

        const expTl = gsap.timeline({
          scrollTrigger: {
            trigger: expertiseSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        expTl
          .to(expertiseHeaderRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          .to(expertiseCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1, ease: "back.out(1)" }, "-=0.4");
      }

      // ----- Working Model Section -----
      if (workingSectionRef.current) {
        gsap.set(workingHeaderRef.current, { opacity: 0, y: 40 });
        gsap.set(workingCardsRef.current, { opacity: 0, y: 60, scale: 0.9, rotation: (i) => (i % 2 === 0 ? -5 : 5) });

        const workTl = gsap.timeline({
          scrollTrigger: {
            trigger: workingSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        workTl
          .to(workingHeaderRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          .to(workingCardsRef.current, { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1.2, stagger: 0.15, ease: "back.out(1.4)" }, "-=0.4");

        // Floating for working model cards
        workingCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: floatDelay + i * 0.1,
              scrollTrigger: {
                trigger: workingSectionRef.current,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- Vision & Mission Section (no floating) -----
      if (visionSectionRef.current) {
        gsap.set(visionHeadingRef.current, { opacity: 0, y: 40 });
        gsap.set(visionCardRef.current, { opacity: 0, x: -50 });
        gsap.set(missionCardRef.current, { opacity: 0, x: 50 });

        const visionTl = gsap.timeline({
          scrollTrigger: {
            trigger: visionSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        visionTl
          .to(visionHeadingRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          .to(visionCardRef.current, { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" }, "-=0.6")
          .to(missionCardRef.current, { opacity: 1, x: 0, duration: 1.3, ease: "power3.out" }, "-=1.0");
      }

      // ----- Industries Section (no floating) -----
      if (industriesSectionRef.current) {
        gsap.set(industriesHeaderRef.current, { opacity: 0, y: 40 });
        gsap.set(industriesCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });

        const indTl = gsap.timeline({
          scrollTrigger: {
            trigger: industriesSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        indTl
          .to(industriesHeaderRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
          .to(industriesCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.4");
      }

      // ----- Partner Section -----
      if (partnerSectionRef.current) {
        gsap.set(partnerHeadingRef.current, { opacity: 0, x: -50 });
        gsap.set(partnerListRef.current, { opacity: 0, y: 30 });
        gsap.set(partnerImageRef.current, { opacity: 0, x: 50, scale: 0.9 });
        gsap.set(partnerBottomRef.current, { opacity: 0, y: 30 });

        const partnerTl = gsap.timeline({
          scrollTrigger: {
            trigger: partnerSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        partnerTl
          .to(partnerHeadingRef.current, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" })
          .to(partnerListRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.6")
          .to(partnerImageRef.current, { opacity: 1, x: 0, scale: 1, duration: 1.3, ease: "back.out(1.2)" }, "-=0.8")
          .to(partnerBottomRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.4");

        // Floating for partner image
        gsap.to(partnerImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: floatDelay,
          scrollTrigger: {
            trigger: partnerSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- CTA Section (button no floating, but maybe subtle) -----
      if (ctaSectionRef.current) {
        gsap.set(ctaContentRef.current, { opacity: 0, y: 50 });
        gsap.set(ctaButtonRef.current, { opacity: 0, scale: 0.8 });

        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        ctaTl
          .to(ctaContentRef.current, { opacity: 1, y: 0, duration: 1.3, ease: "power4.out" })
          .to(ctaButtonRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }, "-=0.4");
      }

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // -------------- JSX (unchanged) --------------
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
          <div className="text-left text-white max-w-[600px]">
            <h2 ref={heroHeadingRef} className="text-[32px] md:text-[48px] font-bold mb-4 leading-tight text-white">
              About Us
            </h2>
            <h3 ref={heroSubheadingRef} className="text-[20px] md:text-[24px] font-semibold mb-4">
              Performance. Precision. Possibility.
            </h3>
            <p ref={heroParagraphRef} className="text-[16px] md:text-[18px] text-white/90 leading-relaxed">
              Adkryoss managed by Clink Consultancy Services pvt. ltd is a next-generation digital marketing powerhouse
              built for brands that refuse to settle for average growth.
              <br />
              We don’t just execute campaigns. We engineer scalable digital ecosystems that drive measurable revenue,
              stronger brand authority, and long-term competitive advantage.
              <br />
              In a world where algorithms evolve daily and consumer behavior shifts overnight, we combine strategy,
              creativity, and data intelligence to help businesses stay ahead — not just relevant.
            </p>
          </div>
          <div ref={heroImageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={AboutImage}
                alt="About Section"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}






<motion.section
 ref={heroSectionRef}
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
    
    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px]">

      <h2 ref={heroHeadingRef} className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          About Us
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-100">
        Performance. Precision. Possibility.
      </h3>

      <p ref={heroParagraphRef} className="text-gray-200 text-md md:text-lg leading-relaxed">
        Adkryoss managed by Clink Consultancy Services pvt. ltd is a 
        next-generation digital marketing powerhouse built for brands 
        that refuse to settle for average growth.
        <br /><br />
        We don’t just execute campaigns. We engineer scalable digital 
        ecosystems that drive measurable revenue, stronger brand authority, 
        and long-term competitive advantage.
        <br /><br />
        In a world where algorithms evolve daily and consumer behavior 
        shifts overnight, we combine strategy, creativity, and data 
        intelligence to help businesses stay ahead — not just relevant.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div ref={heroImageRef} className="flex justify-center md:justify-end">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={AboutImage}
          alt="About Section"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

      </div>

    </div>

  </div>

  {/* Floating Animation */}
  <style>
    {`
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

</motion.section>









      {/* WHO WE ARE SECTION */}
      <section ref={whoSectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 ref={whoHeadingRef} className="text-4xl md:text-6xl font-bold text-gray-900 mb-16">
              Who We Are
            </h2>
            <img
              ref={whoImageRef}
              src={WhoWeAreImage}
              alt="Who We Are"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div ref={whoRightContentRef} className="space-y-6 text-gray-700 mt-10">
            <p ref={whoPara1Ref} className="text-lg leading-relaxed">
              We are strategists, analysts, storytellers, technologists, and growth architects.
            </p>
            <p ref={whoPara2Ref} className="text-lg leading-relaxed">
              Backed by the operational strength and consulting foundation of Clink Consultancy Services Pvt. Ltd.,
              Adkryoss is designed to deliver enterprise-grade marketing solutions with agile execution.
            </p>
            <p ref={whoBlendRef} className="text-lg font-semibold text-gray-900 mt-6">
              Our approach blends:
            </p>
            <ul className="space-y-3 text-lg font-medium">
              {[
                "Deep market research",
                "AI-driven performance insights",
                "Creative storytelling",
                "Conversion-focused strategy",
                "Continuous optimization",
              ].map((item, i) => (
                <li key={i} ref={(el) => (whoListItemsRef.current[i] = el)} className="flex items-start gap-4">
                  <span className="text-green-600 text-xl mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p ref={whoLastParaRef} className="text-lg leading-relaxed pt-4">
              We work with startups, SMEs, and growing enterprises to transform digital channels into predictable
              revenue engines.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section ref={whySectionRef} className="py-18 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={whyHeaderRef} className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-700 font-medium">
              Visibility is easy to promise. <br />
              <span className="text-gray-900 font-semibold">Impact is harder to deliver.</span>
            </p>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              At Adkryoss managed by Clink Consultancy Services pvt. ltd, we don’t chase impressions — we engineer
              measurable growth. Every campaign, framework, and optimization is aligned with one objective:
              <span className="font-semibold text-gray-900"> sustainable business performance.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                ref={(el) => (whyCardsRef.current[i] = el)}
                className="group relative bg-white p-10 rounded-3xl border-l-4 border-b-4 border-orange-300 shadow-lg hover:shadow-2xl hover:bg-blue-100 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-orange-500">
                  {i === 0 && "01. Growth Anchored in Revenue"}
                  {i === 1 && "02. Intelligence-Driven Strategy"}
                  {i === 2 && "03. Connected Digital Infrastructure"}
                  {i === 3 && "04. Built for Constant Change"}
                </h3>
                <p className="text-gray-600 mb-4 font-medium">
                  {i === 0 && "Clicks don’t pay bills. Conversions do."}
                  {i === 1 && "Guesswork has no place in performance marketing."}
                  {i === 2 && "Growth doesn’t happen in isolated channels."}
                  {i === 3 && "The digital landscape evolves daily."}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {i === 0 && (
                    <>
                      <li>✔ High-intent audience acquisition</li>
                      <li>✔ Lead quality over lead quantity</li>
                      <li>✔ Cost efficiency across funnels</li>
                      <li>✔ Revenue attribution clarity</li>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <li>✔ Advanced keyword & search intent mapping</li>
                      <li>✔ Customer journey analytics</li>
                      <li>✔ Behavioral segmentation insights</li>
                      <li>✔ Predictive performance modeling</li>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <li>✔ SEO + Paid Media synergy</li>
                      <li>✔ Content aligned with search intent</li>
                      <li>✔ Social amplification strategies</li>
                      <li>✔ Conversion-optimized web experiences</li>
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <li>✔ Proactive algorithm monitoring</li>
                      <li>✔ AI-driven search adaptation</li>
                      <li>✔ Privacy-compliant tracking models</li>
                      <li>✔ Continuous growth channel testing</li>
                    </>
                  )}
                </ul>
                <p className="mt-4 text-gray-600">
                  {i === 0 &&
                    "We build marketing systems that directly influence your bottom line — not just your traffic graph."}
                  {i === 1 &&
                    "Every action is backed by data signals, competitive analysis, and real-time performance tracking."}
                  {i === 2 &&
                    "Every channel strengthens the other — multiplying results instead of fragmenting efforts."}
                  {i === 3 && "Your strategy doesn’t remain static. It evolves — intelligently."}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-28">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div ref={whyOutcomeLeftRef}>
                <h3 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  The <br /> <span className="text-blue-600">Outcome?</span>
                </h3>
              </div>
              <div ref={whyOutcomeRightRef} className="space-y-4">
                <p className="text-xl md:text-2xl font-semibold text-gray-800">Sustainable growth.</p>
                <p className="text-xl md:text-2xl font-semibold text-gray-800">Higher marketing efficiency.</p>
                <p className="text-xl md:text-2xl font-semibold text-gray-800">Stronger brand authority.</p>
                <p className="text-xl md:text-2xl font-semibold text-gray-800">Performance that compounds over time.</p>
              </div>
            </div>
            <div ref={whyOutcomeParaRef} className="mt-16 text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                That’s the difference with Adkryoss managed by Clink Consultancy Services pvt. ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section ref={expertiseSectionRef} className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={expertiseHeaderRef} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Core Expertise</h2>
            <p className="text-lg text-gray-600 mt-4">
              We offer full-spectrum digital growth solutions designed for modern brands.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { bg: "bg-blue-100", text: "text-blue-900", title: "Search Engine Optimization (SEO)", items: ["Enterprise & Local SEO", "Technical SEO Audits", "E-commerce SEO", "Content-Led Organic Growth", "AI Search Optimization"] },
              { bg: "bg-green-100", text: "text-green-900", title: "Performance Marketing", items: ["Google Ads & PPC Campaigns", "Meta & Social Advertising", "Conversion Rate Optimization (CRO)", "Retargeting & Funnel Optimization", "ROI-Driven Media Planning"] },
              { bg: "bg-purple-100", text: "text-purple-900", title: "Social Media Marketing", items: ["Brand Strategy & Positioning", "Paid Social Campaigns", "Community Growth", "Influencer Collaborations", "Content Production & Creative Direction"] },
              { bg: "bg-yellow-100", text: "text-yellow-900", title: "Content & Inbound Marketing", items: ["SEO-Optimized Blog Strategy", "Thought Leadership Content", "Landing Page Optimization", "Marketing Automation", "Email & Funnel Sequences"] },
              { bg: "bg-pink-100", text: "text-pink-900", title: "Web & Experience Optimization", items: ["Conversion-Focused Website Design", "UX & UI Strategy", "Speed & Performance Optimization", "Analytics & Heatmap Tracking"] },
            ].map((card, i) => (
              <div
                key={i}
                ref={(el) => (expertiseCardsRef.current[i] = el)}
                className={`${card.bg} ${card.text} p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300`}
              >
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <ul className="space-y-2 text-sm md:text-base">
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING MODEL SECTION */}
      <section ref={workingSectionRef} className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={workingHeaderRef} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Working Model</h2>
            <p className="text-lg text-gray-600 mt-4">We follow a structured yet agile growth framework.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (workingCardsRef.current[i] = el)}
                onClick={() => setActiveStep(step)}
                className={`cursor-pointer p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300
                  ${step.color === "green" ? "bg-green-100/80 shadow-green-400/50 hover:shadow-green-500/70" : ""}
                  ${step.color === "red" ? "bg-red-100/80 shadow-red-400/50 hover:shadow-red-500/70" : ""}
                  ${step.color === "blue" ? "bg-blue-100/80 shadow-blue-400/50 hover:shadow-blue-500/70" : ""}
                  ${step.color === "indigo" ? "bg-indigo-100/80 shadow-indigo-400/50 hover:shadow-indigo-500/70" : ""}
                  ${step.color === "purple" ? "bg-purple-100/80 shadow-purple-400/50 hover:shadow-purple-500/70" : ""}
                `}
              >
                <div className={`w-14 h-14 bg-${step.color}-200 rounded-xl flex items-center justify-center mb-5`}>
                  <div className={`text-${step.color}-600`}>{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {activeStep && (
          <div onClick={() => setActiveStep(null)} className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-12 relative" onClick={(e) => e.stopPropagation()}>
              <h2 className={`text-4xl font-bold mb-6 text-${activeStep.color}-600`}>{activeStep.title}</h2>
              <p className="text-lg text-gray-700">{activeStep.desc}</p>
              <button
                onClick={() => setActiveStep(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>

      {/* VISION & MISSION SECTION */}
      <section ref={visionSectionRef} className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 ref={visionHeadingRef} className="text-4xl font-bold text-center mb-16">
            Our Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div ref={visionCardRef} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-blue-100/80 shadow-blue-400/50">
              <div className="flex items-start gap-6">
                <img src="https://www.techmagnate.com/wp-content/uploads/2025/08/vission.webp" alt="Vision" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become a globally trusted digital growth partner that helps brands dominate their industry through
                    intelligent marketing and sustainable digital systems.
                  </p>
                </div>
              </div>
            </div>
            <div ref={missionCardRef} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-orange-100/80 shadow-orange-400/50">
              <div className="flex items-start gap-6">
                <img src="https://www.techmagnate.com/wp-content/uploads/2025/08/mission.webp" alt="Mission" className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To combine innovation, strategy, and performance marketing expertise to deliver measurable results
                    that directly impact revenue and brand authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section ref={industriesSectionRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div ref={industriesHeaderRef}>
            <h2 className="text-4xl font-bold text-center mb-4">Industries We Serve</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              We deliver tailored digital growth strategies across diverse industries, helping brands scale with
              performance-driven solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { img: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png", text: "E-commerce & D2C Brands" },
              { img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", text: "Education & EdTech" },
              { img: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png", text: "Healthcare" },
              { img: "https://cdn-icons-png.flaticon.com/512/3063/3063823.png", text: "Corporate & B2B Services" },
              { img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", text: "Startups & Technology Companies" },
              { img: "https://cdn-icons-png.flaticon.com/512/854/854878.png", text: "Real Estate & Local Businesses" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (industriesCardsRef.current[i] = el)}
                className="group relative bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-orange-400/100"
              >
                <span className="absolute top-0 left-0 h-full w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 h-1 w-full bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <img src={item.img} alt={item.text} className="w-16 h-16 mx-auto mb-6 object-contain" />
                <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-[#0066cc]">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section ref={partnerSectionRef} className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 ref={partnerHeadingRef} className="text-4xl font-bold mb-8">
                Why Partner With Us?
              </h2>
              <ul ref={partnerListRef} className="space-y-4">
                {[
                  "Transparent reporting & performance dashboards",
                  "Dedicated account management",
                  "AI-powered research & forecasting",
                  "Agile execution model",
                  "Scalable marketing systems",
                  "ROI-focused campaign structure",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-green-600 text-xl mt-1">✔</span>
                    <span className="text-gray-700 text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div ref={partnerImageRef} className="flex justify-center">
              <img src={WhyPartnerImage} alt="Partnership" className="rounded-2xl shadow-lg w-full h-100 max-w-md object-cover" />
            </div>
          </div>
          <div ref={partnerBottomRef} className="mt-20 text-center max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              At <span className="font-bold">Adkryoss managed by Clink Consultancy Services Pvt. Ltd</span>, we believe
              growth is not accidental. It is designed, tested, optimized, and scaled.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaSectionRef} className="py-18 px-6 bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-center">
        <div ref={ctaContentRef} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Let’s Build Your Digital Growth Engine</h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10">
            Whether you aim to increase organic visibility, generate high-quality leads, dominate paid advertising, or
            build a powerful online brand presence — we create strategies that move businesses forward.
          </p>
          <div className="mb-10">
            <p className="text-2xl font-semibold mb-2 text-white">Your growth journey deserves more than generic marketing.</p>
            <p className="text-2xl font-semibold text-white">It deserves intelligent execution.</p>
          </div>
          <p className="text-lg text-blue-200">
            <span className="font-semibold text-white">Adkryoss managed by Clink Consultancy Services Pvt. Ltd</span> —
            Where Strategy Meets Performance.
          </p>
          <div className="mt-12">
            <button
              ref={ctaButtonRef}
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;