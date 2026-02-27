import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CareerImage from "../../assets/Career.jpeg";
import WhatMakesUsDifferentImage from "../../assets/WhatMakesUsDifferent.png";
import WhoWeArelookingImage from "../../assets/WhoWeAreLooking.png";
import OurHiringPhilosophyImage from "../../assets/OurHiringPhilosophy.png";
import GrowthImage from "../../assets/Growth.png";
import InternshipImage from "../../assets/Internship.png";
import ReadyToBuildImage from "../../assets/ReadyToBuild.png";
import StructuredcareerprogressionImage from "../../assets/Structuredcareerprogression.png";
import WorklifebalancesupportImage from "../../assets/Worklifebalancesupport.png";
import SkilldevelopmentprogramsImage from "../../assets/Skilldevelopmentprograms.png";
import PerformancebasedgrowthreviewsImage from "../../assets/Performancebasedgrowthreviews.png";
import LeadershipmentorshipImage from "../../assets/Leadershipmentorship.png";
import CollaborativeteamcultureImage from "../../assets/Collaborativeteamculture.png";
import InnovationdrivenenvironmentImage from "../../assets/Innovationdrivenenvironment.png";

gsap.registerPlugin(ScrollTrigger);

const jobs = [
  {
    role: "SEO Executive",
    shortDesc: "Work on on-page, off-page, technical SEO, and strategy execution...",
    fullDesc: "Work on on-page, off-page, technical SEO, and strategy execution for enterprise clients.",
    experience: "2+ Years",
    department: "SEO",
    location: "New Delhi",
    openings: 2,
  },
  {
    role: "Performance Marketing Specialist",
    shortDesc: "Plan, execute, and optimise paid campaigns across Google & Meta...",
    fullDesc: "Plan, execute, and optimise paid campaigns across Google, Meta, and emerging platforms.",
    experience: "3+ Years",
    department: "Marketing",
    location: "Remote",
    openings: 1,
  },
  {
    role: "Content Strategist",
    shortDesc: "Build conversion-focused, SEO-driven content that ranks...",
    fullDesc: "Build conversion-focused, SEO-driven content that ranks and converts.",
    experience: "2+ Years",
    department: "Content",
    location: "New Delhi",
    openings: 1,
  },
  {
    role: "Social Media Growth Manager",
    shortDesc: "Develop scalable engagement and brand positioning strategies...",
    fullDesc: "Develop scalable engagement and brand positioning strategies.",
    experience: "3+ Years",
    department: "Social Media",
    location: "Remote",
    openings: 1,
  },
  {
    role: "Digital Marketing Intern",
    shortDesc: "Hands-on training across channels. Learn. Execute...",
    fullDesc: "Hands-on training across channels. Learn. Execute. Grow.",
    experience: "Fresher",
    department: "Marketing",
    location: "On-site",
    openings: 2,
  },
];

