// import React from "react";

// const HeroSection = () => {
//   return (
//     <>
//       <section
//         style={{
//           position: "relative",
//           // height: "70vh",
//           minHeight: "70vh",
// // padding: "60px 0",
//           display: "flex",
//           alignItems: "center",
//           backgroundImage:
//             "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/banner_desk_bg.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Gradient Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(90deg, rgba(13,59,102,0.95) 0%, rgba(11,95,76,0.85) 100%)",
//           }}
//         ></div>

//         {/* Content Container */}
//         <div
//           className="container"
         
//           style={{
//             position: "relative",
//             zIndex: 2,
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "40px",
//             alignItems: "center",
//           }}
//         >
//           {/* LEFT SIDE */}
//           <div style={{ color: "white" }}>
//             <p
//               style={{
//                 color: "#22c55e",
//                 fontWeight: 600,
//                 fontSize: "18px",
//               }}
//             >
//               We make sure you get found.
//             </p>

//             <h1
//               style={{
//                 fontSize: "36px",
//                 fontWeight: 800,
//                 marginTop: "20px",
//                 lineHeight: "1.2",
//               }}
//             >
//               We Build Digital Growth Systems That Drive Revenue. 
//             </h1>

//             <p
//               style={{
//                 marginTop: "25px",
//                 fontSize: "18px",
//                 maxWidth: "550px",
//                 color: "#e0e0e0",
//               }}
//             >
//               Not just traffic. Not just engagement. 
//               <br />
// We engineer data-driven marketing strategies that turn clicks into customers and brands into market leaders. 
//             </p>

//             <div style={{ marginTop: "35px", display: "flex", gap: "20px" }}>
//               <button
//                 style={{
//                   backgroundColor: "#ff7a00",
//                   color: "white",
//                   padding: "14px 28px",
//                   borderRadius: "40px",
//                   fontWeight: 600,
//                   fontSize: "15px",
//                 }}
//               >
//                 Get a Free Growth Audit →
//               </button>

//               <button
//                 style={{
//                   border: "2px solid white",
//                   color: "white",
//                   padding: "14px 28px",
//                   borderRadius: "40px",
//                   fontWeight: 600,
//                   fontSize: "15px",
//                   background: "transparent",
//                 }}
//               >
//                 Talk to a Growth Strategist →
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE */}
//           <div style={{ textAlign: "right" }}>
//             <img
//               src="https://www.techmagnate.com/wp-content/uploads/2025/10/Home.webp"
//               alt="Hero"
//               style={{
//                 maxWidth: "520px",
//                 width: "100%",
//               }}
//             />
//           </div>
//         </div>
//       </section>

     
//     </>
//   );
// };

// export default HeroSection;




























import React from "react";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative flex items-center min-h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/banner_desk_bg.webp')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,59,102,0.95)_0%,rgba(11,95,76,0.85)_100%)]"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4">

          {/* LEFT SIDE */}
          <div className="text-white">
            

            <h1 className="text-[36px] font-extrabold mt-5 leading-[1.2]">
              We Build Digital Growth Systems That Drive Revenue.
            </h1>

            <p className="mt-[25px] text-[18px] max-w-[550px] text-[#e0e0e0]">
              Not just traffic. Not just engagement.
              <br />
              We engineer data-driven marketing strategies that turn clicks
              into customers and brands into market leaders.
            </p>

            {/* Buttons */}
            <div className="mt-[35px] flex flex-col sm:flex-row gap-5">
              <button className="bg-[#ff7a00] text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px]">
                Get a Free Growth Audit →
              </button>

              <button className="border-2 border-white text-white px-[28px] py-[14px] rounded-[40px] font-semibold text-[15px] bg-transparent">
                Talk to a Growth Strategist →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:flex justify-end">
            <img
              src="https://www.techmagnate.com/wp-content/uploads/2025/10/Home.webp"
              alt="Hero"
              className="max-w-[520px] w-full h-auto"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;























