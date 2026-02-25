// // import React from "react";

// // const VideoSection = () => {
// //   return (
// //     <section className="py-14 bg-white">
// //       <div className="max-w-5xl mx-auto px-6 text-center">

// //         {/* Heading */}
// //         <h1 className="text-3xl md:text-4xl font-bold text-black mb-10">
// //           Watch Our Video
// //         </h1>

// //         {/* Video Placeholder */}
// //         <div className="w-full h-[350px] md:h-[450px] bg-gray-200 rounded-3xl flex items-center justify-center mb-10">
// //           <p className="text-gray-600 text-lg font-medium">
// //             Video will be added here
// //           </p>
// //         </div>

// //         {/* Description */}
// //         <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl mx-auto mb-8">
// //           Techmagnate is India’s premier digital marketing and SEO powerhouse.
// //           With over 18 years of proven success, our vision is to fuel
// //           transformational growth for 300+ clients by 2030.
// //           Ready to unlock your brand’s complete digital potential?
// //         </p>

// //         {/* Button */}
// //         <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
// //           Speak to an Expert
// //         </button>

// //       </div>
// //     </section>
// //   );
// // };

// // export default VideoSection;











// import React from "react";
// import { motion } from "framer-motion";

// const VideoSection = () => {
//   return (
//     <motion.section
//       style={{
//         padding: "56px 0",
//         backgroundColor: "#ffffff",
//       }}

//  initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}

//     >
//       <div
//         style={{
//           maxWidth: "1024px",
//           margin: "0 auto",
//           padding: "0 24px",
//           textAlign: "center",
//         }}
//       >
//         {/* Heading */}
//         <h1
//           style={{
//             fontSize: "36px",
//             fontWeight: "700",
//             color: "#000000",
//             marginBottom: "40px",
//           }}
//         >
//           Watch Our Video
//         </h1>

//         {/* Video Placeholder */}
//         <div
//           style={{
//             width: "100%",
//             height: "400px",
//             backgroundColor: "#e5e7eb",
//             borderRadius: "24px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginBottom: "40px",
//           }}
//         >
//           {/* <p
//             style={{
//               color: "#4b5563",
//               fontSize: "18px",
//               fontWeight: "500",
//             }}
//           >
//             Video will be added here
//           </p> */}
//            <video
//     // src="https://v.ftcdn.net/04/02/00/36/700_F_402003681_HX80EfqAEQqAltZ5o3P1dmlibRlLpgIx_ST.mp4"
//     src="https://www.vecteezy.com/video/20941259-digital-marketing-golden-text-with-top-flares-light"
//     controls
//     autoPlay
//     muted
//     loop
//     style={{
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//       borderRadius: "24px",
//     }}
//   />
//         </div>

//         {/* Description */}
//         <p
//           style={{
//             color: "#4b5563",
//             fontSize: "18px",
//             lineHeight: "1.7",
//             maxWidth: "1024px",
//             margin: "0 auto 32px",
//           }}
//         >
//           Adkryoss is India’s premier digital marketing and SEO powerhouse.
//           With over 18 years of proven success, our vision is to fuel
//           transformational growth for 300+ clients by 2030.
//           Ready to unlock your brand’s complete digital potential?
//         </p>

//         {/* Button */}
//         <button
//           style={{
//             backgroundColor: "#ea580c",
//             color: "#ffffff",
//             padding: "12px 32px",
//             borderRadius: "999px",
//             fontWeight: "600",
//             border: "none",
//             cursor: "pointer",
//             transition: "all 0.3s ease",
//           }}
//         >
//           Speak to an Expert
//         </button>
//       </div>
//     </motion.section>
//   );
// };

// export default VideoSection;



























import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import video from "../../assets/video.mp4"
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const VideoSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
 
      // === PREMIUM SECTION PUSH EFFECT (PARALLAX) ===
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
 
      // === PREMIUM HEADING REVEAL ===
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
 
      // === PREMIUM VIDEO CONTAINER REVEAL ===
      gsap.fromTo(videoContainerRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM VIDEO ITSELF (SLIGHT ZOOM) ===
      gsap.fromTo(videoRef.current,
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM DESCRIPTION REVEAL ===
      gsap.fromTo(descriptionRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
      // === PREMIUM BUTTON REVEAL ===
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "restart reverse restart reverse",
          }
        }
      );
 
    }, sectionRef);
 
    return () => ctx.revert();
  }, []);
 
  // Premium button hover effect (only on hover)
  const handleButtonHover = (e, isEnter) => {
    gsap.to(e.target, {
      scale: isEnter ? 1.05 : 1,
      y: isEnter ? -2 : 0,
      backgroundColor: isEnter ? "#f97316" : "#ea580c",
      boxShadow: isEnter ? "0 15px 25px -8px rgba(234, 88, 12, 0.4)" : "none",
      duration: 0.3,
      ease: isEnter ? "back.out(1.2)" : "power2.out"
    });
  };
 
  return (
    <motion.section
      ref={sectionRef}
      style={{
        padding: "56px 0",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Premium decorative elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(234,88,12,0.03) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(0,102,204,0.03) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
 
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <h1
          ref={headingRef}
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#000000",
            marginBottom: "40px",
            position: "relative",
            display: "inline-block",
          }}
        >
          Watch Our Video
          <span style={{
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "3px",
            background: "linear-gradient(to right, #ea580c, #0066CC)",
            borderRadius: "2px",
          }} />
        </h1>
 
        {/* Video Container */}
        <div
          ref={videoContainerRef}
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "40px",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
          }}
        >
          <video
            ref={videoRef}
            src={video}
            controls
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "24px",
            }}
          />
        </div>
 
        {/* Description */}
        <p
          ref={descriptionRef}
          style={{
            color: "#4b5563",
            fontSize: "18px",
            lineHeight: "1.7",
            maxWidth: "1024px",
            margin: "0 auto 32px",
          }}
        >
          Adkryoss is India's premier digital marketing and SEO powerhouse.
          With over 18 years of proven success, our vision is to fuel
          transformational growth for 300+ clients by 2030.
          Ready to unlock your brand's complete digital potential?
        </p>
 
        {/* Button */}
        <button
          ref={buttonRef}
          style={{
            backgroundColor: "#ea580c",
            color: "#ffffff",
            padding: "12px 32px",
            borderRadius: "999px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
        >
          Speak to an Expert
        </button>
      </div>
    </motion.section>
  );
};
 
export default VideoSection;