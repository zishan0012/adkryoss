import React from 'react';

const BestPlaceToWork = () => {
    return (
        <>
         <section
  className="bg-cover bg-center bg-no-repeat py-16 h-100 md:py-20"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-8xl mx-auto px-6  grid md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div className="text-left text-white space-y-6 mt-[-15px] ml-20">

      {/* H2 Heading */}
      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white w-200">
Best Place to Work 
      </h2>

      {/* H3 Subheading */}
      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
   Where Talent Grows. Ideas Scale. Leaders Are Built. 
      </h3>


      {/* Paragraph */}
      <p className="text-white md:text-md leading-relaxed">
 At Adkryoss managed by Clink Consultancy Services Private Limited, we don’t just build high-performing digital brands — we build high-performing people. 
<br />
We believe a workplace should inspire ambition, reward ownership, and encourage bold thinking. That’s why we’ve created a culture where innovation thrives, collaboration is natural, and growth is continuous. 

  </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="https://www.techmagnate.com/wp-content/uploads/2025/08/Best-Place-to-Work-in-India.webp"
        alt="About Adkryoss"
        className="w-56 md:w-80 rounded-xl shadow-lg mr-10"
      />
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

      {/* CARD 1 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          {/* Performance Icon */}
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

      {/* CARD 2 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          {/* SEO Icon */}
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

      {/* CARD 3 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          {/* Analytics Icon */}
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

      {/* CARD 4 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          {/* Creative Icon */}
          <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 017 7c0 3-2 5-4 6l-3 7-3-7c-2-1-4-3-4-6a7 7 0 017-7z" />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Creative & Content Innovation</h3>
        <p className="text-gray-600 text-sm">
          Storytelling that connects brands with modern audiences.
        </p>
      </div>

      {/* CARD 5 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          {/* Automation Icon */}
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

      {/* CARD 6 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="mb-4">
          {/* CRO Icon */}
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
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-4 mb-4">
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
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
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
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
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
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
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

     <div className="md:col-span-2 flex justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 w-full md:w-[48%]">
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
        <ul className="space-y-5 text-gray-700 text-base sm:text-lg">

          {[
            "Agile marketing sprints",
            "Data-backed decision making",
            "AI-powered optimization models",
            "Continuous testing frameworks",
            "Customer-centric campaign strategies"
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
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src="data:image/jpeg;base64,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"
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
          src="data:image/jpeg;base64,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"
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
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 12h18M12 3v18" />
        </svg>
        <p className="text-gray-800 text-base font-medium">
          Flexible work structure
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 20h5V4H2v16h5" />
          <path d="M12 4v16" />
        </svg>
        <p className="text-gray-800 text-base font-medium">
          Hybrid collaboration model
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l4 7H8l4-7zM2 22h20" />
        </svg>
        <p className="text-gray-800 text-base font-medium">
          Leadership mentoring
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 22v-2a6 6 0 0112 0v2" />
        </svg>
        <p className="text-gray-800 text-base font-medium">
          Performance incentives
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 20h9" />
          <path d="M12 4h9" />
          <path d="M4 9h16" />
          <path d="M4 15h16" />
        </svg>
        <p className="text-gray-800 text-base font-medium">
          Skill enhancement programs
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" />
        </svg>
        <p className="text-gray-800 text-base font-medium">
          Career acceleration roadmap
        </p>
      </div>

      {/* Card 7 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
        <svg className="w-10 h-10 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 10h18" />
        </svg>
        <p className="text-gray-800 text-base font-medium">
          Transparent appraisal system
        </p>
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
