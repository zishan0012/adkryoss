import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Skills from "../assets/skill.jpg";
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import blog4 from "../assets/blog4.png"
import blog5 from "../assets/blog5.png"
import blog6 from "../assets/blog6.png"
import blog7 from "../assets/blog7.png"
import blog8 from "../assets/blog8.png"
import blog9 from "../assets/blog9.png"
import blog10 from "../assets/blog10.png"
import TheFutureofDigitalMarketingImage from "../assets/TheFutureofDigitalMarketing.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const blogContent = [
  {
    id: 1,
    image: blog1,
    title: "The Future of Digital Marketing in 2026",
    description:
      "AI, automation and performance systems redefining scalable business growth.",
    link: "/blog/future",
  },
  {
    id: 2,
    image: blog2,
    title: "Performance Marketing Agency",
    description:
      "Data-driven frameworks that create predictable revenue growth.",
    link: "/blog/performance",
  },
  {
    id: 3,
    image: blog3,
    title: "AI in Digital Marketing 2026",
    description:
      "How artificial intelligence is transforming targeting and ROI.",
    link: "/blog/ai",
  },
  {
    id: 4,
    image: blog4,
    title: "Content Marketing in 2026",
    description: "Building authority, organic traffic and long-term revenue.",
    link: "/blog/content",
  },
  {
    id: 5,
    image: blog5,
    title: "Social Media Marketing in 2026",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/social",
  },
  {
    id: 6,
    image: blog6,
    title:
      "Conversion Rate Optimization (CRO): The Complete Guide to Turning Website Traffic into Revenue in 2026 ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/conversion",
  },
  {
    id: 7,
    image: blog7,
    title:
      "Marketing Automation & CRM Integration: The Scalable Growth Engine for Modern Businesses ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/marketing",
  },
  {
    id: 8,
    image: blog8,
    title:
      "E-Commerce Digital Marketing Trends in 2026: The Complete Growth Blueprint ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/Ecommerce",
  },
  {
    id: 9,
    image: blog9,
    title:
      "Local SEO & Hyperlocal Marketing in 2026: The Complete Growth Blueprint ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/local",
  },
  {
    id: 10,
    image: blog10,
    title:
      "Local SEO & Hyperlocal Marketing in 2026: The Complete Growth Blueprint ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/data",
  },
];

// Different hover background colors (light tints)
const hoverColors = [
  "rgba(219, 234, 254, 0.7)", // blue-100
  "rgba(220, 252, 231, 0.7)", // green-100
  "rgba(254, 249, 195, 0.7)", // yellow-100
  "rgba(237, 233, 254, 0.7)", // purple-100
  "rgba(255, 237, 213, 0.7)", // orange-100
  "rgba(254, 202, 202, 0.7)", // red-100
  "rgba(209, 250, 229, 0.7)", // teal-100
  "rgba(254, 215, 170, 0.7)", // amber-100
  "rgba(233, 213, 255, 0.7)", // violet-100
  "rgba(254, 240, 138, 0.7)", // lime-100
];

