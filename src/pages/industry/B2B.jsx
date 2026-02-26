import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import B2BImage from "../../assets/B2B.jpeg";
import B2BMarketingIsDifferentImage from "../../assets/B2BMarketingIsDifferent.png";
import WhyB2BBrandsChooseUsImage from "../../assets/WhyB2BBrandsChooseUs.png";

gsap.registerPlugin(ScrollTrigger);

const B2B = () => {
  const navigate = useNavigate();

  // ========== REFS FOR ALL SECTIONS ==========
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);

  const diffSectionRef = useRef(null);
  const diffHeadingRef = useRef(null);
  const diffLine1Ref = useRef(null);
  const diffLine2Ref = useRef(null);
  const diffLine3Ref = useRef(null);
  const diffLine4Ref = useRef(null);
  const diffPointsRef = useRef([]);
  const diffImageRef = useRef(null);
  const diffClosingRef = useRef(null);

  const frameworkCardsRef = useRef([]);
  const frameworkHeaderRef = useRef(null);

  const servicesCardsRef = useRef([]);
  const servicesHeaderRef = useRef(null);

  const industriesCardsRef = useRef([]);
  const industriesHeaderRef = useRef(null);
  const industriesStatementRef = useRef(null);

  const whyChooseSectionRef = useRef(null);
  const whyChooseHeadingRef = useRef(null);
  const whyChooseListRef = useRef([]);
  const whyChooseImageRef = useRef(null);
  const whyChooseClosingRef = useRef(null);

  const techCardsRef = useRef([]);
  const techHeaderRef = useRef(null);
  const techParagraphRef = useRef(null);

  const ctaSectionRef = useRef(null);
  const ctaHeadingRef = useRef(null);
  const ctaLine1Ref = useRef(null);
  const ctaLine2Ref = useRef(null);
  const ctaLine3Ref = useRef(null);
  const ctaBrandRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const ctaFinalRef = useRef(null);

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

        // Floating hero image
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

      // ----- B2B MARKETING IS DIFFERENT SECTION -----
      if (diffSectionRef.current) {
        gsap.set([diffHeadingRef.current, diffLine1Ref.current, diffLine2Ref.current, diffLine3Ref.current, diffLine4Ref.current, diffClosingRef.current], {
          opacity: 0,
          y: baseY,
        });
        gsap.set(diffPointsRef.current, { opacity: 0, y: 20 });
        gsap.set(diffImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

        const diffTl = gsap.timeline({
          scrollTrigger: {
            trigger: diffSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        diffTl
          .to(diffHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to([diffLine1Ref.current, diffLine2Ref.current, diffLine3Ref.current, diffLine4Ref.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5")
          .to(diffPointsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(diffImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(diffClosingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        // Floating image
        gsap.to(diffImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: diffSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- FRAMEWORK CARDS (5 cards) -----
      if (frameworkCardsRef.current.length) {
        gsap.set(frameworkHeaderRef.current, { opacity: 0, y: baseY });
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
          .to(frameworkCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        // Floating cards
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

      // ----- SERVICES CARDS (6 cards) -----
      if (servicesCardsRef.current.length) {
        gsap.set(servicesHeaderRef.current, { opacity: 0, y: baseY });
        gsap.set(servicesCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

        const servTl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        servTl
          .to(servicesHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(servicesCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        // Floating cards
        servicesCardsRef.current.forEach((card, i) => {
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

      // ----- INDUSTRIES CARDS (6 cards) -----
      if (industriesCardsRef.current.length) {
        gsap.set(industriesHeaderRef.current, { opacity: 0, y: baseY });
        gsap.set(industriesCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });
        gsap.set(industriesStatementRef.current, { opacity: 0, y: 30 });

        const indTl = gsap.timeline({
          scrollTrigger: {
            trigger: industriesCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        indTl
          .to(industriesHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(industriesCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(industriesStatementRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        industriesCardsRef.current.forEach((card, i) => {
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

      // ----- WHY CHOOSE US SECTION -----
      if (whyChooseSectionRef.current) {
        gsap.set([whyChooseHeadingRef.current, whyChooseClosingRef.current], { opacity: 0, y: baseY });
        gsap.set(whyChooseListRef.current, { opacity: 0, y: 20 });
        gsap.set(whyChooseImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

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
          .to(whyChooseListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.5")
          .to(whyChooseImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(whyChooseClosingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        // Floating image
        gsap.to(whyChooseImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: whyChooseSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- TECHNOLOGY CARDS (5 cards) -----
      if (techCardsRef.current.length) {
        gsap.set([techHeaderRef.current, techParagraphRef.current], { opacity: 0, y: baseY });
        gsap.set(techCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

        const techTl = gsap.timeline({
          scrollTrigger: {
            trigger: techCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        techTl
          .to(techHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(techParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(techCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        techCardsRef.current.forEach((card, i) => {
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
        gsap.set([ctaHeadingRef.current, ctaLine1Ref.current, ctaLine2Ref.current, ctaLine3Ref.current, ctaBrandRef.current, ctaButtonRef.current, ctaFinalRef.current], {
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
          .to([ctaLine1Ref.current, ctaLine2Ref.current, ctaLine3Ref.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5")
          .to(ctaBrandRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.4")
          .to(ctaButtonRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.3")
          .to(ctaFinalRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.2");
      }

      ScrollTrigger.refresh();
    }, [
      heroSectionRef,
      diffSectionRef,
      frameworkCardsRef,
      servicesCardsRef,
      industriesCardsRef,
      whyChooseSectionRef,
      techCardsRef,
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
      <section
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
              B2B Digital Marketing Services
            </h2>
            <h3 ref={heroSubHeadingRef} className="text-2xl md:text-xl font-semibold leading-snug">
              Growth That Converts Conversations Into Contracts
            </h3>
            <p ref={heroParagraphRef} className="text-white md:text-md leading-relaxed max-w-[600px]">
              In B2B, decisions are not emotional — they are strategic, data-driven, and value-focused. Your buyers are decision-makers, procurement heads, CXOs, and business influencers who demand proof before partnership.
              <br />
              <span className="font-bold text-white">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span> builds intelligent B2B marketing ecosystems that generate qualified leads, shorten sales cycles, and drive measurable revenue growth.
            </p>
          </div>
          <div ref={heroImageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={B2BImage}
                alt="B2B Digital Marketing"
                loading="lazy"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* B2B MARKETING IS DIFFERENT SECTION */}
      <section ref={diffSectionRef} className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-6">
            <h2 ref={diffHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              B2B Marketing Is Different. Your Strategy Should Be Too.
            </h2>
            <p ref={diffLine1Ref} className="text-gray-800 text-lg sm:text-xl font-medium">
              B2B marketing is not about impressions — it’s about influence.
            </p>
            <p ref={diffLine2Ref} className="text-gray-800 text-lg sm:text-xl font-medium">
              It’s not about traffic — it’s about pipeline.
            </p>
            <p ref={diffLine3Ref} className="text-gray-800 text-lg sm:text-xl font-medium">
              It’s not about followers — it’s about long-term business relationships.
            </p>
            <p ref={diffLine4Ref} className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
              At Adkryoss managed by Clink Consultancy Services Private Limited, we design performance-led B2B frameworks powered by:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-5 text-gray-700 text-base sm:text-lg">
                {[
                  "Account-Based Marketing (ABM)",
                  "Intent-driven targeting",
                  "Data-backed SEO",
                  "LinkedIn & Performance Campaigns",
                  "Conversion-centric content",
                  "Marketing automation workflows",
                  "CRM-integrated lead nurturing",
                ].map((point, idx) => (
                  <li key={idx} ref={el => (diffPointsRef.current[idx] = el)} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div ref={diffImageRef} className="flex justify-center">
              <img
                src={B2BMarketingIsDifferentImage}
                alt="B2B Marketing"
                loading="lazy"
                className="rounded-2xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
          <div ref={diffClosingRef} className="text-center mt-16 max-w-4xl mx-auto">
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed font-medium">
              We align marketing with sales to ensure every campaign contributes to revenue — not just visibility.
            </p>
          </div>
        </div>
      </section>

      {/* OUR B2B DIGITAL MARKETING FRAMEWORK */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 ref={frameworkHeaderRef} className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
              Our B2B Digital Marketing Framework
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Deep Market & Buyer Intelligence",
                desc: "We identify high-value accounts, analyze industry gaps, map buyer personas, and understand decision-making journeys across complex sales funnels.",
                icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></>,
              },
              {
                title: "Precision Targeting & Channel Strategy",
                desc: "From LinkedIn ads to search intent campaigns, we choose platforms based on where your decision-makers research and engage.",
                icon: <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />,
              },
              {
                title: "High-Authority Content & Thought Leadership",
                desc: "Whitepapers, case studies, landing pages, solution pages, blogs, and LinkedIn authority content — designed to build credibility and trust.",
                icon: <><path d="M12 20h9" /><path d="M12 4h9" /><path d="M4 9h16" /><path d="M4 15h16" /></>,
              },
              {
                title: "Multi-Touch Lead Nurturing",
                desc: "Email automation, retargeting campaigns, CRM workflows, and performance analytics ensure prospects move from awareness to conversion.",
                icon: <path d="M5 12l5 5L20 7" />,
              },
              {
                title: "Revenue-Driven Optimization",
                desc: "We continuously optimize based on CPL, CAC, pipeline value, and ROI — not vanity metrics.",
                icon: <><path d="M3 3h18v18H3z" /><path d="M7 13l3 3 7-7" /></>,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (frameworkCardsRef.current[idx] = el)}
                className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CORE B2B DIGITAL MARKETING SERVICES */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 ref={servicesHeaderRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Our Core B2B Digital Marketing Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "B2B SEO & Search Visibility",
                desc: "We help you rank for high-intent commercial and solution-based keywords that decision-makers actively search. From technical SEO to content clusters and industry authority building — we focus on long-term organic growth.",
                icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></>,
              },
              {
                title: "Account-Based Marketing (ABM)",
                desc: "Hyper-targeted campaigns crafted for key accounts using personalized messaging, intent signals, and multi-channel outreach.",
                icon: <><path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5z" /><path d="M2 22c0-4 4-7 10-7s10 3 10 7" /></>,
              },
              {
                title: "LinkedIn & B2B Performance Ads",
                desc: "Campaigns built specifically for B2B lead generation using advanced targeting filters like job roles, industries, company size, and decision-maker levels.",
                icon: <><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 1 1 4 0v3" /></>,
              },
              {
                title: "B2B Content Marketing",
                desc: "Strategic content that educates, nurtures, and converts — including case studies, industry reports, thought-leadership articles, and conversion-focused landing pages.",
                icon: <><path d="M4 4h16v16H4z" /><path d="M8 8h8M8 12h6M8 16h4" /></>,
              },
              {
                title: "Marketing Automation & CRM Integration",
                desc: "We integrate tools that align marketing with sales pipelines, automate follow-ups, and provide transparent reporting dashboards.",
                icon: <><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></>,
              },
              {
                title: "Conversion Rate Optimization (CRO)",
                desc: "Landing page audits, A/B testing, CTA optimization, UX refinement, and funnel improvements to increase lead-to-opportunity ratios.",
                icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (servicesCardsRef.current[idx] = el)}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
              >
                <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE EMPOWER IN B2B */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 ref={industriesHeaderRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Industries We Empower in B2B
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "SaaS & Technology Companies", icon: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /></> },
              { title: "IT & Consulting Firms", icon: <><path d="M9 17v-6a3 3 0 0 1 6 0v6" /><rect x="4" y="4" width="16" height="16" rx="2" /></> },
              { title: "Manufacturing & Industrial Businesses", icon: <><path d="M3 21h18" /><path d="M5 21V9l7-4 7 4v12" /></> },
              { title: "Healthcare & Medical Enterprises", icon: <path d="M12 21s-6-4.35-9-8.5S6 3 12 8c6-5 9 1 9 4.5S12 21 12 21z" /> },
              { title: "Education & EdTech Platforms", icon: <><path d="M12 3l9 4-9 4-9-4 9-4z" /><path d="M3 10l9 4 9-4" /><path d="M3 17l9 4 9-4" /></> },
              { title: "Financial & Professional Services", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></> },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (industriesCardsRef.current[idx] = el)}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center"
              >
                <svg className="w-10 h-10 text-blue-700 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
          <div ref={industriesStatementRef} className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span> creates customized B2B strategies tailored to each industry’s buying behavior and competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* WHY B2B BRANDS CHOOSE US */}
      <section ref={whyChooseSectionRef} className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={whyChooseHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why B2B Brands Choose Us
            </h2>
            <div className="space-y-6">
              {[
                { text: "Data-first strategy, not guesswork", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></> },
                { text: "Revenue-focused campaigns", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></> },
                { text: "Integrated marketing & sales alignment", icon: <path d="M8 17l4 4 4-4M8 7l4-4 4 4" /> },
                { text: "Advanced analytics & reporting", icon: <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" /> },
                { text: "Scalable multi-channel growth framework", icon: <><path d="M3 3h18v18H3z" /><path d="M7 13l3 3 7-7" /></> },
                { text: "Long-term authority building approach", icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /> },
              ].map((item, idx) => (
                <div key={idx} ref={el => (whyChooseListRef.current[idx] = el)} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-blue-700 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div ref={whyChooseClosingRef} className="mt-10">
              <p className="text-lg font-semibold text-gray-900">
                We don’t just generate leads — we build predictable revenue systems.
              </p>
            </div>
          </div>
          <div ref={whyChooseImageRef} className="relative">
            <img
              src={WhyB2BBrandsChooseUsImage}
              alt="B2B Revenue Growth Strategy"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR TECHNOLOGY-DRIVEN ADVANTAGE */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 ref={techHeaderRef} className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
              Our Technology-Driven Advantage
            </h2>
            <p ref={techParagraphRef} className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
              We leverage:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "AI-Powered Keyword & Competitor Intelligence", icon: <><path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5 5l-1.5-1.5M20.5 20.5L19 19M5 19l-1.5 1.5M20.5 3.5L19 5" /><circle cx="12" cy="12" r="4" /></> },
              { title: "Intent Data Platforms", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></> },
              { title: "CRM-Based Performance Tracking", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h6" /></> },
              { title: "Automation-Driven Nurturing Systems", icon: <><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></> },
              { title: "Real-Time Campaign Dashboards", icon: <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" /> },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (techCardsRef.current[idx] = el)}
                className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-4 sm:mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Modern B2B marketing requires precision, speed, and adaptability. Our approach ensures your brand stays ahead of evolving industry trends and digital transformation shifts.
            </p>
          </div>
        </div>
      </section>

      {/* READY TO ACCELERATE YOUR B2B GROWTH */}
      <section ref={ctaSectionRef} className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 sm:px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={ctaHeadingRef} className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
            Ready to Accelerate Your B2B Growth?
          </h2>
          <div className="space-y-4 text-lg sm:text-xl text-white mb-10">
            <p ref={ctaLine1Ref} className="text-white">Complex sales require smarter marketing.</p>
            <p ref={ctaLine2Ref} className="text-white">High-value deals demand strategic visibility.</p>
            <p ref={ctaLine3Ref} className="text-white">Sustainable growth needs performance architecture.</p>
          </div>
          <p ref={ctaBrandRef} className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Partner with <span className="font-semibold text-white">
              Adkryoss managed by Clink Consultancy Services Private Limited
            </span> to transform your B2B marketing into a measurable revenue engine.
          </p>
          <div ref={ctaButtonRef}>
            <button
              onClick={() => navigate("/contact?service=b2b")}
              className="bg-white text-blue-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
            >
              Let’s Build Your Growth Strategy
            </button>
          </div>
          <div ref={ctaFinalRef} className="mt-10">
            <p className="text-blue-200 text-sm sm:text-base">
              Let’s build your next growth milestone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default B2B;