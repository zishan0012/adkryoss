// import React from "react";
// // import contact1 from "../assets/contactus.png";

// const Contact = () => {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* ===== TOP SECTION ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
//           {/* LEFT ILLUSTRATION */}
//           <div className="flex justify-center lg:justify-start">
//             <img
//               // src={contact1}
//               alt="Contact Illustration"
//               className="w-[420px] md:w-[520px] lg:w-[580px] object-contain"
//             />
//           </div>

//           {/* RIGHT HEADING CONTENT */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               <span className="text-blue-700">Let’s Build</span>{" "}
//               <span className="text-gray-900">What Your Brand</span>{" "}
//               <span className="text-orange-500">Deserves</span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-600 max-w-xl mt-6">
//               Ready to scale your digital presence with a{" "}
//               <span className="font-semibold text-gray-900">
//                 performance-driven strategy
//               </span>{" "}
//               powered by AI, analytics, and measurable growth?
//             </p>

//             <p className="text-gray-600 leading-relaxed mt-4">
//               Whether you’re a startup building visibility or an enterprise
//               focused on performance, we craft{" "}
//               <span className="text-blue-700 font-medium">
//                 scalable growth systems
//               </span>{" "}
//               that move real business metrics — not just impressions.
//             </p>
//           </div>
//         </div>

//         {/* ===== SECOND SECTION (LEFT CONTENT + RIGHT FORM) ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* LEFT SIDE CONTENT */}
//           <div>
//             {/* WHAT HAPPENS NEXT */}
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//               <span className="text-blue-700">What Happens</span>{" "}
//               <span className="text-gray-900">After You</span>{" "}
//               <span className="text-orange-500">Reach Out?</span>
//             </h2>

//             <ol className="space-y-4 text-gray-700 mb-10 list-decimal list-inside">
//               <li>
//                 <span className="font-semibold">
//                   Requirement Understanding –
//                 </span>{" "}
//                 We analyze your goals, audience, and current digital
//                 performance.
//               </li>

//               <li>
//                 <span className="font-semibold">Strategic Consultation –</span>{" "}
//                 Our experts recommend data-backed solutions aligned with your
//                 KPIs.
//               </li>

//               <li>
//                 <span className="font-semibold">
//                   Customized Growth Roadmap –
//                 </span>{" "}
//                 You receive a clear action plan with timelines and projected
//                 outcomes.
//               </li>
//             </ol>

//             <p className="font-semibold text-gray-900 mb-12">
//               No generic proposals.{" "}
//               <span className="text-blue-700">
//                 Only strategy-driven execution.
//               </span>
//             </p>

