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
  const buttonContainerRef = useRef(null);
  const buttonsRef = useRef([]);
 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
      // === SECTION PARALLAX EFFECT ===
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -80,
      });
 
      // === HEADING PREMIUM ANIMATION ===
      gsap.fromTo(headingRef.current,
        { 
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PARAGRAPH PREMIUM ANIMATION ===
      gsap.fromTo(paragraphRef.current,
        { 
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === BUTTONS STAGGER ANIMATION ===
      gsap.fromTo(buttonsRef.current,
        { 
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: buttonContainerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  // Premium hover effect for buttons
  const handleButtonHover = (e, isEnter, isOrange = true) => {
    if (isOrange) {
      gsap.to(e.target, {
        scale: isEnter ? 1.08 : 1,
        y: isEnter ? -3 : 0,
        boxShadow: isEnter ? "0 20px 30px -10px rgba(255, 122, 0, 0.4)" : "none",
        duration: 0.4,
        ease: isEnter ? "back.out(1.2)" : "power2.out"
      });
    } else {
      gsap.to(e.target, {
        scale: isEnter ? 1.08 : 1,
        y: isEnter ? -3 : 0,
        backgroundColor: isEnter ? "rgba(255,255,255,0.15)" : "transparent",
        borderColor: isEnter ? "#ffffff" : "#ffffff",
        boxShadow: isEnter ? "0 20px 30px -10px rgba(255,255,255,0.2)" : "none",
        duration: 0.4,
        ease: isEnter ? "back.out(1.2)" : "power2.out"
      });
    }
  };
 
  return (
<section
      ref={sectionRef}
      className="relative flex items-center min-h-[90vh] bg-cover bg-left bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${HerobgImage})`,
      }}
>
      {/* Dark overlay for better text readability */}
<div className="absolute inset-0 bg-black/30 z-0"></div>
 
      {/* Decorative overlay elements */}
<div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl z-0"></div>
<div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
 
      {/* Content Container */}
<div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">
        {/* LEFT SIDE */}
<div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">
<h1 
            ref={headingRef}
            className="text-[36px] md:text-[48px] font-extrabold mt-5 leading-[1.2]"
>
            We Build Digital Growth Systems <span className="text-[#ff7a00]">That Drive Revenue.</span>
</h1>
 
          <p 
            ref={paragraphRef}
            className="mt-[25px] text-[18px] max-w-[550px] text-white/90 leading-relaxed"
>
            Not just traffic. Not just engagement.
<br />
            We engineer data-driven marketing strategies that turn clicks
            into customers and brands into market leaders.
</p>
 
          {/* Buttons */}
<div 
            ref={buttonContainerRef}
            className="mt-[35px] flex flex-col sm:flex-row gap-5"
>
<button 
              ref={el => buttonsRef.current[0] = el}
              onClick={() => navigate("/contact")}
              className="bg-[#ff7a00] text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px] transition-all duration-300"
              onMouseEnter={(e) => handleButtonHover(e, true, true)}
              onMouseLeave={(e) => handleButtonHover(e, false, true)}
>
              Get a Free Growth Audit →
</button>
 
            <button 
              ref={el => buttonsRef.current[1] = el}
              onClick={() => navigate("/contact")}
              className="border-2 border-white text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px] bg-transparent transition-all duration-300"
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