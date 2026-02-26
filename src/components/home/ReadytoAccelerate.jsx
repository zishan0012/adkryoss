// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import ReadyToAccelerateImage from "../../assets/ReadyToaccelerate.jpeg";
// const ClientTestimonials = () => {
//   const navigate = useNavigate();
//   return (
//     <motion.section
//       className="py-14 bg-white bg-cover mb-5"
//       style={{
//         backgroundImage:
//           "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/client_bg.webp')",
//       }}

      
//  initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT SIDE CTA */}
//         <div className="flex flex-col items-start md:items-start justify-center space-y-6 px-6">
//           <h2 className="text-4xl font-bold text-gray-800">
//             Ready to Accelerate Your Digital Growth?
//           </h2>
//           <p className="text-lg text-white">
//             Let’s build a scalable digital strategy that drives traffic, leads, and revenue.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             <button 
//             onClick={()=>navigate("/contact")}
//             className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
//               👉 Book Your Free Consultation
//             </button>
//             <button 
//             onClick={()=>navigate("/request-quote")}
            
//             className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
//               👉 Request Custom Proposal
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <div className="flex items-center justify-center">
//           <img
//             src= {ReadyToAccelerateImage}
//               alt="Client"
//             className="rounded-4xl shadow-lg max-w-full h-100"
//           />
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default ClientTestimonials;
































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
 
      // === SECTION PUSH EFFECT (PARALLAX) ===
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
 
      // === HEADING PREMIUM ANIMATION ===
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
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
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === BUTTONS STAGGER ANIMATION ===
      gsap.fromTo(buttonsRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: buttonContainerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === IMAGE PREMIUM REVEAL ===
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          x: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  // Simple hover effect for buttons (no floating)
  const handleButtonHover = (e, isEnter) => {
    gsap.to(e.target, {
      scale: isEnter ? 1.05 : 1,
      backgroundColor: isEnter ? "#f97316" : "#ea580c",
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
            className="text-4xl font-bold text-white drop-shadow-lg"
          >
            Ready to Accelerate Your Digital Growth?
          </h2>
 
          <p
            ref={paragraphRef}
            className="text-lg text-gray-200 drop-shadow"
          >
            Let's build a scalable digital strategy that drives traffic, leads, and revenue.
          </p>
 
          {/* CTA Buttons */}
          <div
            ref={buttonContainerRef}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button
              ref={el => buttonsRef.current[0] = el}
              onClick={() => navigate("/contact")}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              👉 Book Your Free Consultation
            </button>
 
            <button
              ref={el => buttonsRef.current[1] = el}
              onClick={() => navigate("/request-quote")}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg"
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  scale: 1.05,
                  backgroundColor: "#d1d5db",
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  scale: 1,
                  backgroundColor: "#e5e7eb",
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
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
 
        {/* RIGHT SIDE IMAGE - Made smaller with same dimensions */}
        <div className="flex items-center justify-center">
          <img
            ref={imageRef}
            src={ReadyToAccelerateImage}
            alt="Client"
            className="rounded-4xl shadow-2xl max-w-full h-auto w-96" // Added w-96 to make it smaller (384px)
          />
        </div>
 
      </div>
    </section>
  );
};
 
export default ClientTestimonials;