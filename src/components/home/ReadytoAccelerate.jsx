import React, { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReadyToAccelerateImage from "../../assets/ReadyToaccelerate.jpeg";

gsap.registerPlugin(ScrollTrigger);

const ClientTestimonials = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const buttonsRef = useRef([]);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => st.kill());

      const isMobile = window.innerWidth < 768;

      // ----- PARALLAX (disabled on mobile for performance) -----
      if (!isMobile) {
        gsap.fromTo(sectionRef.current,
          { y: 0 },
          {
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          }
        );
      }

      // ----- HEADING ANIMATION -----
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: isMobile ? 20 : 40 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.9 : 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: isMobile ? "top 85%" : "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // ----- PARAGRAPH ANIMATION -----
      gsap.fromTo(paragraphRef.current,
        { opacity: 0, y: isMobile ? 15 : 30 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.8 : 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: isMobile ? "top 85%" : "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // ----- BUTTONS STAGGER ANIMATION -----
      gsap.fromTo(buttonsRef.current,
        { opacity: 0, y: isMobile ? 15 : 25, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isMobile ? 0.7 : 1,
          stagger: isMobile ? 0.15 : 0.2,
          ease: isMobile ? "power2.out" : "back.out(1.2)",
          scrollTrigger: {
            trigger: buttonContainerRef.current,
            start: isMobile ? "top 85%" : "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // ----- IMAGE ANIMATION -----
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: isMobile ? 15 : 30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: isMobile ? 1 : 1.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: isMobile ? "top 85%" : "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Hover effect for buttons
  const handleButtonHover = (e, isEnter, isOrange = true) => {
    gsap.to(e.target, {
      scale: isEnter ? 1.05 : 1,
      backgroundColor: isEnter
        ? (isOrange ? "#f97316" : "#d1d5db")
        : (isOrange ? "#ea580c" : "#e5e7eb"),
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-14 bg-cover bg-center mb-5 overflow-hidden relative"
      style={{
        backgroundImage:
          "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/client_bg.webp')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT SIDE CTA */}
        <div className="flex flex-col items-start md:items-start justify-center space-y-6 px-6">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
          >
            Ready to Accelerate Your Digital Growth?
          </h2>

          <p
            ref={paragraphRef}
            className="text-base md:text-lg text-gray-200 drop-shadow"
          >
            Let's build a scalable digital strategy that drives traffic, leads, and revenue.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonContainerRef}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button
              ref={el => (buttonsRef.current[0] = el)}
              onClick={() => navigate("/contact")}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors"
              onMouseEnter={(e) => handleButtonHover(e, true, true)}
              onMouseLeave={(e) => handleButtonHover(e, false, true)}
            >
              👉 Book Your Free Consultation
            </button>

            <button
              ref={el => (buttonsRef.current[1] = el)}
              onClick={() => navigate("/request-quote")}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-300 transition-colors"
              onMouseEnter={(e) => handleButtonHover(e, true, false)}
              onMouseLeave={(e) => handleButtonHover(e, false, false)}
            >
              👉 Request Custom Proposal
            </button>
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-gray-300 mt-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            No commitment • Free strategy call • 100% confidential
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex items-center justify-center">
          <img
            ref={imageRef}
            src={ReadyToAccelerateImage}
            alt="Client"
            className="rounded-4xl shadow-2xl max-w-full h-auto w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;