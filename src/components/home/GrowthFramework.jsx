import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import cardsData from "../../data/cardsData";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TrafficGrowthSection = () => {

  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  // ✅ Framer parallax

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yHeading = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -40]
  );

  const yCards = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -20]
  );

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
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 300);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (

    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      style={{
        padding: "96px 0",
        background:
          "linear-gradient(to right, #eff6ff, #ffffff)",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >

        <div
          style={{
            display: "flex",
            gap: "64px",
            alignItems: "flex-start",
          }}
        >

          {/* LEFT */}

          <motion.div
            variants={item}
            style={{
              width: "33%",
              y: yHeading,
            }}
          >

            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
              Our Growth Framework
            </h2>

            <p>
              We follow a structured,
              research-driven,
              and performance-focused process:
            </p>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            variants={item}
            style={{
              width: "67%",
              position: "relative",
              y: yCards,
            }}
          >

            {/* LEFT ARROW */}

            <button
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
                background: "#fff",
                border: "none",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.2)",
                cursor: "pointer",
              }}
            >
              ←
            </button>


            {/* CARDS */}

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              style={{
                display: "flex",
                gap: "24px",
                overflowX: "auto",
                scrollBehavior: "smooth",
                paddingBottom: "10px",
              }}
            >

              {cardsData.map((card) => (

                <motion.div
                  key={card.id}
                  variants={item}
                  style={{
                    minWidth: "280px",
                  }}
                >

                  <Card
                    title={card.title}
                    desc={card.desc}
                    image={card.image}
                  />

                </motion.div>

              ))}

            </div>


            {/* RIGHT ARROW */}

            <button
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
                background: "#fff",
                border: "none",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.2)",
                cursor: "pointer",
              }}
            >
              →
            </button>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};

export default TrafficGrowthSection;