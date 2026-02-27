import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BestPlaceToWorkImage from "../../assets/BestPlaceToWork.jpeg";
import LearningImage from "../../assets/Learning.png";
import BestPlaceImage from "../../assets/BestPlace.png";

gsap.registerPlugin(ScrollTrigger);

const BestPlaceToWork = () => {
    // return (
    //     <>
        









  // ========== REFS FOR ALL SECTIONS ==========
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubHeadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);

  const cultureCardsSectionRef = useRef(null);
  const cultureCardsHeadingRef = useRef(null);
  const cultureCardsDescRef = useRef(null);
  const cultureCardsRef = useRef([]);
  const cultureStatementRef = useRef(null);

  const cultureCards2SectionRef = useRef(null);
  const cultureCards2HeadingRef = useRef(null);
  const cultureCards2DescRef = useRef(null);
  const cultureCards2Ref = useRef([]);
  const cultureStatement2Ref = useRef(null);

  const whyGreatSectionRef = useRef(null);
  const whyGreatHeadingRef = useRef(null);
  const whyGreatSubHeadingRef = useRef(null);
  const whyGreatCardsRef = useRef([]);

  const philosophySectionRef = useRef(null);
  const philosophyHeadingRef = useRef(null);
  const philosophyDescRef = useRef(null);
  const philosophyStepsRef = useRef([]);
  const philosophyPointsRef = useRef([]);
  const philosophyImageRef = useRef(null);
  const philosophyClosingRef = useRef(null);

  const learningSectionRef = useRef(null);
  const learningHeadingRef = useRef(null);
  const learningSubHeadingRef = useRef(null);
  const learningPointsRef = useRef([]);
  const learningImageRef = useRef(null);
  const learningClosingRef = useRef(null);

  const benefitsSectionRef = useRef(null);
  const benefitsHeadingRef = useRef(null);
  const benefitsSubHeadingRef = useRef(null);
  const benefitsCardsRef = useRef([]);
  const benefitsClosingRef = useRef(null);

  const whoThrivesSectionRef = useRef(null);
  const whoThrivesHeadingRef = useRef(null);
  const whoThrivesSubHeadingRef = useRef(null);
  const whoThrivesCardsRef = useRef([]);
  const whoThrivesClosingRef = useRef(null);

  const joinSectionRef = useRef(null);
  const joinHeadingRef = useRef(null);
  const joinPara1Ref = useRef(null);
  const joinPara2Ref = useRef(null);
  const joinPara3Ref = useRef(null);
  const joinPara4Ref = useRef(null);

  const ctaSectionRef = useRef(null);
  const ctaHeadingRef = useRef(null);
  const ctaPointsRef = useRef([]);
  const ctaParaRef = useRef(null);

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

      // ----- CULTURE CARDS (first set) -----
      if (cultureCardsSectionRef.current) {
        gsap.set([cultureCardsHeadingRef.current, cultureCardsDescRef.current], { opacity: 0, y: baseY });
        gsap.set(cultureCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(cultureStatementRef.current, { opacity: 0, y: 30 });

        const cultureTl = gsap.timeline({
          scrollTrigger: {
            trigger: cultureCardsSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        cultureTl
          .to(cultureCardsHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(cultureCardsDescRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(cultureCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(cultureStatementRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.3");

        cultureCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: cultureCardsSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- CULTURE CARDS SECOND SET (gray/blue) -----
      if (cultureCards2SectionRef.current) {
        gsap.set([cultureCards2HeadingRef.current, cultureCards2DescRef.current], { opacity: 0, y: baseY });
        gsap.set(cultureCards2Ref.current, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(cultureStatement2Ref.current, { opacity: 0, y: 30 });

        const culture2Tl = gsap.timeline({
          scrollTrigger: {
            trigger: cultureCards2SectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        culture2Tl
          .to(cultureCards2HeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(cultureCards2DescRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(cultureCards2Ref.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(cultureStatement2Ref.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.3");

        cultureCards2Ref.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: cultureCards2SectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- WHY GREAT PLACE TO WORK -----
      if (whyGreatSectionRef.current) {
        gsap.set([whyGreatHeadingRef.current, whyGreatSubHeadingRef.current], { opacity: 0, y: baseY });
        gsap.set(whyGreatCardsRef.current, { opacity: 0, y: 50, scale: 0.95 });

        const greatTl = gsap.timeline({
          scrollTrigger: {
            trigger: whyGreatSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        greatTl
          .to(whyGreatHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(whyGreatSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(whyGreatCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4");

        whyGreatCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: whyGreatSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- WORK PHILOSOPHY -----
      if (philosophySectionRef.current) {
        gsap.set([philosophyHeadingRef.current, philosophyDescRef.current], { opacity: 0, y: baseY });
        gsap.set(philosophyStepsRef.current, { opacity: 0, y: 30, scale: 0.95 });
        gsap.set(philosophyPointsRef.current, { opacity: 0, y: 20 });
        gsap.set(philosophyImageRef.current, { opacity: 0, x: 50, scale: 0.95 });
        gsap.set(philosophyClosingRef.current, { opacity: 0, y: 30 });

        const philTl = gsap.timeline({
          scrollTrigger: {
            trigger: philosophySectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        philTl
          .to(philosophyHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(philosophyDescRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(philosophyStepsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.4")
          .to(philosophyPointsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: staggerDelay, ease: "power2.out" }, "-=0.3")
          .to(philosophyImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(philosophyClosingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        gsap.to(philosophyImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: philosophySectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- LEARNING & DEVELOPMENT -----
      if (learningSectionRef.current) {
        gsap.set([learningHeadingRef.current, learningSubHeadingRef.current], { opacity: 0, y: baseY });
        gsap.set(learningPointsRef.current, { opacity: 0, y: 20 });
        gsap.set(learningImageRef.current, { opacity: 0, x: 50, scale: 0.95 });
        gsap.set(learningClosingRef.current, { opacity: 0, y: 30 });

        const learnTl = gsap.timeline({
          scrollTrigger: {
            trigger: learningSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        learnTl
          .to(learningHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(learningSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(learningPointsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to(learningImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(learningClosingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        gsap.to(learningImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: learningSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- BENEFITS -----
      if (benefitsSectionRef.current) {
        gsap.set([benefitsHeadingRef.current, benefitsSubHeadingRef.current], { opacity: 0, y: baseY });
        gsap.set(benefitsCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(benefitsClosingRef.current, { opacity: 0, y: 30 });

        const benTl = gsap.timeline({
          scrollTrigger: {
            trigger: benefitsSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        benTl
          .to(benefitsHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(benefitsSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(benefitsCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(benefitsClosingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        benefitsCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: benefitsSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- WHO THRIVES HERE -----
      if (whoThrivesSectionRef.current) {
        gsap.set([whoThrivesHeadingRef.current, whoThrivesSubHeadingRef.current], { opacity: 0, y: baseY });
        gsap.set(whoThrivesCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        gsap.set(whoThrivesClosingRef.current, { opacity: 0, y: 30 });

        const thriveTl = gsap.timeline({
          scrollTrigger: {
            trigger: whoThrivesSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        thriveTl
          .to(whoThrivesHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(whoThrivesSubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(whoThrivesCardsRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }, "-=0.4")
          .to(whoThrivesClosingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.2");

        whoThrivesCardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: whoThrivesSectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      // ----- JOIN SECTION -----
      if (joinSectionRef.current) {
        gsap.set([joinHeadingRef.current, joinPara1Ref.current, joinPara2Ref.current, joinPara3Ref.current, joinPara4Ref.current], {
          opacity: 0,
          y: baseY,
        });

        const joinTl = gsap.timeline({
          scrollTrigger: {
            trigger: joinSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        joinTl
          .to(joinHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(joinPara1Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.5")
          .to(joinPara2Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.4")
          .to(joinPara3Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.3")
          .to(joinPara4Ref.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.2");
      }

      // ----- CTA SECTION -----
      if (ctaSectionRef.current) {
        gsap.set([ctaHeadingRef.current, ctaPointsRef.current, ctaParaRef.current], {
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
          .to(ctaPointsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.5")
          .to(ctaParaRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.3");
      }

      ScrollTrigger.refresh();
    }, [
      heroSectionRef,
      cultureCardsSectionRef,
      cultureCards2SectionRef,
      whyGreatSectionRef,
      philosophySectionRef,
      learningSectionRef,
      benefitsSectionRef,
      whoThrivesSectionRef,
      joinSectionRef,
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
          <div className="text-left text-white max-w-[600px] space-y-6">
            <h2 ref={heroHeadingRef} className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Best Place to Work
            </h2>
            <h3 ref={heroSubHeadingRef} className="text-2xl md:text-xl font-semibold leading-snug">
              Where Talent Grows. Ideas Scale. Leaders Are Built.
            </h3>
            <p ref={heroParagraphRef} className="text-white leading-relaxed">
              At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t just build high-performing digital brands — we build high-performing people.
              <br /><br />
              We believe a workplace should inspire ambition, reward ownership, and encourage bold thinking.
            </p>
          </div>
          <div ref={heroImageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={BestPlaceToWorkImage}
                alt="Best Place To Work"
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
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px] space-y-6">

      <h2 ref={heroHeadingRef} className="text-4xl md:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Best Place to Work
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-blue-100">
        Where Talent Grows. Ideas Scale. Leaders Are Built.
      </h3>

      <p ref={heroParagraphRef} className="text-gray-200 leading-relaxed">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t just build high-performing digital brands — we build high-performing people.
        <br /><br />
        We believe a workplace should inspire ambition, reward ownership, and encourage bold thinking.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div ref={heroImageRef} className="flex justify-center md:justify-end">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={BestPlaceToWorkImage}
          alt="Best Place To Work"
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

</section>


      {/* CULTURE CARDS (first set) */}
      <section ref={cultureCardsSectionRef} className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 ref={cultureCardsHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Culture Built for Modern Marketers
            </h2>
            <p ref={cultureCardsDescRef} className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              The digital ecosystem evolves every second. So do we.
            </p>
          </div>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, our work culture is driven by agility, data intelligence, and creative freedom.
              We operate with a growth-first mindset — combining performance marketing,
              technology, analytics, and creative storytelling into measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => {
              const cards = [
                { title: "Performance Marketing & Paid Media", desc: "Scalable campaigns engineered for ROI and measurable growth.", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></> },
                { title: "SEO & Organic Growth Strategy", desc: "Sustainable visibility built on data-backed search intelligence.", icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></> },
                { title: "Data Analytics & Consumer Insights", desc: "Turning raw data into strategic business intelligence.", icon: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-6" /><path d="M22 20V14" /></> },
                { title: "Creative & Content Innovation", desc: "Storytelling that connects brands with modern audiences.", icon: <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" /> },
                { title: "Marketing Automation & AI Tools", desc: "Smart systems that optimize journeys and scale efficiency.", icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></> },
                { title: "Conversion Rate Optimization", desc: "Engineering seamless user journeys that drive higher conversions.", icon: <><path d="M12 20V10" /><path d="M18 16l-6-6-6 6" /></> },
              ];
              return (
                <div
                  key={i}
                  ref={el => (cultureCardsRef.current[i] = el)}
                  className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
                >
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {cards[i].icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cards[i].title}</h3>
                  <p className="text-gray-600 text-sm">{cards[i].desc}</p>
                </div>
              );
            })}
          </div>
          <div ref={cultureStatementRef} className="text-center mt-14">
            <p className="text-blue-700 font-semibold text-lg">
              We don’t believe in rigid hierarchies. We believe in ownership, accountability, and experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE CARDS SECOND SET (gray/blue) */}
      <section ref={cultureCards2SectionRef} className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 ref={cultureCards2HeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Culture Built for Modern Marketers
            </h2>
            <p ref={cultureCards2DescRef} className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              The digital ecosystem evolves every second. So do we.
            </p>
          </div>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              At <span className="font-semibold text-blue-700">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>, our work culture is driven by agility, data intelligence, and creative freedom.
              We operate with a growth-first mindset — combining performance marketing,
              technology, analytics, and creative storytelling into measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => {
              const cards = [
                { title: "Performance Marketing & Paid Media", desc: "Scalable campaigns engineered for ROI and measurable growth.", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></>, bg: "bg-gray-50" },
                { title: "SEO & Organic Growth Strategy", desc: "Sustainable visibility built on data-backed search intelligence.", icon: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></>, bg: "bg-blue-100" },
                { title: "Data Analytics & Consumer Insights", desc: "Turning raw data into strategic business intelligence.", icon: <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-6" /><path d="M22 20V14" /></>, bg: "bg-gray-50" },
                { title: "Creative & Content Innovation", desc: "Storytelling that connects brands with modern audiences.", icon: <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" />, bg: "bg-blue-100" },
                { title: "Marketing Automation & AI Tools", desc: "Smart systems that optimize journeys and scale efficiency.", icon: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>, bg: "bg-gray-50" },
                { title: "Conversion Rate Optimization", desc: "Engineering seamless user journeys that drive higher conversions.", icon: <><path d="M12 20V10" /><path d="M18 16l-6-6-6 6" /></>, bg: "bg-blue-100" },
              ];
              return (
                <div
                  key={i}
                  ref={el => (cultureCards2Ref.current[i] = el)}
                  className={`${cards[i].bg} p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300`}
                >
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {cards[i].icon}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cards[i].title}</h3>
                  <p className="text-gray-600 text-sm">{cards[i].desc}</p>
                </div>
              );
            })}
          </div>
          <div ref={cultureStatement2Ref} className="text-center mt-14">
            <p className="text-blue-700 font-semibold text-lg">
              We don’t believe in rigid hierarchies. We believe in ownership, accountability, and experimentation.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ADKRYOSS IS A GREAT PLACE TO WORK */}
      <section ref={whyGreatSectionRef} className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 ref={whyGreatHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Adkryoss Is a Great Place to Work
            </h2>
            <p ref={whyGreatSubHeadingRef} className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              A performance-driven culture built for ambitious marketers and innovators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[...Array(5)].map((_, i) => {
              const cards = [
                { title: "Growth Without Limits", desc: "We create structured learning paths for every team member. From certification sponsorships to hands-on leadership exposure, we empower our people to stay ahead of digital trends.", icon: <path d="M12 2v20M5 12h14" /> },
                { title: "Performance-Driven Environment", desc: "Our work is backed by measurable KPIs, real-time dashboards, and transparent performance metrics. Clear goals. Clear outcomes. Clear recognition.", icon: <><path d="M3 3h18v18H3z" /><path d="M7 13l3 3 7-7" /></> },
                { title: "Innovation-Led Execution", desc: "We encourage experimentation. Testing new platforms, AI-driven marketing tools, automation frameworks, and advanced analytics is part of our DNA.", icon: <><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></> },
                { title: "Open & Collaborative Culture", desc: "We promote cross-functional collaboration between SEO strategists, media planners, creative designers, developers, and analysts — ensuring holistic campaign success.", icon: <><path d="M17 20h5V4H2v16h5" /><path d="M9 12h6" /></> },
                { title: "Recognition & Rewards", desc: "High performers are celebrated. Leadership opportunities are earned. Success is shared.", icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /> },
              ];
              const extraClass = i === 4 ? "md:col-span-2 flex justify-center" : "";
              const innerClass = i === 4 ? "bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 w-full md:w-[48%] border-l-4 border-b-4 border-blue-600 hover:bg-orange-200" : "bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border-l-4 border-b-4 border-blue-600 hover:bg-orange-200";
              return (
                <div key={i} className={extraClass}>
                  <div
                    ref={el => (whyGreatCardsRef.current[i] = el)}
                    className={innerClass}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {cards[i].icon}
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-900">{cards[i].title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{cards[i].desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK PHILOSOPHY */}
      <section ref={philosophySectionRef} className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 ref={philosophyHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Work Philosophy
            </h2>
            <p ref={philosophyDescRef} className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              At Adkryoss managed by Clink Consultancy Services Private Limited, we follow a strategic working framework:
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-center mb-14">
            {["Think Deep", "Plan Smart", "Execute Fast", "Measure Everything", "Optimize Continuously"].map((step, idx) => (
              <div key={idx} ref={el => (philosophyStepsRef.current[idx] = el)} className="flex items-center gap-4">
                <div className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold">
                  {step}
                </div>
                {idx !== 4 && <span className="hidden sm:inline text-gray-400 text-xl">→</span>}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <ul className="space-y-5 text-gray-700 text-base sm:text-lg">
                {[
                  "Agile marketing sprints",
                  "Data-backed decision making",
                  "AI-powered optimization models",
                  "Continuous testing frameworks",
                  "Customer-centric campaign strategies",
                ].map((point, idx) => (
                  <li key={idx} ref={el => (philosophyPointsRef.current[idx] = el)} className="flex items-start gap-3 mb-5">
                    <svg className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div ref={philosophyImageRef} className="flex justify-center">
              <img src={BestPlaceImage} alt="Work Philosophy" className="rounded-2xl shadow-lg w-full max-w-md" />
            </div>
          </div>
          <div ref={philosophyClosingRef} className="text-center mt-14 max-w-4xl mx-auto">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our team adapts quickly to algorithm updates, evolving ad platforms, consumer behavior shifts, and new-age marketing technologies.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING & DEVELOPMENT */}
      <section ref={learningSectionRef} className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 ref={learningHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning & Development Ecosystem
            </h2>
            <p ref={learningSubHeadingRef} className="text-gray-700 text-base sm:text-lg">
              Digital marketing doesn’t stand still — and neither do we.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-800 font-medium mb-6 text-base sm:text-lg">
                Our team members gain exposure to:
              </p>
              <ul className="space-y-5 text-gray-700 text-base sm:text-lg">
                {[
                  "Advanced SEO frameworks",
                  "Performance media optimization",
                  "Conversion science",
                  "Brand storytelling psychology",
                  "Marketing automation systems",
                  "E-commerce growth strategies",
                  "B2B and D2C marketing funnels",
                ].map((point, idx) => (
                  <li key={idx} ref={el => (learningPointsRef.current[idx] = el)} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p ref={learningClosingRef} className="mt-8 text-gray-800 text-base sm:text-lg font-medium">
                We believe skill development is not optional — it’s strategic.
              </p>
            </div>
            <div ref={learningImageRef} className="flex justify-center">
              <img src={LearningImage} alt="Learning & Development" className="rounded-2xl shadow-lg w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE-CENTRIC BENEFITS */}
      <section ref={benefitsSectionRef} className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 ref={benefitsHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employee-Centric Benefits
            </h2>
            <p ref={benefitsSubHeadingRef} className="text-gray-700 text-base sm:text-lg">
              We focus on sustainable performance, not burnout culture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Flexible work structure", icon: <path d="M3 12h18M12 3v18" /> },
              { text: "Hybrid collaboration model", icon: <><path d="M17 20h5V4H2v16h5" /><path d="M12 4v16" /></> },
              { text: "Leadership mentoring", icon: <path d="M12 2l4 7H8l4-7zM2 22h20" /> },
              { text: "Performance incentives", icon: <><circle cx="12" cy="8" r="4" /><path d="M6 22v-2a6 6 0 0112 0v2" /></> },
              { text: "Skill enhancement programs", icon: <><path d="M12 20h9" /><path d="M12 4h9" /><path d="M4 9h16" /><path d="M4 15h16" /></> },
              { text: "Career acceleration roadmap", icon: <path d="M5 12l5 5L20 7" /> },
              { text: "Transparent appraisal system", icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></> },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (benefitsCardsRef.current[idx] = el)}
                className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border-l-4 border-transparent"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-blue-600 to-orange-400"></div>
                <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <p className="text-gray-800 text-base font-medium relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
          <div ref={benefitsClosingRef} className="text-center mt-14 max-w-4xl mx-auto">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              At Adkryoss managed by Clink Consultancy Services Private Limited, we prioritize both professional growth and personal well-being.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THRIVES HERE */}
      <section ref={whoThrivesSectionRef} className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 ref={whoThrivesHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Thrives Here?
            </h2>
            <p ref={whoThrivesSubHeadingRef} className="text-gray-700 text-base sm:text-lg">
              You’ll fit right in if you:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Think analytically and creatively", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" /></> },
              { text: "Love data as much as design", icon: <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" /> },
              { text: "Adapt fast in a dynamic ecosystem", icon: <path d="M3 12h18M12 3v18" /> },
              { text: "Take ownership beyond your role", icon: <path d="M12 2l4 7H8l4-7zM2 22h20" /> },
              { text: "Want to build scalable digital brands", icon: <path d="M5 12l5 5L20 7" /> },
              { text: "Aspire to become a digital leader", icon: <><circle cx="12" cy="8" r="4" /><path d="M6 22v-2a6 6 0 0112 0v2" /></> },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (whoThrivesCardsRef.current[idx] = el)}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <p className="text-gray-800 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <div ref={whoThrivesClosingRef} className="text-center mt-16">
            <p className="text-gray-900 text-lg sm:text-xl font-semibold">
              We hire problem-solvers. We grow strategists. We build leaders.
            </p>
          </div>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section ref={joinSectionRef} className="bg-gray-200 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={joinHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
            Join a Future-Ready Digital Team
          </h2>
          <p ref={joinPara1Ref} className="text-black text-base sm:text-lg leading-relaxed mb-6">
            The future of marketing is intelligent, automated, performance-led, and consumer-centric.
          </p>
          <p ref={joinPara2Ref} className="text-black text-base sm:text-lg leading-relaxed mb-10">
            At Adkryoss managed by Clink Consultancy Services Private Limited, we are shaping that future every day — with people who are ambitious, curious, and ready to build impact.
          </p>
          <div className="space-y-3 mb-8">
            <p ref={joinPara3Ref} className="text-black text-lg sm:text-xl font-medium">
              If you are looking for more than just a job —
            </p>
            <p ref={joinPara4Ref} className="text-black text-lg sm:text-xl font-medium">
              If you are looking for a platform to grow, innovate, and lead —
            </p>
          </div>
          <p className="text-black text-xl sm:text-2xl font-semibold">
            This is where your journey begins.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaSectionRef} className="bg-blue-700 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={ctaHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Career in Digital?
          </h2>
          <div className="space-y-4 text-white text-2xl sm:text-lg mb-10">
            <p ref={el => (ctaPointsRef.current[0] = el)} className="text-white">Explore opportunities.</p>
            <p ref={el => (ctaPointsRef.current[1] = el)} className="text-white">Collaborate with industry experts.</p>
            <p ref={el => (ctaPointsRef.current[2] = el)} className="text-white">Work on national and global brands.</p>
          </div>
          <p ref={ctaParaRef} className="text-white text-lg sm:text-xl font-medium">
            Be part of a workplace where performance meets purpose.
          </p>
        </div>
      </section>
    </>
  );
};

export default BestPlaceToWork;