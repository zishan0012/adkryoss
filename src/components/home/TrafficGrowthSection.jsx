// import React, { useRef, useState, useEffect } from "react";


// import Card from "./Card";
// import cardsData from "../../data/cardsData"; // 👈 importing data separately

// const TrafficGrowthSection = () => {
//   const scrollRef = useRef(null);
//   const [isLeftDisabled, setIsLeftDisabled] = useState(true);
//   const [isRightDisabled, setIsRightDisabled] = useState(false);

//   const checkScroll = () => {
//     const el = scrollRef.current;
//     if (!el) return;

//     setIsLeftDisabled(el.scrollLeft <= 0);
//     setIsRightDisabled(
//       el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
//     );
//   };

//   const scroll = (direction) => {
//     const el = scrollRef.current;
//     const scrollAmount = el.clientWidth * 0.8;

//     el.scrollBy({
//       left: direction === "right" ? scrollAmount : -scrollAmount,
//       behavior: "smooth",
//     });

//     setTimeout(checkScroll, 400);
//   };

//   useEffect(() => {
//     checkScroll();
//   }, []);

//   return (
//     <section className="py-24 bg-gradient-to-r from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-start gap-16">

//           {/* LEFT SIDE */}
//           <div className="lg:w-1/3">
//             <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
//               Achieve a 2x Increase in <br />
//               Avg. Monthly Traffic
//             </h2>

//             <p className="text-gray-600 mb-6">
//               Dedicated Teams for AI, Automation, and Data Analytics
//               to improve campaign performance and drive scalable growth.
//             </p>

//             <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
//               Get Started
//             </button>
//           </div>

//           {/* RIGHT SIDE CARDS */}
//           <div className="lg:w-2/3 relative">

//             <button
//               onClick={() => scroll("left")}
//               disabled={isLeftDisabled}
//               className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
//             >
//               ◀
//             </button>

//             <div
//               ref={scrollRef}
//               onScroll={checkScroll}
//               className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
//             >
//               {cardsData.map((card) => (
//                 <Card
//                   key={card.id}
//                   title={card.title}
//                   desc={card.desc}
//                   image={card.image}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={() => scroll("right")}
//               disabled={isRightDisabled}
//               className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
//             >
//               ▶
//             </button>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrafficGrowthSection;

















import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import cardsData from "../../data/cardsData";

const TrafficGrowthSection = () => {
  const scrollRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

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
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 400);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <section
      style={{
        padding: "96px 0",
        background: "linear-gradient(to right, #eff6ff, #ffffff)",
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
          {/* LEFT SIDE */}
          <div style={{ width: "33%" }}>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "24px",
                lineHeight: "1.2",
              }}
            >
              Our Growth Framework  <br />
              
            </h2>

            <p
              style={{
                color: "#4b5563",
                marginBottom: "24px",
              }}
            >
             We follow a structured, research-driven, and performance-focused process: 
            </p>

            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "12px 32px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ width: "67%", position: "relative" }}>
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={isLeftDisabled}
              style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                border: "none",
                cursor: "pointer",
              }}
            >
              ◀
            </button>

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              style={{
                display: "flex",
                gap: "24px",
                overflowX: "auto",
                scrollBehavior: "smooth",
              }}
            >
              {cardsData.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  desc={card.desc}
                  image={card.image}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={isRightDisabled}
              style={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                border: "none",
                cursor: "pointer",
              }}
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficGrowthSection;