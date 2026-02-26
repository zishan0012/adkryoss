import React, { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import HerobgImage from "../../assets/Herobg1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const HeroSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef([]);
 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Kill any existing ScrollTriggers to prevent conflicts
      ScrollTrigger.getAll().forEach(st => st.kill());
      
      // === OPTIMIZED PARALLAX - Reduced movement for better performance ===
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5, // Reduced for smoother performance
          invalidateOnRefresh: true,
        },
        y: -40, // Reduced movement
        ease: "none"
      });
 
      // === HEADING ANIMATION - Longer duration with reverse ===
      gsap.fromTo(headingRef.current,
        { 
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.5, // Increased duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse", // This enables reverse on scroll back
            scrub: false, // Disable scrub for smooth reverse
          }
        }
      );
 
      // === PARAGRAPH ANIMATION - Longer duration with reverse ===
      gsap.fromTo(paragraphRef.current,
        { 
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.2, // Increased duration
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
            scrub: false,
          }
        }
      );
 
      // === BUTTONS STAGGER ANIMATION - Smoother with reverse ===
      gsap.fromTo(buttonsRef.current,
        { 
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.0, // Increased duration
          stagger: 0.3, // Slightly longer stagger
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
            scrub: false,
          }
        }
      );
 
      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
      
    }, sectionRef);
 
    return () => {
      // Cleanup properly
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
 
  // Optimized hover effects with hardware acceleration
  const handleButtonHover = (e, isEnter, isOrange = true) => {
    gsap.to(e.target, {
      scale: isEnter ? 1.05 : 1,
      y: isEnter ? -2 : 0,
      backgroundColor: !isOrange && isEnter ? "rgba(255,255,255,0.15)" : isOrange ? "#ff7a00" : "transparent",
      boxShadow: isEnter ? "0 15px 25px -8px rgba(0,0,0,0.3)" : "none",
      duration: 0.5,
      ease: "power2.out",
      overwrite: true
    });
  };
 
  return (
    <section
      ref={sectionRef}
      className="relative flex items-center min-h-[90vh] bg-cover bg-left bg-no-repeat overflow-hidden will-change-transform"
      style={{
        backgroundImage: `url(${HerobgImage})`,
      }}
    >
      {/* Optimized overlay with better opacity */}
      <div className="absolute inset-0 bg-black/40 z-0 will-change-opacity"></div>
 
      {/* Decorative elements - reduced blur for performance */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
 
      {/* Content Container */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
        {/* LEFT SIDE */}
        <div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">
          <h1 
            ref={headingRef}
            className="text-[36px] md:text-[48px] font-extrabold mt-5 leading-[1.2] will-change-transform"
          >
            We Build Digital Growth Systems <span className="text-[#ff7a00]">That Drive Revenue.</span>
          </h1>
 
          <p 
            ref={paragraphRef}
            className="mt-[25px] text-[18px] max-w-[550px] text-white/90 leading-relaxed will-change-transform"
          >
            Not just traffic. Not just engagement.
            <br />
            We engineer data-driven marketing strategies that turn clicks
            into customers and brands into market leaders.
          </p>
 
          {/* Buttons */}
          <div className="mt-[35px] flex flex-col sm:flex-row gap-5">
            <button 
              ref={el => buttonsRef.current[0] = el}
              onClick={() => navigate("/contact")}
              className="bg-[#ff7a00] text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px] transition-none will-change-transform"
              onMouseEnter={(e) => handleButtonHover(e, true, true)}
              onMouseLeave={(e) => handleButtonHover(e, false, true)}
            >
              Get a Free Growth Audit →
            </button>
 
            <button 
              ref={el => buttonsRef.current[1] = el}
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px] bg-transparent transition-none will-change-transform"
              onMouseEnter={(e) => handleButtonHover(e, true, false)}
              onMouseLeave={(e) => handleButtonHover(e, false, false)}
            >
              Talk to a Growth Strategist →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HeroSection;