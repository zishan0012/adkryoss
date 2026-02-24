import React from 'react';
import { useNavigate } from "react-router-dom";
import EcommerceImage from "../../assets/Ecommerce.png";
import TheEcommerceGrowthChallengeImage from "../../assets/TheEcommerceGrowthChallenge.png"
import WhyChooseAdkryossImage from "../../assets/WhyChooseAdkryoss.png"
const Ecommerce = () => {
  const navigate = useNavigate();
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

      <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
        Ecommerce Digital Marketing Services
      </h2>

      <h3 className="text-2xl md:text-xl font-semibold leading-snug">
        Drive Sales. Scale Faster. Dominate Marketplaces.
      </h3>

      <p className="text-white md:text-md leading-relaxed max-w-[600px]">
        The ecommerce landscape is evolving at lightning speed. Competition is fierce, customer journeys are fragmented, and performance marketing costs are rising.
        <br />
        <span className='font-bold text-white'>
          At Adkryoss managed by Clink Consultancy Services Private Limited
        </span> we build high-performance ecommerce marketing ecosystems that increase visibility, improve conversion rates, and maximize customer lifetime value. From SEO and paid media to CRO and retention automation — we engineer growth that compounds.
      </p>

    </div>

   


     <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
        <img
          src={EcommerceImage}
          alt="Section Image"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>

  </div>
</section> */}



      <section
        className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

          {/* LEFT CONTENT */}
          <div className="text-left text-white">
            <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
              Ecommerce Digital Marketing Services
            </h2>

            <h3 className="text-2xl md:text-xl font-semibold leading-snug">
              Drive Sales. Scale Faster. Dominate Marketplaces.
            </h3>

            <p className="text-white md:text-md leading-relaxed max-w-[600px]">
              The ecommerce landscape is evolving at lightning speed. Competition is fierce, customer journeys are fragmented, and performance marketing costs are rising.
              <br />
              <span className='font-bold text-white'>
                At Adkryoss managed by Clink Consultancy Services Private Limited
              </span> we build high-performance ecommerce marketing ecosystems that increase visibility, improve conversion rates, and maximize customer lifetime value. From SEO and paid media to CRO and retention automation — we engineer growth that compounds.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] h-[260px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              <img
                src={EcommerceImage}
                alt="Section Image"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-8">
              The Ecommerce Growth Challenge
            </h2>

            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Ecommerce brands today struggle with:
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M14 7h7v7" />
                </svg>
                <p className="text-gray-700">Rising CAC (Customer Acquisition Cost)</p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
                <p className="text-gray-700">Low conversion rates</p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 6h15l-1.5 9h-13z" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                </svg>
                <p className="text-gray-700">Cart abandonment</p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 12h8" />
                </svg>
                <p className="text-gray-700">Marketplace dependency</p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                </svg>
                <p className="text-gray-700">Poor repeat purchase rates</p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 20V10M10 20V4M16 20v-6M22 20V14" />
                </svg>
                <p className="text-gray-700">Ineffective attribution tracking</p>
              </div>

            </div>

            {/* STRATEGIC POSITIONING */}
            <div className="mt-10 space-y-6">
              <p className="text-lg font-semibold text-gray-900">
                Random campaigns don’t scale ecommerce businesses. Data-driven ecosystems do.
              </p>

              <p className="text-gray-700 leading-relaxed">
                That’s where <span className="font-semibold text-gray-900">
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </span> steps in — combining strategy, creativity, automation, and performance analytics into one integrated growth engine.
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={TheEcommerceGrowthChallengeImage}
              alt="Ecommerce Growth Strategy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>



        </div>
      </section>


      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Ecommerce Digital Marketing Solutions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              We create performance-led strategies tailored for D2C brands, marketplaces, omnichannel retailers, and global ecommerce businesses.
            </p>
          </div>

          {/* SOLUTIONS GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* SEO */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Ecommerce SEO Services</h3>
              <p className="text-gray-600 mb-4">Search is still the most profitable long-term acquisition channel.</p>
              <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                <li>Product pages</li>
                <li>Category pages</li>
                <li>Technical SEO</li>
                <li>Core Web Vitals</li>
                <li>Structured data & schema</li>
                <li>Marketplace SEO (Amazon, Flipkart, etc.)</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                Our SEO framework ensures higher rankings, improved organic revenue, and scalable traffic growth.
              </p>
            </div>

            {/* Paid Media */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Performance Marketing (Paid Media)</h3>
              <p className="text-gray-600 mb-4">Growth requires precision targeting and smart bidding.</p>
              <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                <li>Google Shopping & Performance Max</li>
                <li>Meta (Facebook & Instagram) Ads</li>
                <li>YouTube Commerce Ads</li>
                <li>Marketplace Advertising</li>
                <li>Retargeting & Dynamic Product Ads</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                Our data-backed paid strategies focus on ROAS optimization, audience segmentation, and full-funnel targeting.
              </p>
            </div>

            {/* CRO */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Conversion Rate Optimization (CRO)</h3>
              <p className="text-gray-600 mb-4">Traffic without conversions is wasted potential.</p>
              <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                <li>Product page UX</li>
                <li>Checkout optimization</li>
                <li>Heatmap & behavior analysis</li>
                <li>A/B testing</li>
                <li>Mobile-first experiences</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                By analyzing user behavior and removing friction points, we boost conversions and average order value.
              </p>
            </div>

            {/* Marketplace */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 12h8" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Marketplace Growth & Optimization</h3>
              <p className="text-gray-600 mb-4">Marketplaces are competitive battlegrounds.</p>
              <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                <li>Product listing optimization</li>
                <li>Keyword-rich content creation</li>
                <li>Pricing strategy</li>
                <li>Ad campaign management</li>
                <li>Inventory & reputation optimization</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                Our marketplace experts ensure better visibility and higher conversion performance.
              </p>
            </div>

            {/* Content */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="M8 8h8M8 12h6M8 16h4" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Ecommerce Content & Creative Strategy</h3>
              <p className="text-gray-600 mb-4">Modern ecommerce thrives on storytelling.</p>
              <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                <li>High-converting product descriptions</li>
                <li>Performance ad creatives</li>
                <li>Video commerce strategy</li>
                <li>Influencer & UGC campaigns</li>
                <li>SEO-optimized blogs</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                Content is not just creative — it’s revenue-driven.
              </p>
            </div>

            {/* Automation */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-700 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Marketing Automation & Retention</h3>
              <p className="text-gray-600 mb-4">Retention is the new growth multiplier.</p>
              <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
                <li>Email marketing funnels</li>
                <li>SMS & WhatsApp automation</li>
                <li>Abandoned cart workflows</li>
                <li>Loyalty campaigns</li>
                <li>Customer lifecycle marketing</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                At Adkryoss managed by Clink Consultancy Services Private Limited, we focus on maximizing lifetime value, not just first purchases.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Ecommerce Growth Framework
            </h2>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Research & Market Intelligence */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35" />
                <circle cx="10" cy="10" r="7" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Research & Market Intelligence</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                We analyze competitors, customer behavior, search intent, and marketplace trends.
              </p>
            </div>

            {/* Strategy Blueprint */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Strategy Blueprint</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                A customized ecommerce roadmap combining SEO, paid media, content, and automation.
              </p>
            </div>

            {/* Execution & Optimization */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Execution & Optimization</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Campaign launches with continuous A/B testing and bid optimization.
              </p>
            </div>

            {/* Analytics & Scaling */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 ml-110 w-100">
              <svg className="w-10 h-10 text-blue-600 mb-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 3v18h18" />
                <path d="M18 9l-5 5-3-3" />
              </svg>
              <h3 className="font-semibold text-gray-900 mb-4">Analytics & Scaling</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Real-time dashboards, ROI tracking, and performance refinement for exponential growth.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose Adkryoss?
            </h2>
          </div>

          {/* Content + Image */}
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left Side - Points */}
            <div className="lg:w-1/2 space-y-4">
              <p className="text-gray-700">
                ✔ Data-first decision making
              </p>
              <p className="text-gray-700">
                ✔ ROI-driven strategies
              </p>
              <p className="text-gray-700">
                ✔ AI-powered performance tracking
              </p>
              <p className="text-gray-700">
                ✔ Dedicated ecommerce specialists
              </p>
              <p className="text-gray-700">
                ✔ Omnichannel marketing expertise
              </p>
              <p className="text-gray-700">
                ✔ Transparent reporting dashboards
              </p>
              <p className="text-gray-700 mt-4">
                Adkryoss managed by Clink Consultancy Services Private Limited does not believe in isolated campaigns. We create integrated growth systems that align acquisition, conversion, and retention.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2">
              <img
                src={WhyChooseAdkryossImage}
                alt="Ecommerce growth illustration"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>



      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Industries We Serve in Ecommerce
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Fashion & Apparel */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjpPFXQbj-2yPu045Tcc4GC7O6n1Yg1JRCQ&s" alt="Fashion & Apparel" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Fashion & Apparel</h3>
            </div>

            {/* Beauty & Cosmetics */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4oL3PdbI9REWhGO6P0Wg4jsu9zFfOEXrpQ&s" alt="Beauty & Cosmetics" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Beauty & Cosmetics</h3>
            </div>

            {/* Electronics & Gadgets */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="data:image/jpeg;base64,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" alt="Electronics & Gadgets" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Electronics & Gadgets</h3>
            </div>

            {/* FMCG & Grocery */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="data:image/jpeg;base64,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" alt="FMCG & Grocery" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">FMCG & Grocery</h3>
            </div>

            {/* Healthcare & Wellness */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="data:image/png;base64,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" alt="Healthcare & Wellness" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Healthcare & Wellness</h3>
            </div>

            {/* Home & Furniture */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAw-zUg2JSLjrt4DrhfkuL6B65Nnw_PIQiA&s" alt="Home & Furniture" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Home & Furniture</h3>
            </div>

            {/* Luxury & Lifestyle Brands */}
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="data:image/jpeg;base64,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" alt="Luxury & Lifestyle Brands" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Luxury & Lifestyle Brands</h3>
            </div>

          </div>
        </div>
      </section>



      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Technology Platforms We Work With
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Shopify */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://img.icons8.com/color/64/shopify.png" alt="Shopify" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Shopify</h3>
            </div>

            {/* WooCommerce */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://img.icons8.com/color/64/woocommerce.png" alt="WooCommerce" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">WooCommerce</h3>
            </div>

            {/* Magento */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://img.icons8.com/color/64/magento.png" alt="Magento" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Magento</h3>
            </div>

            {/* BigCommerce */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://img.icons8.com/color/64/bigcommerce.png" alt="BigCommerce" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">BigCommerce</h3>
            </div>

            {/* Amazon Seller Central */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://img.icons8.com/color/64/amazon.png" alt="Amazon Seller Central" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Amazon Seller Central</h3>
            </div>

            {/* Flipkart Seller Hub */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://img.icons8.com/color/64/flipkart.png" alt="Flipkart Seller Hub" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Flipkart Seller Hub</h3>
            </div>

          </div>

          {/* Subtext */}
          <p className="mt-12 text-gray-700 text-lg max-w-3xl mx-auto">
            Our team adapts strategies based on platform architecture and algorithm updates.
          </p>
        </div>
      </section>


      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Results That Matter
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Organic Revenue */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="data:image/jpeg;base64,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" alt="Increased organic revenue" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Increased Organic Revenue</h3>
            </div>

            {/* Higher ROAS */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRcVFRUVFRUVFRUVFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ0PFSsdFhkrKy0rLSsrKystKystLSsrKy0tKystLS0tKysrLTcrKysrKysrLSstKystKzc3Nzc3N//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADcQAAIBAgIGCQQBAwUBAAAAAAABAgMRBCEFEjFBUWETIjJxgZGxwfAGFKHRckJSghUjM+HxB//EABgBAQEBAQEAAAAAAAAAAAAAAAIBAAME/8QAHhEBAQADAAIDAQAAAAAAAAAAAAECETEDMiFBURL/2gAMAwEAAhEDEQA/AARYRyAxmWlV3BdBY7Q8VwFqUrhdbgSqYlmgsdgtTGIsKjRLxeaYByLd9yEcVUYpMUjIJTm+IVN02MwkJ02NRYasHgMRFaQzEKmIIaw6zXevVClNjmH7Uf5L1RIlbZCEPQ8yEIQzIYGl315eHojfMDTC68vD0QM+Onj6w67Eqw3X3iFdhjtSVWYJyO1ntAzaOkGhVZXBRR1zTBzmhxzqSkLVJ7y85cBepIUGhylwLNbyRs2l3lavIoo6z4IprskUUqOzKizSsBlkzmsVkysIpHU7AonGzI1YS7/ItKfJ+Q9RoRtnvKfb2vw3HPbqWo1eT8mGU+T8g1Okt6LwpbbcSKpCpyfkwqq9/kdnC1jtO10uYSjsKnJ+TDQrLf6FYw/IWlC+1EV2NRDMJrg/JlYUUNU9lgkpSl3+TG4yOQgmxiNPgGqrTqDcJlKdNXYxGGaAq1OXyzHcK+tH+UfVAIwGMKutH+S9TTo3jbIQh6HmQhCGZDC0vG834eiN0xdLLrvuXoDycdPH15/FUrbN4hXoM1q+YlWYY7Vh16C+XFquDtfP8vM16yQpUOkCsjoFbZy2sBVw6X/rNJZJ97FcTmhwKSkl8uUlRXxstUjl4nUvRCGl3Ru+Hi9hV0Hn+xirk78iRZRLwpK+fDuOTwq3N5c2My9CsZWZUKRw7ea9yjoZ53uPQWRyot5mZ8cM2rr1OSw74X8WOqJZoqN1RZ2SKtnGzi7CxWRyDtkSLO35GVZK+RdQ6xyiw0dpFFhFWKxjYuV1rBUeAWMgFJPeHiyKZpMapitIZgGrDFMOhekMRAo0WNYRdaPehSDHMI+tHvNOplxrkIQ9DzIQhDMhjaW7T7kbJj6W7XggZ8Px9YlXaJVWPVdohXBi7UhXkhWYxiRV7DrBparkLVRisxKcmOBVK8CkYWL1JlL5CGqVWU1+JyYDN7dhRM62QKoytmdvlYqCweQOUi0HkVyMykdpa7BxedhhWKjbhApOAaLRHBM4uyJkbO9EjsKa4EV2jEupFqdNcAipptkVyMglNbzqguBFfgRR4hdwOLCqSsRRIoPBgIINBBqwxSYzEUoxHIRQFFgO4NdePf7CcIjuCXWj3+zNOplxrEIQ9DzIQhDMhk6V7Xgvc1jK0r2vBerBnw/H1hV1tM6ualcy8Q8wYu1Z2IE9bKw/XVxOUd51g0nWmJ1mO1lcTmhwKHOSayAN8BlA0ssxBS1SZ1OxeYOaYkdbBVJBkyrRkUgzr7ytzqkVA3tCqZzVL9GjM1+kCwqbASR2LzOTseU8iqbBRkGjIKi02WUrMrHYSHMiiubsEjJWAt5BqNrEVeEkESzKqJcijQYSLBINTDVhjDsbgxSixqmBTEGPYLtx8fRiMB7A9uPj6MuPYOXK1SEId3nQhCGZDK0t2v8AFerNUytLdpfx92DPh+P2YeJMvEGniWZ9ZAxdqzajFasx+sjPq5+Z1g0rNi1SQzIWrMcChuwDWz+cQ1sgW8UGhVORZSyC1UgFKKuUUyKyjcLKmdjCxULxgcnEOikuJmDvY50jOykDjJlRta5aMkL1K5yMrnN1Oa5eNXzFUXpsmlaFGTaDU4ZXE4ytYNGq9gaUMSR2MmDjK4alkEjFGTCuIur8QkG+JGGiHhIDTCphpQzRY3TEqTG6bApqmh/AdtePoxCmP4Dtrx9C49gZcrUIQh3edCEIVkMvS/aX8fdmoZWmXmu73Bnw/H7MDEPMz60jQrsz6qOcd6RrSEJMbxVhGTOsGgVZAJ5oNUAXHHOqKLsD3sYimcsIS8kVp5N3LzYvObvkVBXULRswDkuBTp+RUWlO2wE6pyVTkVbyMjmuDucmgdyo1Z1EwtKouKO9Fa4anh1tObqqq6zzLwqx4o7GlttnYLKjZEVbW3llUV9pWMEE1eRCg1LELIahUT3oVpQvtDRoZhpGqbQWUllZlMNBLahnUTvZIKq0pB4zRKdHLmWjDaGqNSkhqlMBRpIZpQAo8JGjo59ddzEowHdGrr+DLj2BlytUhCHd50EMXpanTnqO7e+264+eL0pVUq8pW6rkk3le0UotpeBMrrh4SW/L2cJppNO6aunyMrTW1d3uXhpWFlqxdsklkvJIX0lVcrdVxyy1t4cspYuGNmTExORn1maGJi+RmV7gxdmdiWJyQ5WpyYjUhLkdYNCnDMrOJaprX228wNbW5eQ4FWUwVSYF62ewE9YQV2pO7BqObONS4oHKUkUV5OxRglUkzkXJ5FRJuxW5JwlyKK9ystNgpM7O/IpqszPTvPaEWwG2Xgc3RegtveXqO5SmGgsyVVWskNU4cSklmgyYSV2PIYptgpIvfdfMlUdDFGWVhaIek8wkehIKkKwkM05ArQ1SWQWl7gqQaAVMQHtHLreD9hCkaGj+14P1RcehnxokIQ9Dgh87+ooKFScf7ZPyfWj+GfRD4z9S/UnS4irOMVqN6qve7UUoqTe5u2y37JrZ4Pq+hNV0KU1FJypxbaSTu4q+zmB03ti+T9hb6Jx9OrhKWo84QUZRe1SW3vV72Y3pr+nx9g5+q4+zCq5piNRKw1iJ2E6sjnHWk6tPPkJJWuhysxVrN3OkGksTG7XeDdOwfEegtUqDg0pWybF5SzGKkbi811hwKDq7/ApYblFLYLVYu9yirqlUrMJqlXEqKuxWilmck95eDyKgNSnvQOSsxmMitjM1mw8HdC+8upWObqPawSjPMApl6LVyKYhPMNCYsgsQlBM2xiEPneCoXGESqvCmGpoFBhqYSGphooFCyCJhqw3QkNRYnSYxCQFNU2aeju1/i/VGXTkamju1/j7ouPQz40CFKtRRi5Pcm/IxK1eriLqCtFbc7Lxe/uO1y04447V+rdMxpUJKE1ryTWTTcVveWx7vE+WaFwGFqRq1cXiOjik1ThT61WUm+1q2do7rPbe+SV39Ol9JQm/96o5R3witVPk5XvbusZ9P6JoSx1adSl/sSpwlTinq09eWsqkbJ3VtVSS2dfyuN/Vtk+I819E45wheEmtWUrN2Tay2pN7eF2fRNKT1o05NWvG9uF0nYcw+jqFP/jo04b+rCEfRC2mtkfH2Bny0sct2PNYraI1WO4rJmbiJhxdKDWlYTqVLhasshNSzOkGq1mLTGKjFajHAqgKpHM6mVqPeIakkAqSvkXnMDVZRqs5WBN5bS6hvJGi7FRWayOwRxwaORZUcbONnWVcTMZ+9lwQRY6XBGcmEi3wA7NCOOfBBIY6XBCMKUn/Sw9PCz4W8URdHI46XILHHS4IVhgpb2g0MJxl+A/BSGaeNlyDU8bLkAhh472w8IU1u82wloeGPlyDwxzfAXhUgv6V5BI4tLZ6EU7SxMnu/AzCrN7vYy/vCfeh0zdp1JchiFe29Hm/veZ370n8q9THGJbw0NJ22M8h96d+9N/KfD2D0s+IjLSvR3cZJJ523X4nm6mPstp57TWmX2YlmFqXUeo0v9Y1aavG0lyf/AEY1P/6DWzv4JL3ueNr4mUu02wKZ3njx+3K536fSdDfW1arNppbP7j0kdMOa61vO58bweIcHdG7Q05PgDLx/hY5T7e6xdVvNWfmZGJxUltS8n+zIp6de+Jd6aT2x9AzGw9xevjHy8n+xV418vz+yVcVTlut3CdW25jkGj1Mc+Xk/2Lzxr4L8i9RsBIUCmfvWtyByx0uC/P7FpApIQ03Uxze5fkHLGvgvniKO5RlQ9/qD4L54nP8AUZcF+f2Isqypo7PSDe5fPEp98+C+eIm0cZmN/fPgvniVeNfD55ihDM9YtRbEvI6sSuXzwIQ56dduPGL4mdWM+ZkIbTbd+6lw/JZYh/GQhNLtZVmdVchDabbvTcy3S8yENptu9KTpWQhNLt3pWc6ZnSG023OnZx4ghDabZXF46xg4vEazIQ6YxzypRyJrEIIBaVS2408NXjbYQhKUaFGUXuQRwj/adIc66Soox4HdWPBEIZnJUo8Bepg09mRCGYrVwUtwpUoyW1MhCyjYDJA2cIOAqyrIQrOXOXOEMiHCEMz/2Q==" alt="Higher ROAS" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Higher ROAS</h3>
            </div>

            {/* Reduced Acquisition Cost */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="data:image/jpeg;base64,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" alt="Reduced acquisition cost" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Reduced Acquisition Cost</h3>
            </div>

            {/* Improved Conversion Rates */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition ml-50 w-100">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDg0NDw0NDQ4NDQ8PDw8NDw0PFREWFhURFRYYHSggGBolGxUWITEhJSkrLi4uFyAzODMtNygtLi4BCgoKDg0OGxAQGzUlHyYtLS0rLS0rLS0tLi4rLS0tLSstLS8tNy0tLSstKzUrLSsrLS0tLS0tLTUtLS01LS0tLf/AABEIAKIBNgMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQUGAgMEB//EAEYQAAEDAgQDAwcHCgQHAAAAAAEAAgMEEQUSITEGQVETYXEUIjIzgZGhI1Jyc7Gy0Qc0QlNigpKTwfAVJFTxFkNEY6LS4f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQFA//EADERAQABAwIDBAkEAwAAAAAAAAABAgMRBDESIUETYYGxFTIzUWJxkaHhBTTR8CJSwf/aAAwDAQACEQMRAD8A+vIiL3eAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgiqKICKqICIiAiIgIiICIogqKIgIiICKqIOSIiAiIgIoqgIiICIiAiIgIiICIiAiIgIiICIiCIiICIiAiLjFE6V72h7mNja25aGuzPOuU5gdhY6fPCTOCIy5Io+Cdm7GSjrGcjv4HG1v3vYusVDS4NJLXnZjwY3HwDt/EaKImJTMTDtREUoEURAREBugIiICIiDkiIgiqIgIob8lM/XT7Peg5IoqgIiIIDf2Kri/QF1wLC5J0Fu/uXXFI6T1UZf+0Tki/iPpDvaCkkO5cRI0ktDmlzfSAIuPEclweIWODamrja47RCRsAPTnmd77Hou/EKdjImyRsa0QHOAwBo7P9MADu1t1aFXihbgnGXFFEVlRVREBVREFUREBERAREQQm2+g59yxuIYyaGCBzY2vmqXumcx7uzIjOwJFyCAWNvY7L11pbkyvcGse9kb3OOVoY5wDrnlcXA7yFxx/hwVj+2ZOY5exEIzRtmiyhxcDl0Idc7hw0VapVrivgns9+iwV76+m7RtO5sPnl7HOYX1BjcR2TBtlcW2JdbS4trcezDTE6COmcQ90cLGPjkYWOIaA3MWPF8txvay4ULjSwxQPgeGRRsjD4rzsNhYXDRnudyctu9YPiSrljo6yrGZtTVBmHYcw5gYzK8RtfYmwcXuLyRa7Y2XFwVWIzye8ZiObu4ZrjUwSTZQ2F1VUikAvrTNkLWO165XEcgCAssvNhtEylp4KaMWjp4o4WfRY0NH2L0L1eSriTb8FL3226/guTRZEONr77dFyVUUJEREBERByREQEREBEUQQs6aeClyO/w0K5IpEDgfw2K5KEX3UykbH2HVB4MRqexqaBz2tdTSTup5MwB7OaQDsJNf225PGUL08XYk6mpvkzlklf2YcN2DKXOcO+wt7V04vRCqppqd5LBKwtD26mN+7JAeRa4NcO8BeSQPxbC4ZMrRVROImjvYCojzRTR36Zs1uvm8iqVRtKtyauzqijfHJ0R8BwVELTVSTds5pcezc1vZlw13BzHvN1i+BfK8MxKfBpnvmowzPSSkGzDlDgwdLtvduwLdN1lqTjHsYxFUQyGaMBhNwwutoC8O1aeu/8ARdvDlLNU1b8RmZkaQeyFrXJblBbfXKG6X5k3UZnExKlGopmmi1a5xHTnyid/GfNk4Gdnmh/VHK3vjOrPh5t+rSu5deIVMQqoo2yRmodG/PCHN7TsRqJS3fKHWbfb5Rc1aJzD2qjEiIilAiIgq1jietmjnayOR7W9kHWYbXJc4XNvALZlqHFx/wAy3S/yLfH0npLFr6pi1ynqx/8AitR/qJf4yn+K1P8AqJf4yvNc8jfx1IXG/cPiFVxO1r/2n6tn4VrZZXzNkkc8BrXDMbkG55rY1q3Bx+Um0A+Tb1+ctpVod3RVTNmJnv8AN11EDJWPjkY18cjSx7HtDmvaRYtIOhCwjOGRT64fWVdDbaJj/KKXw7CW4aPoFqz643vtoOv4KWvLDsxnFKXSpo4a6Mf82gf2M1u+CY2v4SHwXjkxQYtiNG2OKqZT4c2Wqn8op5ac+Vub2cMdngXLWuldpcejqtlFgO5S5PcPimI3wninZS72nopl6+7kq0WVRVFVEUJVFFUERFUEREQVVFEFRRVAUREBVREBFVEFWJoJxR4nLG4hsGJM8ojJNmtrImtZK3U7vj7NwH/aeVlV5sQw6CqZ2VTBDPGHB4ZNG2VocNnWcN9T707kxOHRU8VU73mOjhfiEzDY+TtaYI3XtZ9Q60bbcwCXdy8z4K+s/OqsUsR/6agLmvPc+pcMx/cazxWYjYGNDWtDWtFmtaA1rR0AGyp1SIiEzVMvHhmFQUjXNghjjzG73NF3yn5z3nznnvJK9imXobd24XJSqiAKrqkqY2GzpI2no57Wn3FQiZiN3aouny2H9dF/MZ+KnlsP66H+Yz8URx0+93rT+Lvzlv1DfvPW3RyNcLtcHN5FpBHvC1Hi785b9Q37z1Esf6h7HxhhFb3336/ioihwmd4YnbB5XLIcscUHaPNi6zG3JNhqdByWJxD8rdIy/k1NUTm2jnltPGfb5zv/ABXfh2P0+GsnnqZMrcjQxo1fI6/osHM/AbmwWp8RYDVV1NVYzJSwUMTGNfBTNjDJpmZ25pZSLa5STrqbbAan2t0xO7vaH2EePmznDPHlfimJU9MyCmjpznknaBJI9sTRq7OSOZaB5u5C+ll3Ian7F8//ACP4GYaR9c8WfWG0fUQMJA8MzrnvAavoQFlFeM8myHHLzOp+AXJEVEiiqiAqoqgiKogiKogiIiCoiIKiiqAiKX1sgqKKoIiqiAiIgKqIgqIiAtDx3SrnPPPp/CNVvi0PHSPK5+Zz89tgolzf1L2cfP8A5LwBv+6WHj8AoTdFDjNu4PPyEn1x+41Y3i8f5lp5di0X/eesjwf6iT64/casdxa4ipaQbfINv4ZnqejqXf2dLBrFYtjLYCIY2mapfoyJutj1dbYf33rorMYkqZDTUADjtLUEDJF9E8z/AGL7j24RhMVK0kXfM71kzj57yd972Hd77q2IjnLHFum3Gbm/SP593m9/AfDolqX1ddlnqWNa+JrtYqc30sNiR8D36r6RJC17XNe0Pa8Frg4BzXNIsQQdLLWeDrdpNYH1bed/0ltScUy7Ojqmu1Ez3uEUbWNaxjWtYwBrWtAa1rQLAADYLmiKGpFV1OnALgBI7LYOyRvkDSRcA5QdbEG3eOqRTseSGva4jdoIzN8RuPag7EREBRQut49Oaanu+1ALgPw5rkFAAFUBERBEVUQVVFxN+4/BByUUzdQR8VQQdigqhF1UQcLEbajofxVDvf0WLr+I6OnuH1MZcNCyP5Z4PQht7e2y1zEOPwbinpiej53AWPXIz/2C97enu3PVpeFzU2rfrVN1mJy2be5IbccgTYn2C59i6iDKSCCIgbWOhlI6/sfe8PS+X1HFdfI4O8pLMpu1rGtawHv5uHcSV9RoKttRDFM3aWNkgHMZgDZTf0tdmImrqrp9XbvzMU9HoRFFnaRYt/ENK0lvaONiQSGOI09iyq+bPOpv1OvPdJYdZqa7OOHq3M8R0o/Tf/Lcp/xHS/Pd/LctBxTEIqWLtZXabNA9KQ9AOqxQ4nY31tNVxDq6PzffcfYkRVOzNRq9TXGaaY/vi+zQTNkY17DdrhcHZaNjv53P9P8AoF6eHOOsLNPFG6tjjewEOErZIwPOJ9Ii21uaxuJYhBPUzPhnhla592ujkZICLDoUmJjd6a/NVmmZjn1+jpQC6oaToAvFi2KxUjRnOaR3oRM1fIf6C/P/AGURGdnIppmqcRu3HAcQhpKKeeeRsUMcpzPd1yNsANyTyA1K0bHa+fHJ+0aySlw7IGsc7SWrYHO84dGk36jTnsMnwlwu7Ej5ZiZJiilPk9ACeyY7K3z5OptbTnz081Zvi1oFQwAAAQMAAFgAHPsAr5imO92Lkza0sY3+rX6SljgYI4mBrG8hzPUnme9d97779fxURebjTMzOZbFwcLSzfVt+8VtS1Tg0/KTfQb9q2pWh39B7CPHzVFF01gvG5ouDJliBG4L3Bmb2Xv7EbHfSVMcFM2aR1hKXTbEuIdd4Fh0ZbwDb8lp+F/lTwbEa3yFwcCX5IJaiOPsJndGuucpJ2uBfTmbLY+IKVs7aumcXBs1F5M3J6TWzdox5Z+1oP4GrS8N/JXhUbKaKSAVRZI4une6RjpRdzsvybmhwFmtuQRy5m3lh65fRXYY39CSaPuz9oPCz72HhZdMlJUN2MUg55c0LvYDmB94XF0lQMPvSCJ9QI7Uwnc4RvaHWaXEam7Ne89Frp40rqTTEcEqmAbzUhbUx+JA0aPFy9KKK6vV84VqmmN2fMuT045Y+d3NzNt1L23aPaV2RSNeMzHNc35zSHD3heDC+PMLqtGVsUb72yT3pzfpd9gT4Ers4wqWU9BUVsbI3VDWMbSvFrvme8MhbmGpaXuaCL6glTMVUziqMIxTMZiXtRTN0BP2e8qa9w+KlVyRccnUkqgKARVRByRRVAXEtB5LkiDwY1PJBSzyxedJHG5zAfOGbqfDf2L5RXYtU1Pr6iWQH9Euyxn9xtm/BfY5Yw9rmO9F7S13gRYr5wzgeqdI5t2NjB0d07raad4J/ouhobtqjPaeHJztfZvXIp7Px5sXQspPJy6UkS5nssLk2IAa5oBA0zONjzZuL2PCtqe0HYRxGwMUgyxZXvAi3LGgkglznDXQP8LbnQ8CQN1me956A2se42AI8Qs3BhbGOjAhha2MCzgxuc5WlrbHcCx22Gw0svS5r6YqzTEz8+jyt/p1U04rmI+XX5vm9Bw1Vz2LYsrT+k4ix8CNL9xIX0nh/DnUtJDTvdndGH3d0LnudYeGa3sWQ1638UzdQfZqsl/VXL3KrZssaS3Y507mo7x8UDgUDgdihaD/eqztLkF8jxvF2UxyBpkqHkiOFurib6E9B9q2viTi2Rs/+GYYwVWIuuHOGsVGObpDsSL7bDnrZp1PCcFEBdK95mqnkmWZ2pvza2+w+3u2U4iOcufr+D/Gau/l73lwzCHmQVdYRJUbsj3jgHIAbE/3qdVnXDmNt7Liq08vaD0KpM5ciu5Nc5ltmF4NSVFHD29JTSnK7WSGN59M8yLrScd4UofKZmtpwwB9miNz42tFhyvZfROH/AM0h5aO++5anjx/zc4/b9+gU8Uxs6mprqo09E0zjbyaoeGwz1FZVxdwku33C1134ZgrYXmaR7p6gn1rxq0dGi5tpzWVRJrmXOnUXJjEy23g/1En1x+41Y7i23lLfqGa/vPWR4O9RJ9cfuNWN4v8Azlv1LfvOUdG67+zpYQiyKg8jt9iEe5Q5bYODfWT/AFbfvLalqvBvrJvq2/eW1K0O/oPYR4+YTZeWsqBD2dQ9r3RwvL5BEx8rw0sc3MGtBc62bYC/PkvSXAc1Mx5A+3RGzLqpsXocQIFPWwunjvYMe0TMva7XRu86xsNCOXIgFdtPg+XPmfGGyPc+TsYewdIXG5DnZifdY968WI4RT1YAqaenmsbt7SJkjmnq1xFwe8Lxs4eMOtHX19LrfJ23lcPh2c4flHc0tUcPulfi97bHR6ACwA2FtP8A4uvKRyI+ibj3Fa6ytxaD0mUFczqwyYfNb6Ls7HH95oXY3jKCO3llNW0J5ungMkI7zNCXxgd5IVeGqFsxL2YlgFJWX8oo6eZ1rFzo8ktvpjX4rCYxh8MD8FwmmYGQMqJK58eZz7RU4LxcuJJ+XliOp5LacPxOnqmdpTVEM7PnRSMlHvaVrlM8VGMYhODdlHDT4bHzAkI7ea3f58IP0FamqqeU7QrMRHNmkRFKgiIgKKqIKqoiCoiICIiAoqiCIiII61iTawFyTawHVaFiWP1OLzPoMFcWQtOWsxI37ONp3bCeZtzGp5WHnLbOIsGZiFM+lklmjjkcwvMLgxzmg3LDcEFp5hejDMPhpIWU9PG2OGMWa1vxJJ1JPMnUq0TEIeHhrh2DC4exp2XLrGWV3rZnfOcfabDYLT5AWvcCCHBxBBFiDfZfSFVWebLqdL22OeMPmzhfUb8x/Udy4L6YijDJ6M+L7flj8AaRSQAgg5TvvbMbfBanj7SKue4Iu4EabjKNVviinDXe0vaW6aM7fw+aALlt3n4L6SijDJ6M+L7flg+EQfJ3kg6zEi/MZWjRY3i4EVDDY2MLRe2hIc64+IW3Ipa69LxWYtZ26vmunQjw1CoHgfhf3r6SijDJ6M+L7flq/CMZD5iAQMjRcg73Oi2bL1JPwXJFLoWLPZURRnKAAbBVFEeyoiICqiIMXX8OUVQ7tJKWLtdhMwGGceErLOHvXownC4KKEQU0YjjDnPIu57nPcbue5ziS5x6kr2IpzIIiKAREQEREBERAVUVQERRBUREBEUQEREFREQEREBRVRAREQEREBERBEREFUVRBFVEQVERAREQEREBERAREQEREBVREAoiICqiICIiAiIgqiIgIiICKIgIiIKiiIKiiICIiAiIgKqIgIiIKiiIKiiIKiiIKoiIP/9k=" alt="Improved conversion rates"
                className="mb-4" />

              <h3 className="text-xl font-semibold text-gray-800">Improved Conversion Rates</h3>
            </div>

            {/* Enhanced Customer Lifetime Value */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition ml-50 w-100">
              <img src="data:image/jpeg;base64,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" alt="Enhanced customer lifetime value" className="mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Enhanced Customer Lifetime Value</h3>
            </div>

          </div>

          {/* Subtext */}
          <p className="mt-12 text-gray-700 text-lg max-w-3xl mx-auto">
            Growth isn’t about short-term spikes — it’s about sustainable scalability.
          </p>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Ready to Scale Your Ecommerce Business?
          </h2>

          {/* Content */}
          <p className="text-lg sm:text-xl mb-6 text-white">
            If you want measurable growth, stronger brand positioning, and consistent revenue acceleration, it’s time to work with experts who understand the modern ecommerce ecosystem.
          </p>
          <p className="text-lg sm:text-xl mb-6 text-white font-bold">
            Partner with Adkryoss managed by Clink Consultancy Services Private Limited and build a future-ready ecommerce growth engine.
          </p>
          <p className="text-lg sm:text-xl mb-10 font-medium text-white">
            Let’s transform clicks into customers — and customers into loyal advocates.
          </p>

          {/* CTA Button */}
          <button
            //  onClick={() => navigate("/contact")} 
            onClick={() => navigate("/contact?service=ecommerce")}

            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition">
            Explore Opportunities
          </button>

        </div>
      </section>

    </>
  );
};

export default Ecommerce;