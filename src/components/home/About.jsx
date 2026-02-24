

// import React from "react";
// import { motion } from "framer-motion";
// const Clients = () => {
//   const logos = [
//     // Column 1
//     "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-463.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/08/Indira-ivf.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-457.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-464.webp",

//     // Column 2
//     "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-459.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-456.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-460.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-478.webp",

//     // Column 3
//     "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-461.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-462.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/08/BLK-MAX-1.webp",
//     "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-464-1.webp",
//   ];

//   return (
  

// //     <section className="py-28 px-6 bg-white">
// //   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

// //     {/* LEFT CONTENT */}
// //     <div>
// //       <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
// //         About
// //       </span>

// //       <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
// //         We Don’t Just Market. <br />
// //         <span className="text-blue-600">We Engineer Digital Growth.</span>
// //       </h2>

// //       <p className="text-gray-600 leading-relaxed mb-6">
// //         Adkryoss is built for ambitious brands that want scalable,
// //         ROI-focused marketing solutions. In today’s algorithm-driven
// //         digital landscape, visibility alone is not enough.
// //       </p>

// //       <p className="text-gray-600 leading-relaxed">
// //         You need performance, personalization, and precision.
// //       </p>
// //     </div>

// //     {/* RIGHT SIDE - VALUE BLOCKS */}
// //     <div className="grid sm:grid-cols-2 gap-6">

// //       {/* 1 - AI & Data */}
// //       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
// //         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
// //           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
// //             viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round"
// //               d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16" />
// //           </svg>
// //         </div>
// //         <p className="font-semibold text-gray-800">
// //           Data Science & AI-driven insights
// //         </p>
// //       </div>

// //       {/* 2 - Strategy */}
// //       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
// //         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
// //           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
// //             viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round"
// //               d="M3 3v18h18M7 14l4-4 4 4 6-6" />
// //           </svg>
// //         </div>
// //         <p className="font-semibold text-gray-800">
// //           Full-funnel marketing strategy
// //         </p>
// //       </div>

// //       {/* 3 - Conversion */}
// //       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
// //         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
// //           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
// //             viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round"
// //               d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4" />
// //           </svg>
// //         </div>
// //         <p className="font-semibold text-gray-800">
// //           Conversion-focused creatives
// //         </p>
// //       </div>

// //       {/* 4 - Automation */}
// //       <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
// //         <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
// //           <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
// //             viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round"
// //               d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z" />
// //           </svg>
// //         </div>
// //         <p className="font-semibold text-gray-800">
// //           Advanced analytics & automation
// //         </p>
// //       </div>

// //     </div>

// //   </div>

// //   {/* Bottom Statement */}
// //   <div className="mt-20 text-center max-w-3xl mx-auto">
// //     <p className="text-xl font-medium text-gray-800">
// //       To create marketing systems that generate consistent growth.
// //     </p>
// //   </div>
// // </section>


// <motion.section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white overflow-hidden"

//  initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
// >
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

//     {/* LEFT CONTENT */}
//     <div>
//       <span className="text-orange-400 font-bold tracking-widest uppercase text-sm sm:text-2xl">
//         About
//       </span>

//       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 sm:mb-8 leading-tight">
//         We Don’t Just Market. <br />
//         <span className="text-blue-600">We Engineer Digital Growth.</span>
//       </h2>

//       <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
//         Adkryoss is built for ambitious brands that want scalable,
//         ROI-focused marketing solutions. In today’s algorithm-driven
//         digital landscape, visibility alone is not enough.
//       </p>

//       <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//         You need performance, personalization, and precision.
//       </p>
//     </div>

//     {/* RIGHT SIDE - VALUE BLOCKS */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

//       {/* 1 */}
//       {/* <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800 text-sm sm:text-base">
//           Data Science & AI-driven insights
//         </p>
//       </div> */}



// <div className="group relative bg-white p-6 rounded-2xl 
//                 border border-blue-100
//                 shadow-md hover:shadow-xl
//                 transition-all duration-500 
//                 hover:-translate-y-2
//                 overflow-hidden">

//   {/* Gradient Accent Border (Left + Bottom) */}
//   <span className="absolute left-0 top-0 h-full w-1 
//                    bg-gradient-to-b from-blue-500 to-orange-400"></span>
//   <span className="absolute bottom-0 left-0 w-full h-1 
//                    bg-gradient-to-r from-blue-500 to-orange-400"></span>