const Careers = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  // ========== REFS FOR ALL SECTIONS ==========
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubheadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);

  const whySectionRef = useRef(null);
  const whyMainHeadingRef = useRef(null);
  const whySubHeadingRef = useRef(null);
  const whyParagraphRef = useRef(null);
  const whyLeftHeadingRef = useRef(null);
  const whyListItemsRef = useRef([]);
  const whyImageRef = useRef(null);
  const whyBottomTextRef = useRef(null);

  const cultureSectionRef = useRef(null);
  const cultureHeadingRef = useRef(null);
  const cultureSubHeadingRef = useRef(null);
  const cultureCardsRef = useRef([]);

  const lookingSectionRef = useRef(null);
  const lookingHeadingRef = useRef(null);
  const lookingSubHeadingRef = useRef(null);
  const lookingCardsRef = useRef([]);
  const lookingImageRef = useRef(null);
  const lookingBottomRef = useRef(null);

  const philosophySectionRef = useRef(null);
  const philosophyHeadingRef = useRef(null);
  const philosophySubHeadingRef = useRef(null);
  const philosophyImageRef = useRef(null);
  const philosophyCardsRef = useRef([]);
  const philosophyBottomRef = useRef(null);

  const growthSectionRef = useRef(null);
  const growthHeadingRef = useRef(null);
  const growthParagraphRef = useRef(null);
  const growthCardsRef = useRef([]);
  const growthImageRef = useRef(null);
  const growthBottomRef = useRef(null);

  const lifeSectionRef = useRef(null);
  const lifeHeadingRef = useRef(null);
  const lifeSubHeadingRef = useRef(null);
  const lifeCardsRef = useRef([]);

  const openingsSectionRef = useRef(null);
  const openingsHeadingRef = useRef(null);
  const openingsTableRef = useRef(null);
  const openingsRowsRef = useRef([]);

  const internshipSectionRef = useRef(null);
  const internshipHeadingRef = useRef(null);
  const internshipSubHeadingRef = useRef(null);
  const internshipListRef = useRef([]);
  const internshipImageRef = useRef(null);
  const internshipBottomRef = useRef(null);

  const careerPathSectionRef = useRef(null);
  const careerPathHeadingRef = useRef(null);
  const careerPathSubHeadingRef = useRef(null);
  const careerPathFlowRef = useRef(null);

  const diversitySectionRef = useRef(null);
  const diversityCardRef = useRef(null);

  const ctaSectionRef = useRef(null);
  const ctaImageRef = useRef(null);
  const ctaHeadingRef = useRef(null);
  const ctaParagraphRef = useRef(null);
  const ctaListRef = useRef([]);
  const ctaButtonRef = useRef(null);
  const ctaEmailRef = useRef(null);

  // ========== OPTIMIZED GSAP ANIMATIONS ==========
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => st.kill());

      const isMobile = window.innerWidth < 768;
      const baseDuration = isMobile ? 0.8 : 1.2;
      const baseY = isMobile ? 30 : 50;
      const staggerDelay = isMobile ? 0.1 : 0.15;

      // ----- HERO SECTION -----
      if (heroSectionRef.current) {
        gsap.set([heroHeadingRef.current, heroSubheadingRef.current, heroParagraphRef.current, heroImageRef.current], {
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
          .to(heroSubheadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.6")
          .to(heroParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.5")
          .to(heroImageRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.5");
      }

      // ----- WHY WORK WITH US (non‑card items) -----
      if (whySectionRef.current) {
        gsap.set([whyMainHeadingRef.current, whySubHeadingRef.current, whyParagraphRef.current], { opacity: 0, y: baseY });
        gsap.set(whyLeftHeadingRef.current, { opacity: 0, x: -30 });
        gsap.set(whyListItemsRef.current, { opacity: 0, y: 20 });
        gsap.set(whyImageRef.current, { opacity: 0, x: 30, scale: 0.95 });
        gsap.set(whyBottomTextRef.current, { opacity: 0, y: 30 });

        const whyTl = gsap.timeline({
          scrollTrigger: {
            trigger: whySectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        whyTl
          .to(whyMainHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(whySubHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.5")
          .to(whyParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.4")
          .to(whyLeftHeadingRef.current, { opacity: 1, x: 0, duration: baseDuration, ease: "power2.out" }, "-=0.3")
          .to(whyListItemsRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: staggerDelay, ease: "power2.out" }, "-=0.6")
          .to(whyImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.8")
          .to(whyBottomTextRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.3");
      }

      // ----- CULTURE CARDS (batch) -----
      if (cultureCardsRef.current.length) {
        gsap.set(cultureCardsRef.current, { opacity: 0, y: 60, scale: 0.9 });
        ScrollTrigger.batch(cultureCardsRef.current, {
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            stagger: staggerDelay,
            ease: "back.out(1.2)",
          }),
          onLeave: batch => gsap.to(batch, {
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: baseDuration * 0.8,
            ease: "power2.in",
          }),
          onEnterBack: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            stagger: staggerDelay,
            ease: "back.out(1.2)",
          }),
          onLeaveBack: batch => gsap.to(batch, {
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: baseDuration * 0.8,
            ease: "power2.in",
          }),
        });
      }

      // ----- LOOKING FOR CARDS (batch) -----
      if (lookingCardsRef.current.length) {
        gsap.set(lookingCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        ScrollTrigger.batch(lookingCardsRef.current, {
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration * 0.9,
            stagger: staggerDelay,
            ease: "back.out(1.2)",
          }),
          onLeave: batch => gsap.to(batch, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: baseDuration * 0.8,
            ease: "power2.in",
          }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }),
          onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 40, scale: 0.95, duration: baseDuration * 0.8, ease: "power2.in" }),
        });
      }

      // ----- PHILOSOPHY CARDS (batch) -----
      if (philosophyCardsRef.current.length) {
        gsap.set(philosophyCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        ScrollTrigger.batch(philosophyCardsRef.current, {
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }),
          onLeave: batch => gsap.to(batch, { opacity: 0, y: 40, scale: 0.95, duration: baseDuration * 0.8, ease: "power2.in" }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }),
          onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 40, scale: 0.95, duration: baseDuration * 0.8, ease: "power2.in" }),
        });
      }

      // ----- GROWTH CARDS (batch) -----
      if (growthCardsRef.current.length) {
        gsap.set(growthCardsRef.current, { opacity: 0, y: 40, scale: 0.95 });
        ScrollTrigger.batch(growthCardsRef.current, {
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }),
          onLeave: batch => gsap.to(batch, { opacity: 0, y: 40, scale: 0.95, duration: baseDuration * 0.8, ease: "power2.in" }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "back.out(1.2)" }),
          onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 40, scale: 0.95, duration: baseDuration * 0.8, ease: "power2.in" }),
        });
      }

      // ----- LIFE CARDS (batch) -----
      if (lifeCardsRef.current.length) {
        gsap.set(lifeCardsRef.current, { opacity: 0, y: 50, scale: 0.9 });
        ScrollTrigger.batch(lifeCardsRef.current, {
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.1, stagger: staggerDelay, ease: "back.out(1.2)" }),
          onLeave: batch => gsap.to(batch, { opacity: 0, y: 50, scale: 0.9, duration: baseDuration * 0.8, ease: "power2.in" }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.1, stagger: staggerDelay, ease: "back.out(1.2)" }),
          onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 50, scale: 0.9, duration: baseDuration * 0.8, ease: "power2.in" }),
        });
      }

      // ----- OPENINGS ROWS (batch) -----
      if (openingsRowsRef.current.length) {
        gsap.set(openingsRowsRef.current, { opacity: 0, y: 20 });
        ScrollTrigger.batch(openingsRowsRef.current, {
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: staggerDelay, ease: "power2.out" }),
          onLeave: batch => gsap.to(batch, { opacity: 0, y: 20, duration: baseDuration * 0.6, ease: "power2.in" }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, duration: baseDuration * 0.8, stagger: staggerDelay, ease: "power2.out" }),
          onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 20, duration: baseDuration * 0.6, ease: "power2.in" }),
        });
      }

      // ----- OTHER SECTIONS WITH FEW ELEMENTS (kept individual) -----
      // Looking image, philosophy image, etc. (similar to before but with shouldInit check omitted for brevity – triggers are still fine)

      if (lookingImageRef.current) {
        gsap.fromTo(lookingImageRef.current, { opacity: 0, x: 50, scale: 0.95 }, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: baseDuration * 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: lookingSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        // floating
        gsap.to(lookingImageRef.current, {
          y: -8,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: lookingSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (philosophyImageRef.current) {
        gsap.fromTo(philosophyImageRef.current, { opacity: 0, x: -50, scale: 0.95 }, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: baseDuration * 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: philosophySectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        gsap.to(philosophyImageRef.current, {
          y: -8,
          duration: 4.5,
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

      if (growthImageRef.current) {
        gsap.fromTo(growthImageRef.current, { opacity: 0, x: 50, scale: 0.95 }, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: baseDuration * 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: growthSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        gsap.to(growthImageRef.current, {
          y: -8,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: growthSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (internshipImageRef.current) {
        gsap.fromTo(internshipImageRef.current, { opacity: 0, x: 50, scale: 0.95 }, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: baseDuration * 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: internshipSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        gsap.to(internshipImageRef.current, {
          y: -8,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
          scrollTrigger: {
            trigger: internshipSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Career path flow
      if (careerPathFlowRef.current) {
        gsap.fromTo(careerPathFlowRef.current, { opacity: 0, y: 30 }, {
          opacity: 1,
          y: 0,
          duration: baseDuration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: careerPathSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        gsap.to(careerPathFlowRef.current, {
          scale: 1.02,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: careerPathSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Diversity card
      if (diversityCardRef.current) {
        gsap.fromTo(diversityCardRef.current, { opacity: 0, y: 40, scale: 0.95 }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: baseDuration * 1.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: diversitySectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // CTA section (multiple elements)
      if (ctaSectionRef.current) {
        gsap.set([ctaHeadingRef.current, ctaParagraphRef.current], { opacity: 0, y: baseY });
        gsap.set(ctaListRef.current, { opacity: 0, y: 20 });
        gsap.set([ctaButtonRef.current, ctaEmailRef.current], { opacity: 0, scale: 0.9 });
        gsap.set(ctaImageRef.current, { opacity: 0, x: -50, scale: 0.95 });

        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        ctaTl
          .to(ctaImageRef.current, { opacity: 1, x: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" })
          .to(ctaHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" }, "-=0.8")
          .to(ctaParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.8, ease: "power2.out" }, "-=0.6")
          .to(ctaListRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, stagger: staggerDelay, ease: "power2.out" }, "-=0.4")
          .to([ctaButtonRef.current, ctaEmailRef.current], { opacity: 1, scale: 1, duration: baseDuration * 0.8, stagger: 0.1, ease: "back.out(1.2)" }, "-=0.2");
      }

      ScrollTrigger.refresh();
    }, [heroSectionRef, whySectionRef, cultureSectionRef, lookingSectionRef, philosophySectionRef, growthSectionRef, lifeSectionRef, openingsSectionRef, internshipSectionRef, careerPathSectionRef, diversitySectionRef, ctaSectionRef]);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // ========== JSX (exactly as before, with added loading="lazy") ==========
  return (
    <>
  

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
          Careers at Adkryoss
        </span>
      </h2>

      <h3 ref={heroSubheadingRef} className="text-xl md:text-2xl font-semibold text-blue-100">
        Build What the Future Will Search For
      </h3>

      <p ref={heroParagraphRef} className="text-gray-200 leading-relaxed">
        Digital marketing is no longer about posts and ads.  
        It’s about data. Strategy. Technology. AI. Performance.  
        <br /><br />
        At Adkryoss managed by Clink Consultancy Services pvt. ltd, 
        we don’t just execute campaigns — we engineer measurable 
        digital growth systems for brands that want to dominate their industry.  
        <br /><br />
        If you’re ambitious, curious, analytical, and obsessed with growth — 
        this is where you belong.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div ref={heroImageRef} className="flex justify-center md:justify-end">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={CareerImage}
          alt="Careers"
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









      {/* HERO SECTION */}
      {/* <section
        ref={heroSectionRef}
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
        style={{ backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">
          <div className="text-left text-white max-w-[600px] space-y-6">
            <h2 ref={heroHeadingRef} className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Careers at Adkryoss
            </h2>
            <h3 ref={heroSubheadingRef} className="text-2xl md:text-3xl font-semibold leading-snug">
              Build What the Future Will Search For
            </h3>
            <p ref={heroParagraphRef} className="text-white leading-relaxed">
              Digital marketing is no longer about posts and ads.<br />
              It’s about data. Strategy. Technology. AI. Performance.<br />
              At Adkryoss managed by Clink Consultancy Services pvt. ltd,
              we don’t just execute campaigns — we engineer measurable
              digital growth systems for brands that want to dominate their industry.<br />
              If you’re ambitious, curious, analytical, and obsessed with growth —
              this is where you belong.
            </p>
          </div>
          <div ref={heroImageRef} className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={CareerImage}
                alt="Careers"
                loading="lazy"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* WHY WORK WITH US SECTION */}
      <section ref={whySectionRef} className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 ref={whyMainHeadingRef} className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Why Work With Adkryoss <br className="hidden md:block" /> 
            </h2>
            <h3 ref={whySubHeadingRef} className="text-4xl md:text-xl font-bold text-black leading-tight">
              managed by Clink Consultancy Services pvt. ltd?
            </h3>
            <p ref={whyParagraphRef} className="text-gray-700 mt-4 text-lg leading-relaxed">
              We are building a performance-first digital marketing ecosystem designed for modern brands.
              That means you won’t just “do marketing.” You’ll build strategies that impact revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
            <div>
              <h3 ref={whyLeftHeadingRef} className="text-4xl font-semibold text-blue-600 mb-6 text-left">
                What Makes Us Different?
              </h3>
              <div className="text-gray-900 text-base">
                <ul className="space-y-3 list-disc pl-5">
                  {[
                    "Performance-driven culture (Data > Assumptions)",
                    "AI-integrated marketing workflows",
                    "Cross-channel growth strategy exposure",
                    "Enterprise-grade client portfolio",
                    "Rapid skill acceleration environment",
                    "Leadership mentorship model",
                    "Growth-focused career path",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      ref={el => (whyListItemsRef.current[idx] = el)}
                      className="p-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 hover:text-blue-700 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div ref={whyImageRef} className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <img
                src={WhatMakesUsDifferentImage}
                alt="Digital Growth Lab Illustration"
                loading="lazy"
                className="w-full max-w-md rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-400 rounded-full mt-16 mb-6"></div>
          <p ref={whyBottomTextRef} className="text-gray-500 text-lg font-medium italic text-center max-w-4xl mx-auto">
            This isn’t a traditional agency job. <br />
            This is a digital growth lab. <br />
            Shape your career with impact.
          </p>
        </div>
      </section>

      {/* WORK CULTURE SECTION */}
      <section ref={cultureSectionRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-200 opacity-20 blur-3xl rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 ref={cultureHeadingRef} className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
            Our Work Culture
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-400 rounded-full mt-6"></div>
          <p ref={cultureSubHeadingRef} className="text-gray-600 mt-6 text-lg leading-relaxed max-w-4xl mx-auto">
            At Adkryoss managed by Clink Consultancy Services pvt. ltd, culture is not a slogan — it’s a system.
          </p>
          <p className="text-blue-600 font-bold mt-2">We believe in:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-12">
            {[
              {
                title: "01. Ownership Over Hierarchy",
                desc: "If you see opportunity, you take it.",
                span: "lg:col-span-2",
              },
              {
                title: "02. Continuous Learning",
                desc: "SEO evolves. Algorithms shift. Platforms upgrade. We evolve faster.",
                span: "lg:col-span-2",
              },
              {
                title: "03. Data-Backed Decisions",
                desc: "We measure everything. We optimise relentlessly.",
                span: "lg:col-span-2",
              },
              {
                title: "04. Collaboration Without Silos",
                desc: "SEO works with content. Content works with paid. Paid works with analytics. Everything works together.",
                span: "lg:col-span-2 lg:col-start-2",
              },
              {
                title: "05. Performance Recognition",
                desc: "Growth is rewarded. Initiative is noticed.",
                span: "lg:col-span-2",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                ref={el => (cultureCardsRef.current[idx] = el)}
                className={`group relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 ${card.span} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400"></span>
                <div className="relative z-10 text-left">
                  <h3 className="text-xl font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-blue-700">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section ref={lookingSectionRef} className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 ref={lookingHeadingRef} className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Who We’re Looking For
            </h2>
            <p ref={lookingSubHeadingRef} className="text-gray-600 mt-4 text-lg leading-relaxed">
              We’re building a team of specialists and growth thinkers in:
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
              {[
                "Search Engine Optimization (SEO)",
                "Performance Marketing (Google Ads & Meta Ads)",
                "Social Media Strategy",
                "Content Marketing & Copywriting",
                "Technical SEO & Web Optimization",
                "Data Analytics & Marketing Automation",
                "UI/UX & Conversion Optimization",
                "Account Management & Client Strategy",
              ].map((role, idx) => (
                <div
                  key={idx}
                  ref={el => (lookingCardsRef.current[idx] = el)}
                  className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition flex items-center justify-center text-center min-h-[100px] hover:-translate-y-2 hover:scale-105 duration-300"
                >
                  <p className="font-semibold text-gray-700">{role}</p>
                </div>
              ))}
            </div>
            <div ref={lookingImageRef} className="w-full lg:w-1/2 flex justify-center">
              <img
                src={WhoWeArelookingImage}
                alt="Team Illustration"
                loading="lazy"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
          <p ref={lookingBottomRef} className="text-gray-600 mt-12 text-lg font-medium text-center">
            We don’t hire based on degrees. <br />
            We hire based on potential, mindset, and hunger.
          </p>
        </div>
      </section>

      {/* OUR HIRING PHILOSOPHY */}
      <section ref={philosophySectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 ref={philosophyHeadingRef} className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Our Hiring Philosophy
            </h2>
            <p ref={philosophySubHeadingRef} className="text-blue-600 mt-4 text-lg font-bold">
              We look for:
            </p>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div ref={philosophyImageRef} className="lg:col-span-7 flex justify-center">
              <img
                src={OurHiringPhilosophyImage}
                alt="Hiring Illustration"
                loading="lazy"
                className="w-full max-w-2xl h-[520px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              {[
                "Analytical thinkers",
                "Problem solvers",
                "Digital-first mindset",
                "Adaptability to change",
                "Clear communicators",
                "Self-driven professionals",
                "Results-focused executors",
              ].map((item, idx) => (
                <div
                  key={idx}
                  ref={el => (philosophyCardsRef.current[idx] = el)}
                  className="bg-white px-3 py-2 m-3 rounded-xl shadow-md hover:shadow-xl transition text-center hover:-translate-y-2 hover:scale-105 duration-300"
                >
                  <p className="font-semibold text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p ref={philosophyBottomRef} className="text-gray-600 mt-16 text-lg font-medium italic text-center">
            Experience matters. <br />
            But growth mindset matters more.
          </p>
        </div>
      </section>

      {/* GROWTH & LEARNING OPPORTUNITIES */}
      <section ref={growthSectionRef} className="py-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-[1500px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 ref={growthHeadingRef} className="text-5xl font-bold text-black leading-tight whitespace-nowrap">
                Growth & Learning Opportunities
              </h2>
              <p ref={growthParagraphRef} className="text-gray-700 mt-6 text-lg leading-relaxed max-w-4xl">
                Digital marketing is one of the fastest-evolving industries in the world.
                To stay ahead, you need exposure to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  "Advanced SEO frameworks",
                  "AI-powered marketing tools",
                  "Conversion Rate Optimization systems",
                  "Performance analytics dashboards",
                  "Multi-channel campaign management",
                  "International campaign strategy",
                  "Marketing automation platforms",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    ref={el => (growthCardsRef.current[idx] = el)}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2 hover:scale-105"
                  >
                    <p className="font-semibold text-blue-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div ref={growthImageRef} className="flex justify-center lg:justify-end">
              <img
                src={GrowthImage}
                alt="Growth & Learning Illustration"
                loading="lazy"
                className="w-full max-w-2xl h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
          <div ref={growthBottomRef} className="mt-20 text-center">
            <p className="text-gray-700 text-xl font-medium italic max-w-4xl mx-auto">
              At Adkryoss managed by Clink Consultancy Services pvt. ltd,
              you won’t just learn — you’ll implement.
            </p>
          </div>
        </div>
      </section>

      {/* LIFE AT ADKRYOSS */}
      <section ref={lifeSectionRef} className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 ref={lifeHeadingRef} className="text-4xl md:text-5xl font-bold text-black">
              Life at Adkryoss
            </h2>
            <p ref={lifeSubHeadingRef} className="text-gray-600 mt-3 text-lg font-medium">
              Managed by Clink Consultancy Services pvt. ltd
            </p>
          </div>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mt-6">
            We believe productivity increases when people feel empowered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
            {[
              { title: "Structured career progression", image: StructuredcareerprogressionImage },
              { title: "Skill development programs", image: SkilldevelopmentprogramsImage },
              { title: "Performance-based growth reviews", image: PerformancebasedgrowthreviewsImage },
              { title: "Leadership mentorship", image: LeadershipmentorshipImage },
              { title: "Collaborative team culture", image: CollaborativeteamcultureImage },
              { title: "Innovation-driven environment", image: InnovationdrivenenvironmentImage },
              { title: "Work-life balance support", image: WorklifebalancesupportImage },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={el => (lifeCardsRef.current[idx] = el)}
                className="group relative bg-white rounded-3xl border border-blue-100 shadow-md overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-3 hover:border-orange-400"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative p-6">
                  <div className="absolute inset-0 rounded-b-3xl bg-gradient-to-br from-orange-50 to-blue-50 opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                  <p className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-700 text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section ref={openingsSectionRef} className="py-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 ref={openingsHeadingRef} className="text-5xl font-bold text-center mb-12">
            Current Openings
          </h2>
          <div ref={openingsTableRef} className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4">Role</th>
                  <th className="p-4">Job Details</th>
                  <th className="p-4">Experience</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Openings</th>
                  <th className="p-4">Apply</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr
                    key={index}
                    ref={el => (openingsRowsRef.current[index] = el)}
                    className="border-t border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="p-4 font-medium">{job.role}</td>
                    <td className="p-4 max-w-xs">
                      {expandedIndex === index ? job.fullDesc : job.shortDesc}
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="block text-blue-600 mt-2 text-sm hover:underline"
                      >
                        {expandedIndex === index ? "Read Less" : "Read More"}
                      </button>
                    </td>
                    <td className="p-4">{job.experience}</td>
                    <td className="p-4">{job.department}</td>
                    <td className="p-4">{job.location}</td>
                    <td className="p-4">{job.openings}</td>
                    <td className="p-4">
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                        Apply Now →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INTERNSHIP PROGRAM */}
      <section ref={internshipSectionRef} className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 ref={internshipHeadingRef} className="text-4xl md:text-5xl font-bold text-gray-900">
              Internship Program
            </h2>
            <p ref={internshipSubHeadingRef} className="text-xl text-gray-600 mt-5 max-w-3xl mx-auto">
              Our internship model is performance-focused and implementation-driven.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ul className="space-y-8">
              {[
                "Work on real client projects",
                "Build campaign strategies",
                "Learn AI-driven marketing tools",
                "Get exposure to SEO, paid ads, and analytics",
                "Receive structured mentorship",
              ].map((item, idx) => (
                <li
                  key={idx}
                  ref={el => (internshipListRef.current[idx] = el)}
                  className="text-xl md:text-2xl font-semibold text-gray-800 flex items-start"
                >
                  <span className="text-blue-600 mr-4 text-2xl">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <div ref={internshipImageRef} className="flex justify-center">
              <img
                src={InternshipImage}
                alt="Internship Program"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full max-h-[600px] object-cover"
              />
            </div>
          </div>
          <div ref={internshipBottomRef} className="text-center mt-24">
            <p className="text-3xl md:text-2xl font-bold text-gray-900">
              This is not a certificate internship.
            </p>
            <p className="text-3xl md:text-2xl font-bold text-blue-600 mt-3">
              This is a growth accelerator.
            </p>
          </div>
        </div>
      </section>

      {/* CAREER PATH */}
      <section ref={careerPathSectionRef} className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-[length:200%_200%] animate-bgMove opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 ref={careerPathHeadingRef} className="text-4xl md:text-5xl font-bold text-gray-900">
              Your Career Path Here
            </h2>
            <p ref={careerPathSubHeadingRef} className="text-lg text-gray-600 mt-4">
              We believe in internal leadership building.
            </p>
          </div>
          <div
            ref={careerPathFlowRef}
            className="group flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl font-semibold text-gray-800 mb-24 transition-all duration-500 hover:-translate-y-2"
          >
            <span>Intern</span>
            <span className="text-blue-600">→</span>
            <span>Executive</span>
            <span className="text-blue-600">→</span>
            <span>Specialist</span>
            <span className="text-blue-600">→</span>
            <span>Team Lead</span>
            <span className="text-blue-600">→</span>
            <span>Growth Strategist</span>
            <span className="text-blue-600">→</span>
            <span className="font-bold text-blue-700">Business Head</span>
          </div>
        </div>
      </section>

      {/* DIVERSITY & INCLUSION */}
      <section ref={diversitySectionRef} className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={diversityCardRef}
            className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-[length:200%_200%] animate-borderMove transition-all duration-500 hover:-translate-y-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center transition-all duration-500 group-hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Diversity & Inclusion</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We value diverse perspectives, backgrounds, and creative thinking.
                Innovation happens when different minds collaborate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaSectionRef} className="py-18 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div ref={ctaImageRef}>
              <img src={ReadyToBuildImage} alt="Team Working" loading="lazy" className="rounded-2xl w-full object-cover" />
            </div>
            <div>
              <h2 ref={ctaHeadingRef} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Build Digital Growth?
              </h2>
              <p ref={ctaParagraphRef} className="text-lg text-gray-600 mb-8 leading-relaxed">
                If you are looking for real responsibility, real impact, real growth,
                and accelerated skill development, this is your opportunity to grow
                with a performance-driven team.
              </p>
              <div className="space-y-3 text-lg font-semibold text-gray-800 mb-8">
                {["Real responsibility", "Real impact", "Real growth", "Real skill acceleration"].map((item, idx) => (
                  <p key={idx} ref={el => (ctaListRef.current[idx] = el)}>✔ {item}</p>
                ))}
              </div>
              <a
                ref={ctaButtonRef}
                href="mailto:careers@adkryoss.com"
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition"
              >
                📩 Apply Now →
              </a>
              <p ref={ctaEmailRef} className="mt-6 text-gray-600">
                Send your resume to: 
                <a
                  href="mailto:careers@adkryoss.com"
                  className="font-semibold text-blue-600 ml-1 hover:underline"
                >
                  careers@adkryoss.com
                </a>
              </p>
              <p className="text-gray-600 mt-2">Or connect with us on LinkedIn.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;