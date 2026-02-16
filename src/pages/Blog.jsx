import React from "react";
import { useNavigate } from "react-router-dom";
import Skills from "../assets/skill.jpg"

const blogContent = [
  {
    id: 1,
    image: Skills,
    title: "The Future of Digital Marketing in 2026",
    description:
      "AI, automation and performance systems redefining scalable business growth.",
    link: "/blog/future",
  },
  {
    id: 2,
    image: Skills,
    title: "Performance Marketing Agency",
    description:
      "Data-driven frameworks that create predictable revenue growth.",
    link: "/blog/performance",
  },
  {
    id: 3,
    image: Skills,
    title: "AI in Digital Marketing 2026",
    description:
      "How artificial intelligence is transforming targeting and ROI.",
    link: "/blog/ai",
  },
  {
    id: 4,
    image: Skills,
    title: "Content Marketing in 2026",
    description:
      "Building authority, organic traffic and long-term revenue.",
    link: "/blog/content",
  },
  {
    id: 5,
    image: Skills,
    title: "Social Media Marketing in 2026",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/social",
  },
  {
    id: 6,
    image: Skills,
    title: "Conversion Rate Optimization (CRO): The Complete Guide to Turning Website Traffic into Revenue in 2026 ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/conversion",
  },
  {
    id: 7,
    image: Skills,
    title: "Marketing Automation & CRM Integration: The Scalable Growth Engine for Modern Businesses ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/marketing",
  },
  {
    id: 8,
    image: Skills,
    title: "E-Commerce Digital Marketing Trends in 2026: The Complete Growth Blueprint ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/Ecommerce",
  },
  {
    id: 9,
    image: Skills,
    title: "Local SEO & Hyperlocal Marketing in 2026: The Complete Growth Blueprint ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/local",
  },
  {
    id: 10,
    image: Skills,
    title: "Local SEO & Hyperlocal Marketing in 2026: The Complete Growth Blueprint ",
    description:
      "Performance-led strategies that drive measurable business growth.",
    link: "/blog/data",
  },

];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="relative py-24 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.techmagnate.com/wp-content/themes/techmagnate/images/services-images/service-back-img-mob.webp')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            {/* LEFT CONTENT */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                The Future of Digital Marketing in 2026:
                <br />
                Data, AI & Performance at Scale
              </h1>

              <p className="text-blue-200 text-lg leading-relaxed max-w-xl">
                Digital marketing is evolving into a scalable,
                AI-powered performance ecosystem.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <img
                src="https://www.techmagnate.com/wp-content/uploads/2025/04/digital-marketing-for-healthcare-industry.webp"
                alt="Future of Digital Marketing"
                className="w-[400px] object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogContent.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
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

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => navigate(blog.link)}
                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300"
                  >
                    →
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
