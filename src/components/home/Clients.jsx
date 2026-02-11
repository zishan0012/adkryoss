// import React from "react";

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
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <p className="text-center text-sky-400 font-semibold tracking-wide">
//           CLIENTS
//         </p>

//         {/* <h3 className="text-center text-black text-2xl md:text-3xl font-bold mt-3"> */}
//             <h3 className="text-center text-black text-3xl sm:text-4xl md:text-4xl font-bold mt-3 leading-tight">
//           Working with the Largest Enterprises <br className="hidden sm:block" />
//           To Achieve Business Goals
//         </h3>

//         {/* Logos Grid */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
//           {[0, 1, 2].map((col) => (
//             <div
//               key={col}
//               className="grid grid-cols-2 gap-6  gap-x-4 gap-y-1 items-center justify-items-center"
//             >
//               {logos.slice(col * 4, col * 4 + 4).map((logo, index) => (
//                 <img
//                   key={index}
//                   src={logo}
//                   alt="Client logo"
//                 //   className="h-17 md:h-14 object-contain  hover:grayscale-0 transition"
//                   className="w-24 md:w-36 lg:w-40 object-contain cursor-pointer"
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Clients;
























import React from "react";

const Clients = () => {
  const logos = [
    // Column 1
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-463.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/08/Indira-ivf.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-457.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-464.webp",

    // Column 2
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-459.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-456.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-460.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/06/Group-478.webp",

    // Column 3
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-461.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-462.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/08/BLK-MAX-1.webp",
    "https://www.techmagnate.com/wp-content/uploads/2025/05/Group-464-1.webp",
  ];

  return (
    <section
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Heading */}
        <p
          style={{
            textAlign: "center",
            color: "#38bdf8",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          CLIENTS
        </p>

        <h3
          style={{
            textAlign: "center",
            color: "#000000",
            fontSize: "36px",
            fontWeight: "700",
            marginTop: "12px",
            lineHeight: "1.2",
          }}
        >
          Working with the Largest Enterprises <br />
          To Achieve Business Goals
        </h3>

        {/* Logos Grid */}
        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          {[0, 1, 2].map((col) => (
            <div
              key={col}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "6px 16px",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {logos.slice(col * 4, col * 4 + 4).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Client logo"
                  style={{
                    width: "160px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;