//   {/* Soft Hover Glow */}
//   <div className="absolute inset-0 bg-gradient-to-br 
//                   from-blue-50 via-transparent to-orange-50 
//                   opacity-0 group-hover:opacity-100 
//                   transition duration-500"></div>

//   <div className="relative z-10">
    
//     {/* Icon */}
//     <div className="w-12 h-12 bg-gradient-to-br 
//                     from-blue-100 to-orange-100
//                     rounded-xl flex items-center justify-center mb-4
//                     group-hover:from-blue-500 group-hover:to-orange-400
//                     transition-all duration-500">

//       <svg className="w-6 h-6 text-blue-600 
//                       group-hover:text-white 
//                       transition-colors duration-500"
//         fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round"
//           d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16" />
//       </svg>
//     </div>

//     {/* Text */}
//     <p className="font-semibold text-gray-800 
//                   group-hover:text-blue-700 
//                   transition-colors duration-300">
//       Data Science & AI-driven insights
//     </p>

//   </div>
// </div>





//       {/* 2 */}
//       {/* <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800 text-sm sm:text-base">
//           Full-funnel marketing strategy
//         </p>
//       </div> */}


// <div className="group relative bg-white p-6 rounded-2xl 
//                 border border-blue-100
//                 shadow-md hover:shadow-xl
//                 transition-all duration-500 
//                 hover:-translate-y-2
//                 overflow-hidden">

//   {/* Gradient Accent Border (Left + Bottom) */}
//   <span className="absolute left-0 top-0 h-full w-1 
//                    bg-gradient-to-b from-blue-500 to-orange-400"></span>
//   <span className="absolute bottom-0 left-0 w-full h-1 
//                    bg-gradient-to-r from-blue-500 to-orange-400"></span>

//   {/* Soft Hover Glow */}
//   <div className="absolute inset-0 bg-gradient-to-br 
//                   from-blue-50 via-transparent to-orange-50 
//                   opacity-0 group-hover:opacity-100 
//                   transition duration-500"></div>

//   <div className="relative z-10">
    
//     {/* Icon */}
//     <div className="w-12 h-12 bg-gradient-to-br 
//                     from-blue-100 to-orange-100
//                     rounded-xl flex items-center justify-center mb-4
//                     group-hover:from-blue-500 group-hover:to-orange-400
//                     transition-all duration-500">

//       <svg className="w-6 h-6 text-blue-600 
//                       group-hover:text-white 
//                       transition-colors duration-500"
//         fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
         
//       </svg>
//     </div>

//     {/* Text */}
//     <p className="font-semibold text-gray-800 
//                   group-hover:text-blue-700 
//                   transition-colors duration-300">
//       Full-funnel marketing strategy
//     </p>

//   </div>
// </div>




//       {/* 3 */}
//       {/* <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800 text-sm sm:text-base">
//           Conversion-focused creatives
//         </p>
//       </div> */}




// <div className="group relative bg-white p-6 rounded-2xl 
//                 border border-blue-100
//                 shadow-md hover:shadow-xl
//                 transition-all duration-500 
//                 hover:-translate-y-2
//                 overflow-hidden">

//   {/* Gradient Accent Border (Left + Bottom) */}
//   <span className="absolute left-0 top-0 h-full w-1 
//                    bg-gradient-to-b from-blue-500 to-orange-400"></span>
//   <span className="absolute bottom-0 left-0 w-full h-1 
//                    bg-gradient-to-r from-blue-500 to-orange-400"></span>

//   {/* Soft Hover Glow */}
//   <div className="absolute inset-0 bg-gradient-to-br 
//                   from-blue-50 via-transparent to-orange-50 
//                   opacity-0 group-hover:opacity-100 
//                   transition duration-500"></div>

//   <div className="relative z-10">
    
//     {/* Icon */}
//     <div className="w-12 h-12 bg-gradient-to-br 
//                     from-blue-100 to-orange-100
//                     rounded-xl flex items-center justify-center mb-4
//                     group-hover:from-blue-500 group-hover:to-orange-400
//                     transition-all duration-500">

