import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Card from "./Card";
import cardsData from "../../data/cardsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const TrafficGrowthSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const scrollRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
 
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
 
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
 
    setIsLeftDisabled(el.scrollLeft <= 0);
    setIsRightDisabled(
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
    );
  };
 
  const scroll = (direction) => {
    const el = scrollRef.current;
    const scrollAmount = el.clientWidth * 0.8;
 
    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
 
    setTimeout(checkScroll, 400);
  };
 
  useEffect(() => {
    checkScroll();
  }, []);
 
  // 🔥 PREMIUM SCROLL ANIMATIONS WITH PUSH EFFECT
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
      // === SECTION PUSH EFFECT (PARALLAX) ===
      gsap.fromTo(sectionRef.current,
        { y: 0 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          }
        }
      );
 
      // === LEFT CONTENT PREMIUM ANIMATION ===
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          x: -80,
          rotate: -5,
        },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.4,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      gsap.fromTo(
        paragraphRef.current,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === CARDS PREMIUM POP OUT ONE BY ONE ===
      gsap.fromTo(
        ".growth-card",
        {
          opacity: 0,
          y: 150,
          scale: 0.6,
          rotate: (index) => index % 2 === 0 ? -8 : 8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.6,
          stagger: {
            amount: 2.2,
            from: "start",
          },
          ease: "elastic.out(1.2, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM CONTINUOUS FLOATING ANIMATION FOR CARDS ===
      gsap.to(".growth-card", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1.8,
          from: "random"
        },
        delay: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });
 
      // === ARROW BUTTONS PREMIUM ANIMATION ===
      gsap.fromTo(
        [leftArrowRef.current, rightArrowRef.current],
        {
          opacity: 0,
          scale: 0.5,
          x: (index) => index === 0 ? -30 : 30
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(2.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  // 🔥 ENHANCED HORIZONTAL SCROLL ANIMATION
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
 
    let scrollTimeout;
   
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
     
      // Scale down all cards slightly during scroll
      gsap.to(".growth-card", {
        scale: 0.92,
        opacity: 0.7,
        duration: 0.3,
        stagger: 0.05,
        overwrite: true,
        ease: "power1.out"
      });
 
      // Highlight center card with pulse effect
      const container = scrollRef.current;
      const cards = container.querySelectorAll(".growth-card");
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
     
      cards.forEach((card) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        const maxDistance = container.clientWidth / 2;
       
        if (distance < maxDistance) {
          const intensity = 1 - distance / maxDistance;
          gsap.to(card, {
            scale: 1 + intensity * 0.08,
            opacity: 1,
            duration: 0.4,
            overwrite: true,
            ease: "power2.out"
          });
        }
      });
 
      // Scale back up after scroll stops
      scrollTimeout = setTimeout(() => {
        gsap.to(".growth-card", {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
          stagger: 0.1
        });
       
        // Resume floating animation
        gsap.to(".growth-card", {
          y: -12,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 1.8,
            from: "random"
          }
        });
      }, 200);
    };
 
    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
 
  // Premium card hover effect
  const handleCardHover = (e, isEnter) => {
    const card = e.currentTarget;
   
    if (isEnter) {
      // Pause floating and enhance on hover
      gsap.to(card, {
        scale: 1.08,
        y: -18,
        boxShadow: "0 30px 50px -15px rgba(59, 130, 246, 0.4)",
        duration: 0.4,
        ease: "back.out(1.2)",
        overwrite: true
      });
    } else {
      // Return to floating state
      gsap.to(card, {
        scale: 1,
        y: -12,
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: "power2.out",
        overwrite: true
      });
     
      // Resume floating
      gsap.to(card, {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4
      });
    }
  };
 
  return (
    <section
      ref={sectionRef}
      style={{
        padding: "96px 0",
        background: "linear-gradient(to right, #eff6ff, #ffffff)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 0,
      }} />
 
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "64px",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE */}
          <div ref={leftRef} style={{ width: "33%" }}>
            <h2
              ref={headingRef}
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "24px",
                lineHeight: "1.2",
                position: "relative",
                display: "inline-block",
              }}
            >
              Our Growth Framework
              <span style={{
                position: "absolute",
                bottom: "-8px",
                left: "0",
                width: "60px",
                height: "3px",
                background: "linear-gradient(to right, #3b82f6, #10b981)",
                borderRadius: "2px",
              }} />
            </h2>
 
            <p
              ref={paragraphRef}
              style={{
                color: "#4b5563",
                marginBottom: "24px",
              }}
            >
              We follow a structured, research-driven, and performance-focused process:
            </p>
          </div>
 
          {/* RIGHT SIDE */}
          <div style={{ width: "67%", position: "relative" }}>
            {/* Left Arrow */}
            <button
              ref={leftArrowRef}
              onClick={() => scroll("left")}
              disabled={isLeftDisabled}
              style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                border: "none",
                cursor: isLeftDisabled ? "not-allowed" : "pointer",
                opacity: isLeftDisabled ? 0.5 : 1,
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isLeftDisabled) {
                  gsap.to(e.target, {
                    scale: 1.15,
                    backgroundColor: "#3b82f6",
                    color: "#fff",
                    boxShadow: "0 8px 25px rgba(59,130,246,0.4)",
                    duration: 0.3,
                  });
                }
              }}
              onMouseLeave={(e) => {
                if (!isLeftDisabled) {
                  gsap.to(e.target, {
                    scale: 1,
                    backgroundColor: "#fff",
                    color: "#000",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                    duration: 0.3,
                  });
                }
              }}
            >
              ←
            </button>
 
            {/* Scrollable Cards Container */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              style={{
                display: "flex",
                gap: "24px",
                overflowX: "auto",
                scrollBehavior: "smooth",
                padding: "10px 5px 25px 5px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="cards-scroll-container"
            >
              {cardsData.map((card, index) => (
                <div
                  key={card.id}
                  className="growth-card"
                  style={{
                    minWidth: "280px",
                    transform: `rotate(${index % 2 === 0 ? '0.3deg' : '-0.3deg'})`,
                    opacity: 0,
                  }}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <Card
                    title={card.title}
                    desc={card.desc}
                    image={card.image}
                  />
                </div>
              ))}
            </div>
 
            {/* Right Arrow */}
            <button
              ref={rightArrowRef}
              onClick={() => scroll("right")}
              disabled={isRightDisabled}
              style={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                border: "none",
                cursor: isRightDisabled ? "not-allowed" : "pointer",
                opacity: isRightDisabled ? 0.5 : 1,
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isRightDisabled) {
                  gsap.to(e.target, {
                    scale: 1.15,
                    backgroundColor: "#3b82f6",
                    color: "#fff",
                    boxShadow: "0 8px 25px rgba(59,130,246,0.4)",
                    duration: 0.3,
                  });
                }
              }}
              onMouseLeave={(e) => {
                if (!isRightDisabled) {
                  gsap.to(e.target, {
                    scale: 1,
                    backgroundColor: "#fff",
                    color: "#000",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                    duration: 0.3,
                  });
                }
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
 
      {/* Custom scrollbar styling */}
      <style jsx>{`
        .cards-scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .cards-scroll-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .cards-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #3b82f6, #10b981);
          border-radius: 10px;
        }
        .cards-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #2563eb, #059669);
        }
      `}</style>
    </section>
  );
};
 
export default TrafficGrowthSection;