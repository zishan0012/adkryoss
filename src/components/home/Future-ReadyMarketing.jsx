import React, { useRef, useLayoutEffect } from "react";
import aiImage from "../../assets/ai.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const CaseStudySection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const leftHeadingRef = useRef(null);
  const bulletsRef = useRef([]);
  const imageRef = useRef(null);
  const bottomTextRef = useRef(null);
 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
      // === SECTION PUSH EFFECT (PARALLAX) ===
      gsap.fromTo(sectionRef.current,
        { y: 0 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          }
        }
      );
 
      // === MAIN HEADING PREMIUM ANIMATION ===
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 60,
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
 
      // === SUBHEADING PREMIUM ANIMATION ===
      gsap.fromTo(subHeadingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subHeadingRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === LEFT HEADING ANIMATION ===
      gsap.fromTo(leftHeadingRef.current,
        {
          opacity: 0,
          x: -50,
          rotate: -2,
        },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.3,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: leftHeadingRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === BULLET POINTS PREMIUM STAGGER ANIMATION ===
      gsap.fromTo(bulletsRef.current,
        {
          opacity: 0,
          x: -40,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          stagger: {
            amount: 1.5,
            from: "start",
          },
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: leftHeadingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === IMAGE PREMIUM REVEAL ===
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          x: 80,
          scale: 0.8,
          rotate: 3,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: 1.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === BOTTOM TEXT PREMIUM ANIMATION ===
      gsap.fromTo(bottomTextRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bottomTextRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  return (
    <section
      ref={sectionRef}
      className="py-16 bg-[#f4f7fb] overflow-hidden relative"
    >
      {/* Premium decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl -z-10"></div>
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
 
        {/* Top Heading */}
        <div className="text-center mb-14">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Future-Ready Marketing with AI & Automation
          </h2>
          <p
            ref={subHeadingRef}
            className="text-gray-600 mt-4 text-base md:text-lg"
          >
            The digital landscape is evolving — and so are we.
          </p>
        </div>
 
        {/* Two-column Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          {/* LEFT SIDE - Heading + Points */}
          <div>
            <h3
              ref={leftHeadingRef}
              className="text-2xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Adkryoss integrates:
            </h3>
            <ul className="space-y-3 text-lg">
              {[
                "AI-powered keyword research",
                "Predictive audience targeting",
                "Marketing automation workflows",
                "Data-driven personalization",
                "Advanced analytics dashboards",
              ].map((text, index) => (
                <li
                  key={index}
                  ref={el => bulletsRef.current[index] = el}
                  className="py-2 flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>
 
          {/* RIGHT SIDE - Image */}
          <div className="flex justify-center">
            <img
              ref={imageRef}
              src={aiImage}
              alt="Future Marketing"
              className="w-full max-w-md object-contain rounded-4xl"
            />
          </div>
        </div>
 
        {/* Paragraph Below Full Width */}
        <p
          ref={bottomTextRef}
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto relative inline-block"
        >
          We blend creativity with technology to stay ahead of algorithms and competitors.
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </p>
 
      </div>
    </section>
  );
};
 export default CaseStudySection;