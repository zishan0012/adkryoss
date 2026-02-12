







// import React from "react";

// const HeroSection = () => {
//   return (
//     <>
//       {/* HERO BACKGROUND */}
//       <section
//         className="h-[75vh] md:h-[80vh] bg-cover bg-center flex items-center"
//         style={{
//           backgroundImage:
//             "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/banner_desk_bg.webp')",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           {/* Left Content */}
//           <div className="text-center md:text-left">
//             <span className="text-green-500 font-semibold text-sm sm:text-base">
//               We make sure you get found.
//             </span>

//             <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
//               Drive Traffic, Leads & Revenue with Expert Digital Marketing Services
//             </h1>

//             <p className="text-white mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
//               To succeed in business, you first need to succeed in search results. Our digital marketing services connect you with your customers’ journey from end to end - from discovery to retention. Join hundreds of marquee brands who have experienced transformational growth with Techmagnate.
//             </p>

//             <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <button className="bg-orange-500 text-black px-5 py-2.5 font-semibold rounded-3xl">
//                 Speak to an SEO Expert
//               </button>

//               <button className="border border-white text-white px-5 py-2.5 font-semibold rounded-3xl">
//                 Our Services
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center mt-6 md:mt-0">
//             <img
//               src="https://www.techmagnate.com/wp-content/uploads/2025/10/Home.webp"
//               alt="Hero"
//               className="max-w-[260px] sm:max-w-[340px] md:max-w-[420px] h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* 🔽 LINK BAR (BELOW BACKGROUND) */}
//       <div className="mt-5 flex justify-center">
//         <div className="bg-blue-200/90 rounded-3xl px-4 sm:px-8 py-4 max-w-7xl w-full mx-4 sm:mx-6">
//           <ul className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between gap-y-3 gap-x-4 text-black text-xs sm:text-sm font-medium text-center md:text-left">
//             <li><a href="#" className="hover:text-blue-400">SEO Services</a></li>
//             <li><a href="#" className="hover:text-blue-400">Digital Marketing</a></li>
//             <li><a href="#" className="hover:text-blue-400">Mobile App Marketing</a></li>
//             <li><a href="#" className="hover:text-blue-400">Content Writing</a></li>
//             <li><a href="#" className="hover:text-blue-400">PPC Services</a></li>
//             <li><a href="#" className="hover:text-blue-400">Martech Consulting</a></li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;













import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* HERO BACKGROUND */}
      <section
        style={{
          height: "80vh",
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/banner_desk_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Left Content */}
          <div style={{ textAlign: "left" }}>
            <span
              style={{
                color: "#22c55e",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              We make sure you get found.
            </span>

            <h1
              style={{
                color: "#ffffff",
                fontSize: "10px",
                fontWeight: "500",
                marginTop: "12px",
                lineHeight: "1.3",
              }}
            >
              Drive Traffic, Leads & Revenue with Expert Digital Marketing Services
            </h1>

            <p
              style={{
                color: "#ffffff",
                marginTop: "20px",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              To succeed in business, you first need to succeed in search
              results. Our digital marketing services connect you with your
              customers’ journey from end to end - from discovery to retention.
              Join hundreds of marquee brands who have experienced
              transformational growth with Techmagnate.
            </p>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                gap: "16px",
              }}
            >
              <button
                style={{
                  backgroundColor: "#f97316",
                  color: "#000",
                  padding: "10px 20px",
                  fontWeight: "600",
                  borderRadius: "24px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Speak to an SEO Expert
              </button>

              <button
                style={{
                  border: "1px solid #ffffff",
                  color: "#ffffff",
                  padding: "10px 20px",
                  fontWeight: "600",
                  borderRadius: "24px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://www.techmagnate.com/wp-content/uploads/2025/10/Home.webp"
              alt="Hero"
              style={{
                maxWidth: "420px",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* LINK BAR */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(191, 219, 254, 0.9)",
            borderRadius: "24px",
            padding: "16px 32px",
            maxWidth: "1280px",
            width: "100%",
            margin: "0 24px",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "14px",
              fontWeight: "500",
              color: "#000",
              textAlign: "center",
            }}
          >
            <li><a href="#" style={{ color: "#000", textDecoration: "none" }}>SEO Services</a></li>
            <li><a href="#" style={{ color: "#000", textDecoration: "none" }}>Digital Marketing</a></li>
            <li><a href="#" style={{ color: "#000", textDecoration: "none" }}>Mobile App Marketing</a></li>
            <li><a href="#" style={{ color: "#000", textDecoration: "none" }}>Content Writing</a></li>
            <li><a href="#" style={{ color: "#000", textDecoration: "none" }}>PPC Services</a></li>
            <li><a href="#" style={{ color: "#000", textDecoration: "none" }}>Martech Consulting</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;