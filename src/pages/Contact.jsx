import React from "react";
import contact1 from "../assets/contactus.png";
import contactuss from "../assets/contactuss.webp"

const Contact = () => {
  return (
   <>
   <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-24 text-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

    <div>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Let’s <span className="text-orange-400">Build</span> What
        <br />
        <span className="text-blue-200">Your Brand Deserves</span>
      </h1>

      <p className="text-blue-100 text-lg max-w-xl">
        Talk to strategists who combine performance marketing, AI automation,
        and data-driven growth to deliver measurable results.
      </p>
    </div>

    <div className="flex justify-center lg:justify-end">
      <img
        src={contactuss}
        alt="Digital Growth"
        className="w-full max-w-md rounded-3xl shadow-2xl"
      />
    </div>

  </div>
</section>
<section className="bg-gray-100 py-24">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Get in <span className="text-blue-700">Touch</span>
      </h2>
      <p className="text-gray-600 text-lg">
        Here’s how you can connect with our team.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* CARD 1 */}
      <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300">

        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          📞
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Talk to Strategy Team
        </h3>

        <p className="text-gray-600 mb-6">
          Interested in scaling your digital presence? Connect directly
          with our performance strategists.
        </p>

        <p className="text-lg font-semibold text-blue-700 mb-2">
          +91-XXXXXXXXXX
        </p>

        <p className="text-gray-600">
          info@adkryoss.com
        </p>

      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300">

        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
          💬
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Business & Partnership Enquiries
        </h3>

        <p className="text-gray-600 mb-6">
          Need consultation, performance audit, or collaboration?
          Our team is ready to assist you.
        </p>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
          Contact Support →
        </button>

      </div>

    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-6 lg:px-0">

    {/* LEFT – Transparent Computer Image */}
    <div className="flex justify-center lg:justify-start">
      <img
        src={contact1}
        alt="Digital Growth Strategy"
        className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-xl"
      />
    </div>

    {/* RIGHT – CONTENT */}
    <div className="text-left">

      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
        Let’s{" "}
        <span className="text-orange-500">Build</span>{" "}
        What{" "}
        <span className="text-blue-700">Your Brand</span>{" "}
        Deserves
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl">
        Ready to scale your digital presence? Talk to strategists who combine{" "}
        <span className="font-semibold text-blue-700">
          performance marketing
        </span>,{" "}
        <span className="font-semibold text-blue-700">
          AI automation
        </span>, and{" "}
        <span className="font-semibold text-blue-700">
          data-driven growth
        </span>{" "}
        to deliver measurable results.
      </p>

      <p className="text-gray-600 text-base max-w-xl mb-8">
        Whether you're a startup aiming for visibility or an enterprise
        focused on performance, our experts craft growth strategies
        that truly move the needle.
      </p>

      <button
        className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-full 
        hover:bg-blue-800 transition-all duration-300 hover:shadow-lg"
      >
        Get in Touch →
      </button>

    </div>

  </div>
</section>
<section className="bg-gray-100 py-24">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16">

    {/* LEFT SIDE (2/5 width) */}
    <div className="lg:col-span-2 space-y-8">

      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-900">
          What Happens Next?
        </h3>

        <div className="space-y-4 text-gray-700">
          <p><span className="font-semibold text-blue-700">Requirement Understanding</span> – We analyze goals & performance.</p>
          <p><span className="font-semibold text-blue-700">Strategic Consultation</span> – KPI-aligned solutions.</p>
          <p><span className="font-semibold text-blue-700">Growth Roadmap</span> – Clear execution plan.</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl shadow-md p-8 border border-blue-100">
        <h3 className="text-xl font-bold mb-4 text-gray-900">
          Why Connect With Us?
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li>✔ Performance-first approach</li>
          <li>✔ AI-powered optimization</li>
          <li>✔ ROI-focused SEO & Paid Ads</li>
          <li>✔ Transparent analytics</li>
        </ul>
      </div>

    </div>

    {/* RIGHT SIDE (3/5 width – bigger form) */}
    <div className="lg:col-span-3">

      <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let’s Start the Conversation
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Tell us about your goals and we’ll craft a strategy tailored to your business.
        </p>

        <form className="space-y-8">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 
              focus:border-blue-600 focus:ring-4 focus:ring-blue-100 
              outline-none text-lg"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 
              focus:border-blue-600 focus:ring-4 focus:ring-blue-100 
              outline-none text-lg"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 
            focus:border-blue-600 focus:ring-4 focus:ring-blue-100 
            outline-none text-lg"
          />

          <select
            className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 
            focus:border-blue-600 focus:ring-4 focus:ring-blue-100 
            outline-none text-lg"
          >
            <option>Select a Service</option>
            <option>SEO</option>
            <option>PPC</option>
            <option>Social Media</option>
            <option>AI Automation</option>
          </select>

          <textarea
            rows="6"
            placeholder="Tell us about your goals, challenges or current performance..."
            className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 
            focus:border-blue-600 focus:ring-4 focus:ring-blue-100 
            outline-none text-lg resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-5 rounded-xl 
            text-lg font-semibold hover:bg-blue-800 
            transition-all duration-300 shadow-lg"
          >
            Submit →
          </button>

        </form>

      </div>

    </div>

  </div>
</section>
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE – CONTACT INFO */}
    <div className="space-y-10">

      <div>
        <h2 className="text-4xl font-bold leading-tight mb-6">
          <span className="text-black">Let’s Start the</span><br />
          <span className="text-blue-700">Conversation</span>
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Have a question about{" "}
          <span className="font-semibold text-blue-700">
            SEO, Paid Campaigns, AI Marketing Automation
          </span>{" "}
          or performance analytics?  
          Our team is ready to craft strategy-driven solutions aligned with your growth goals.
        </p>
      </div>

      {/* Contact Boxes */}
      <div className="space-y-6">

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">📩 Business Enquiries</p>
          <p className="text-lg font-semibold text-gray-900">
            info@adkryoss.com
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">📞 Call Us</p>
          <p className="text-lg font-semibold text-gray-900">
            +91-XXXXXXXXXX
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">📍 Location</p>
          <p className="text-lg font-semibold text-gray-900">
            India (Serving Global Clients)
          </p>
        </div>

      </div>

      {/* Final Statement */}
      <div className="pt-6 border-t border-gray-200">
        <p className="text-xl font-semibold text-gray-900 mb-3">
          Build Visibility. Drive Traffic. Convert Customers.
        </p>
        <p className="text-gray-600 text-lg">
          Your digital growth journey starts here.  
          Let’s turn strategy into scalable success.
        </p>
      </div>

    </div>


    {/* RIGHT SIDE – MAP */}
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

      <iframe
        title="Adkryoss Location"
        src="https://www.google.com/maps?q=Gurugram,Haryana,India&output=embed"
        className="w-full h-[500px]"
        loading="lazy"
      ></iframe>

    </div>

  </div>
</section>


   </>
  );
};

export default Contact;
