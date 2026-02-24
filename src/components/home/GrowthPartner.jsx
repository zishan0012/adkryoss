// import React from "react";
// import { motion } from "framer-motion";

// // Array of cards with text and related SVG
// const cards = [
//   {
//     title: "Dedicated account strategist",
//     color:"blue",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         // className="h-12 w-12 text-blue-500 mb-4 mx-auto"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 5.422 12.083 12.083 0 01-.84 5.422L12 14z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Weekly performance insights",
//     color:"green",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-12 w-12 text-green-500 mb-4 mx-auto"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3h2v12h-2zM4 9h2v6H4zM18 7h2v8h-2z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Real-time reporting",
//     color:"purple",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-12 w-12 text-purple-500 mb-4 mx-auto"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l3 10h8l3-10h2" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4h-2v6h2V4z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Strategic consultations",
//     color:"red",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-12 w-12 text-red-500 mb-4 mx-auto"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-8 4h6" />
//       </svg>
//     ),
//   },
//   {
//     title: "Transparent communication",
//     color:"yellow",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-12 w-12 text-yellow-500 mb-4 mx-auto"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.928 9.928 0 01-5.032-1.406L3 20l1.406-3.032A9.928 9.928 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Your success defines our growth",
//     color:"indigo",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-12 w-12 text-indigo-500 mb-4 mx-auto"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//       </svg>
//     ),
//   },
// ];

// const colorStyles = {
//   blue: {
//     border: "border-blue-400",
//     hoverBorder: "hover:border-blue-500",
//     iconBg: "bg-blue-100",
//     text: "text-blue-600",
//     shadow: "shadow-blue-300/40",
//   },
//   green: {
//     border: "border-green-400",
//     hoverBorder: "hover:border-green-500",
//     iconBg: "bg-green-100",
//     text: "text-green-600",
//     shadow: "shadow-green-300/40",
//   },
//   purple: {
//     border: "border-purple-400",
//     hoverBorder: "hover:border-purple-500",
//     iconBg: "bg-purple-100",
//     text: "text-purple-600",
//     shadow: "shadow-purple-300/40",
//   },
//   red: {
//     border: "border-red-400",
//     hoverBorder: "hover:border-red-500",
//     iconBg: "bg-red-100",
//     text: "text-red-600",
//     shadow: "shadow-red-300/40",
//   },
//   yellow: {
//     border: "border-yellow-400",
//     hoverBorder: "hover:border-yellow-500",
//     iconBg: "bg-yellow-100",
//     text: "text-yellow-600",
//     shadow: "shadow-yellow-300/40",
//   },
//   indigo: {
//     border: "border-indigo-400",
//     hoverBorder: "hover:border-indigo-500",
//     iconBg: "bg-indigo-100",
//     text: "text-indigo-600",
//     shadow: "shadow-indigo-300/40",
//   },
// };

// const GrowthPartner = () => {
//   return (
//     <motion.section className="py-16 bg-white"
    
//  initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
    
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-black mb-4">
//           Your Growth Partner — Not Just an Agency
//         </h2>

//         {/* Subheading */}
//         <p className="text-gray-600 text-lg mb-12">
//           At Adkryoss, we believe in partnerships, not projects. You get:
//         </p>

//         {/* Cards Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* {cards.map((card, index) => (
//             <div
//               key={index}
//               className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-[#f9fafb]"
//             >
//               {card.icon}
//               <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
//             </div>



//           ))} */}


//           {cards.map((card, index) => {
//   const styles = colorStyles[card.color];

//   return (
//  <div
//   key={index}
//   className={`group border-2 rounded-2xl p-8 
//               bg-white
//               transition-all duration-500
//               hover:-translate-y-2 hover:shadow-xl
//               ${styles.border} ${styles.hoverBorder}`}
// >
//       {/* Icon Wrapper */}
//       <div className="flex justify-center mb-6">
//        <motion.div
//   className={`
//     w-16 h-16 flex items-center justify-center rounded-full
//     ${styles.iconBg}
//     shadow-lg ${styles.shadow}
//     group-hover:scale-110
//     transition-all duration-500
//   `}
//   whileHover={{ scale: 1.1 }}
// >
//           {React.cloneElement(card.icon, {
//             className: `h-8 w-8 ${styles.text}`,
//           })}
//         </motion.div>
//       </div>

//       <h3 className="text-lg font-semibold text-gray-800">
//         {card.title}
//       </h3>
//     </div>
//   );
// })}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default GrowthPartner;


































import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
// Array of cards with text and related SVG
const cards = [
  {
    title: "Dedicated account strategist",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 5.422 12.083 12.083 0 01-.84 5.422L12 14z" />
      </svg>
    ),
  },
  {
    title: "Weekly performance insights",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3h2v12h-2zM4 9h2v6H4zM18 7h2v8h-2z" />
      </svg>
    ),
  },
  {
    title: "Real-time reporting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l3 10h8l3-10h2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4h-2v6h2V4z" />
      </svg>
    ),
  },
  {
    title: "Strategic consultations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-8 4h6" />
      </svg>
    ),
  },
  {
    title: "Transparent communication",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.928 9.928 0 01-5.032-1.406L3 20l1.406-3.032A9.928 9.928 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Your success defines our growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];
 
const GrowthPartner = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const cardsRef = useRef([]);
 
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
 
      // === HEADING PREMIUM ANIMATION ===
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
 
      // === CARDS POP OUT ONE BY ONE ===
      gsap.fromTo(cardsRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.6,
          rotate: (index) => index % 2 === 0 ? -5 : 5,
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
 
      // === CONTINUOUS FLOATING ANIMATION FOR CARDS ===
      gsap.to(cardsRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1.5,
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
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  // Premium card hover effect
  const handleCardHover = (e, isEnter) => {
    const card = e.currentTarget;
   
    if (isEnter) {
      // Pause floating and enhance on hover
      gsap.to(card, {
        scale: 1.08,
        y: -15,
        boxShadow: "0 30px 50px -15px rgba(0, 102, 204, 0.3)",
        duration: 0.4,
        ease: "back.out(1.2)",
        overwrite: true
      });
     
      // Animate icon
      const icon = card.querySelector("svg");
      if (icon) {
        gsap.to(icon, {
          scale: 1.2,
          rotate: 5,
          duration: 0.4,
          ease: "back.out(1.2)"
        });
      }
    } else {
      // Return to floating state
      gsap.to(card, {
        scale: 1,
        y: -8,
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: "power2.out",
        overwrite: true
      });
     
      // Resume floating
      gsap.to(card, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4
      });
     
      // Reset icon
      const icon = card.querySelector("svg");
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    }
  };
 
  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >
      {/* Premium decorative background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-full blur-3xl -z-10"></div>
 
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
 
        {/* Heading with gradient accent */}
        <h2
          ref={headingRef}
          className="text-4xl font-bold text-black mb-4 relative inline-block"
        >
          Your Growth Partner — Not Just an Agency
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
        </h2>
 
        {/* Subheading */}
        <p
          ref={subHeadingRef}
          className="text-gray-600 text-lg mb-12"
        >
          At Adkryoss, we believe in partnerships, not projects. You get:
        </p>
 
        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="border rounded-2xl p-6 shadow-sm bg-[#f9fafb] cursor-pointer transform-gpu"
              style={{ opacity: 0, transform: 'scale(0.6) translateY(100px)' }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div className="card-icon">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default GrowthPartner;