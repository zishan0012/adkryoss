import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EcommerceD2Image from "../assets/EcommerceD2.png"
import Education1Image from "../assets/education1.png"
import healthImage from "../assets/health.jpeg"
import RealEstateImage from "../assets/RealEstate.jpeg"
import ITSaaSImage from "../assets/ITSaaS.png"
import ProfessionalServicesImage from "../assets/ProfessionalServices.png"
import StartupsEntrepreneursImage from "../assets/StartupsEntrepreneurs.png"
import { motion } from "framer-motion";
// import EcommerceD2Image from "../assets/EcommerceD2.png"
// import EcommerceD2Image from "../assets/EcommerceD2.png"
// import EcommerceD2Image from "../assets/EcommerceD2.png"

const reportsData = [
  {
    id: 1,
    image: EcommerceD2Image,
     title: "E-Commerce & D2C Brands ",
    desc: "Explore emerging healthcare keywords, search volumes, and digital growth opportunities.",
  },
  {
    id: 2,
    image: Education1Image,
      title: "Education & EdTech",
    desc: "Insights into online learning searches, popular courses, and enrollment patterns.",
  },
  {
    id: 3,
    image: healthImage,
    title: "Healthcare & Wellness ",
    desc: "Top ranking financial keywords and digital transaction behaviour insights.",
  },
  {
    id: 4,
    image: RealEstateImage,
    title: "Real Estate ",
    desc: "Understand product demand trends and seasonal search fluctuations.",
  },
  {
    id: 5,
    image: ITSaaSImage,
    title: "IT & SaaS",
    desc: "Buyer search intent, property keywords and growth opportunities.",
  },
  {
    id: 6,
    image: ProfessionalServicesImage,
    title: "Professional Services ",
    desc: "Buyer search intent, property keywords and growth opportunities.",
  },
  {
    id: 7,
    image: StartupsEntrepreneursImage,
    title: "Startups & Entrepreneurs",
    desc: "Buyer search intent, property keywords and growth opportunities.",
  },
];

const SearchTrendsReports = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section className="py-16 bg-gray-50"
    
 initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    
    >
      {/* Heading */}
      <div className="text-center max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
       Industry-Focused Digital Marketing Expertise 
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We have experience working across:
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative mt-14 px-6">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {reportsData.map((report) => (
            <div
              key={report.id}
              className="min-w-[350px] max-w-[350px] bg-white shadow-lg rounded-xl p-6 flex-shrink-0"
            >
              <img
                src={report.image}
                alt={report.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold mb-3 text-left">
                {report.title}
              </h3>

              {/* <p className="text-gray-600 text-sm mb-6 text-left">
                {report.desc}
              </p> */}

              {/* <button className="bg-white hover:bg-sky-600 hover:text-white text-sky-400 border  px-5 py-2 rounded-2xl text-sm font-medium">
                Download PDF
              </button> */}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* View All Button */}
      
    </motion.section>
  );
};

export default SearchTrendsReports;