// import React from "react";

// const Card = ({ title, desc, image }) => {
//   return (
//     <div className="w-80 md:min-w-[180px] h-100 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0 p-8 flex flex-col">

//       {/* Logo Image */}
//       <div className="mb-6">
//         <img
//           src={image}
//           alt={title}
//           className="h-16 w-auto object-contain"
//         />
//       </div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold mb-3 leading-snug text-black">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="text-gray-600 text-sm leading-relaxed">
//         {desc}
//       </p>

//     </div>
//   );
// };

// export default Card;










import React from "react";

const Card = ({ title, desc, image }) => {
  return (
    <div
      style={{
        width: "320px",
        minWidth: "180px",
        height: "400px",
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      {/* Image */}
      <div style={{ marginBottom: "24px" }}>
        <img
          src={image}
          alt={title}
          style={{
            height: "64px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "12px",
          color: "#000",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "#4b5563",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        {desc}
      </p>
    </div>
  );
};

export default Card;