//       <svg className="w-6 h-6 text-blue-600 
//                       group-hover:text-white 
//                       transition-colors duration-500"
//         fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4" />
       
//       </svg>
//     </div>

//     {/* Text */}
//     <p className="font-semibold text-gray-800 
//                   group-hover:text-blue-700 
//                   transition-colors duration-300">
//        Conversion-focused creatives
//     </p>

//   </div>
// </div>









//       {/* 4 */}
//       {/* <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
//         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
//           <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z" />
//           </svg>
//         </div>
//         <p className="font-semibold text-gray-800 text-sm sm:text-base">
//           Advanced analytics & automation
//         </p>
//       </div> */}







// <div className="group relative bg-white p-6 rounded-2xl 
//                 border border-blue-100
//                 shadow-md hover:shadow-xl
//                 transition-all duration-500 
//                 hover:-translate-y-2
//                 overflow-hidden">

//   {/* Gradient Accent Border (Left + Bottom) */}
//   <span className="absolute left-0 top-0 h-full w-1 
//                    bg-gradient-to-b from-blue-500 to-orange-400"></span>
//   <span className="absolute bottom-0 left-0 w-full h-1 
//                    bg-gradient-to-r from-blue-500 to-orange-400"></span>

//   {/* Soft Hover Glow */}
//   <div className="absolute inset-0 bg-gradient-to-br 
//                   from-blue-50 via-transparent to-orange-50 
//                   opacity-0 group-hover:opacity-100 
//                   transition duration-500"></div>

//   <div className="relative z-10">
    
//     {/* Icon */}
//     <div className="w-12 h-12 bg-gradient-to-br 
//                     from-blue-100 to-orange-100
//                     rounded-xl flex items-center justify-center mb-4
//                     group-hover:from-blue-500 group-hover:to-orange-400
//                     transition-all duration-500">

//       <svg className="w-6 h-6 text-blue-600 
//                       group-hover:text-white 
//                       transition-colors duration-500"
//         fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z" />
       
//       </svg>
//     </div>

//     {/* Text */}
//     <p className="font-semibold text-gray-800 
//                   group-hover:text-blue-700 
//                   transition-colors duration-300">
//          Advanced analytics & automation
//     </p>

//   </div>
// </div>





//     </div>
//   </div>

//   {/* Bottom Statement */}
//   <div className="mt-14 sm:mt-20 text-center max-w-3xl mx-auto px-4">
//     <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
//       To create marketing systems that generate consistent growth.
//     </p>
//   </div>
// </motion.section>

//   );
// };

// export default Clients;






























