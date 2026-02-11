import React, { useState } from "react";

const testimonials = [
  {
    text: "We really liked the way Techmagnate planned in implementing SEO strategies. Keep up the good...",
    name: "Kshitij",
    role: "DM Manager - Launch My Career",
    logo: "https://www.techmagnate.com/wp-content/uploads/2021/10/bajaj.jpg",
  },
  {
    text: "Techmagnate has delivered on its promise of significant growth. Recently, we reached an impressive milestone...",
    name: "Rohit Singh Chouhan",
    role: "Senior Unit Manager - Bajaj: Online Payment (BBPS)",
    logo: "https://www.techmagnate.com/wp-content/uploads/2023/05/bajajhealthdoctorrx.jpg",
  },
  {
    text: "I wanted to thank Techmagnate for their exceptional support and quality strategies for our DoctorRx...",
    name: "Sahana K",
    role: "Manager (Marketing), Bajaj Health",
    logo: "https://www.techmagnate.com/wp-content/uploads/2023/03/unnamed.jpg",
  },
  {
    text: "I want to extend my heartfelt appreciation for your exceptional support in helping us achieve...",
    name: "Nishant Karn",
    role: "GM Revenue and Growth, Apollo Hospitals",
    logo: "https://www.techmagnate.com/wp-content/uploads/2022/07/gsf-2.jpg",
  },
  {
    text: "We have been working with Techmagnate for 2 years and plan to continue working with...",
    name: "Nitin Gusain",
    role: "Manager, SEO & Web Assets, GSF (Global Schools Foundation)",
    logo: "https://www.techmagnate.com/wp-content/uploads/2022/07/launchmycareer-2.jpg",
  },
];

const ClientTestimonials = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-70 items-center">

        {/* LEFT SIDE WIDER CARD */}
        <div
          className="relative rounded-3xl p-12 flex flex-col justify-between h-[400px] w-[900px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/client_bg.webp')",
          }}
        >
          {/* Top Content */}
          <div>

            {/* Fixed Heading */}
            <h2 className="text-3xl font-bold text-white mb-10">
              Client Testimonials
            </h2>

            {/* Logo + Content Layout */}
            <div className="flex flex-col md:flex-row gap-8 items-start">

              {/* LEFT: Logo */}
              <div className="flex-shrink-0">
                <img
                  src={current.logo}
                  alt="Client Logo"
                  className="w-28 h-28 object-contain rounded-xl bg-white p-3"
                />
              </div>

              {/* RIGHT: Details */}
              <div className="flex-1">

                {/* Testimonial Text */}
                <p className="text-white leading-relaxed mb-4 text-lg">
                  {current.text}
                </p>

                {/* Read More */}
                <button className="text-white underline mb-6 hover:opacity-80">
                  Read More
                </button>

                {/* Name */}
                <h4 className="font-semibold text-white text-lg">
                  {current.name}
                </h4>

                {/* Role */}
                <p className="text-sm text-white/80 mt-1">
                  {current.role}
                </p>

              </div>
            </div>
          </div>

          {/* Bottom View All Button */}
          <div className="text-center mt-[-0px]">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
              View All
            </button>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
          >
            ◀
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
          >
            ▶
          </button>

        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* <div className="flex justify-center">
          <img
            src="data:image/png;base64,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"
            alt="Client"
            className="max-w-lg w-full object-contain mr-[-150px]"
          />
        </div> */}


{/* RIGHT SIDE IMAGE + TEXT */}
<div className="flex flex-col items-center text-center ">
  
  <img
    src="data:image/png;base64,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"
    alt="Client"
    className="max-w-lg w-full object-contain mr-[-150px]"
  />

  {/* Bottom Text */}
  <p className="mt-6 ml-30 text-gray-800 text-[24px] font-bold max-w-2xl">
    More impressive results on our Digital Report Card.
  </p>

  {/* Button */}
  <button className="mt-5 ml-25 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
    Download Reports
  </button>

</div>


      </div>
    </section>
  );
};

export default ClientTestimonials;