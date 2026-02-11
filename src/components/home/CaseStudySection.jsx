import React, { useRef } from "react";
import { Link } from "react-router-dom";

const CaseStudySection = () => {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-[#f4f7fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Driving Actual Business Growth for Our Clients
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Read our case studies to see how we’ve created true value and delivered
            transformational growth for our clients.
          </p>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar"
        >
          {/* CASE STUDY 1 */}
          <div className="min-w-full grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>

              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/07/bajaj-finserv-logo.webp"
                alt="Bajaj"
                className="w-40 mb-6"
              />

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Bajaj Finserv Gold Loans SEO Case Study:
                <br />
                400 Cr.+ disbursals of gold loans
              </h3>

              <p className="text-gray-600 mt-5 leading-relaxed">
                When Bajaj Finserv approached Techmagnate for their Gold Loans LoB,
                the NBFC was entering a saturated market. Their objective was to
                increase organic traffic and leads for their new offering.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/case-study-details">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                    View Case Study →
                  </button>
                </Link>

                <Link to="/our-work">
                  <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-full font-semibold transition">
                    View Our Work →
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/07/Bajaj-Finserv.webp"
                alt="Growth Report"
                className="w-full max-w-md object-contain"
              />
            </div>

          </div>



            {/* CASE STUDY 2 */}
          <div className="min-w-full grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>

              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/06/image-1521.webp"
                alt="Bajaj"
                className="w-40 mb-6"
              />

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Transformational Growth for an Online Pharmacy Retailer: 
                <br />
              6x Increase in Monthly Traffic 
              </h3>

              <p className="text-gray-600 mt-5 leading-relaxed">
                A leading online pharmacy in India, sought to enhance its digital presence and drive organic growth for its website. Focusing on affordable healthcare and medication through generic medicines for its customers, our client aimed to reach a wider audience and establish themselves as a trusted source for online medicine purchases.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/case-study-details">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                    View Case Study →
                  </button>
                </Link>

                <Link to="/our-work">
                  <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-full font-semibold transition">
                    View Our Work →
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/07/Bajaj-Finserv.webp"
                alt="Growth Report"
                className="w-full max-w-md object-contain"
              />
            </div>

          </div>



  {/* CASE STUDY 3 */}
          <div className="min-w-full grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div>

              <img
                src="<img src="https://www.techmagnate.com/wp-content/uploads/2025/06/image-1520.webp"
                alt="Bajaj"
                className="w-40 mb-6"
              />

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Bajaj Broking SEO Case Study: 
                <br />
             502% Growth in Traffic & SERP Rankings
              </h3>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Bajaj Broking, a subsidiary of Bajaj Finance Ltd., is a stockbroking and financial services company, offering a wide range of trading and investment services.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/case-study-details">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                    View Case Study →
                  </button>
                </Link>

                <Link to="/our-work">
                  <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-full font-semibold transition">
                    View Our Work →
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/07/Bajaj-Finserv.webp"
                alt="Growth Report"
                className="w-full max-w-md object-contain"
              />
            </div>

          </div>

          
        </div>

        {/* Small Capsule Scroll Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={scrollNext}
            className="px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 transition"
          >
            View Other Case Study →
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;