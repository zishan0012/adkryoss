import React from 'react';
import { useNavigate } from "react-router-dom";
import EcommerceImage from "../../assets/Ecommerce.png";
import TheEcommerceGrowthChallengeImage from "../../assets/TheEcommerceGrowthChallenge.png"
import WhyChooseAdkryossImage from "../../assets/WhyChooseAdkryoss.png"
import FashionApparelImage from "../../assets/FashionApparel.png"
import BeautyCosmeticsImage from "../../assets/BeautyCosmetics.png"
import ElectronicsGadgetsImage from "../../assets/ElectronicsGadgets.png"
import FMCGGroceryImage from "../../assets/FMCGGrocery.png"
import HomeFurnitureImage from "../../assets/HomeFurniture.png"
import LuxuryLifestyleBrandsImage from "../../assets/LuxuryLifestyleBrands.png"
import ShopifyImage from "../../assets/Shopify.png"
import WooImage from "../../assets/Woo.png"
import BigImage from "../../assets/Big.png"
import FlipkartImage from "../../assets/Flipkart.png"
import AmazonImage from "../../assets/Amazon.png"
import MazentoImage from "../../assets/Mazento.png"
import IncreasedOrganicRevenueImage from "../../assets/IncreasedOrganicRevenue.png"
import HigherROASImage from "../../assets/HigherROAS.png"
import ReducedAcquisitionCostImage from "../../assets/ReducedAcquisitionCost.png"
import ImprovedConversionRatesImage from "../../assets/ImprovedConversionRates.png"
import EnhancedCustomerLifetimeValueImage from "../../assets/EnhancedCustomerLifetimeValue.png"
import HealthcareWellnessImage from "../../assets/HealthcareWellness.png"

const Ecommerce = () => {
  const navigate = useNavigate();
    return (
        <>
         





{/* <section
  className="bg-cover bg-center bg-no-repeat py-20 min-h-[500px] md:h-120 flex items-center relative text-white"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

   
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
</section> */}


<section
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')"
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  {/* Animated Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full relative z-10">

    {/* LEFT CONTENT */}
    <div className="text-left opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Ecommerce Digital Marketing Services
        </span>
      </h2>

      <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-6 text-blue-100">
        Drive Sales. Scale Faster. Dominate Marketplaces.
      </h3>

      <p className="text-gray-200 text-md leading-relaxed max-w-[600px]">
        The ecommerce landscape is evolving at lightning speed. Competition is fierce, customer journeys are fragmented, and performance marketing costs are rising.
        <br /><br />
        <span className="font-bold text-white">
          At Adkryoss managed by Clink Consultancy Services Private Limited
        </span>{" "}
        we build high-performance ecommerce marketing ecosystems that increase visibility, improve conversion rates, and maximize customer lifetime value. From SEO and paid media to CRO and retention automation — we engineer growth that compounds.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end opacity-0 animate-[fadeUp_1.2s_ease-out_forwards]">

      <div className="relative group w-full max-w-[420px] h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center">

        {/* Image Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <img
          src={EcommerceImage}
          alt="Ecommerce Digital Marketing Services"
          className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl 
                     transform group-hover:-translate-y-2 transition duration-500"
        />

      </div>

    </div>

  </div>

  {/* Custom Animations */}
  <style>
    {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

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
        <img src={FashionApparelImage} alt="Fashion & Apparel" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Fashion & Apparel</h3>
      </div>

      {/* Beauty & Cosmetics */}
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <img src={BeautyCosmeticsImage} alt="Beauty & Cosmetics" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Beauty & Cosmetics</h3>
      </div>

      {/* Electronics & Gadgets */}
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <img src={ElectronicsGadgetsImage} alt="Electronics & Gadgets" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Electronics & Gadgets</h3>
      </div>

      {/* FMCG & Grocery */}
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <img src={FMCGGroceryImage} alt="FMCG & Grocery" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">FMCG & Grocery</h3>
      </div>

      {/* Healthcare & Wellness */}
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <img src={HealthcareWellnessImage} alt="Healthcare & Wellness" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Healthcare & Wellness</h3>
      </div>

      {/* Home & Furniture */}
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <img src={HomeFurnitureImage} alt="Home & Furniture" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Home & Furniture</h3>
      </div>

      {/* Luxury & Lifestyle Brands */}
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition lg:col-start-2">
        <img src={LuxuryLifestyleBrandsImage} alt="Luxury & Lifestyle Brands" className="mb-4" />
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
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50">
        <img src={ShopifyImage} alt="Shopify" className="mb-4 h-30" />
        <h3 className="text-xl font-bold text-gray-800 ">Shopify</h3>
      </div>

  

      {/* WooCommerce */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50">
        <img src={WooImage} alt="WooCommerce" className="mb-4 h-30" />
        <h3 className="text-xl font-bold text-gray-800">WooCommerce</h3>
      </div>

      {/* Magento */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50">
        <img src={MazentoImage} alt="Magento" className="mb-4 h-30" />
        <h3 className="text-xl font-bold text-gray-800">Magento</h3>
      </div>

      {/* BigCommerce */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50">
        <img src={BigImage} alt="BigCommerce" className="mb-4 h-30" />
        <h3 className="text-xl font-bold text-gray-800">BigCommerce</h3>
      </div>

      {/* Amazon Seller Central */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50">
        <img src={AmazonImage} alt="Amazon Seller Central" className="mb-4 h-30" />
        <h3 className="text-xl font-bold text-gray-800">Amazon Seller Central</h3>
      </div>

      {/* Flipkart Seller Hub */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-50">
        <img src={FlipkartImage} alt="Flipkart Seller Hub" className="mb-4 h-30" />
        <h3 className="text-xl font-bold text-gray-800">Flipkart Seller Hub</h3>
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
        <img src={IncreasedOrganicRevenueImage} alt="Increased organic revenue" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Increased Organic Revenue</h3>
      </div>

      {/* Higher ROAS */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <img src={HigherROASImage} alt="Higher ROAS" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Higher ROAS</h3>
      </div>

      {/* Reduced Acquisition Cost */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <img src={ReducedAcquisitionCostImage} alt="Reduced acquisition cost" className="mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">Reduced Acquisition Cost</h3>
      </div>

      {/* Improved Conversion Rates */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition ml-50 w-100">
        <img src={ImprovedConversionRatesImage} alt="Improved conversion rates" 
        className="mb-4" />
       
        <h3 className="text-xl font-semibold text-gray-800">Improved Conversion Rates</h3>
      </div>

      {/* Enhanced Customer Lifetime Value */}
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition ml-50 w-100">
        <img src={EnhancedCustomerLifetimeValueImage} alt="Enhanced customer lifetime value" className="mb-4" />
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
   onClick={()=> navigate("/contact?service=ecommerce")}
    
    className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition">
      Explore Opportunities
    </button>
    
  </div>
</section>

        </>
    );
};

export default Ecommerce;