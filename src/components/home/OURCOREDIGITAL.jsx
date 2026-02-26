import React, { useState, useRef, useLayoutEffect } from "react";
import SEOImage from "../../assets/SEO.png";
import PPCImage from "../../assets/PPC.png";
import SocialMediaImage from "../../assets/socialMedia.png";
import ecomarceImage from "../../assets/ecomarce.png";
import contentImage from "../../assets/inboundmarketing.png";
import CROImage from "../../assets/HomeCRO.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const tabs = [
  "Search Engine Optimization",
  "Performance Marketing (PPC & Paid Media)",
  "Social Media Marketing",
  "E-Commerce Marketing ",
  "Content & Inbound Marketing ",
  "Conversion Rate Optimization (CRO)"
];
 
const tabContent = {
  "Search Engine Optimization": {
    title: "Search Engine Optimization",
    desc: "Dominate search rankings with technical SEO, content strategy, high-authority link building, and AI-optimized search frameworks. We focus on traffic that converts — not vanity metrics.",
    image: SEOImage
  },
  "Performance Marketing (PPC & Paid Media)": {
    title: "Performance Marketing (PPC & Paid Media)",
    desc: "Google Ads, Meta Ads, LinkedIn Ads & programmatic campaigns engineered for maximum ROI. Smart bidding, advanced targeting, and CRO-backed landing strategies.",
    image: PPCImage
  },
  "Social Media Marketing": {
    title: "Social Media Marketing",
    desc: "From brand storytelling to paid social scaling — we build community, engagement, and measurable conversions across Instagram, LinkedIn, Facebook, and emerging platforms.",
    image: SocialMediaImage
  },
  "E-Commerce Marketing ": {
    title: "E-Commerce Marketing",
    desc: "Marketplace optimization, product feed management, dynamic ads, and performance scaling strategies for Shopify, WooCommerce & Amazon brands.",
    image: ecomarceImage
  },
  "Content & Inbound Marketing ": {
    title: "Content & Inbound Marketing",
    desc: "SEO blogs, thought leadership, video marketing, and funnel-driven content that attracts, nurtures, and converts your audience.",
    image: contentImage
  },
  "Conversion Rate Optimization (CRO)": {
    title: "Conversion Rate Optimization (CRO)",
    desc: "We turn traffic into revenue using heatmaps, A/B testing, UX audits, and behavioral analytics.",
    image: CROImage
  },
};
 
const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
 
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeading1Ref = useRef(null);
  const subHeading2Ref = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabButtonsRef = useRef([]);
  const contentBoxRef = useRef(null);
  const contentTitleRef = useRef(null);
  const contentDescRef = useRef(null);
  const contentImageRef = useRef(null);
 
  const content = tabContent[activeTab];
 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
     
      // === PREMIUM SECTION PUSH EFFECT (PARALLAX) ===
      gsap.fromTo(sectionRef.current,
        { y: 0 },
        {
          y: -40,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          }
        }
      );
 
      // === PREMIUM HEADING REVEAL ===
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM SUBHEADINGS STAGGER ===
      gsap.fromTo([subHeading1Ref.current, subHeading2Ref.current],
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM TABS SLOW POP OUT (ONE BY ONE) ===
      gsap.fromTo(tabButtonsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotationZ: (index) => index % 2 === 0 ? -3 : 3,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationZ: 0,
          duration: 1.3,
          stagger: {
            amount: 2,
            from: "start",
          },
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: tabsContainerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM CONTENT BOX REVEAL ===
      gsap.fromTo(contentBoxRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentBoxRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM CONTENT TEXT REVEAL ===
      gsap.fromTo([contentTitleRef.current, contentDescRef.current],
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentBoxRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM IMAGE REVEAL ===
      gsap.fromTo(contentImageRef.current,
        {
          opacity: 0,
          x: 60,
          scale: 0.9,
          rotationY: 10,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: contentBoxRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  // PREMIUM TAB CHANGE ANIMATION
  useLayoutEffect(() => {
    if (!contentBoxRef.current) return;
 
    const tl = gsap.timeline();
 
    tl.to([contentTitleRef.current, contentDescRef.current, contentImageRef.current], {
      opacity: 0,
      x: (index) => index === 2 ? 40 : -40,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.in"
    })
    .to([contentTitleRef.current, contentDescRef.current, contentImageRef.current], {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.4)"
    });
 
  }, [activeTab]);
 
  // PREMIUM HOVER EFFECTS (ONLY ON BUTTONS)
  const handleTabHover = (e, isEnter) => {
    gsap.to(e.target, {
      scale: isEnter ? 1.08 : 1,
      y: isEnter ? -4 : 0,
      boxShadow: isEnter ? "0 15px 30px -8px rgba(0, 102, 204, 0.4)" : "0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      duration: 0.4,
      ease: isEnter ? "back.out(1.5)" : "power2.out"
    });
  };
 
  return (
    <motion.section
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
 
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
 
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-center text-[28px] sm:text-[32px] md:text-[36px] font-bold text-gray-900"
        >
          OUR CORE DIGITAL MARKETING SERVICES
        </h2>
 
        <p
          ref={subHeading1Ref}
          className="text-center text-gray-600 max-w-[896px] mx-auto mt-4 text-sm sm:text-base"
        >
          Integrated Digital Marketing Solutions Under One Roof
        </p>
 
        <p
          ref={subHeading2Ref}
          className="text-center text-gray-600 max-w-[1152px] mx-auto mt-2 text-sm sm:text-base"
        >
          We provide 360° digital marketing services tailored to startups, SMEs, enterprises, and D2C brands.
        </p>
 
        {/* Tabs - Permanent blue color like "Request a Quote" button */}
        <div
          ref={tabsContainerRef}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 sm:mt-12"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={el => tabButtonsRef.current[index] = el}
              onClick={() => setActiveTab(tab)}
              onMouseEnter={(e) => handleTabHover(e, true)}
              onMouseLeave={(e) => handleTabHover(e, false)}
              className={`
                px-5 sm:px-7 py-2.5 rounded-full
                text-[13px] sm:text-[14px] font-medium
                transition-all duration-300 cursor-pointer
                bg-[#0066CC] text-white
                hover:bg-[#0052a3]
                shadow-md hover:shadow-lg
              `}
              style={{
                transformOrigin: "center",
                boxShadow: "0 4px 6px -2px rgba(0, 102, 204, 0.2)"
              }}
            >
              {tab}
            </button>
          ))}
        </div>
 
        {/* Content Box */}
        <div
          ref={contentBoxRef}
          className="mt-12 sm:mt-16 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative border border-blue-100/50 shadow-xl"
        >
          {/* Left Content */}
          <div className="space-y-4">
            <h3
              ref={contentTitleRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            >
              {content.title}
            </h3>
 
            <p
              ref={contentDescRef}
              className="text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              {content.desc}
            </p>
          </div>
 
          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                ref={contentImageRef}
                src={content.image}
                alt={content.title}
                className="max-w-[260px] sm:max-w-[300px] md:max-w-[340px] w-full h-auto"
              />
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
 
export default ServicesTabs;