
import React from "react";
import CareerImage from "../../assets/Career.jpeg";
import WhatMakesUsDifferentImage from "../../assets/WhatMakesUsDifferent.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WhoWeArelookingImage from "../../assets/WhoWeAreLooking.png";
import OurHiringPhilosophyImage from "../../assets/OurHiringPhilosophy.png";
import GrowthImage from "../../assets/Growth.png";
import InternshipImage from "../../assets/Internship.png";

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
  const navigate = useNavigate();
   const [expandedIndex, setExpandedIndex] = useState(null);


  return (
    <>
  


{/* <section
  className="relative flex items-center min-h-[70vh] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

  
      <div className="text-left lg:text-left text-white space-y-6 mx-auto lg:mx-0">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Careers at Adkryoss
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Build What the Future Will Search For
      </h3>

      <p className="text-base md:text-lg leading-relaxed text-white max-w-[600px]">
        Digital marketing is no longer about posts and ads.  
        It’s about data. Strategy. Technology. AI. Performance.  
        <br />
        At Adkryoss managed by Clink Consultancy Services pvt. ltd, 
        we don’t just execute campaigns — we engineer measurable 
        digital growth systems for brands that want to dominate their industry.  
        <br />
        If you’re ambitious, curious, analytical, and obsessed with growth — 
        this is where you belong.
      </p>

    </div>



 <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
    <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
    <img
      src={CareerImage}
      alt="Section Image"
      className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
    />
  </div>
</div>


  </div>
</section> */}


<section className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
style={{ backgroundImage: 
"url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')" }}>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    <div className="text-left text-white max-w-[600px] space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Careers at Adkryoss
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
        Build What the Future Will Search For
      </h3>

      <p className="text-white leading-relaxed">
         Digital marketing is no longer about posts and ads.  
        It’s about data. Strategy. Technology. AI. Performance.  
        <br />
        At Adkryoss managed by Clink Consultancy Services pvt. ltd, 
        we don’t just execute campaigns — we engineer measurable 
        digital growth systems for brands that want to dominate their industry.  
        <br />
        If you’re ambitious, curious, analytical, and obsessed with growth — 
        this is where you belong.
      </p>
    </div>

    <div className="flex justify-center md:justify-end">
      <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={CareerImage}
          alt="Careers"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section>


<section className="py-24 bg-linear-to-br from-gray-50 via-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* CENTERED HEADING & PARAGRAPH */}
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
        Why Work With Adkryoss <br className="hidden md:block" /> 
      </h2>
      <h3 className="text-4xl md:text-xl font-bold text-black leading-tight">managed by Clink Consultancy Services pvt. ltd?</h3>

      <p className="text-gray-700 mt-4 text-lg leading-relaxed">
        We are building a performance-first digital marketing ecosystem designed for modern brands. That means you won’t just “do marketing.” You’ll build strategies that impact revenue.
      </p>
    </div>

    {/* TWO-COLUMN GRID BELOW */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">

  {/* LEFT SIDE */}
  <div>
    <h3 className="text-4xl font-semibold text-blue-600 mb-6 text-left">
      What Makes Us Different?
    </h3>

    <div className=" md:grid-cols-2 gap-y-4 gap-x-12 text-gray-900 text-base">
      <ul className="space-y-3 list-disc pl-5">
        <li className="p-2">Performance-driven culture (Data &gt; Assumptions)</li>
        <li className="p-2">AI-integrated marketing workflows</li>
        <li className="p-2">Cross-channel growth strategy exposure</li>
        <li className="p-2">Enterprise-grade client portfolio</li>
        <li className="p-2">Rapid skill acceleration environment</li>
        <li className="p-2">Leadership mentorship model</li>
        <li className="p-2">Growth-focused career path</li>
      </ul>
    </div>
  </div>

  {/* RIGHT SIDE - IMAGE */}
  <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
    <img
      src={WhatMakesUsDifferentImage} 
       alt="Digital Growth Lab Illustration"
      className="w-full max-w-md rounded-2xl shadow-xl"
    />
  </div>

</div>

{/* FINAL STATEMENT - FULL WIDTH BELOW IMAGE */}
<p className="text-gray-500 mt-16 text-lg font-medium italic text-center max-w-4xl mx-auto">
  This isn’t a traditional agency job. <br />
  This is a digital growth lab. <br />
  Shape your career with impact.
</p>
  </div>
</section>


{/* <section className=" bg-linear-to-br from-gray-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
      Our Work Culture
    </h2>

   
    <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-4xl mx-auto">
      At Adkryoss managed by Clink Consultancy Services pvt. ltd, culture is not a slogan — it’s a system. 
      <br />
     <p className="text-blue-600 font-bold">We believe in:</p> 
    </p>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-items-center">
      
    
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
        <h3 className="text-xl font-semibold text-black mb-2">
          01. Ownership Over Hierarchy
        </h3>
        <p className="text-gray-600">
          If you see opportunity, you take it.
        </p>
      </div>

     
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
        <h3 className="text-xl font-semibold text-black mb-2">
          02. Continuous Learning
        </h3>
        <p className="text-gray-600">
          SEO evolves. Algorithms shift. Platforms upgrade. We evolve faster.
        </p>
      </div>

      
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
        <h3 className="text-xl font-semibold text-black mb-2">
          03. Data-Backed Decisions
        </h3>
        <p className="text-gray-600">
          We measure everything. We optimise relentlessly.
        </p>
      </div>

   
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-xs">
        <h3 className="text-xl font-semibold text-black mb-2">
          04. Collaboration Without Silos
        </h3>
        <p className="text-gray-600">
          SEO works with content. Content works with paid. Paid works with analytics. Everything works together.
        </p>
      </div>

      
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
</section> */}




<section className="bg-linear-to-br from-gray-50 via-blue-50 to-white py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 leading-tight">
      Our Work Culture
    </h2>

    {/* PARAGRAPH */}
    <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-4xl mx-auto">
      At Adkryoss managed by Clink Consultancy Services pvt. ltd, culture is not a slogan — it’s a system.
    </p>
    <p className="text-blue-600 font-bold mt-2">
      We believe in:
    </p>

    {/* CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-12">

      {/* Row 1 - 3 Cards */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition lg:col-span-2">
        <h3 className="text-xl font-semibold text-black mb-2">
          01. Ownership Over Hierarchy
        </h3>
        <p className="text-gray-600">
          If you see opportunity, you take it.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition lg:col-span-2">
        <h3 className="text-xl font-semibold text-black mb-2">
          02. Continuous Learning
        </h3>
        <p className="text-gray-600">
          SEO evolves. Algorithms shift. Platforms upgrade. We evolve faster.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition lg:col-span-2">
        <h3 className="text-xl font-semibold text-black mb-2">
          03. Data-Backed Decisions
        </h3>
        <p className="text-gray-600">
          We measure everything. We optimise relentlessly.
        </p>
      </div>

      {/* Row 2 - Centered 2 Cards */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition lg:col-span-2 lg:col-start-2">
        <h3 className="text-xl font-semibold text-black mb-2">
          04. Collaboration Without Silos
        </h3>
        <p className="text-gray-600">
          SEO works with content. Content works with paid. Paid works with analytics. Everything works together.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition lg:col-span-2">
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
  <div className="max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
        Who We’re Looking For
      </h2>

      <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        We’re building a team of specialists and growth thinkers in:
      </p>
    </div>

    {/* CARDS + IMAGE WRAPPER */}
    <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">

      {/* LEFT SIDE - CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">

        {[
          "Search Engine Optimization (SEO)",
          "Performance Marketing (Google Ads & Meta Ads)",
          "Social Media Strategy",
          "Content Marketing & Copywriting",
          "Technical SEO & Web Optimization",
          "Data Analytics & Marketing Automation",
          "UI/UX & Conversion Optimization",
          "Account Management & Client Strategy",
        ].map((role, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition flex items-center justify-center text-center min-h-[100px]"
          >
            <p className="font-semibold text-gray-700">
              {role}
            </p>
          </div>
        ))}

      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={WhoWeArelookingImage}
           alt="Team Illustration"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>

    </div>

    {/* FINAL NOTE */}
    <p className="text-gray-600 mt-12 text-lg font-medium text-center">
      We don’t hire based on degrees. <br />
      We hire based on potential, mindset, and hunger.
    </p>

  </div>
</section>



<section className="py-24 bg-linear-to-br from-gray-50 via-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
        Our Hiring Philosophy
      </h2>
      <p className="text-blue-600 mt-4 text-lg font-bold">
        We look for:
      </p>
    </div>

    {/* Content Layout */}
    <div className="grid lg:grid-cols-12 gap-10 items-center">
      
      {/* LEFT IMAGE (Bigger Now) */}
      <div className="lg:col-span-7 flex justify-center">
        <img
          src={OurHiringPhilosophyImage}
          alt="Hiring Illustration"
          className="w-full max-w-2xl h-[520px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* RIGHT SIDE CARDS (Narrower Now) */}
      <div className="lg:col-span-5 space-y-6">
        
        {[
          "Analytical thinkers",
          "Problem solvers",
          "Digital-first mindset",
          "Adaptability to change",
          "Clear communicators",
          "Self-driven professionals",
          "Results-focused executors"
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white px-3 py-2 m-3 rounded-xl shadow-md hover:shadow-xl transition text-center"
          >
            <p className="font-semibold text-gray-700 text-lg">
              {item}
            </p>
          </div>
        ))}

      </div>

    </div>

    {/* Bottom Statement */}
    <p className="text-gray-600 mt-16 text-lg font-medium italic text-center">
      Experience matters. <br />
      But growth mindset matters more.
    </p>

  </div>
</section>


<section className="py-12 bg-linear-to-br from-blue-50 via-white to-blue-50">
  <div className="max-w-[1500px] mx-auto px-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}
      <div>
        
        {/* HEADING */}
        <h2 className="text-5xl font-bold text-black leading-tight whitespace-nowrap">
          Growth & Learning Opportunities
        </h2>

        {/* INTRO PARAGRAPH */}
        <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-4xl">
          Digital marketing is one of the fastest-evolving industries in the world. 
          To stay ahead, you need exposure to:
        </p>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {[
            "Advanced SEO frameworks",
            "AI-powered marketing tools",
            "Conversion Rate Optimization systems",
            "Performance analytics dashboards",
            "Multi-channel campaign management",
            "International campaign strategy",
            "Marketing automation platforms"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <p className="font-semibold text-blue-700">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* RIGHT SIDE - BIGGER IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={GrowthImage}
            alt="Growth & Learning Illustration"
          className="w-full max-w-2xl h-[600px] object-cover rounded-3xl shadow-2xl"
        />
      </div>

    </div>

    {/* FINAL NOTE - FULL WIDTH CENTERED */}
    <div className="mt-20 text-center">
      <p className="text-gray-700 text-xl font-medium italic max-w-4xl mx-auto">
        At Adkryoss managed by Clink Consultancy Services pvt. ltd,
        you won’t just learn — you’ll implement.
      </p>
    </div>

  </div>
</section>


<section className="py-24 bg-linear-to-br from-white via-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-6">
      <h2 className="text-4xl md:text-5xl font-bold text-black">
        Life at Adkryoss
      </h2>
      <p className="text-gray-600 mt-3 text-lg font-medium">
        Managed by Clink Consultancy Services pvt. ltd
      </p>
    </div>

    {/* SUBHEADING */}
    <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mt-6">
      We believe productivity increases when people feel empowered.
    </p>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

      {[
        {
          title: "Structured career progression",
          image: "data:image/png;base64,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"
        },
        {
          title: "Skill development programs",
          image: "data:image/jpeg;base64,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"
        },
        {
          title: "Performance-based growth reviews",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRMXFRUSGBcYFxcXFhgTFhYXGhUXFRgaHSghGBslGxMVITEjJSkrLy4uGR8zODMsNygtLisBCgoKDg0OGhAQGyslHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABCEAACAQIDBQUEBwYDCQAAAAABAgADEQQFIQYSMUFREyJhcYEHMpGxFBUjQlJyoWKCosHR8NLh8TNDU2NzkqOywv/EABsBAQADAQEBAQAAAAAAAAAAAAACAwQBBQYH/8QAMBEBAAICAQMDAwIEBwEAAAAAAAECAxEhBBIxE0FRBWFxIsGRodHwFDJSgbHh8cL/2gAMAwEAAhEDEQA/AOpTW80gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGOzihRYJUqqrHWx5Dq1vdGnPjK7ZqVnUy2YPp/U56TfFSZiP74+f9mlke0tHEC28qVC7KqE95lBJUgc7ra/iDIY89b/AJaOt+lZumncRM11EzPtE+/8/wBk5L3lkBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEABfhEzp2I22qGBLC5NvTWVzk0uphmY3LBXpFTY/2JKttxtXek1nTxJIEBAxYilvKV3mXgbqbEWN/wCUjevdGt6Tx37Lb1E/lz3GbMYh8UVZge0LP2p4EDw43FwN0cB4CeXODJOTtt5n3+f7+H2/T/W+mx9HFqxrt1HbH9+Pv+6d2P2WOH+1rlTW1AC6qgPQ8yRz9JswYOzmfLw/qv1ieqj08fFfM/f/AKhapqeCQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAy4alvMBI3nUJ46906SlDDKuomebTPlsrjivhmnE2KvQVhqNevOdi0whakW8oWaoYSHCB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"
        },
        {
          title: "Leadership mentorship",
          image: "data:image/jpeg;base64,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"
        },
        {
          title: "Strategic brainstorming culture",
          image: "data:image/jpeg;base64,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"
        },
        {
          title: "Result-driven reward systems",
          image: "data:image/png;base64,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"
        },
        {
          title: "Collaborative digital ecosystem",
          image: "data:image/jpeg;base64,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"
        }
      ].map((card, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 text-center 
          ${index === 6 ? "md:col-start-2" : ""}`}
        >
          {/* IMAGE */}
          <div className="w-full h-40 mb-5 flex items-center justify-center">
            <img
              src={card.image}
              alt={card.title}
              className="h-full object-contain"
            />
          </div>

          {/* TEXT */}
          <p className="font-semibold text-gray-700 text-lg">
            {card.title}
          </p>
        </div>
      ))}

    </div>

    {/* FINAL LINE */}
    <p className="text-center text-gray-700 text-xl font-medium italic mt-20 max-w-4xl mx-auto">
      We combine agility of a startup with systems of an enterprise.
    </p>

  </div>
</section>


<section className="py-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12">
          Current Openings
        </h2>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg ">

          <table className="w-full text-left border-collapse ">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4">Role</th>
                <th className="p-4">Job Details</th>
                <th className="p-4">Experience</th>
                <th className="p-4">Department</th>
                <th className="p-4">Location</th>
                <th className="p-4">Openings</th>
                <th className="p-4">Apply</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job, index) => (
                <tr key={index} className="border-t border-gray-300 hover:bg-gray-50 transition">
                  <td className="p-4 font-medium">{job.role}</td>

                  <td className="p-4 max-w-xs">
                    {expandedIndex === index
                      ? job.fullDesc
                      : job.shortDesc}

                    <button
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                      className="block text-blue-600 mt-2 text-sm hover:underline"
                    >
                      {expandedIndex === index
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  </td>

                  <td className="p-4">{job.experience}</td>
                  <td className="p-4">{job.department}</td>
                  <td className="p-4">{job.location}</td>
                  <td className="p-4">{job.openings}</td>

                  <td className="p-4">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                      Apply Now →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

       

      </div>
    </section>



    <section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Center Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Internship Program
      </h2>
      <p className="text-xl text-gray-600 mt-5 max-w-3xl mx-auto">
        Our internship model is performance-focused and implementation-driven.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT POINTS */}
      <ul className="space-y-8">
        <li className="text-xl md:text-2xl font-semibold text-gray-800 flex items-start">
          <span className="text-blue-600 mr-4 text-2xl">✔</span>
          Work on real client projects
        </li>

        <li className="text-xl md:text-2xl font-semibold text-gray-800 flex items-start">
          <span className="text-blue-600 mr-4 text-2xl">✔</span>
          Build campaign strategies
        </li>

        <li className="text-xl md:text-2xl font-semibold text-gray-800 flex items-start">
          <span className="text-blue-600 mr-4 text-2xl">✔</span>
          Learn AI-driven marketing tools
        </li>

        <li className="text-xl md:text-2xl font-semibold text-gray-800 flex items-start">
          <span className="text-blue-600 mr-4 text-2xl">✔</span>
          Get exposure to SEO, paid ads, and analytics
        </li>

        <li className="text-xl md:text-2xl font-semibold text-gray-800 flex items-start">
          <span className="text-blue-600 mr-4 text-2xl">✔</span>
          Receive structured mentorship
        </li>
      </ul>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={InternshipImage}
             alt="Internship Program"
          className="rounded-2xl shadow-2xl w-full max-h-[600px] object-cover"
        />
      </div>

    </div>

    {/* Bottom Highlight Statement */}
    <div className="text-center mt-24">
      <p className="text-3xl md:text-2xl font-bold text-gray-900">
        This is not a certificate internship.
      </p>
      <p className="text-3xl md:text-2xl font-bold text-blue-600 mt-3">
        This is a growth accelerator.
      </p>
    </div>

  </div>
</section>





<section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* ================= Career Path ================= */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Your Career Path Here
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        We believe in internal leadership building.
      </p>
    </div>

    {/* Career Flow */}
    <div className="flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl font-semibold text-gray-800 mb-24">
      <span>Intern</span>
      <span className="text-blue-600">→</span>
      <span>Executive</span>
      <span className="text-blue-600">→</span>
      <span>Specialist</span>
      <span className="text-blue-600">→</span>
      <span>Team Lead</span>
      <span className="text-blue-600">→</span>
      <span>Growth Strategist</span>
      <span className="text-blue-600">→</span>
      <span className="font-bold text-blue-700">Business Head</span>
    </div>


   

  </div>
</section>



{/* ================= Diversity Section ================= */}
<section className="py-1 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        Diversity & Inclusion
      </h3>

      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        We value diverse perspectives, backgrounds, and creative thinking.
        Innovation happens when different minds collaborate.
      </p>
    </div>

  </div>
</section>






{/* ================= CTA Section ================= */}
<section className="py-18 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 items-center gap-16">

      {/* Left Image */}
      <div>
        <img
          src="https://www.techmagnate.com/wp-content/uploads/2025/06/TM-29.png"
          alt="Team Working"
          className="rounded-2xl w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Build Digital Growth?
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          If you are looking for real responsibility, real impact, real growth,
          and accelerated skill development, this is your opportunity to grow
          with a performance-driven team.
        </p>

        <div className="space-y-3 text-lg font-semibold text-gray-800 mb-8">
          <p>✔ Real responsibility</p>
          <p>✔ Real impact</p>
          <p>✔ Real growth</p>
          <p>✔ Real skill acceleration</p>
        </div>

        <a
    href="mailto:careers@adkryoss.com"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition"
        >
          📩 Apply Now →
        </a>

       <p className="mt-6 text-gray-600">
  Send your resume to: 
  <a
    href="mailto:careers@adkryoss.com"
    className="font-semibold text-blue-600 ml-1 hover:underline"
  >
    careers@adkryoss.com
  </a>
</p>

        <p className="text-gray-600 mt-2">
          Or connect with us on LinkedIn.
        </p>

      </div>

    </div>

  </div>
</section>



    </>

  );
};

export default Careers; 

// export default Careers; 
