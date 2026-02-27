import React from 'react';
import BestPlaceToWorkImage from "../../assets/BestPlaceToWork.jpeg";
import LearningImage from "../../assets/Learning.png";
import BestPlaceImage from "../../assets/BestPlace.png";
const BestPlaceToWork = () => {
    return (
        <>
        




{/* <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white "
  
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    <div className="text-left text-white max-w-[600px] space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Best Place to Work
      </h2>

      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
        Where Talent Grows. Ideas Scale. Leaders Are Built.
      </h3>

      <p className="text-white leading-relaxed">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t just build high-performing digital brands — we build high-performing people.
        <br /><br />
        We believe a workplace should inspire ambition, reward ownership, and encourage bold thinking.
      </p>
    </div>

    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={BestPlaceToWorkImage}
          alt="Best Place To Work"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section> */}



<section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left max-w-[600px] space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Best Place to Work
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold text-blue-100">
        Where Talent Grows. Ideas Scale. Leaders Are Built.
      </h3>

      <p className="text-gray-200 leading-relaxed">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t just build high-performing digital brands — we build high-performing people.
        <br /><br />
        We believe a workplace should inspire ambition, reward ownership, and encourage bold thinking.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={BestPlaceToWorkImage}
          alt="Best Place To Work"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

      </div>

    </div>

  </div>

  {/* Floating Animation */}
  <style>
    {`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(30px);
        }
      }
    `}
  </style>

</section>



<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        A Culture Built for Modern Marketers
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
        The digital ecosystem evolves every second. So do we.
      </p>
    </div>

    {/* DESCRIPTION */}
    <div className="text-center max-w-4xl mx-auto mb-14">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        At <span className="font-semibold text-blue-700">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>, our work culture is driven by agility, data intelligence, and creative freedom.
        We operate with a growth-first mindset — combining performance marketing,
        technology, analytics, and creative storytelling into measurable results.
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

      {/* CARD 1 */}
      {/* <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
       
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Performance Marketing & Paid Media</h3>
        <p className="text-gray-600 text-sm">
          Scalable campaigns engineered for ROI and measurable growth.
        </p>
      </div> */}


      <div className="group relative rounded-2xl p-[1px] transition-all duration-500 ">

  {/* Animated Border Layer */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                  opacity-0 group-hover:opacity-100 
                  group-hover:animate-[spin_3s_linear_infinite] 
                  transition duration-500"></div>

  {/* Card Content */}
  <div className="relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                  group-hover:shadow-xl transition duration-300 border-blue-700">

    <div className="mb-4">
      {/* Icon */}
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    </div>

    <h3 className="font-semibold text-gray-900 mb-2">
      Performance Marketing & Paid Media
    </h3>

    <p className="text-gray-600 text-sm">
      Scalable campaigns engineered for ROI and measurable growth.
    </p>

  </div>
</div>

      {/* CARD 2 */}
      {/* <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
         
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">SEO & Organic Growth Strategy</h3>
        <p className="text-gray-600 text-sm">
          Sustainable visibility built on data-backed search intelligence.
        </p>
      </div> */}


      <div className="group relative rounded-2xl p-[1px] transition-all duration-500">

  {/* Animated Border Layer */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                  opacity-0 group-hover:opacity-100 
                  group-hover:animate-[spin_3s_linear_infinite] 
                  transition duration-500"></div>

  {/* Card Content */}
  <div className="relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                  group-hover:shadow-xl transition duration-300">

    <div className="mb-4">
      {/* Icon */}
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
      </svg>
    </div>

    <h3 className="font-semibold text-gray-900 mb-2">
   SEO & Organic Growth Strategy
    </h3>

    <p className="text-gray-600 text-sm">
    Sustainable visibility built on data-backed search intelligence.
    </p>

  </div>
</div>

      {/* CARD 3 */}
      {/* <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
         
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 20V10" />
            <path d="M10 20V4" />
            <path d="M16 20v-6" />
            <path d="M22 20V14" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Data Analytics & Consumer Insights</h3>
        <p className="text-gray-600 text-sm">
          Turning raw data into strategic business intelligence.
        </p>
      </div> */}


      <div className="group relative rounded-2xl p-[1px] transition-all duration-500">

  {/* Animated Border Layer */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                  opacity-0 group-hover:opacity-100 
                  group-hover:animate-[spin_3s_linear_infinite] 
                  transition duration-500"></div>

  {/* Card Content */}
  <div className="relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                  group-hover:shadow-xl transition duration-300">

    <div className="mb-4">
      {/* Icon */}
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <path d="M4 20V10" />
            <path d="M10 20V4" />
            <path d="M16 20v-6" />
            <path d="M22 20V14" />
      </svg>
    </div>

    <h3 className="font-semibold text-gray-900 mb-2">
     Data Analytics & Consumer Insights
    </h3>

    <p className="text-gray-600 text-sm">
     Turning raw data into strategic business intelligence.
    </p>

  </div>
</div>

      {/* CARD 4 */}
      {/* <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Creative & Content Innovation</h3>
        <p className="text-gray-600 text-sm">
          Storytelling that connects brands with modern audiences.
        </p>
      </div> */}

      <div className="group relative rounded-2xl p-[1px] transition-all duration-500">

  {/* Animated Border Layer */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                  opacity-0 group-hover:opacity-100 
                  group-hover:animate-[spin_3s_linear_infinite] 
                  transition duration-500"></div>

  {/* Card Content */}
  <div className="relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                  group-hover:shadow-xl transition duration-300">

    <div className="mb-4">
      {/* Icon */}
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" />
      </svg>
    </div>

    <h3 className="font-semibold text-gray-900 mb-2">
     Creative & Content Innovation
    </h3>

    <p className="text-gray-600 text-sm">
       Storytelling that connects brands with modern audiences.
    </p>

  </div>
</div>

      {/* CARD 5 */}
      {/* <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
         
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Marketing Automation & AI Tools</h3>
        <p className="text-gray-600 text-sm">
          Smart systems that optimize journeys and scale efficiency.
        </p>
      </div> */}


      <div className="group relative rounded-2xl p-[1px] transition-all duration-500">

  {/* Animated Border Layer */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                  opacity-0 group-hover:opacity-100 
                  group-hover:animate-[spin_3s_linear_infinite] 
                  transition duration-500"></div>

  {/* Card Content */}
  <div className="relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                  group-hover:shadow-xl transition duration-300">

    <div className="mb-4">
      {/* Icon */}
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
      </svg>
    </div>

    <h3 className="font-semibold text-gray-900 mb-2">
    Marketing Automation & AI Tools
    </h3>

    <p className="text-gray-600 text-sm">
     Smart systems that optimize journeys and scale efficiency.
    </p>

  </div>
</div>

      {/* CARD 6 */}
      {/* <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 20V10" />
            <path d="M18 16l-6-6-6 6" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Conversion Rate Optimization</h3>
        <p className="text-gray-600 text-sm">
          Engineering seamless user journeys that drive higher conversions.
        </p>
      </div> */}

      <div className="group relative rounded-2xl p-[1px] transition-all duration-500">

  {/* Animated Border Layer */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                  opacity-0 group-hover:opacity-100 
                  group-hover:animate-[spin_3s_linear_infinite] 
                  transition duration-500"></div>

  {/* Card Content */}
  <div className="relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                  group-hover:shadow-xl transition duration-300">

    <div className="mb-4">
      {/* Icon */}
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20V10" />
            <path d="M18 16l-6-6-6 6" />
      </svg>
    </div>

    <h3 className="font-semibold text-gray-900 mb-2">
    Conversion Rate Optimization
    </h3>

    <p className="text-gray-600 text-sm">
     Engineering seamless user journeys that drive higher conversions.
    </p>

  </div>
</div>

    </div>

    {/* CULTURE STATEMENT */}
    <div className="text-center mt-14">
      <p className="text-blue-700 font-semibold text-lg">
        We don’t believe in rigid hierarchies. We believe in ownership, accountability, and experimentation.
      </p>
    </div>

  </div>
</section>



<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        A Culture Built for Modern Marketers
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
        The digital ecosystem evolves every second. So do we.
      </p>
    </div>

    {/* DESCRIPTION */}
    <div className="text-center max-w-4xl mx-auto mb-14">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        At <span className="font-semibold text-blue-700">
          Adkryoss managed by Clink Consultancy Services Private Limited
        </span>, our work culture is driven by agility, data intelligence, and creative freedom.
        We operate with a growth-first mindset — combining performance marketing,
        technology, analytics, and creative storytelling into measurable results.
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

      {/* CARD 1 - Gray */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Performance Marketing & Paid Media</h3>
        <p className="text-gray-600 text-sm">
          Scalable campaigns engineered for ROI and measurable growth.
        </p>
      </div>

      {/* CARD 2 - Light Blue */}
      <div className="bg-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">SEO & Organic Growth Strategy</h3>
        <p className="text-gray-600 text-sm">
          Sustainable visibility built on data-backed search intelligence.
        </p>
      </div>

      {/* CARD 3 - Gray */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 20V10" />
            <path d="M10 20V4" />
            <path d="M16 20v-6" />
            <path d="M22 20V14" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Data Analytics & Consumer Insights</h3>
        <p className="text-gray-600 text-sm">
          Turning raw data into strategic business intelligence.
        </p>
      </div>

      {/* CARD 4 - Light Blue */}
      <div className="bg-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Creative & Content Innovation</h3>
        <p className="text-gray-600 text-sm">
          Storytelling that connects brands with modern audiences.
        </p>
      </div>

      {/* CARD 5 - Gray */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Marketing Automation & AI Tools</h3>
        <p className="text-gray-600 text-sm">
          Smart systems that optimize journeys and scale efficiency.
        </p>
      </div>

      {/* CARD 6 - Light Blue */}
      <div className="bg-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 20V10" />
            <path d="M18 16l-6-6-6 6" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Conversion Rate Optimization</h3>
        <p className="text-gray-600 text-sm">
          Engineering seamless user journeys that drive higher conversions.
        </p>
      </div>

    </div>

    {/* CULTURE STATEMENT */}
    <div className="text-center mt-14">
      <p className="text-blue-700 font-semibold text-lg">
        We don’t believe in rigid hierarchies. We believe in ownership, accountability, and experimentation.
      </p>
    </div>

  </div>
</section>



<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Adkryoss Is a Great Place to Work
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
        A performance-driven culture built for ambitious marketers and innovators.
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border-l-4 border-b-4 border-blue-600 hover:bg-orange-200">
        <div className="flex items-center gap-4 mb-4 ">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2v20M5 12h14" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">
            Growth Without Limits
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          We create structured learning paths for every team member. From certification
          sponsorships to hands-on leadership exposure, we empower our people
          to stay ahead of digital trends.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border-l-4 border-b-4 border-blue-600 hover:bg-orange-200">
        <div className="flex items-center gap-4 mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3z" />
            <path d="M7 13l3 3 7-7" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">
            Performance-Driven Environment
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Our work is backed by measurable KPIs, real-time dashboards, and
          transparent performance metrics. Clear goals. Clear outcomes.
          Clear recognition.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border-l-4 border-b-4 border-blue-600 hover:bg-orange-200">
        <div className="flex items-center gap-4 mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">
            Innovation-Led Execution
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          We encourage experimentation. Testing new platforms, AI-driven marketing
          tools, automation frameworks, and advanced analytics is part of our DNA.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border-l-4 border-b-4 border-blue-600 hover:bg-orange-200">
        <div className="flex items-center gap-4 mb-4">
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17 20h5V4H2v16h5" />
            <path d="M9 12h6" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">
            Open & Collaborative Culture
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          We promote cross-functional collaboration between SEO strategists,
          media planners, creative designers, developers, and analysts —
          ensuring holistic campaign success.
        </p>
      </div>

     <div className="md:col-span-2 flex justify-center ">
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 w-full md:w-[48%] border-l-4 border-b-4 border-blue-600 hover:bg-orange-200">
      <div className="flex items-center gap-4 mb-4">
        <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900">
          Recognition & Rewards
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        High performers are celebrated. Leadership opportunities are earned.
        Success is shared.
      </p>
    </div>
  </div>

    </div>

  </div>
</section>



<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Our Work Philosophy
      </h2>
      <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we follow a strategic working framework:
      </p>
    </div>

    {/* FRAMEWORK FLOW */}
    <div className="flex flex-wrap justify-center items-center gap-4 text-center mb-14">
      {[
        "Think Deep",
        "Plan Smart",
        "Execute Fast",
        "Measure Everything",
        "Optimize Continuously"
      ].map((step, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm sm:text-base font-semibold">
            {step}
          </div>
          {index !== 4 && (
            <span className="hidden sm:inline text-gray-400 text-xl">→</span>
          )}
        </div>
      ))}
    </div>

    {/* POINTS + IMAGE */}
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE POINTS */}
      <div>
        <ul className="space-y-5 text-gray-700 text-base sm:text-lg ">

          {[
            "Agile marketing sprints",
            "Data-backed decision making",
            "AI-powered optimization models",
            "Continuous testing frameworks",
            "Customer-centric campaign strategies"
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-3 mb-5">
              <svg
                className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{point}</span>
            </li>
          ))}

        </ul>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src={BestPlaceImage}
            alt="Work Philosophy"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>

    </div>

    {/* CLOSING PARAGRAPH */}
    <div className="text-center mt-14 max-w-4xl mx-auto">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Our team adapts quickly to algorithm updates, evolving ad platforms, consumer behavior shifts, and new-age marketing technologies.
      </p>
    </div>

  </div>
</section>


<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Learning & Development Ecosystem
      </h2>
      <p className="text-gray-700 text-base sm:text-lg">
        Digital marketing doesn’t stand still — and neither do we.
      </p>
    </div>

    {/* CONTENT GRID */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE CONTENT */}
      <div>
        <p className="text-gray-800 font-medium mb-6 text-base sm:text-lg">
          Our team members gain exposure to:
        </p>

        <ul className="space-y-5 text-gray-700 text-base sm:text-lg">

          {[
            "Advanced SEO frameworks",
            "Performance media optimization",
            "Conversion science",
            "Brand storytelling psychology",
            "Marketing automation systems",
            "E-commerce growth strategies",
            "B2B and D2C marketing funnels"
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{point}</span>
            </li>
          ))}

        </ul>

        <p className="mt-8 text-gray-800 text-base sm:text-lg font-medium">
          We believe skill development is not optional — it’s strategic.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src={LearningImage}
            alt="Learning & Development"
          className="rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>

    </div>

  </div>
</section>


<section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Employee-Centric Benefits
      </h2>
      <p className="text-gray-700 text-base sm:text-lg">
        We focus on sustainable performance, not burnout culture.
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
    <div className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                hover:shadow-lg transition duration-300 
                border-l-4 border-transparent">

  {/* Gradient Left Border */}
  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl 
                  bg-gradient-to-b from-blue-600 to-orange-400"></div>

  <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 12h18M12 3v18" />
  </svg>

  <p className="text-gray-800 text-base font-medium relative z-10">
    Flexible work structure
  </p>
</div>

      {/* Card 2 */}
    
      <div className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                hover:shadow-lg transition duration-300 
                border-l-4 border-transparent">

  {/* Gradient Left Border */}
  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl 
                  bg-gradient-to-b from-blue-600 to-orange-400"></div>

  <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 20h5V4H2v16h5" />
          <path d="M12 4v16" />
  </svg>

  <p className="text-gray-800 text-base font-medium relative z-10">
    Hybrid collaboration model
  </p>
</div>

      {/* Card 3 */}
     


      <div className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                hover:shadow-lg transition duration-300 
                border-l-4 border-transparent">

  {/* Gradient Left Border */}
  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl 
                  bg-gradient-to-b from-blue-600 to-orange-400"></div>

  <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
   <path d="M12 2l4 7H8l4-7zM2 22h20" />
  </svg>

  <p className="text-gray-800 text-base font-medium relative z-10">
   Leadership mentoring
  </p>
</div>

      {/* Card 4 */}
      


      <div className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                hover:shadow-lg transition duration-300 
                border-l-4 border-transparent">

  {/* Gradient Left Border */}
  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl 
                  bg-gradient-to-b from-blue-600 to-orange-400"></div>

  <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" />
          <path d="M6 22v-2a6 6 0 0112 0v2" />
  </svg>

  <p className="text-gray-800 text-base font-medium relative z-10">
   Performance incentives
  </p>
</div>

      {/* Card 5 */}
     



      <div className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                hover:shadow-lg transition duration-300 
                border-l-4 border-transparent">

  {/* Gradient Left Border */}
  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl 
                  bg-gradient-to-b from-blue-600 to-orange-400"></div>

  <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 20h9" />
          <path d="M12 4h9" />
          <path d="M4 9h16" />
          <path d="M4 15h16" />
  </svg>

  <p className="text-gray-800 text-base font-medium relative z-10">
      Skill enhancement programs
  </p>
</div>

      {/* Card 6 */}
    


      <div className="group relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                hover:shadow-lg transition duration-300 
                border-l-4 border-transparent">

  {/* Gradient Left Border */}
  <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl 
                  bg-gradient-to-b from-blue-600 to-orange-400"></div>

  <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12l5 5L20 7" />
  </svg>

  <p className="text-gray-800 text-base font-medium relative z-10">
Career acceleration roadmap
  </p>
</div>

    <div className="sm:col-span-2 lg:col-span-1 lg:col-start-2">
  <div className="relative bg-gray-50 p-6 rounded-2xl shadow-sm 
                  hover:shadow-lg transition duration-300">

    {/* Gradient Left Border */}
    <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl 
                    bg-gradient-to-b from-blue-600 to-orange-400"></div>

    <svg className="w-10 h-10 text-blue-700 mb-4 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
    </svg>

    <p className="text-gray-800 text-base font-medium relative z-10">
      Transparent appraisal system
    </p>

  </div>
</div>

    </div>

    {/* CLOSING PARAGRAPH */}
    <div className="text-center mt-14 max-w-4xl mx-auto">
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
        At Adkryoss managed by Clink Consultancy Services Private Limited, we prioritize both professional growth and personal well-being.
      </p>
    </div>

  </div>
</section>



<section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Who Thrives Here?
      </h2>
      <p className="text-gray-700 text-base sm:text-lg">
        You’ll fit right in if you:
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" />
        </svg>
        <p className="text-gray-800 font-medium">
          Think analytically and creatively
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
        </svg>
        <p className="text-gray-800 font-medium">
          Love data as much as design
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 12h18M12 3v18" />
        </svg>
        <p className="text-gray-800 font-medium">
          Adapt fast in a dynamic ecosystem
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l4 7H8l4-7zM2 22h20" />
        </svg>
        <p className="text-gray-800 font-medium">
          Take ownership beyond your role
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </svg>
        <p className="text-gray-800 font-medium">
          Want to build scalable digital brands
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 22v-2a6 6 0 0112 0v2" />
        </svg>
        <p className="text-gray-800 font-medium">
          Aspire to become a digital leader
        </p>
      </div>

    </div>

    {/* CLOSING STATEMENT */}
    <div className="text-center mt-16">
      <p className="text-gray-900 text-lg sm:text-xl font-semibold">
        We hire problem-solvers. We grow strategists. We build leaders.
      </p>
    </div>

  </div>
</section>




<section className="bg-gray-200 py-20 px-4 sm:px-6">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
      Join a Future-Ready Digital Team
    </h2>

    <p className="text-black text-base sm:text-lg leading-relaxed mb-6">
      The future of marketing is intelligent, automated, performance-led, and consumer-centric.
    </p>

    <p className="text-black text-base sm:text-lg leading-relaxed mb-10">
      At Adkryoss managed by Clink Consultancy Services Private Limited, we are shaping that future every day — with people who are ambitious, curious, and ready to build impact.
    </p>

    <div className="space-y-3 mb-8">
      <p className="text-black text-lg sm:text-xl font-medium">
        If you are looking for more than just a job —
      </p>
      <p className="text-black text-lg sm:text-xl font-medium">
        If you are looking for a platform to grow, innovate, and lead —
      </p>
    </div>

    <p className="text-black text-xl sm:text-2xl font-semibold">
      This is where your journey begins.
    </p>

  </div>
</section>



<section className="bg-blue-700 py-20 px-4 sm:px-6">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
      Ready to Build Your Career in Digital?
    </h2>

    <div className="space-y-4 text-white text-2xl sm:text-lg mb-10">
      <p className='text-white'>Explore opportunities.</p>
      <p className='text-white'>Collaborate with industry experts.</p>
      <p className='text-white'>Work on national and global brands.</p>
    </div>

    <p className="text-white text-lg sm:text-xl font-medium">
      Be part of a workplace where performance meets purpose.
    </p>

  </div>
</section>
        
        </>
    );
};

export default BestPlaceToWork;