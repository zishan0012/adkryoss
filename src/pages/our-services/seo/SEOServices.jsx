import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Zap, BarChart3, Users, Globe, Shield, Award, CheckCircle2, ArrowRight, Search, Code, FileText, Link2, MapPin, Building2, Heart, GraduationCap, ShoppingCart, Briefcase, ChevronRight } from 'lucide-react';

const SEOServices = () => {
    const approaches = [
        {
            icon: <Search size={32} />,
            title: "SEO Audit & Competitive Intelligence",
            points: [
                "Technical health analysis",
                "Crawl & index evaluation",
                "Site architecture review",
                "Competitor gap analysis",
                "Keyword opportunity mapping",
                "Search intent segmentation"
            ]
        },
        {
            icon: <Target size={32} />,
            title: "Keyword Strategy & Search Intent Mapping",
            points: [
                "Commercial intent keywords",
                "Transactional & high-conversion queries",
                "Informational clusters",
                "Topic authority mapping",
                "Long-tail & semantic variations",
                "AI-driven search behavior trends"
            ]
        },
        {
            icon: <Code size={32} />,
            title: "Technical SEO Optimization",
            points: [
                "Core Web Vitals optimization",
                "Site speed enhancement",
                "Mobile-first optimization",
                "Structured data & schema implementation",
                "Crawl budget optimization",
                "XML sitemap & robots.txt refinement",
                "Canonical & duplicate issue resolution",
                "HTTPS & security configuration"
            ]
        },
        {
            icon: <FileText size={32} />,
            title: "On-Page SEO & Content Optimization",
            points: [
                "Meta titles & descriptions",
                "Header architecture",
                "Internal linking frameworks",
                "Image optimization",
                "Semantic keyword placement",
                "Conversion-focused content structure",
                "UX-aligned content formatting"
            ]
        },
        {
            icon: <FileText size={32} />,
            title: "Content Strategy & Authority Building",
            points: [
                "Topic clusters & pillar pages",
                "Thought leadership blogs",
                "Industry-specific landing pages",
                "Data-driven content assets",
                "Evergreen resource hubs",
                "SEO-friendly service pages"
            ]
        },
        {
            icon: <Link2 size={32} />,
            title: "High-Quality Link Building & Digital PR",
            points: [
                "Niche-relevant backlinks",
                "Editorial placements",
                "Industry citations",
                "Guest publications",
                "Digital PR campaigns",
                "Strategic partnerships"
            ]
        },
        {
            icon: <MapPin size={32} />,
            title: "Local SEO Services",
            points: [
                "Google Business Profile",
                "Local citations",
                "NAP consistency",
                "Location-based landing pages",
                "Hyperlocal keyword targeting",
                "Reputation & review management"
            ]
        },
        {
            icon: <Building2 size={32} />,
            title: "Enterprise SEO Solutions",
            points: [
                "Large-scale site architecture optimization",
                "Automation-driven SEO processes",
                "Multi-location SEO",
                "Multi-language SEO",
                "International SEO strategies",
                "Advanced analytics & dashboards"
            ]
        }
    ];

    const industries = [
        { icon: <ShoppingCart size={24} />, name: "E-commerce" },
        { icon: <GraduationCap size={24} />, name: "Education & EdTech" },
        { icon: <Heart size={24} />, name: "Healthcare" },
        { icon: <Building2 size={24} />, name: "Real Estate" },
        { icon: <Briefcase size={24} />, name: "Finance & FinTech" },
        { icon: <Code size={24} />, name: "SaaS & Technology" },
        { icon: <Building2 size={24} />, name: "Manufacturing" },
        { icon: <Users size={24} />, name: "Professional Services" }
    ];

    const processSteps = [
        "Business Discovery & Goal Mapping",
        "SEO Blueprint Development",
        "Execution & Technical Implementation",
        "Content & Authority Building",
        "Performance Monitoring & Optimization",
        "Monthly Reporting & Strategic Refinement"
    ];

    const differentiators = [
        {
            icon: <Target size={28} />,
            title: "Performance-Focused SEO",
            description: "We align rankings with revenue, not vanity metrics."
        },
        {
            icon: <BarChart3 size={28} />,
            title: "Data-Led Decision Making",
            description: "Every action is backed by analytics and search insights."
        },
        {
            icon: <Zap size={28} />,
            title: "AI & Future-Ready Optimization",
            description: "We optimize for evolving search technologies and generative AI visibility."
        },
        {
            icon: <Globe size={28} />,
            title: "Integrated Marketing Thinking",
            description: "SEO works best when aligned with content, UX, CRO, and branding."
        }
    ];

    const metrics = [
        "Organic Traffic Growth",
        "Keyword Ranking Movement",
        "Conversion Rate from Organic",
        "Bounce Rate & Engagement",
        "Backlink Authority Score",
        "Domain Growth Metrics",
        "Lead & Revenue Attribution"
    ];

    const faqs = [
        {
            question: "How long does SEO take to show results?",
            answer: "SEO is a long-term strategy. Initial improvements can be visible within 3–4 months, while sustainable growth builds over 6–12 months depending on competition."
        },
        {
            question: "Do you guarantee rankings?",
            answer: "No ethical agency guarantees rankings. We guarantee strategic execution, transparency, and measurable growth."
        },
        {
            question: "Is SEO better than paid ads?",
            answer: "SEO builds sustainable, long-term traffic. Paid ads deliver instant results. The best strategy integrates both."
        }
    ];

    return (
        <div style={{ backgroundColor: '#fff' }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                color: '#fff',
                padding: '100px 0 80px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: '56px',
                            fontWeight: '800',
                            marginBottom: '24px',
                            lineHeight: '1.2'
                        }}>
                            SEO Services
                        </h1>
                        <p style={{
                            fontSize: '24px',
                            marginBottom: '16px',
                            color: '#fff',
                            fontWeight: '600',
                            opacity: 0.95
                        }}>
                            Drive Organic Growth. Build Authority. Dominate Search.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#fff',
                            opacity: 1,
                            marginBottom: '40px'
                        }}>
                            In today's search-first world, visibility is not optional — it's survival. Customers don't scroll endlessly; they click what ranks, what builds trust, and what delivers value instantly.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#fff',
                            opacity: 1,
                            marginBottom: '40px'
                        }}>
                            Adkryoss managed by Clink Consultancy Services pvt.ltd delivers data-driven, performance-focused SEO services designed to increase traffic, improve rankings, and convert search intent into measurable revenue.
                        </p>
                        <div style={{
                            fontSize: '22px',
                            fontWeight: '700',
                            marginTop: '32px',
                            padding: '24px',
                            background: 'rgba(255,255,255,0.15)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff'
                        }}>
                            We don't chase rankings.<br />
                            We build long-term organic growth engines.
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SEO Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            Why SEO is a Growth Multiplier
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#666',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: '1.8'
                        }}>
                            Search engines are evolving. AI-driven search, zero-click results, voice search, semantic intent mapping — the game has changed.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px',
                        marginTop: '40px'
                    }}>
                        {[
                            { icon: <Users size={32} />, text: "Understanding user intent, not just keywords" },
                            { icon: <Award size={32} />, text: "Creating topical authority, not random blogs" },
                            { icon: <Globe size={32} />, text: "Building search ecosystems, not isolated pages" },
                            { icon: <Zap size={32} />, text: "Optimizing for AI & search experience" }
                        ].map((item, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                padding: '32px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                width: 'calc(25% - 23px)',
                                minWidth: '250px',
                                flexGrow: 1,
                                maxWidth: '300px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,102,204,0.18)';
                                    e.currentTarget.querySelector('.icon-div').style.transform = 'scale(1.1) rotate(5deg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                    e.currentTarget.querySelector('.icon-div').style.transform = 'scale(1) rotate(0deg)';
                                }}>
                                <div className="icon-div" style={{ color: '#0066CC', marginBottom: '16px', transition: 'transform 0.3s ease' }}>
                                    {item.icon}
                                </div>
                                <p style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#1a1a1a',
                                    lineHeight: '1.6'
                                }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        textAlign: 'center',
                        marginTop: '50px',
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#0066CC'
                    }}>
                        That's exactly how we approach it.
                    </div>
                </div>
            </section>

            {/* Our SEO Approach */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            Our SEO Approach
                        </h2>
                        <p style={{
                            fontSize: '20px',
                            color: '#0066CC',
                            fontWeight: '600'
                        }}>
                            Strategic. Technical. Performance-Oriented.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            color: '#666',
                            marginTop: '12px'
                        }}>
                            We follow a structured, insight-led methodology aligned with modern search algorithms and business goals.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '40px'
                    }}>
                        {approaches.map((approach, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                border: '2px solid #f0f0f0',
                                borderRadius: '16px',
                                padding: '32px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                width: 'calc(25% - 30px)',
                                minWidth: '300px',
                                flexGrow: 1,
                                maxWidth: '380px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#0066CC';
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,102,204,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#f0f0f0';
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    marginBottom: '24px'
                                }}>
                                    {approach.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: '#1a1a1a',
                                    marginBottom: '20px'
                                }}>
                                    {index + 1}. {approach.title}
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {approach.points.map((point, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '12px',
                                            marginBottom: '12px',
                                            fontSize: '15px',
                                            color: '#555',
                                            lineHeight: '1.6'
                                        }}>
                                            <CheckCircle2 size={18} style={{ color: '#0066CC', marginTop: '2px', flexShrink: 0 }} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '50px',
                        padding: '32px',
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        borderRadius: '16px',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#1a1a1a'
                        }}>
                            Every keyword is aligned to business outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            Industries We Serve
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            color: '#666'
                        }}>
                            We adapt SEO frameworks to industry-specific buying behavior and search patterns.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '24px'
                    }}>
                        {industries.map((industry, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                padding: '28px',
                                borderRadius: '12px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                border: '2px solid transparent',
                                width: 'calc(25% - 18px)',
                                minWidth: '200px',
                                flexGrow: 1,
                                maxWidth: '280px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#0066CC';
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,102,204,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <div style={{ color: '#0066CC', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>
                                    {industry.icon}
                                </div>
                                <p style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#1a1a1a'
                                }}>
                                    {industry.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Framework */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            Our Process Framework
                        </h2>
                        <p style={{
                            fontSize: '20px',
                            color: '#0066CC',
                            fontWeight: '600',
                            marginBottom: '12px'
                        }}>
                            Discover → Strategize → Optimize → Scale → Measure
                        </p>
                        <p style={{
                            fontSize: '16px',
                            color: '#666'
                        }}>
                            Transparent dashboards. Clear KPIs. Measurable growth.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '24px'
                    }}>
                        {processSteps.map((step, index) => (
                            <div key={index} style={{
                                background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                color: '#fff',
                                padding: '32px 24px',
                                borderRadius: '12px',
                                position: 'relative',
                                overflow: 'hidden',
                                width: 'calc(33.333% - 16px)',
                                minWidth: '250px',
                                flexGrow: 1,
                                maxWidth: '350px'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    fontSize: '48px',

                                    fontWeight: '800',
                                    opacity: 0.15
                                }}>
                                    {index + 1}
                                </div>
                                <p style={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    position: 'relative',
                                    zIndex: 2,
                                    color: '#fff'
                                }}>
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            What Makes Us Different?
                        </h2>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '32px'
                    }}>
                        {differentiators.map((item, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                padding: '40px 32px',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                width: 'calc(50% - 16px)',
                                minWidth: '300px',
                                flexGrow: 1,
                                maxWidth: '550px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,102,204,0.18)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                }}>
                                <div style={{
                                    color: '#0066CC',
                                    marginBottom: '20px'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: '#1a1a1a',
                                    marginBottom: '12px'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666',
                                    lineHeight: '1.7'
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Metrics */}
            <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            SEO Metrics We Track
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#0066CC',
                            fontWeight: '600'
                        }}>
                            Growth is measurable. And we prove it.
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px'
                    }}>
                        {metrics.map((metric, index) => (
                            <div key={index} style={{
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                                padding: '24px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                width: 'calc(25% - 15px)',
                                minWidth: '250px',
                                flexGrow: 1,
                                maxWidth: '300px'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #0066CC 0%, #004999 100%)';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,102,204,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                                    e.currentTarget.style.color = '#1a1a1a';
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}>
                                <BarChart3 size={24} style={{ flexShrink: 0 }} />
                                <span style={{
                                    fontSize: '16px',
                                    fontWeight: '600'
                                }}>
                                    {metric}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '20px'
                        }}>
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} style={{
                                background: '#fff',
                                padding: '32px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.transform = 'translateX(10px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    color: '#1a1a1a',
                                    marginBottom: '12px'
                                }}>
                                    {faq.question}
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666',
                                    lineHeight: '1.7'
                                }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                color: '#fff',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: '700',
                        marginBottom: '24px',
                        color: '#fff'
                    }}>
                        Ready to Dominate Search?
                    </h2>
                    <p style={{
                        fontSize: '20px',
                        marginBottom: '16px',
                        color: '#fff',
                        opacity: 1
                    }}>
                        Organic traffic is the most powerful digital asset you can build.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        marginBottom: '40px',
                        color: '#fff',
                        opacity: 1
                    }}>
                        If you're ready to move beyond temporary boosts and build long-term digital authority,
                    </p>
                    <p style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        marginBottom: '40px',
                        color: '#fff'
                    }}>
                        Partner with Adkryoss managed by Clink Consultancy Services pvt.ltd.
                    </p>
                    <p style={{
                        fontSize: '18px',
                        marginBottom: '40px',
                        color: '#fff',
                        opacity: 1
                    }}>
                        Let's transform search visibility into consistent business growth.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: '#fff',
                        color: '#0066CC',
                        padding: '18px 40px',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                        Get Started Today
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SEOServices;