//             {/* WHY CONNECT WITH US */}
//             <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-16">
//               <span className="text-gray-900">Why Brands</span>{" "}
//               <span className="text-blue-700">Choose</span>{" "}
//               <span className="text-orange-500">Adkryoss</span>
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {[
//                 "Performance-first digital marketing approach",
//                 "AI-powered campaign optimization",
//                 "ROI-focused SEO & Paid Advertising",
//                 "Conversion-driven content & creatives",
//                 "Transparent reporting & analytics dashboards",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-white border border-gray-200 rounded-xl p-5
//       hover:shadow-md transition"
//                 >
//                   <p className="font-medium text-gray-800">{item}</p>
//                 </div>
//               ))}
//             </div>

//             <p className="mt-8 text-gray-600 leading-relaxed">
//               <span className="font-semibold text-gray-900">
//                 Adkryoss managed by Clink Consultancy Services Private Limited
//               </span>{" "}
//               combines creativity, automation, and analytics to deliver{" "}
//               <span className="text-blue-700 font-medium">
//                 scalable digital growth systems
//               </span>{" "}
//               across SEO, paid media, and AI-driven marketing.
//             </p>
//           </div>

//           {/* RIGHT SIDE FORM (Like Screenshot Box Style) */}
//           <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
//             <form className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Inquiry *
//                 </label>
//                 <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option>Growth Consultation</option>
//                   <option>SEO Services</option>
//                   <option>Paid Advertising</option>
//                   <option>AI Automation</option>
//                   <option>Performance Audit</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Name *
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Email *
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Message *
//                 </label>
//                 <textarea
//                   rows="4"
//                   className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full hover:bg-blue-800 transition"
//               >
//                 Submit →
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* ===== CONTACT INFO SECTION ===== */}
//         <div className="mt-20 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">
//             Let’s Start the Conversation
//           </h2>

//           <p className="text-gray-700 mb-3">
//             📩 Business Enquiries: info@adkryoss.com
//           </p>

//           <p className="text-gray-700 mb-3">📞 Call Us: +91-XXXXXXXXXX</p>

//           <p className="text-gray-700">
//             📍 Location: India (Serving Global Clients)
//           </p>

//           <p className="text-lg font-semibold text-blue-700 mt-8">
//             Build Visibility. Drive Traffic. Convert Customers.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


































import React from "react";
import { useLocation } from "react-router-dom";
// import contact1 from "../assets/contactus.png";

const Contact = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const service = params.get("service");

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          {/* LEFT ILLUSTRATION */}
          <div className="flex justify-center lg:justify-start">
            <img
              // src={contact1}
              alt="Contact Illustration"
              className="w-[420px] md:w-[520px] lg:w-[580px] object-contain"
            />
          </div>

          {/* RIGHT HEADING CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {service === "seo" && (
                <>Let’s Scale Your <span className="text-blue-700">SEO Growth</span></>
              )}
              {service === "ecommerce" && (
                <>Let’s Boost Your <span className="text-blue-700">Ecommerce Revenue</span></>
              )}
              {service === "cro" && (
                <>Let’s Improve Your <span className="text-blue-700">Conversions</span></>
              )}
              {service === "affiliate" && (
                <>Let’s Build Your <span className="text-blue-700">Revenue Engine</span></>
              )}
              {service === "youtube" && (
                <>Let’s Dominate <span className="text-blue-700">YouTube</span></>
              )}
              {service === "ai" && (
                <>Let’s Automate Your <span className="text-blue-700">Growth with AI</span></>
              )}
              {service === "orm" && (
                <>Let’s Strengthen Your <span className="text-blue-700">Brand Reputation</span></>
              )}
              {service === "aso" && (
  <>Let’s Optimize Your <span className="text-blue-700">App Store Growth</span></>
)}

{service === "mobile-app-marketing" && (
  <>Let’s Scale Your <span className="text-blue-700">Mobile App Growth</span></>
)}

{service === "b2b" && (
  <>Let’s Accelerate Your <span className="text-blue-700">B2B Growth</span></>
)}

{service === "bfsi" && (
  <>Let’s Drive Performance in the <span className="text-blue-700">BFSI Sector</span></>
)}
              {!service && (
                <>
                  <span className="text-blue-700">Let’s Build</span>{" "}
                  <span className="text-gray-900">What Your Brand</span>{" "}
                  <span className="text-orange-500">Deserves</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mt-6">
              Ready to scale your digital presence with a{" "}
              <span className="font-semibold text-gray-900">
                performance-driven strategy
              </span>{" "}
              powered by AI, analytics, and measurable growth?
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              Whether you’re a startup building visibility or an enterprise
              focused on performance, we craft{" "}
              <span className="text-blue-700 font-medium">
                scalable growth systems
              </span>{" "}
              that move real business metrics — not just impressions.
            </p>
          </div>
        </div>

        {/* ===== SECOND SECTION (LEFT CONTENT + RIGHT FORM) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              <span className="text-blue-700">What Happens</span>{" "}
              <span className="text-gray-900">After You</span>{" "}
              <span className="text-orange-500">Reach Out?</span>
            </h2>

            <ol className="space-y-4 text-gray-700 mb-10 list-decimal list-inside">
              <li>
                <span className="font-semibold">
                  Requirement Understanding –
                </span>{" "}
                We analyze your goals, audience, and current digital
                performance.
              </li>

              <li>
                <span className="font-semibold">Strategic Consultation –</span>{" "}
                Our experts recommend data-backed solutions aligned with your
                KPIs.
              </li>

              <li>
                <span className="font-semibold">
                  Customized Growth Roadmap –
                </span>{" "}
                You receive a clear action plan with timelines and projected
                outcomes.
              </li>
            </ol>

            <p className="font-semibold text-gray-900 mb-12">
              No generic proposals.{" "}
              <span className="text-blue-700">
                Only strategy-driven execution.
              </span>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-16">
              <span className="text-gray-900">Why Brands</span>{" "}
              <span className="text-blue-700">Choose</span>{" "}
              <span className="text-orange-500">Adkryoss</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Performance-first digital marketing approach",
                "AI-powered campaign optimization",
                "ROI-focused SEO & Paid Advertising",
                "Conversion-driven content & creatives",
                "Transparent reporting & analytics dashboards",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
                >
                  <p className="font-medium text-gray-800">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">
                Adkryoss managed by Clink Consultancy Services Private Limited
              </span>{" "}
              combines creativity, automation, and analytics to deliver{" "}
              <span className="text-blue-700 font-medium">
                scalable digital growth systems
              </span>{" "}
              across SEO, paid media, and AI-driven marketing.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm  h-200">
            <form className="space-y-6">

<div>
  <h2 className="font-bold text-4xl mb-10">Get in touch</h2>
</div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Inquiry *
                </label>
                <select
                 defaultValue={
  service === "seo"
    ? "SEO Services"
    : service === "ai"
    ? "AI Automation"
    : service === "cro"
    ? "Performance Audit"
    : service === "ecommerce"
    ? "Growth Consultation"
    : service === "affiliate"
    ? "Growth Consultation"
    : service === "aso"
    ? "Growth Consultation"
    : service === "mobile-app-marketing"
    ? "Growth Consultation"
    : service === "b2b"
    ? "Growth Consultation"
    : service === "bfsi"
    ? "Growth Consultation"
    : "Growth Consultation"
}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                >
                  <option>Growth Consultation</option>
                  <option>SEO Services</option>
                  <option>Paid Advertising</option>
                  <option>AI Automation</option>
                  <option>Performance Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Email *
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
              </div>


                <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Mobile number *
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full hover:bg-blue-800 transition mb-3"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>

        {/* ===== CONTACT INFO SECTION ===== */}
        {/* <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let’s Start the Conversation
          </h2>

          <p className="text-gray-700 mb-3">
            📩 Business Enquiries: info@adkryoss.com
          </p>

          <p className="text-gray-700 mb-3">📞 Call Us: +91-XXXXXXXXXX</p>

          <p className="text-gray-700">
            📍 Location: India (Serving Global Clients)
          </p>

          <p className="text-lg font-semibold text-blue-700 mt-8">
            Build Visibility. Drive Traffic. Convert Customers.
          </p>
        </div> */}


<div className="mt-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-3xl py-16 px-8 text-center shadow-xl">

  <h2 className="text-4xl font-bold mb-6 leading-tight text-white">
    Let’s Start the Conversation
  </h2>

  <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
    Whether you're exploring new growth opportunities or ready to scale aggressively,
    our team is here to guide you with strategy-first execution.
  </p>

  {/* Contact Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">

    {/* Email */}
    <a
      href="mailto:info@adkryoss.com"
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition duration-300 block"
    >
      <p className="text-3xl mb-3">📩</p>
      <p className="font-semibold text-lg text-white">Business Enquiries</p>
      <p className="text-white mt-2 underline">
        info@adkryoss.com
      </p>
    </a>

    {/* Phone */}
    <a
      href="tel:+91XXXXXXXXXX"
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition duration-300 block"
    >
      <p className="text-3xl mb-3">📞</p>
      <p className="font-semibold text-lg text-white">Call Us</p>
      <p className="text-white mt-2 underline">
        +91-XXXXXXXXXX
      </p>
    </a>

    {/* Location */}
    <a
      href="https://www.google.com/maps"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition duration-300 block"
    >
      <p className="text-3xl mb-3">📍</p>
      <p className="font-semibold text-lg text-white">Location</p>
      <p className="text-white mt-2 underline">
        India (Serving Global Clients)
      </p>
    </a>

  </div>

  <p className="text-xl font-semibold text-orange-300">
    Build Visibility. Drive Traffic. Convert Customers.
  </p>

</div>


      </div>
    </section>
  );
};

export default Contact;
