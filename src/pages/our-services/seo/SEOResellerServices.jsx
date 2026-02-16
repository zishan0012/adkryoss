import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Shield,
  Users,
  Settings,
  Target,
  Search,
} from "lucide-react";

const SEOResellerServices = () => {
  const offerings = [
    {
      title: "White-Label SEO Execution",
      icon: <Settings size={32} />,
      desc: "End-to-end SEO delivered under your agency’s brand — from strategy to reporting.",
    },
    {
      title: "Dedicated SEO Team",
      icon: <Users size={32} />,
      desc: "Access SEO strategists, technical experts, content specialists, and link-building professionals.",
    },
    {
      title: "Transparent Reporting",
      icon: <BarChart3 size={32} />,
      desc: "Custom-branded reports with real metrics — rankings, traffic growth, leads, and performance insights.",
    },
    {
      title: "Scalable Delivery Model",
      icon: <Target size={32} />,
      desc: "From 1 client to 100+ clients — our systems scale as your agency grows.",
    },
  ];

  const whoItsFor = [
    "Digital marketing agencies",
    "Web development companies",
    "Freelancers managing multiple SEO clients",
    "Branding agencies adding SEO services",
    "International agencies outsourcing SEO",
  ];
  const resellerSolutions = [
    {
      title: "SEO Strategy & Roadmap",
      points: [
        "Competitor benchmarking",
        "Keyword gap analysis",
        "Search intent mapping",
        "Custom SEO growth plan",
      ],
    },
    {
      title: "On-Page SEO",
      points: [
        "Technical optimization",
        "Schema implementation",
        "Content structuring",
        "Internal linking frameworks",
      ],
    },
    {
      title: "Technical SEO",
      points: [
        "Site audits & error fixes",
        "Core Web Vitals optimization",
        "Crawlability & indexability",
        "Site architecture improvements",
      ],
    },
    {
      title: "Content Marketing",
      points: [
        "SEO-optimized blog creation",
        "Landing page content",
        "Topic cluster strategy",
        "AI-assisted + human-optimized writing",
      ],
    },
    {
      title: "Authority Building",
      points: [
        "High-quality backlinks",
        "Digital PR outreach",
        "Niche edits & guest posts",
        "Brand mentions",
      ],
    },
    {
      title: "Local & Enterprise SEO",
      points: [
        "Google Business Profile optimization",
        "Multi-location SEO",
        "Enterprise site management",
        "Large-scale technical implementation",
      ],
    },
  ];
  const resellerWorkflow = [
    {
      step: "Onboarding & Discovery",
      desc: "We understand your agency goals, client niche, and pricing model.",
    },
    {
      step: "Strategy Development",
      desc: "A custom SEO roadmap is prepared for each client.",
    },
    {
      step: "Execution",
      desc: "Our team handles audits, content, links, and optimization.",
    },
    {
      step: "Reporting & Scaling",
      desc: "Branded monthly reports with clear KPIs and strategic recommendations.",
    },
  ];
  const differentiators = [
    {
      title: "Performance-First Approach",
      desc: "We track rankings, traffic, leads, and ROI — not vanity metrics.",
    },
    {
      title: "Process-Driven Execution",
      desc: "Clear SOPs, defined timelines, and measurable milestones.",
    },
    {
      title: "Ethical SEO Only",
      desc: "White-hat techniques aligned with Google’s latest updates.",
    },
    {
      title: "Modern SEO Stack",
      desc: "AI insights, automation tools, and real-time analytics to stay ahead of algorithm shifts.",
    },
    {
      title: "Complete Confidentiality",
      desc: "100% white-label delivery. Your brand always stays in front.",
    },
  ];
  const seoTools = [
    "Google Search Console & Analytics 4",
    "SEMrush / Ahrefs",
    "Screaming Frog",
    "Surfer SEO",
    "AI-driven content research tools",
    "Advanced reporting dashboards",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex items-center min-h-[500px] md:h-120 bg-cover bg-center bg-no-repeat relative"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "60px",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div>
              <h1 className="text-[28px] md:text-[36px] font-bold mb-3 tracking-tight">
                SEO Reseller Services
              </h1>

              <p className="text-[20px] md:text-[24px] font-medium mb-4 text-[#22c55e]">
                Scale Your Agency. Deliver Results. Stay Invisible.
              </p>

              <p className="text-[16px] md:text-[18px] leading-[1.8] text-slate-300 mb-6 max-w-[540px]">
                White-label SEO solutions designed to help agencies expand
                revenue, retain clients, and dominate search — without hiring an
                in-house team.
              </p>

              <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#3b82f6",
                    color: "#ffffff",
                    padding: "16px 42px",
                    borderRadius: "50px",
                    fontSize: "17px",
                    fontWeight: "800",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#22c55e";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 32px rgba(34,197,94,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#3b82f6";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Speak to an Expert →
                </a>

                <a
                  href="#solutions"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "transparent",
                    color: "#3b82f6",
                    padding: "16px 42px",
                    borderRadius: "50px",
                    border: "2px solid #3b82f6",
                    fontSize: "17px",
                    fontWeight: "800",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#22c55e";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#22c55e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#3b82f6";
                    e.currentTarget.style.borderColor = "#3b82f6";
                  }}
                >
                  Our Solutions →
                </a>
              </div>
            </div>
            {/* <div
        style={{
          width: "100%",
          height: "360px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#cbd5e1",
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        Image Placeholder
      </div> */}
          </div>
        </div>
      </div>

      {/* WHY */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        {/* Why SEO Reseller Services */}
        <div
          style={{
            padding: "90px 0",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="container">
            {/* Heading */}
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto 50px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  marginBottom: "24px",
                  color: "#0f172a",
                }}
              >
                Why SEO Reseller Services?
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                The demand for SEO is exploding — but building an expert team,
                investing in tools, and managing execution can slow down your
                growth.
              </p>
            </div>

            {/* Main Content */}
            <div
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
                background: "#f8fafc",
                padding: "50px",
                borderRadius: "24px",
                border: "1px solid #e2e8f0",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#334155",
                  marginBottom: "28px",
                }}
              >
                That’s where{" "}
                <strong>
                  Adkryoss managed by Clink Consultancy Services Private Limited
                </strong>{" "}
                steps in as your strategic backend SEO partner. We work silently
                in the background while you take full credit in front of your
                clients.
              </p>

              {/* Focus Split */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "30px",
                  marginTop: "40px",
                }}
              >
                {/* You */}
                <div
                  style={{
                    background: "#ffffff",
                    padding: "35px",
                    borderRadius: "20px",
                    border: "1px solid #e2e8f0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(59, 130, 246, 0.18);";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      marginBottom: "14px",
                      color: "#2563eb",
                    }}
                  >
                    You Focus On
                  </h3>

                  <p
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.7",
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Acquiring and managing clients.
                  </p>
                </div>

                {/* Us */}
                <div
                  style={{
                    height: "40vh",
                    background: "#ffffff",
                    padding: "35px",
                    borderRadius: "20px",
                    border: "1px solid #e2e8f0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 34px rgba(30, 64, 175, 0.25);";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      marginBottom: "14px",
                      color: "#16a34a",
                    }}
                  >
                    We Focus On
                  </h3>

                  <p
                    style={{
                      fontSize: "17px",
                      lineHeight: "1.7",
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Rankings, traffic, and measurable ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            What We Offer
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            {offerings.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "40px",
                  borderRadius: "24px",
                  width: "320px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.background = "#007f7a";
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(59,130,246,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.background = "fff";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ color: "#3b82f6", marginBottom: "20px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "800" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "16px", color: "#475569" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{
          padding: "110px 0",
          background: "#eff6ff",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 70px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "18px",
                color: "#0f172a",
              }}
            >
              Our SEO Reseller Solutions
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#334155",
              }}
            >
              We don’t just offer SEO services. We offer structured growth
              systems.
            </p>
          </div>

          {/* Solution Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "35px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {resellerSolutions.map((item, index) => (
              <div
                key={index}
                style={{
                  height: "50vh",
                  background: "#ffffff",
                  padding: "42px",
                  borderRadius: "22px",
                  border: "1px solid #dbeafe",
                  boxShadow: "0 12px 30px rgba(59,130,246,0.12)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 22px 45px rgba(59,130,246,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(59,130,246,0.12)";
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: "#2563eb",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    marginBottom: "20px",
                  }}
                >
                  {index + 1}
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    marginBottom: "18px",
                    color: "#0f172a",
                  }}
                >
                  {item.title}
                </h3>

                <ul style={{ paddingLeft: "18px", margin: 0 }}>
                  {item.points.map((pt, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                        color: "#475569",
                        marginBottom: "10px",
                      }}
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{
          padding: "110px 0",
          background: "#f9fafb",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 80px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "18px",
                color: "#0f172a",
              }}
            >
              How Our Reseller Model Works
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              A structured, system-driven SEO workflow designed for scale and
              consistency.
            </p>
          </div>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            {resellerWorkflow.map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                }}
              >
                {/* Step Circle */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "#2563eb",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "18px",
                    margin: "0 auto 20px",
                    boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
                  }}
                >
                  {index + 1}
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    marginBottom: "12px",
                    color: "#0f172a",
                  }}
                >
                  {item.step}
                </h3>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#475569",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "70px auto 0",
              padding: "40px",
              background: "#ffffff",
              borderRadius: "24px",
              border: "1px solid #e5e7eb",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(34,197,94,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#334155",
                margin: 0,
              }}
            >
              Through{" "}
              <strong>
                Adkryoss managed by Clink Consultancy Services Private Limited
              </strong>
              , agencies get a structured, system-driven SEO workflow that
              ensures consistency and predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* WHO ITS FOR */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Who Is This For?
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            {whoItsFor.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 35px",
                  background: "#eff6ff",
                  borderRadius: "50px",
                  fontWeight: "700",
                  border: "1px solid #e2e8f0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#3b82f6";
                  e.currentTarget.style.transform = "translateY(-8px);";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(34,197,94,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#eff6ff";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "110px 0",
          background: "#C0C0C0",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 70px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "18px",
                color: "#0f172a",
              }}
            >
              What Makes Us Different
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              Built for agencies that value performance, transparency, and
              long-term growth.
            </p>
          </div>

          {/* Differentiator Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {differentiators.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  padding: "40px",
                  borderRadius: "22px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(15,23,42,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(15,23,42,0.06)";
                }}
              >
                {/* Accent bar */}
                <div
                  style={{
                    width: "42px",
                    height: "4px",
                    background: "#22c55e",
                    borderRadius: "4px",
                    marginBottom: "18px",
                  }}
                ></div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    marginBottom: "12px",
                    color: "#0f172a",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "#475569",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <div
        style={{
          padding: "110px 0",
          background: "linear-gradient(180deg, #e5e7eb 0%, #ffffff 65%)",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto 70px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                marginBottom: "16px",
                color: "#0f172a",
              }}
            >
              Industries We Serve
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              Every industry has unique search behavior. Our strategies adapt
              accordingly.
            </p>
          </div>

          {/* Industries Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "22px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              "E-commerce",
              "SaaS & Tech",
              "Healthcare",
              "Real Estate",
              "Education",
              "Finance",
              "B2B Services",
            ].map((industry, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  padding: "22px 20px",
                  borderRadius: "14px",
                  border: "1px solid #e5e7eb",
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#0f172a",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#22c55e";
                  e.currentTarget.style.color = "#22c55e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.color = "#0f172a";
                }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tools & Technologies We Leverage */}
      <div
        style={{
          padding: "110px 0",
          background: "#f9fafb",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 60px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                marginBottom: "16px",
                color: "#0f172a",
              }}
            >
              Tools & Technologies We Leverage
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#475569",
              }}
            >
              We use industry-leading tools combined with proven SEO processes
              to deliver measurable results at scale.
            </p>
          </div>

          {/* Tools Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {seoTools.map((tool, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  padding: "22px 24px",
                  borderRadius: "14px",
                  border: "1px solid #e5e7eb",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#0f172a",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#22c55e";
                  e.currentTarget.style.color = "#22c55e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.color = "#0f172a";
                }}
              >
                {tool}
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "70px auto 0",
              padding: "40px",
              background: "#ffffff",
              borderRadius: "20px",
              border: "1px solid #e5e7eb",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#334155",
                margin: 0,
              }}
            >
              <strong>
                Adkryoss managed by Clink Consultancy Services Private Limited
              </strong>{" "}
              blends human strategy with automation to create sustainable
              organic growth systems.
            </p>
          </div>
        </div>
      </div>
      {/* Benefits of Partnering With Us */}
      <div
        style={{
          padding: "120px 0",
          background: "linear-gradient(135deg, #0b1220 0%, #111827 100%)",
          color: "#ffffff",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto 70px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: "44px",
                fontWeight: "800",
                marginBottom: "18px",
              }}
            >
              Benefits of Partnering With Us
            </h2>
          </div>

          {/* Benefits Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {[
              "Increase recurring revenue",
              "Reduce operational costs",
              "Deliver faster results",
              "Improve client retention",
              "Expand service offerings",
              "Scale without overhead",
            ].map((benefit, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "16px",
                  padding: "22px 26px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(34,197,94,0.15)";
                  e.currentTarget.style.borderColor = "#22c55e";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Check Icon */}
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    color: "#0b1220",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "900",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>

                {benefit}
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "70px auto 0",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              SEO isn’t a one-time campaign. It’s a long-term growth engine.
              With the right backend partner, it becomes your most profitable
              service.
            </p>
          </div>
        </div>
      </div>
      {/* FINAL CTA */}
      <section
        style={{
          padding: "100px 0",
          textAlign: "center",
          background: "linear-gradient(135deg, #3b82f6, #1e40af)",
          color: "#fff",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: "48px", fontWeight: "800" }}>
            Ready to Scale Your Agency?
          </h2>

          <p
            style={{
              fontSize: "22px",
              margin: "30px auto",
              maxWidth: "800px",
              color: "#ffffff",
            }}
          >
            Turn SEO into your most profitable service — without hiring or
            overhead.
          </p>

          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#fff",
              color: "#3b82f6",
              padding: "20px 50px",
              borderRadius: "50px",
              fontWeight: "800",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#22c55e";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 14px 32px rgba(34,197,94,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Partner With Us <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEOResellerServices;