const Blog = () => {
  const navigate = useNavigate();

  // Refs
  const heroSectionRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroParagraphRef = useRef(null);
  const heroImageRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => st.kill());

      const isMobile = window.innerWidth < 768;
      const baseDuration = isMobile ? 0.9 : 1.2;
      const baseY = isMobile ? 30 : 50;
      const floatAmount = isMobile ? 4 : 8;
      const floatDuration = isMobile ? 3 : 2.5;

      // ----- HERO SECTION -----
      if (heroSectionRef.current) {
        gsap.set([heroHeadingRef.current, heroParagraphRef.current, heroImageRef.current], {
          opacity: 0,
          y: baseY,
        });
        gsap.set(heroImageRef.current, { scale: 0.95 });

        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          },
        });
        heroTl
          .to(heroHeadingRef.current, { opacity: 1, y: 0, duration: baseDuration, ease: "power2.out" })
          .to(heroParagraphRef.current, { opacity: 1, y: 0, duration: baseDuration * 0.9, ease: "power2.out" }, "-=0.6")
          .to(heroImageRef.current, { opacity: 1, y: 0, scale: 1, duration: baseDuration * 1.2, ease: "back.out(1.2)" }, "-=0.5");

        // Floating image
        gsap.to(heroImageRef.current, {
          y: -floatAmount,
          duration: floatDuration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ----- BLOG CARDS (staggered pop‑out) -----
      if (cardsRef.current.length) {
        gsap.set(cardsRef.current, { opacity: 0, y: 60, scale: 0.9 });

        ScrollTrigger.batch(cardsRef.current, {
          start: "top 85%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            stagger: 0.15,
            ease: "back.out(1.2)",
            overwrite: true,
          }),
          onLeave: batch => gsap.to(batch, {
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: baseDuration * 0.8,
            ease: "power2.in",
            overwrite: true,
          }),
          onEnterBack: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: baseDuration,
            stagger: 0.15,
            ease: "back.out(1.2)",
            overwrite: true,
          }),
          onLeaveBack: batch => gsap.to(batch, {
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: baseDuration * 0.8,
            ease: "power2.in",
            overwrite: true,
          }),
        });

        // Optional floating after entrance (very subtle)
        cardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.to(card, {
              y: -floatAmount * 0.5,
              duration: floatDuration + i * 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 2 + i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            });
          }
        });
      }

      ScrollTrigger.refresh();
    }, [heroSectionRef, cardsContainerRef]);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Hover effect with different background per card
  const handleCardHover = (e, isEnter, index) => {
    const card = e.currentTarget;
    // Get the original background color (assumed white)
    const originalBg = "rgb(255, 255, 255)"; // bg-white

    if (isEnter) {
      gsap.to(card, {
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2)",
        backgroundColor: hoverColors[index % hoverColors.length],
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    } else {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 6px -2px rgba(0,0,0,0.05)",
        backgroundColor: originalBg,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  return (
    <>
      
      {/* HERO SECTION */}
      {/* <section
        ref={heroSectionRef}
        className="relative py-24 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
           
            <div className="text-left">
              <h1 ref={heroHeadingRef} className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                The Future of Digital Marketing in 2026:
                <br />
                Data, AI & Performance at Scale
              </h1>
              <p ref={heroParagraphRef} className="text-blue-200 text-lg leading-relaxed max-w-xl">
                Digital marketing is evolving into a scalable, AI-powered
                performance ecosystem.
              </p>
            </div>

          
            <div className="flex justify-end">
            
            <div ref={heroImageRef} className="flex justify-end">
              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/04/digital-marketing-for-healthcare-industry.webp"
                alt="Future of Digital Marketing"
                className="w-[400px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>  */}



<section
 ref={heroSectionRef}
  className="relative bg-cover bg-center bg-no-repeat py-24 min-h-[660px] flex items-center text-white overflow-hidden"
  style={{
    backgroundImage:
      "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
  }}
>

 
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-black/80 to-indigo-950/90"></div>

  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

  <div className="relative max-w-7xl mx-auto px-6 z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

     
      <div className="text-left max-w-[600px]">

        <h1 ref={heroHeadingRef} className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            The Future of Digital Marketing in 2026:
          </span>
          <br />
          Data, AI & Performance at Scale
        </h1>

        <p ref={heroParagraphRef} className="text-gray-200 text-lg leading-relaxed">
          Digital marketing is evolving into a scalable, AI-powered
          performance ecosystem.
        </p>

      </div>

   
      <div className="flex justify-center lg:justify-end">

        <div ref={heroImageRef} className="relative group w-full max-w-[420px]">

        
          <div   className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <img
            src={TheFutureofDigitalMarketingImage}
            alt="Future of Digital Marketing"
            className="relative w-full object-contain drop-shadow-2xl 
                       transform group-hover:-translate-y-2 transition duration-500"
          />

        </div>

      </div>

    </div>
  </div>

  <style>
    {`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(30px); }
      }
    `}
  </style>

</section>


    

      {/* BLOG CARDS SECTION */}
      <section className="bg-gray-50 py-24">
        <div ref={cardsContainerRef} className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogContent.map((blog, index) => (
            <div
              key={blog.id}
              ref={el => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col"
              onMouseEnter={e => handleCardHover(e, true, index)}
              onMouseLeave={e => handleCardHover(e, false, index)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {blog.description}
                </p>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => navigate(blog.link)}
                    className="px-6 py-2.5 text-sm font-semibold text-gray-900 border border-gray-800 rounded-full bg-white hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;