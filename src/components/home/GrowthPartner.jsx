import React from "react";

// Array of cards with text and related SVG
const cards = [
  {
    title: "Dedicated account strategist",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.84 5.422 12.083 12.083 0 01-.84 5.422L12 14z" />
      </svg>
    ),
  },
  {
    title: "Weekly performance insights",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3h2v12h-2zM4 9h2v6H4zM18 7h2v8h-2z" />
      </svg>
    ),
  },
  {
    title: "Real-time reporting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l3 10h8l3-10h2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4h-2v6h2V4z" />
      </svg>
    ),
  },
  {
    title: "Strategic consultations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-8 4h6" />
      </svg>
    ),
  },
  {
    title: "Transparent communication",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.928 9.928 0 01-5.032-1.406L3 20l1.406-3.032A9.928 9.928 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Your success defines our growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-500 mb-4 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const GrowthPartner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-black mb-4">
          Your Growth Partner — Not Just an Agency
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-lg mb-12">
          At Adkryoss, we believe in partnerships, not projects. You get:
        </p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-[#f9fafb]"
            >
              {card.icon}
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPartner;