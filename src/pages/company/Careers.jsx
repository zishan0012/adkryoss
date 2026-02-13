







import React from "react";

import { useState } from "react";

const jobs = [
  {
    role: "SEO Executive",
    shortDesc:
      "Work on on-page, off-page, technical SEO, and strategy execution...",
    fullDesc:
      "Work on on-page, off-page, technical SEO, and strategy execution for enterprise clients.",
    experience: "2+ Years",
    department: "SEO",
    location: "New Delhi",
    openings: 2,
  },
  {
    role: "Performance Marketing Specialist",
    shortDesc:
      "Plan, execute, and optimise paid campaigns across Google & Meta...",
    fullDesc:
      "Plan, execute, and optimise paid campaigns across Google, Meta, and emerging platforms.",
    experience: "3+ Years",
    department: "Marketing",
    location: "Remote",
    openings: 1,
  },
  {
    role: "Content Strategist",
    shortDesc:
      "Build conversion-focused, SEO-driven content that ranks...",
    fullDesc:
      "Build conversion-focused, SEO-driven content that ranks and converts.",
    experience: "2+ Years",
    department: "Content",
    location: "New Delhi",
    openings: 1,
  },
  {
    role: "Social Media Growth Manager",
    shortDesc:
      "Develop scalable engagement and brand positioning strategies...",
    fullDesc:
      "Develop scalable engagement and brand positioning strategies.",
    experience: "3+ Years",
    department: "Social Media",
    location: "Remote",
    openings: 1,
  },
  {
    role: "Digital Marketing Intern",
    shortDesc:
      "Hands-on training across channels. Learn. Execute...",
    fullDesc:
      "Hands-on training across channels. Learn. Execute. Grow.",
    experience: "Fresher",
    department: "Marketing",
    location: "On-site",
    openings: 2,
  },
];

const Careers = () => {



  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat py-20 h-150"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <h1 className="text-5xl md:text-5xl font-bold text-black mb-[-80px] mt-[20px]">
              Careers at Adkryoss
            </h1>

            <h3 className="text-2xl md:text-3xl font-semibold text-black mt-30">
              Build What the Future Will Search For
              {/* <br /> */}
            </h3>

            <p className="text-white leading-relaxed text-base md:text-lg space-y-4">
              <br />
              Digital marketing is no longer about posts and ads.
              It’s about data. Strategy. Technology. AI. Performance.
              <br />  <br />
              At Adkryoss managed by Clink Consultancy Services pvt. ltd,
              we don’t just execute campaigns — we engineer measurable
              digital growth systems for brands that want to dominate their industry.
              <br />  <br />
              If you’re ambitious, curious, analytical, and obsessed with growth —
              this is where you belong.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://www.techmagnate.com/wp-content/uploads/2026/01/Careers.webp"
              alt="Careers"
              className="max-w-[320px] md:max-w-[450px] mr-10 mt-[-20px] w-full"
            />
          </div>

        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== Heading ===== */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Businesses Choose Us
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Visibility is easy to promise. Impact is harder to deliver.
              At <span className="font-semibold text-black">
                Adkryoss managed by Clink Consultancy Services Pvt. Ltd
              </span>, we don’t chase impressions — we engineer measurable growth.
              Every campaign is aligned with one objective: sustainable business performance.
            </p>
          </div>

          {/* ===== Cards Grid ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* ===== Card 01 ===== */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden">
              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100">
                01
              </span>

              <h3 className="text-xl font-bold text-black mb-4">
                Growth Anchored in Revenue
              </h3>

              <p className="text-gray-700 mb-4 font-medium">
                Clicks don’t pay bills. Conversions do.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• High-intent audience acquisition</li>
                <li>• Lead quality over lead quantity</li>
                <li>• Cost efficiency across funnels</li>
                <li>• Revenue attribution clarity</li>
              </ul>
            </div>

            {/* ===== Card 02 ===== */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden">
              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100">
                02
              </span>

              <h3 className="text-xl font-bold text-black mb-4">
                Intelligence-Driven Strategy
              </h3>

              <p className="text-gray-700 mb-4 font-medium">
                Guesswork has no place in performance marketing.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• Advanced keyword & intent mapping</li>
                <li>• Customer journey analytics</li>
                <li>• Behavioral segmentation insights</li>
                <li>• Predictive performance modeling</li>
              </ul>
            </div>

            {/* ===== Card 03 ===== */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden">
              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100">
                03
              </span>

              <h3 className="text-xl font-bold text-black mb-4">
                Connected Digital Infrastructure
              </h3>

              <p className="text-gray-700 mb-4 font-medium">
                Growth doesn’t happen in isolated channels.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• SEO + Paid Media synergy</li>
                <li>• Content aligned with search intent</li>
                <li>• Social amplification strategies</li>
                <li>• Conversion-optimized web experiences</li>
              </ul>
            </div>

            {/* ===== Card 04 ===== */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden">
              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100">
                04
              </span>

              <h3 className="text-xl font-bold text-black mb-4">
                Built for Constant Change
              </h3>

              <p className="text-gray-700 mb-4 font-medium">
                The digital landscape evolves daily.
              </p>

              <ul className="space-y-2 text-gray-600">
                <li>• Proactive algorithm monitoring</li>
                <li>• AI-driven search adaptation</li>
                <li>• Privacy-compliant tracking models</li>
                <li>• Continuous growth experimentation</li>
              </ul>
            </div>
          </div>

          {/* ===== Outcome Block ===== */}
          {/* <div className="mt-20 bg-white p-12 rounded-3xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-black mb-6">
            The Outcome?
          </h3>

          <div className="space-y-3 text-lg text-gray-700">
            <p>Sustainable growth.</p>
            <p>Higher marketing efficiency.</p>
            <p>Stronger brand authority.</p>
            <p>Performance that compounds over time.</p>
          </div>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            That’s the difference with Adkryoss managed by Clink Consultancy
            Services Pvt. Ltd.
          </p>
        </div> */}


          {/* ===== Outcome Section ===== */}
          <div className="mt-14 bg-white rounded-3xl shadow-xl p-10 md:p-16"
            style={{ backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/report_bg.svg')" }}
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT SIDE - BIG TITLE */}
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  The <br />
                  <span className="text-orange-600">Outcome?</span>
                </h3>
              </div>

              {/* RIGHT SIDE - POINTS */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Sustainable growth.
                </p>

                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Higher marketing efficiency.
                </p>

                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Stronger brand authority.
                </p>

                <p className="text-lg md:text-xl font-medium text-gray-800">
                  Performance that compounds over time.
                </p>
              </div>

            </div>

            {/* CENTER BOTTOM LINE */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed">
                That’s the difference with
                <span className="font-semibold text-black">
                  {" "}Adkryoss managed by Clink Consultancy Services Pvt. Ltd.
                </span>
              </p>
            </div>

          </div>

        </div>
      </section>



      <section className=" bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mt-4 leading-tight">
            Our Work Culture
          </h2>

          {/* PARAGRAPH */}
          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-4xl mx-auto">
            At Adkryoss managed by Clink Consultancy Services pvt. ltd, culture is not a slogan — it’s a system.
            <br />
            <p className="text-black font-bold">We believe in:</p>
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-items-center">

            {/* Item 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
              <h3 className="text-xl font-semibold text-black mb-2">
                01. Ownership Over Hierarchy
              </h3>
              <p className="text-gray-600">
                If you see opportunity, you take it.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
              <h3 className="text-xl font-semibold text-black mb-2">
                02. Continuous Learning
              </h3>
              <p className="text-gray-600">
                SEO evolves. Algorithms shift. Platforms upgrade. We evolve faster.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
              <h3 className="text-xl font-semibold text-black mb-2">
                03. Data-Backed Decisions
              </h3>
              <p className="text-gray-600">
                We measure everything. We optimise relentlessly.
              </p>
            </div>

            {/* Item 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
              <h3 className="text-xl font-semibold text-black mb-2">
                04. Collaboration Without Silos
              </h3>
              <p className="text-gray-600">
                SEO works with content. Content works with paid. Paid works with analytics. Everything works together.
              </p>
            </div>

            {/* Item 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
              <h3 className="text-xl font-semibold text-black mb-2">
                05. Performance Recognition
              </h3>
              <p className="text-gray-600">
                Growth is rewarded. Initiative is noticed.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            Who We’re Looking For
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            We’re building a team of specialists and growth thinkers in:
          </p>

          {/* LIST OF ROLES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-left">
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">Search Engine Optimization (SEO)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">Performance Marketing (Google Ads & Meta Ads)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">Social Media Strategy</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">Content Marketing & Copywriting</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">Technical SEO & Web Optimization</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">Data Analytics & Marketing Automation</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">UI/UX & Conversion Optimization</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-blue-700">Account Management & Client Strategy</p>
            </div>
          </div>

          {/* FINAL NOTE */}
          <p className="text-gray-600 mt-10 text-lg font-medium">
            We don’t hire based on degrees. <br />
            We hire based on potential, mindset, and hunger.
          </p>

        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            Our Hiring Philosophy
          </h2>

          {/* SUBTEXT */}
          <p className="text-black mt-4 text-lg leading-relaxed font-bold">
            We look for:
          </p>

          {/* TRAITS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-left">
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-gray-700">Analytical thinkers</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-gray-700">Problem solvers</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-gray-700">Digital-first mindset</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-gray-700">Adaptability to change</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-gray-700">Clear communicators</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-gray-700">Self-driven professionals</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold text-gray-700">Results-focused executors</p>
            </div>
          </div>

          {/* FINAL STATEMENT */}
          <p className="text-gray-600 mt-10 text-lg font-medium italic">
            Experience matters. <br />
            But growth mindset matters more.
          </p>

        </div>
      </section>


      <section className="py-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE - CONTENT & CARDS */}
            <div>
              {/* HEADING */}
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
                Growth & Learning Opportunities
              </h2>

              {/* INTRO PARAGRAPH */}
              <p className="text-gray-700 mt-4 text-lg leading-relaxed max-w-3xl">
                Digital marketing is one of the fastest-evolving industries in the world. To stay ahead, you need exposure to:
              </p>

              {/* CARDS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <p className="font-semibold text-blue-700">Advanced SEO frameworks</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <p className="font-semibold text-blue-700">AI-powered marketing tools</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <p className="font-semibold text-blue-700">Conversion Rate Optimization systems</p>
                </div>
                {/* Card 4 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <p className="font-semibold text-blue-700">Performance analytics dashboards</p>
                </div>
                {/* Card 5 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <p className="font-semibold text-blue-700">Multi-channel campaign management</p>
                </div>
                {/* Card 6 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <p className="font-semibold text-blue-700">International campaign strategy</p>
                </div>
                {/* Card 7 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <p className="font-semibold text-blue-700">Marketing automation platforms</p>
                </div>
              </div>

              {/* FINAL NOTE */}
              <p className="text-gray-700 mt-8 text-lg font-medium italic max-w-3xl">
                At Adkryoss managed by Clink Consultancy Services pvt. ltd, you won’t just learn — you’ll implement.
              </p>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <img
                src="data:image/jpeg;base64,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"
                alt="Growth & Learning Illustration"
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

    </>

  );
};

export default Careers;