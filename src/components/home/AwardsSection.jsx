import React from "react";

const awardsData = [
  {
    id: 1,
    image: "https://www.techmagnate.com/wp-content/uploads/2025/10/Group-1364.png",
    title: "InkSpell Unlocked 2025",
    desc: "Recognized as India's top-performing SEO agency for delivering measurable growth."
  },
  {
    id: 2,
    image: "https://www.techmagnate.com/wp-content/uploads/2025/10/Group-1365.png",
    title: "Pitch Finovate BFSI Marketing Awards 2025",
    desc: "Awarded for outstanding performance in content-driven digital campaigns."
  },
  {
    id: 3,
    image: "https://www.techmagnate.com/wp-content/uploads/2025/08/MCube-Award.webp",
    title: "MCube Award",
    desc: "Honored for helping brands scale their digital presence effectively."
  },
  {
    id: 4,
    image: "https://www.techmagnate.com/wp-content/uploads/2025/05/Digital.webp",
    title: "Digital Campaign Award",
    desc: "Recognized for innovative and ROI-driven performance marketing strategies."
  }
];

const AwardsSection = () => {
  return (
    <>
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Awards & Accolades for Techmagnate
        </h2>

        {/* Top Paragraph */}
        <p className="text-gray-600 text-center max-w-7xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
          Don’t believe us? Even the Industry thinks we’re the best SEO service in India.
          Over the years we have consistently won awards for our SEO and Content Marketing
          at various industry events! See our full list of awards and accolades here:
        </p>

        {/* Cards Section */}
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto no-scrollbar scroll-smooth">

          {awardsData.map((award) => (
            <div
              key={award.id}
              className="min-w-[320px] md:min-w-0 bg-gray-100 rounded-2xl p-6 flex items-center gap-6 hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 hover:text-orange-600 transition duration-300">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {award.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Paragraph */}
        <p className="text-gray-600 text-center max-w-6xl mx-auto mt-14 mb-8 text-base md:text-lg leading-relaxed">
          Not just SEO Services in India. Techmagnate should be your top choice
          of Digital Marketing Agency if you’re looking for growth in 2025.
        </p>

        {/* Button */}
        <div className="text-center">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
            View All
          </button>
        </div>

      </div>
    </section>

     <section
      className="py-20 bg-no-repeat bg-cover bg-center h-100 w-300 mb-10 ml-40"
      style={{
        backgroundImage:
          "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/report_bg.svg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 my-[-50px]">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center md:text-left">

            <span className="text-blue-600 font-semibold text-sm md:text-left uppercase tracking-wide">
              Digital Report Card
            </span>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-4 leading-snug">
              In 2025, We Delivered an Average Growth of 3X in Traffic and
              113.38% in Leads for Our Clients.
            </h3>

            <button className="mt-3 mr-70 bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition duration-300">
              Download Report
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
            //   src="https://www.techmagnate.com/wp-content/uploads/2025/08/digital-report-card_img.webp"
              src="data:image/png;base64,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"

              alt="Digital Report"
              className="w-full max-w-md md:max-w-lg object-contain hover:scale-105 transition duration-500 "
            />
          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default AwardsSection;