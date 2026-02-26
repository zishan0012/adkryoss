import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EcommerceImage from "../../assets/Ecommerce.png";
import TheEcommerceGrowthChallengeImage from "../../assets/TheEcommerceGrowthChallenge.png";
import WhyChooseAdkryossImage from "../../assets/WhyChooseAdkryoss.png";
import FashionApparelImage from "../../assets/FashionApparel.png";
import BeautyCosmeticsImage from "../../assets/BeautyCosmetics.png";
import ElectronicsGadgetsImage from "../../assets/ElectronicsGadgets.png";
import FMCGGroceryImage from "../../assets/FMCGGrocery.png";
import HomeFurnitureImage from "../../assets/HomeFurniture.png";
import LuxuryLifestyleBrandsImage from "../../assets/LuxuryLifestyleBrands.png";
import ShopifyImage from "../../assets/Shopify.png";
import WooImage from "../../assets/Woo.png";
import BigImage from "../../assets/Big.png";
import FlipkartImage from "../../assets/Flipkart.png";
import AmazonImage from "../../assets/Amazon.png";
import MazentoImage from "../../assets/Mazento.png";
import IncreasedOrganicRevenueImage from "../../assets/IncreasedOrganicRevenue.png";
import HigherROASImage from "../../assets/HigherROAS.png";
import ReducedAcquisitionCostImage from "../../assets/ReducedAcquisitionCost.png";
import ImprovedConversionRatesImage from "../../assets/ImprovedConversionRates.png";
import EnhancedCustomerLifetimeValueImage from "../../assets/EnhancedCustomerLifetimeValue.png";
import HealthcareWellnessImage from "../../assets/HealthcareWellness.png";

gsap.registerPlugin(ScrollTrigger);

