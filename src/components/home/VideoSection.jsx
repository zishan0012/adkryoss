// import React from "react";

// const VideoSection = () => {
//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-5xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <h1 className="text-3xl md:text-4xl font-bold text-black mb-10">
//           Watch Our Video
//         </h1>

//         {/* Video Placeholder */}
//         <div className="w-full h-[350px] md:h-[450px] bg-gray-200 rounded-3xl flex items-center justify-center mb-10">
//           <p className="text-gray-600 text-lg font-medium">
//             Video will be added here
//           </p>
//         </div>

//         {/* Description */}
//         <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl mx-auto mb-8">
//           Techmagnate is India’s premier digital marketing and SEO powerhouse.
//           With over 18 years of proven success, our vision is to fuel
//           transformational growth for 300+ clients by 2030.
//           Ready to unlock your brand’s complete digital potential?
//         </p>

//         {/* Button */}
//         <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
//           Speak to an Expert
//         </button>

//       </div>
//     </section>
//   );
// };

// export default VideoSection;











import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <motion.section
      style={{
        padding: "56px 0",
        backgroundColor: "#ffffff",
      }}

 initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}

    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          Watch Our Video
        </h1>

        {/* Video Placeholder */}
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#e5e7eb",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {/* <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Video will be added here
          </p> */}
           <video
    // src="https://v.ftcdn.net/04/02/00/36/700_F_402003681_HX80EfqAEQqAltZ5o3P1dmlibRlLpgIx_ST.mp4"
    src="https://www.vecteezy.com/video/20941259-digital-marketing-golden-text-with-top-flares-light"
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
          style={{
            color: "#4b5563",
            fontSize: "18px",
            lineHeight: "1.7",
            maxWidth: "1024px",
            margin: "0 auto 32px",
          }}
        >
          Adkryoss is India’s premier digital marketing and SEO powerhouse.
          With over 18 years of proven success, our vision is to fuel
          transformational growth for 300+ clients by 2030.
          Ready to unlock your brand’s complete digital potential?
        </p>

        {/* Button */}
        <button
          style={{
            backgroundColor: "#ea580c",
            color: "#ffffff",
            padding: "12px 32px",
            borderRadius: "999px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Speak to an Expert
        </button>
      </div>
    </motion.section>
  );
};

export default VideoSection;