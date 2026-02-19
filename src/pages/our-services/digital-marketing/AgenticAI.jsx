import React from 'react';
import { useNavigate } from 'react-router-dom';
import AgenticImage from "../../../assets/Agentic.png";
import {
  Cpu,
  Database,
  Rocket,
  Target,
  Activity,
  TrendingUp,
  Search,
  PenTool,
  BarChart3,
  Wand2,
  MessageCircle,
  LineChart,
  Gauge,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building2,
  Landmark,
   Brain, MousePointerClick,  Crosshair
} from "lucide-react";



const AgenticAI = () => {
  const navigate = useNavigate();
    return (
        <>
       


<section
  className="bg-cover bg-center bg-no-repeat py-16 h-120 md:py-20"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>
  <div className="max-w-8xl mx-auto px-6  grid md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div className="text-left text-white space-y-6 mt-[-15px] ml-20">

      {/* H2 Heading */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white w-200">
  Agentic AI Digital Marketing Services  
      </h2>

      {/* H3 Subheading */}
      <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
       Autonomous Growth Systems. Intelligent Decisions. Real Business Impact. 
      </h3>

      {/* Paragraph */}
      <p className="text-white md:text-md leading-relaxed">
    AI is no longer a support tool — it’s the strategist, the optimizer, and the growth driver <br />
We build self-learning, goal-oriented marketing ecosystems that plan, execute, optimize, and scale campaigns in real time. <br /><br />


<h6 className='text-white md:text-md leading-relaxed text-bold'>Welcome to the era of Agentic AI Marketing. </h6>
    </p>

    
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="/contact"
                                className="bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Speak to Our Expert →
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-xl text-center"
                            >
                                Our Services →
                            </a>
                        </div>
</div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end hide-below-790">
      <img
        src={AgenticImage}
        alt="About Adkryoss"
        className="w-56 md:w-80 rounded-xl shadow-lg mr-10"
      />
    </div>

  </div>
</section>



<section className="bg-white py-10 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
        What is Agentic AI in Digital Marketing?
      </h2>

      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        <p>
          Agentic AI goes beyond automation. It operates as an intelligent decision-maker — analyzing data, predicting outcomes, adjusting campaigns, allocating budgets, personalizing content, and optimizing performance without constant manual intervention.
        </p>

        <p>
          Unlike traditional AI tools that require prompts and supervision, agentic systems act independently toward defined business goals.
        </p>

        <p>
          At Adkryoss managed by Clink Consultancy Services Private Limited, we engineer AI-driven marketing ecosystems that:
        </p>
      </div>

      {/* Points */}
      <div className="mt-8 space-y-4">
        {[
          "Identify growth opportunities automatically",
          "Predict user intent and conversion probability",
          "Optimize paid media budgets in real time",
          "Personalize customer journeys dynamically",
          "Improve ROI through continuous self-learning"
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-blue-600 text-xl mt-1">✔</span>
            <p className="text-gray-800 text-lg">{item}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xl font-semibold text-gray-900">
        This is performance marketing evolved.
      </p>

    </div>

    {/* Right Image */}
    <div>
      <img
        src="data:image/jpeg;base64,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"
        alt="Agentic AI in Digital Marketing"
        className="rounded-xl shadow-lg w-full h-auto object-cover"
      />
    </div>

  </div>

</section>





<section className="bg-white py-10 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14">
      Our Agentic AI Marketing Framework
    </h2>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Cpu className="w-14 h-14 text-blue-600 mb-6" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          AI Strategy Architecture
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We design a custom AI roadmap aligned with your revenue goals. From customer data mapping to predictive modeling, we build a structured intelligence layer for your brand.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Database className="w-14 h-14 text-blue-600 mb-6" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Data Intelligence & Integration
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Your CRM, website analytics, ad platforms, social data, and third-party tools are unified into a centralized intelligence engine. This enables smarter targeting and better attribution.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Rocket className="w-14 h-14 text-blue-600 mb-6" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Autonomous Campaign Execution
        </h3>
        <p className="text-gray-700 leading-relaxed">
          AI agents launch, monitor, test, and optimize campaigns across Google, Meta, LinkedIn, and other platforms — adjusting bids, creatives, and audience targeting in real time.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Target className="w-14 h-14 text-blue-600 mb-6" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Predictive Customer Targeting
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Using machine learning and behavioral data, we forecast which users are most likely to convert, churn, or upsell — and tailor messaging accordingly.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Activity className="w-14 h-14 text-blue-600 mb-6" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Real-Time Performance Optimization
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Campaign performance isn’t reviewed weekly. It’s optimized every second. Budget shifts, creative swaps, and bid strategies are adjusted automatically based on performance signals.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <TrendingUp className="w-14 h-14 text-blue-600 mb-6" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          Continuous Learning & Scale
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Our AI systems evolve with every campaign. The more data generated, the smarter and more efficient your marketing becomes.
        </p>
      </div>

    </div>

  </div>

</section>






<section className="bg-white py-10 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
      Our Agentic AI Digital Marketing Services
    </h2>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="group bg-gray-50 p-8 rounded-xl transition duration-300 hover:bg-[#198754]">
        <BarChart3 className="w-14 h-14 text-[#198754] mb-6 transition duration-300 group-hover:text-white" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 transition duration-300 group-hover:text-white">
          AI-Powered Performance Marketing
        </h3>
        <p className="text-gray-700 transition duration-300 group-hover:text-white">
          Autonomous paid media campaigns that optimize for conversions, revenue, and ROAS using predictive algorithms.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-gray-50 p-8 rounded-xl transition duration-300 hover:bg-[#198754]">
        <Search className="w-14 h-14 text-[#198754] mb-6 transition duration-300 group-hover:text-white" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 transition duration-300 group-hover:text-white">
          Intelligent SEO Systems
        </h3>
        <p className="text-gray-700 transition duration-300 group-hover:text-white">
          AI-driven keyword forecasting, search intent clustering, content gap identification, and dynamic on-page optimization.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-gray-50 p-8 rounded-xl transition duration-300 hover:bg-[#198754]">
        <Wand2 className="w-14 h-14 text-[#198754] mb-6 transition duration-300 group-hover:text-white" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 transition duration-300 group-hover:text-white">
          Smart Content Personalization
        </h3>
        <p className="text-gray-700 transition duration-300 group-hover:text-white">
          Website and ad creatives that adapt to user behavior, demographics, and purchase intent in real time.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-gray-50 p-8 rounded-xl transition duration-300 hover:bg-[#198754]">
        <MessageCircle className="w-14 h-14 text-[#198754] mb-6 transition duration-300 group-hover:text-white" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 transition duration-300 group-hover:text-white">
          Conversational AI & Lead Intelligence
        </h3>
        <p className="text-gray-700 transition duration-300 group-hover:text-white">
          AI chat systems that qualify leads, book appointments, nurture prospects, and integrate directly with CRM pipelines.
        </p>
      </div>

      {/* Card 5 */}
      <div className="group bg-gray-50 p-8 rounded-xl transition duration-300 hover:bg-[#198754]">
        <LineChart className="w-14 h-14 text-[#198754] mb-6 transition duration-300 group-hover:text-white" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 transition duration-300 group-hover:text-white">
          Predictive Analytics & Growth Modeling
        </h3>
        <p className="text-gray-700 transition duration-300 group-hover:text-white">
          Revenue forecasting, churn prediction, and demand estimation using advanced AI modeling.
        </p>
      </div>

      {/* Card 6 */}
      <div className="group bg-gray-50 p-8 rounded-xl transition duration-300 hover:bg-[#198754]">
        <Gauge className="w-14 h-14 text-[#198754] mb-6 transition duration-300 group-hover:text-white" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 transition duration-300 group-hover:text-white">
          AI-Driven CRO (Conversion Rate Optimization)
        </h3>
        <p className="text-gray-700 transition duration-300 group-hover:text-white">
          Behavioral heat mapping, predictive A/B testing, and UX adjustments powered by machine learning insights.
        </p>
      </div>

    </div>

  </div>

</section>




<section className="bg-white py-10 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Why Businesses Choose Agentic AI Marketing
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        Traditional marketing reacts. Agentic AI anticipates.
      </p>

      {/* Points */}
      <div className="space-y-4 mb-8">
        {[
          "Faster decision-making",
          "Reduced human dependency",
          "Smarter budget allocation",
          "Higher conversion accuracy",
          "Lower acquisition costs",
          "Scalable growth architecture"
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-[#198754] text-xl mt-1">✔</span>
            <p className="text-gray-800 text-lg">{item}</p>
          </div>
        ))}
      </div>

      <p className="text-lg text-gray-800 leading-relaxed">
        Adkryoss managed by Clink Consultancy Services Private Limited focuses on building long-term intelligent systems — not just running campaigns.
      </p>

    </div>

    {/* Right Image */}
    <div>
      <img
        src="data:image/jpeg;base64,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"
        alt="Agentic AI Business Growth"
        className="rounded-xl shadow-lg w-full h-auto object-cover"
      />
    </div>

  </div>

</section>







<section className="bg-white py-10 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Industries We Empower with AI-Driven Marketing
    </h2>

    <p className="text-lg text-gray-700 mb-14 max-w-3xl">
      Our AI frameworks adapt to industry-specific buyer journeys and compliance standards.
    </p>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <ShoppingCart className="w-14 h-14 text-[#198754] mb-6" />
        <h3 className="text-xl font-semibold text-gray-900">
          E-commerce & D2C Brands
        </h3>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Cpu className="w-14 h-14 text-[#198754] mb-6" />
        <h3 className="text-xl font-semibold text-gray-900">
          SaaS & Technology Companies
        </h3>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <HeartPulse className="w-14 h-14 text-[#198754] mb-6" />
        <h3 className="text-xl font-semibold text-gray-900">
          Healthcare & Wellness
        </h3>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <GraduationCap className="w-14 h-14 text-[#198754] mb-6" />
        <h3 className="text-xl font-semibold text-gray-900">
          Education & EdTech
        </h3>
      </div>

      {/* Card 5 */}
      <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Building2 className="w-14 h-14 text-[#198754] mb-6" />
        <h3 className="text-xl font-semibold text-gray-900">
          Real Estate & Infrastructure
        </h3>
      </div>

      {/* Card 6 */}
      <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
        <Landmark className="w-14 h-14 text-[#198754] mb-6" />
        <h3 className="text-xl font-semibold text-gray-900">
          Financial Services
        </h3>
      </div>

    </div>

  </div>

</section>







<section className="w-full  py-14 px-6 md:px-16 lg:px-4 text-white bg-cover bg-no-repeat"
style={{backgroundImage: "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/proven-sec-back.png')"}}
>

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold mb-16">
      Our Process
    </h2>

    {/* Process Grid */}
    <div className="grid md:grid-cols-5 gap-8">

      {/* Discover */}
      <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl hover:bg-[#197BB4] transition duration-300">
        <Search className="w-14 h-14 mb-6 text-green-400" />
        <h3 className="text-xl font-semibold mb-4">
          Discover
        </h3>
        <p className="text-blue-100 leading-relaxed">
          We analyze your business model, competitors, customer journey, and existing marketing ecosystem.
        </p>
      </div>

      {/* Design */}
      <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl hover:bg-[#197BB4] transition duration-300">
        <PenTool className="w-14 h-14 mb-6 text-green-400" />
        <h3 className="text-xl font-semibold mb-4">
          Design
        </h3>
        <p className="text-blue-100 leading-relaxed">
          We architect a customized Agentic AI framework aligned with your growth goals.
        </p>
      </div>

      {/* Deploy */}
      <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl hover:bg-[#197BB4] transition duration-300">
        <Rocket className="w-14 h-14 mb-6 text-green-400" />
        <h3 className="text-xl font-semibold mb-4">
          Deploy
        </h3>
        <p className="text-blue-100 leading-relaxed">
          AI systems are integrated across channels — search, social, website, CRM, and paid media.
        </p>
      </div>

      {/* Optimize */}
      <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl hover:bg-[#197BB4] transition duration-300">
        <Activity className="w-14 h-14 mb-6 text-green-400" />
        <h3 className="text-xl font-semibold mb-4">
          Optimize
        </h3>
        <p className="text-blue-100 leading-relaxed">
          Continuous machine learning refinement improves targeting, messaging, and performance metrics.
        </p>
      </div>

      {/* Scale */}
      <div className="bg-blue-800/60 backdrop-blur-sm p-8 rounded-xl hover:bg-[#197BB4] transition duration-300">
        <TrendingUp className="w-14 h-14 mb-6 text-green-400" />
        <h3 className="text-xl font-semibold mb-4">
          Scale
        </h3>
        <p className="text-blue-100 leading-relaxed">
          We expand what works, automate growth loops, and drive predictable revenue acceleration.
        </p>
      </div>

    </div>

  </div>

</section>




<section className="bg-gray-50 py-10 px-6 md:px-16 lg:px-4 mx-4 md:mx-10 lg:mx-20 rounded-xl my-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
      The Future of Digital Marketing is Autonomous
    </h2>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mb-10 max-w-3xl leading-relaxed">
      The next generation of brands will not rely on manual campaign management. 
      They will rely on intelligent systems that:
    </p>

    {/* Points Grid */}
    <div className="grid md:grid-cols-2 gap-8 mb-12">

      <div className="flex items-start gap-4">
        <Brain className="w-12 h-12 text-[#198754]" />
        <p className="text-xl font-semibold text-gray-900">
          Think in real time
        </p>
      </div>

      <div className="flex items-start gap-4">
        <MousePointerClick className="w-12 h-12 text-[#198754]" />
        <p className="text-xl font-semibold text-gray-900">
          Learn from every click
        </p>
      </div>

      <div className="flex items-start gap-4">
        <TrendingUp className="w-12 h-12 text-[#198754]" />
        <p className="text-xl font-semibold text-gray-900">
          Predict future behavior
        </p>
      </div>

      <div className="flex items-start gap-4">
        <Crosshair className="w-12 h-12 text-[#198754]" />
        <p className="text-xl font-semibold text-gray-900">
          Execute with precision
        </p>
      </div>

    </div>

    {/* Closing Statement */}
    <p className="text-lg text-gray-800 leading-relaxed max-w-4xl">
      Adkryoss managed by Clink Consultancy Services Private Limited helps businesses transition from traditional marketing to intelligent, autonomous growth ecosystems.
    </p>

  </div>

</section>


<section className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-14 px-6 md:px-16 lg:px-4 text-white">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
        Let AI Become Your Growth Engine
      </h2>

      <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed">
        <p className='text-white'>
          If your competitors are using automation, that’s not enough anymore. 
          The real advantage lies in AI that acts — not just assists.
        </p>

        <p className='text-white'>
          Build a marketing system that thinks, adapts, and scales on its own.
        </p>

        <p className="text-white font-semibold text-xl">
          Ready to activate Agentic AI for your brand?
        </p>

        <p className='text-white'>
          Let’s design your intelligent growth infrastructure today
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <button 
        onClick={()=> navigate("/contact?service=ai")}
        className="bg-[#198754] hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-lg transition duration-300 shadow-lg">
          Activate Agentic AI
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="data:image/jpeg;base64,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"
        alt="Agentic AI Growth"
        className="w-full max-w-lg rounded-xl shadow-2xl"
      />
    </div>

  </div>

</section>



        </>
    );
};

export default AgenticAI;