import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const Clients = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const leftContentRef = useRef(null);
  const aboutTextRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const bottomStatementRef = useRef(null);
 
  useEffect(() => {
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
            scrub: 1.5,
          }
        }
      );
 
      // === PREMIUM LEFT CONTENT ANIMATIONS - Staggered entrance ===
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        }
      });
 
      tl.fromTo(aboutTextRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }
      )
      .fromTo(headingRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out"
        },
        "-=0.6"
      )
      .fromTo(paragraph1Ref.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out"
        },
        "-=0.7"
      )
      .fromTo(paragraph2Ref.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out"
        },
        "-=0.5"
      );
 
      // === PREMIUM CARDS POP OUT ONE BY ONE ===
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Pop out animation on scroll
          gsap.fromTo(card,
            {
              y: 120,
              opacity: 0,
              scale: 0.6,
              rotation: index % 2 === 0 ? -8 : 8,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.4,
              delay: index * 0.2,
              ease: "elastic.out(1.2, 0.5)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "restart reverse restart reverse",
              }
            }
          );
 
          // === PREMIUM CONTINUOUS FLOATING ANIMATION (starts after pop) ===
          gsap.to(card, {
            y: -10,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5 + (index * 0.2),
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            }
          });
        }
      });
 
      // === PREMIUM BOTTOM STATEMENT ANIMATION ===
      gsap.fromTo(bottomStatementRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bottomStatementRef.current,
            start: "top bottom-=50",
            end: "bottom center",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  // Premium card hover effect (enhanced)
  const handleCardHover = (e, isEnter) => {
    // Pause floating animation on hover
    if (isEnter) {
      gsap.to(e.currentTarget, {
        scale: 1.08,
        y: -15,
        boxShadow: "0 40px 60px -20px rgba(0, 102, 204, 0.4)",
        duration: 0.4,
        ease: "back.out(1.2)",
        overwrite: true
      });
     
      // Pause the floating animation temporarily
      gsap.to(e.currentTarget, {
        y: -15,
        duration: 0.4,
        overwrite: true
      });
    } else {
      gsap.to(e.currentTarget, {
        scale: 1,
        y: -10, // Back to floating position
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: "power2.out"
      });
     
      // Resume floating animation
      gsap.to(e.currentTarget, {
        y: "-=10",
        yoyo: true,
        repeat: -1,
        duration: 2.5,
        ease: "sine.inOut",
        overwrite: false
      });
    }
   
    // Animate icon
    const icon = e.currentTarget.querySelector(".card-icon");
    if (icon) {
      gsap.to(icon, {
        scale: isEnter ? 1.2 : 1,
        rotate: isEnter ? 8 : 0,
        backgroundColor: isEnter ? "#2563eb" : "transparent",
        duration: 0.4,
        ease: isEnter ? "back.out(1.2)" : "power2.out"
      });
    }
  };
 
  return (
    <motion.section
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Premium decorative background elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-100/30 to-transparent rounded-full blur-3xl -z-10"></div>
 
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
 
        {/* LEFT CONTENT - Text only */}
        <div ref={leftContentRef} className="space-y-4">
          <span
            ref={aboutTextRef}
            className="inline-block text-orange-400 font-bold tracking-widest uppercase text-sm sm:text-2xl"
          >
            About
          </span>
 
          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 sm:mb-8 leading-tight"
          >
            We Don't Just Market. <br />
            <span className="text-blue-600 relative inline-block">
              We Engineer Digital Growth.
              <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            </span>
          </h2>
 
          <p
            ref={paragraph1Ref}
            className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6"
          >
            Adkryoss is built for ambitious brands that want scalable,
            ROI-focused marketing solutions. In today's algorithm-driven
            digital landscape, visibility alone is not enough.
          </p>
 
          <p
            ref={paragraph2Ref}
            className="text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            You need performance, personalization, and precision.
          </p>
        </div>
 
        {/* RIGHT SIDE - CARDS with pop out and continuous floating */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
 
          {/* Card 1 */}
          <div
            ref={el => cardsRef.current[0] = el}
            className="group relative bg-white p-6 rounded-2xl
                      border border-blue-100
                      shadow-md hover:shadow-xl
                      transition-all duration-300
                      cursor-pointer
                      will-change-transform"
            style={{ opacity: 0, transform: 'scale(0.6) translateY(120px) rotate(-8deg)' }}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            {/* Gradient Accent Border */}
            <span className="absolute left-0 top-0 h-full w-1
                           bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1
                           bg-gradient-to-r from-blue-500 to-orange-400"></span>
 
            {/* Soft Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br
                          from-blue-50 via-transparent to-orange-50
                          opacity-0 group-hover:opacity-100
                          transition duration-500 rounded-2xl"></div>
 
            <div className="relative z-10">
              {/* Icon */}
              <div className="card-icon w-12 h-12 bg-gradient-to-br
                            from-blue-100 to-orange-100
                            rounded-xl flex items-center justify-center mb-4
                            group-hover:from-blue-500 group-hover:to-orange-400
                            transition-all duration-500">
                <svg className="w-6 h-6 text-blue-600
                              group-hover:text-white
                              transition-colors duration-500"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 17v-6h6v6M4 7h16M4 12h10M4 17h16" />
                </svg>
              </div>
 
              {/* Text */}
              <p className="font-semibold text-gray-800
                          group-hover:text-blue-700
                          transition-colors duration-300">
                Data Science & AI-driven insights
              </p>
            </div>
          </div>
 
          {/* Card 2 */}
          <div
            ref={el => cardsRef.current[1] = el}
            className="group relative bg-white p-6 rounded-2xl
                      border border-blue-100
                      shadow-md hover:shadow-xl
                      transition-all duration-300
                      cursor-pointer
                      will-change-transform"
            style={{ opacity: 0, transform: 'scale(0.6) translateY(120px) rotate(8deg)' }}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <span className="absolute left-0 top-0 h-full w-1
                           bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1
                           bg-gradient-to-r from-blue-500 to-orange-400"></span>
            <div className="absolute inset-0 bg-gradient-to-br
                          from-blue-50 via-transparent to-orange-50
                          opacity-0 group-hover:opacity-100
                          transition duration-500 rounded-2xl"></div>
 
            <div className="relative z-10">
              <div className="card-icon w-12 h-12 bg-gradient-to-br
                            from-blue-100 to-orange-100
                            rounded-xl flex items-center justify-center mb-4
                            group-hover:from-blue-500 group-hover:to-orange-400
                            transition-all duration-500">
                <svg className="w-6 h-6 text-blue-600
                              group-hover:text-white
                              transition-colors duration-500"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
                </svg>
              </div>
              <p className="font-semibold text-gray-800
                          group-hover:text-blue-700
                          transition-colors duration-300">
                Full-funnel marketing strategy
              </p>
            </div>
          </div>
 
          {/* Card 3 */}
          <div
            ref={el => cardsRef.current[2] = el}
            className="group relative bg-white p-6 rounded-2xl
                      border border-blue-100
                      shadow-md hover:shadow-xl
                      transition-all duration-300
                      cursor-pointer
                      will-change-transform"
            style={{ opacity: 0, transform: 'scale(0.6) translateY(120px) rotate(-8deg)' }}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <span className="absolute left-0 top-0 h-full w-1
                           bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1
                           bg-gradient-to-r from-blue-500 to-orange-400"></span>
            <div className="absolute inset-0 bg-gradient-to-br
                          from-blue-50 via-transparent to-orange-50
                          opacity-0 group-hover:opacity-100
                          transition duration-500 rounded-2xl"></div>
 
            <div className="relative z-10">
              <div className="card-icon w-12 h-12 bg-gradient-to-br
                            from-blue-100 to-orange-100
                            rounded-xl flex items-center justify-center mb-4
                            group-hover:from-blue-500 group-hover:to-orange-400
                            transition-all duration-500">
                <svg className="w-6 h-6 text-blue-600
                              group-hover:text-white
                              transition-colors duration-500"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-4 1-4 4s2 4 4 4 4-1 4-4-2-4-4-4zm0 0V4m0 16v-4" />
                </svg>
              </div>
              <p className="font-semibold text-gray-800
                          group-hover:text-blue-700
                          transition-colors duration-300">
                Conversion-focused creatives
              </p>
            </div>
          </div>
 
          {/* Card 4 */}
          <div
            ref={el => cardsRef.current[3] = el}
            className="group relative bg-white p-6 rounded-2xl
                      border border-blue-100
                      shadow-md hover:shadow-xl
                      transition-all duration-300
                      cursor-pointer
                      will-change-transform"
            style={{ opacity: 0, transform: 'scale(0.6) translateY(120px) rotate(8deg)' }}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <span className="absolute left-0 top-0 h-full w-1
                           bg-gradient-to-b from-blue-500 to-orange-400"></span>
            <span className="absolute bottom-0 left-0 w-full h-1
                           bg-gradient-to-r from-blue-500 to-orange-400"></span>
            <div className="absolute inset-0 bg-gradient-to-br
                          from-blue-50 via-transparent to-orange-50
                          opacity-0 group-hover:opacity-100
                          transition duration-500 rounded-2xl"></div>
 
            <div className="relative z-10">
              <div className="card-icon w-12 h-12 bg-gradient-to-br
                            from-blue-100 to-orange-100
                            rounded-xl flex items-center justify-center mb-4
                            group-hover:from-blue-500 group-hover:to-orange-400
                            transition-all duration-500">
                <svg className="w-6 h-6 text-blue-600
                              group-hover:text-white
                              transition-colors duration-500"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a3 3 0 00-3 3v2.25M14.25 3a3 3 0 013 3v2.25M4.5 12h15M6 21h12a2 2 0 002-2v-5H4v5a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-800
                          group-hover:text-blue-700
                          transition-colors duration-300">
                Advanced analytics & automation
              </p>
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom Statement */}
      <div
        ref={bottomStatementRef}
        className="mt-14 sm:mt-20 text-center max-w-3xl mx-auto px-4"
      >
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 relative inline-block">
          To create marketing systems that generate consistent growth.
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-blue-500 to-orange-400"></span>
        </p>
      </div>
    </motion.section>
  );
};
 
export default Clients;