const Ecommerce = () => {
  const navigate = useNavigate();

  // ========== REFS FOR ALL SECTIONS ==========
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);

  const challengeSectionRef = useRef(null);
  const challengeHeadingRef = useRef(null);
  const challengeSubHeadingRef = useRef(null);
  const challengeListRef = useRef([]);
  const challengeQuoteRef = useRef(null);
  const challengeBrandRef = useRef(null);
  const challengeImageRef = useRef(null);

  const solutionsCardsRef = useRef([]);
  const solutionsHeaderRef = useRef(null);
  const solutionsSubHeaderRef = useRef(null);

  const frameworkCardsRef = useRef([]);
  const frameworkHeaderRef = useRef(null);

  const whyChooseSectionRef = useRef(null);
  const whyChooseHeadingRef = useRef(null);
  const whyChoosePointsRef = useRef([]);
  const whyChooseImageRef = useRef(null);

  const industriesCardsRef = useRef([]);
  const industriesHeaderRef = useRef(null);

  const techCardsRef = useRef([]);
  const techHeaderRef = useRef(null);
  const techSubTextRef = useRef(null);

  const resultsCardsRef = useRef([]);
  const resultsHeaderRef = useRef(null);
  const resultsSubTextRef = useRef(null);

  const ctaSectionRef = useRef(null);
  const ctaHeadingRef = useRef(null);
  const ctaPara1Ref = useRef(null);
  const ctaPara2Ref = useRef(null);
  const ctaPara3Ref = useRef(null);
  const ctaButtonRef = useRef(null);

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

      // ----- THE ECOMMERCE GROWTH CHALLENGE SECTION -----
      if (challengeSectionRef.current) {
        gsap.set([challengeHeadingRef.current, challengeSubHeadingRef.current, challengeQuoteRef.current, challengeBrandRef.current], {
          opacity: 0,
          y: baseY,
        });
        gsap.set(challengeListRef.current, { opacity: 0, y: 20 });
        gsap.set(challengeImageRef.current, { opacity: 0, x: 50, scale: 0.95 });

        const challengeTl = gsap.timeline({
          scrollTrigger: {
            trigger: challengeSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        challengeTl
          .to(challengeHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(challengeSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(challengeListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(challengeImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to([challengeQuoteRef.current, challengeBrandRef.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.2");

        // Floating image
        gsap.to(challengeImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: challengeSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- SOLUTIONS CARDS (6 cards) -----
      if (solutionsCardsRef.current.length) {
        gsap.set([solutionsHeaderRef.current, solutionsSubHeaderRef.current], { opacity: 0, y: baseY });
        gsap.set(solutionsCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

        const solTl = gsap.timeline({
          scrollTrigger: {
            trigger: solutionsCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        solTl
          .to(solutionsHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(solutionsSubHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(solutionsCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        solutionsCardsRef.current.forEach((card, i) => {
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

      // ----- FRAMEWORK CARDS (4 cards) -----
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

      // ----- WHY CHOOSE ADKRYOSS SECTION -----
      if (whyChooseSectionRef.current) {
        gsap.set([whyChooseHeadingRef.current, whyChooseImageRef.current], { opacity: 0, y: baseY });
        gsap.set(whyChoosePointsRef.current, { opacity: 0, y: 20 });

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
          .to(whyChoosePointsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.5")
          .to(whyChooseImageRef.current, { opacity: 1, y: 0, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8");

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

      // ----- INDUSTRIES CARDS (7 cards) -----
      if (industriesCardsRef.current.length) {
        gsap.set(industriesHeaderRef.current, { opacity: 0, y: baseY });
        gsap.set(industriesCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });

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
          .to(industriesCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

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

      // ----- TECHNOLOGY PLATFORMS CARDS (6 cards) -----
      if (techCardsRef.current.length) {
        gsap.set([techHeaderRef.current, techSubTextRef.current], { opacity: 0, y: baseY });
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
          .to(techSubTextRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
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

      // ----- RESULTS THAT MATTER CARDS (5 cards) -----
      if (resultsCardsRef.current.length) {
        gsap.set(resultsHeaderRef.current, { opacity: 0, y: baseY });
        gsap.set(resultsCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });
        gsap.set(resultsSubTextRef.current, { opacity: 0, y: 30 });

        const resTl = gsap.timeline({
          scrollTrigger: {
            trigger: resultsCardsRef.current[0]?.parentElement,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        resTl
          .to(resultsHeaderRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(resultsCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(resultsSubTextRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        resultsCardsRef.current.forEach((card, i) => {
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
        gsap.set([ctaHeadingRef.current, ctaPara1Ref.current, ctaPara2Ref.current, ctaPara3Ref.current, ctaButtonRef.current], {
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
          .to([ctaPara1Ref.current, ctaPara2Ref.current, ctaPara3Ref.current], { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.5")
          .to(ctaButtonRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.3");
      }

      ScrollTrigger.refresh();
    }, [
      heroSectionRef,
      challengeSectionRef,
      solutionsCardsRef,
      frameworkCardsRef,
      whyChooseSectionRef,
      industriesCardsRef,
      techCardsRef,
      resultsCardsRef,
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
              Ecommerce Digital Marketing Services
            </h2>
            <h3 ref={heroSubHeadingRef} className="text-2xl md:text-xl font-semibold leading-snug">
              Drive Sales. Scale Faster. Dominate Marketplaces.
            </h3>
            <p ref={heroParagraphRef} className="text-white md:text-md leading-relaxed max-w-[600px]">
              The ecommerce landscape is evolving at lightning speed. Competition is fierce, customer journeys are fragmented, and performance marketing costs are rising.
              <br />
              <span className="font-bold text-white">
                At Adkryoss managed by Clink Consultancy Services Private Limited
              </span> we build high-performance ecommerce marketing ecosystems that increase visibility, improve conversion rates, and maximize customer lifetime value. From SEO and paid media to CRO and retention automation — we engineer growth that compounds.
            </p>
          </div>
          <div ref={heroImageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={EcommerceImage}
                alt="Ecommerce Digital Marketing"
                loading="lazy"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE ECOMMERCE GROWTH CHALLENGE */}
      <section ref={challengeSectionRef} className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={challengeHeadingRef} className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-8">
              The Ecommerce Growth Challenge
            </h2>
            <p ref={challengeSubHeadingRef} className="text-gray-600 mb-8 text-base sm:text-lg">
              Ecommerce brands today struggle with:
            </p>
            <div className="space-y-6">
              {[
                { text: "Rising CAC (Customer Acquisition Cost)", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></> },
                { text: "Low conversion rates", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></> },
                { text: "Cart abandonment", icon: <><path d="M6 6h15l-1.5 9h-13z" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></> },
                { text: "Marketplace dependency", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 12h8" /></> },
                { text: "Poor repeat purchase rates", icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /> },
                { text: "Ineffective attribution tracking", icon: <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" /> },
              ].map((item, idx) => (
                <div key={idx} ref={el => (challengeListRef.current[idx] = el)} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-6">
              <p ref={challengeQuoteRef} className="text-lg font-semibold text-gray-900">
                Random campaigns don’t scale ecommerce businesses. Data-driven ecosystems do.
              </p>
              <p ref={challengeBrandRef} className="text-gray-700 leading-relaxed">
                That’s where <span className="font-semibold text-gray-900">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span> steps in — combining strategy, creativity, automation, and performance analytics into one integrated growth engine.
              </p>
            </div>
          </div>
          <div ref={challengeImageRef} className="relative">
            <img
              src={TheEcommerceGrowthChallengeImage}
              alt="Ecommerce Growth Strategy"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR ECOMMERCE DIGITAL MARKETING SOLUTIONS */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 ref={solutionsHeaderRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Ecommerce Digital Marketing Solutions
            </h2>
            <p ref={solutionsSubHeaderRef} className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              We create performance-led strategies tailored for D2C brands, marketplaces, omnichannel retailers, and global ecommerce businesses.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ecommerce SEO Services",
                desc1: "Search is still the most profitable long-term acquisition channel.",
                items: ["Product pages", "Category pages", "Technical SEO", "Core Web Vitals", "Structured data & schema", "Marketplace SEO (Amazon, Flipkart, etc.)"],
                desc2: "Our SEO framework ensures higher rankings, improved organic revenue, and scalable traffic growth.",
                icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></>,
              },
              {
                title: "Performance Marketing (Paid Media)",
                desc1: "Growth requires precision targeting and smart bidding.",
                items: ["Google Shopping & Performance Max", "Meta (Facebook & Instagram) Ads", "YouTube Commerce Ads", "Marketplace Advertising", "Retargeting & Dynamic Product Ads"],
                desc2: "Our data-backed paid strategies focus on ROAS optimization, audience segmentation, and full-funnel targeting.",
                icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>,
              },
              {
                title: "Conversion Rate Optimization (CRO)",
                desc1: "Traffic without conversions is wasted potential.",
                items: ["Product page UX", "Checkout optimization", "Heatmap & behavior analysis", "A/B testing", "Mobile-first experiences"],
                desc2: "By analyzing user behavior and removing friction points, we boost conversions and average order value.",
                icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
              },
              {
                title: "Marketplace Growth & Optimization",
                desc1: "Marketplaces are competitive battlegrounds.",
                items: ["Product listing optimization", "Keyword-rich content creation", "Pricing strategy", "Ad campaign management", "Inventory & reputation optimization"],
                desc2: "Our marketplace experts ensure better visibility and higher conversion performance.",
                icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 12h8" /></>,
              },
              {
                title: "Ecommerce Content & Creative Strategy",
                desc1: "Modern ecommerce thrives on storytelling.",
                items: ["High-converting product descriptions", "Performance ad creatives", "Video commerce strategy", "Influencer & UGC campaigns", "SEO-optimized blogs"],
                desc2: "Content is not just creative — it’s revenue-driven.",
                icon: <><path d="M4 4h16v16H4z" /><path d="M8 8h8M8 12h6M8 16h4" /></>,
              },
              {
                title: "Marketing Automation & Retention",
                desc1: "Retention is the new growth multiplier.",
                items: ["Email marketing funnels", "SMS & WhatsApp automation", "Abandoned cart workflows", "Loyalty campaigns", "Customer lifecycle marketing"],
                desc2: "At Adkryoss managed by Clink Consultancy Services Private Limited, we focus on maximizing lifetime value, not just first purchases.",
                icon: <><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></>,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (solutionsCardsRef.current[idx] = el)}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc1}</p>
                <ul className="text-gray-700 space-y-1 text-sm sm:text-base mb-4">
                  {item.items.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
                <p className="text-gray-700 mt-4 font-medium">{item.desc2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR ECOMMERCE GROWTH FRAMEWORK */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 ref={frameworkHeaderRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Ecommerce Growth Framework
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Research & Market Intelligence", desc: "We analyze competitors, customer behavior, search intent, and marketplace trends.", icon: <><path d="M21 21l-4.35-4.35" /><circle cx="10" cy="10" r="7" /></> },
              { title: "Strategy Blueprint", desc: "A customized ecommerce roadmap combining SEO, paid media, content, and automation.", icon: <path d="M3 7h18M3 12h18M3 17h18" /> },
              { title: "Execution & Optimization", desc: "Campaign launches with continuous A/B testing and bid optimization.", icon: <path d="M5 12h14M12 5l7 7-7 7" /> },
              { title: "Analytics & Scaling", desc: "Real-time dashboards, ROI tracking, and performance refinement for exponential growth.", icon: <><path d="M3 3v18h18" /><path d="M18 9l-5 5-3-3" /></> },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (frameworkCardsRef.current[idx] = el)}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <svg className="w-10 h-10 text-blue-600 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <h3 className="font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ADKRYOSS */}
      <section ref={whyChooseSectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 ref={whyChooseHeadingRef} className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose Adkryoss?
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-4">
              {[
                "Data-first decision making",
                "ROI-driven strategies",
                "AI-powered performance tracking",
                "Dedicated ecommerce specialists",
                "Omnichannel marketing expertise",
                "Transparent reporting dashboards",
              ].map((point, idx) => (
                <p key={idx} ref={el => (whyChoosePointsRef.current[idx] = el)} className="text-gray-700">
                  ✔ {point}
                </p>
              ))}
              <p className="text-gray-700 mt-4">
                Adkryoss managed by Clink Consultancy Services Private Limited does not believe in isolated campaigns. We create integrated growth systems that align acquisition, conversion, and retention.
              </p>
            </div>
            <div ref={whyChooseImageRef} className="lg:w-1/2">
              <img
                src={WhyChooseAdkryossImage}
                alt="Ecommerce growth illustration"
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE IN ECOMMERCE */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 ref={industriesHeaderRef} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Industries We Serve in Ecommerce
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: FashionApparelImage, title: "Fashion & Apparel" },
              { img: BeautyCosmeticsImage, title: "Beauty & Cosmetics" },
              { img: ElectronicsGadgetsImage, title: "Electronics & Gadgets" },
              { img: FMCGGroceryImage, title: "FMCG & Grocery" },
              { img: HealthcareWellnessImage, title: "Healthcare & Wellness" },
              { img: HomeFurnitureImage, title: "Home & Furniture" },
              { img: LuxuryLifestyleBrandsImage, title: "Luxury & Lifestyle Brands" },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (industriesCardsRef.current[idx] = el)}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <img src={item.img} alt={item.title} className="mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PLATFORMS WE WORK WITH */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 ref={techHeaderRef} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Technology Platforms We Work With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: ShopifyImage, title: "Shopify" },
              { img: WooImage, title: "WooCommerce" },
              { img: MazentoImage, title: "Magento" },
              { img: BigImage, title: "BigCommerce" },
              { img: AmazonImage, title: "Amazon Seller Central" },
              { img: FlipkartImage, title: "Flipkart Seller Hub" },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (techCardsRef.current[idx] = el)}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50"
              >
                <img src={item.img} alt={item.title} className="mb-4 h-30" loading="lazy" />
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
          <p ref={techSubTextRef} className="mt-12 text-gray-700 text-lg max-w-3xl mx-auto">
            Our team adapts strategies based on platform architecture and algorithm updates.
          </p>
        </div>
      </section>

      {/* RESULTS THAT MATTER */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 ref={resultsHeaderRef} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Results That Matter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: IncreasedOrganicRevenueImage, title: "Increased Organic Revenue" },
              { img: HigherROASImage, title: "Higher ROAS" },
              { img: ReducedAcquisitionCostImage, title: "Reduced Acquisition Cost" },
              { img: ImprovedConversionRatesImage, title: "Improved Conversion Rates" },
              { img: EnhancedCustomerLifetimeValueImage, title: "Enhanced Customer Lifetime Value" },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (resultsCardsRef.current[idx] = el)}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <img src={item.img} alt={item.title} className="mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
          <p ref={resultsSubTextRef} className="mt-12 text-gray-700 text-lg max-w-3xl mx-auto">
            Growth isn’t about short-term spikes — it’s about sustainable scalability.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaSectionRef} className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 ref={ctaHeadingRef} className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Ready to Scale Your Ecommerce Business?
          </h2>
          <p ref={ctaPara1Ref} className="text-lg sm:text-xl mb-6 text-white">
            If you want measurable growth, stronger brand positioning, and consistent revenue acceleration, it’s time to work with experts who understand the modern ecommerce ecosystem.
          </p>
          <p ref={ctaPara2Ref} className="text-lg sm:text-xl mb-6 text-white font-bold">
            Partner with Adkryoss managed by Clink Consultancy Services Private Limited and build a future-ready ecommerce growth engine.
          </p>
          <p ref={ctaPara3Ref} className="text-lg sm:text-xl mb-10 font-medium text-white">
            Let’s transform clicks into customers — and customers into loyal advocates.
          </p>
          <button
            ref={ctaButtonRef}
            onClick={() => navigate("/contact?service=ecommerce")}
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Explore Opportunities
          </button>
        </div>
      </section>
    </>
  );
};

export default Ecommerce;