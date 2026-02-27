import D2Cfashionsnap from '../assets/casestudy/D2Cfashionsnapshot.png';
import D2Cfashionhero from '../assets/casestudy/D2Cfashionhero.png';
import realestatesnap from '../assets/casestudy/realestatesnapshot.png';
import realestatehero from '../assets/casestudy/realestatehero.png';
import educationsnap from '../assets/casestudy/educationsnapshot.png';
import educationhero from '../assets/casestudy/educationhero.png';
import lifestylesnap from '../assets/casestudy/Rebranding&SocialMediasnapshot.png';
import lifestylehero from '../assets/casestudy/Rebranding&SocialMediahero.png';
import b2bsnap from '../assets/casestudy/B2Bsnapshot.png';
import b2bhero from '../assets/casestudy/B2Bhero.png';
import ecommercesnap from '../assets/casestudy/D2Cecommercesnapshot.png';
import ecommercehero from '../assets/casestudy/D2Cecommercehero.png';

const caseStudiesData = [
    {
        slug: "d2c-fashion-growth",
        title: "Scaling a D2C Fashion Brand from ₹0 to ₹1.2 Cr Revenue in 6 Months",
        hero: {
            title: "Performance Marketing + SEO = Revenue Growth Engine",
            subtitle: "Turning paid traffic into predictable sales.",
            bgImage: D2Cfashionhero
        },
        snapshot: {
            industry: "D2C Fashion (Women’s Wear)",
            stage: "Early-stage Startup",
            market: "Pan-India",
            objective: "Revenue Growth & Brand Visibility",
            cardSummary: "How we scaled a startup women's wear brand into a revenue powerhouse using full-funnel marketing.",
            image: D2Cfashionsnap
        },
        challenge: [
            "No structured SEO strategy",
            "High customer acquisition cost (CAC)",
            "Low repeat purchase rate",
            "No funnel optimization"
        ],
        strategy: [
            "SEO foundation build (technical + content)",
            "Paid ads structured under performance clusters",
            "CRO-based landing page optimization",
            "Email automation for retention",
            "Meta & Google audience segmentation"
        ],
        execution: [
            {
                phase: "Technical SEO Optimization",
                steps: [
                    "Site speed improvement (Core Web Vitals optimized)",
                    "Structured schema implementation",
                    "Keyword clustering strategy"
                ]
            },
            {
                phase: "Performance Marketing Setup",
                steps: [
                    "Multi-campaign structure (Awareness, Retargeting, Conversion)",
                    "Dynamic product ads",
                    "A/B testing creatives every 10 days"
                ]
            },
            {
                phase: "Conversion Rate Optimization",
                steps: [
                    "Heatmap behavior analysis",
                    "Checkout process simplification",
                    "Trust badge & review integration"
                ]
            }
        ],
        results: [
            "480% increase in organic traffic",
            "62% drop in CAC",
            "5.4X ROAS",
            "₹1.2 Cr revenue generated",
            "32% repeat purchase rate"
        ],
        takeaway: "Strategic funnel engineering converts traffic into revenue — not just impressions."
    },
    {
        slug: "real-estate-lead-gen",
        title: "Transforming a Real Estate Brand into a Lead Generation Machine",
        hero: {
            title: "From Zero Qualified Leads to 320+ Verified Monthly Inquiries",
            subtitle: "Verified growth for high-ticket investments.",
            bgImage: realestatehero
        },
        snapshot: {
            industry: "Real Estate Developer",
            location: "Tier-1 City",
            objective: "High-quality lead generation",
            cardSummary: "Transforming high-cost, low-quality real estate ads into a high-intent lead generation engine.",
            image: realestatesnap
        },
        challenge: [
            "Leads were unqualified",
            "Cost per lead was extremely high",
            "No CRM integration",
            "Poor landing page performance"
        ],
        strategy: [
            "Intent-based keyword targeting",
            "Dedicated landing funnels",
            "Automated lead scoring",
            "CRM integration with WhatsApp automation"
        ],
        execution: [
            {
                phase: "Search & Performance Ads",
                steps: [
                    "High-intent keywords",
                    "Geo-targeted bidding strategy",
                    "Location-specific creatives"
                ]
            },
            {
                phase: "Landing Page Optimization",
                steps: [
                    "Trust-led content",
                    "Video walkthrough embeds",
                    "Simplified 3-field lead capture form"
                ]
            },
            {
                phase: "Automation & Follow-Up",
                steps: [
                    "Instant WhatsApp response system",
                    "CRM-based follow-up triggers"
                ]
            }
        ],
        results: [
            "320+ verified leads/month",
            "58% reduction in cost per lead",
            "4X improvement in lead-to-site-visit ratio",
            "2.8X ROI"
        ],
        takeaway: "Lead generation is not about volume — it's about qualified intent."
    },
    {
        slug: "education-national-presence",
        title: "Building a National Presence for an Education Brand",
        hero: {
            title: "Dominating Search Rankings Across 20+ Cities",
            subtitle: "Scaling education visibility through targeted SEO.",
            bgImage: educationhero
        },
        snapshot: {
            industry: "EdTech / Education Services",
            objective: "National Expansion & Organic Growth",
            cardSummary: "Dominating competitive search rankings across 20+ cities for a national education brand.",
            image: educationsnap
        },
        challenge: [
            "Zero visibility in competitive keywords",
            "No content marketing strategy",
            "Weak backlink profile",
            "Fragmented digital presence"
        ],
        strategy: [
            "City-specific landing pages",
            "Authority content marketing",
            "Technical site restructuring",
            "PR-based backlink acquisition"
        ],
        execution: [
            {
                phase: "Keyword Domination Strategy",
                steps: [
                    "Cluster-based content hubs",
                    "Pillar + sub-topic structure",
                    "Long-tail keyword targeting"
                ]
            },
            {
                phase: "Authority Building",
                steps: [
                    "Guest publications",
                    "Educational resource link building",
                    "Digital PR strategy"
                ]
            },
            {
                phase: "On-Site Optimization",
                steps: [
                    "UX improvements",
                    "Schema markup",
                    "Conversion CTA placements"
                ]
            }
        ],
        results: [
            "350% organic traffic growth",
            "Ranked Top 3 for 40+ high-intent keywords",
            "220% increase in admission inquiries",
            "Domain authority increased significantly"
        ],
        takeaway: "Scalable SEO requires structure, authority, and intent mapping."
    },
    {
        slug: "lifestyle-brand-rebranding",
        title: "Rebranding & Social Media Growth for a Lifestyle Startup",
        hero: {
            title: "From Low Engagement to Viral Brand Visibility",
            subtitle: "Storytelling that connects and converts.",
            bgImage: lifestylehero
        },
        snapshot: {
            industry: "Lifestyle & Personal Care",
            objective: "Social Media Growth & Brand Recall",
            cardSummary: "Revitalizing a lifestyle brand's digital presence through viral storytelling and influencer strategy.",
            image: lifestylesnap
        },
        challenge: [
            "Inconsistent posting",
            "No content strategy",
            "Poor engagement rate",
            "No paid amplification strategy"
        ],
        strategy: [
            "Content pillars",
            "Influencer collaborations",
            "Performance-driven ad boosts",
            "UGC campaign execution"
        ],
        execution: [
            {
                phase: "Content Architecture",
                steps: [
                    "4 content buckets (Education, Trust, Lifestyle, Offers)",
                    "Reel-focused strategy",
                    "Visual brand consistency"
                ]
            },
            {
                phase: "Influencer Strategy",
                steps: [
                    "Micro-influencer collaborations",
                    "Regional creator partnerships"
                ]
            },
            {
                phase: "Paid Media Boosting",
                steps: [
                    "Engagement ads",
                    "Conversion retargeting"
                ]
            }
        ],
        results: [
            "700% increase in engagement rate",
            "120K organic follower growth",
            "3X brand search increase",
            "2.5X sales via social traffic"
        ],
        takeaway: "Brand storytelling + performance amplification = scalable awareness."
    },
    {
        slug: "b2b-saas-growth",
        title: "B2B SaaS Growth Through Performance & Content Strategy",
        hero: {
            title: "Reducing CAC by 45% While Doubling Pipeline Value",
            subtitle: "Precision targeting for complex B2B sales cycles.",
            bgImage: b2bhero
        },
        snapshot: {
            industry: "B2B SaaS",
            objective: "Lead Quality & Sales Pipeline Growth",
            cardSummary: "Precision B2B targeting that doubled pipeline value and slashed customer acquisition costs.",
            image: b2bsnap
        },
        challenge: [
            "Long sales cycle",
            "Low MQL to SQL conversion",
            "High paid media costs",
            "Weak content positioning"
        ],
        strategy: [
            "LinkedIn performance ads",
            "Thought-leadership content",
            "Account-based marketing (ABM)",
            "SEO-led inbound strategy"
        ],
        execution: [
            {
                phase: "ABM Strategy",
                steps: [
                    "Targeted decision-maker campaigns",
                    "Personalized ad creatives"
                ]
            },
            {
                phase: "LinkedIn & Google Ads",
                steps: [
                    "Job-title specific targeting",
                    "Funnel segmentation"
                ]
            },
            {
                phase: "Content Marketing",
                steps: [
                    "Whitepapers",
                    "Case-led blogs",
                    "Industry-specific landing pages"
                ]
            }
        ],
        results: [
            "45% CAC reduction",
            "2X pipeline value",
            "3.2X increase in qualified demo bookings",
            "60% improvement in MQL to SQL conversion"
        ],
        takeaway: "In B2B, precision targeting beats mass advertising."
    },
    {
        slug: "revenue-intelligence-d2c",
        title: "Scaling Beyond Clicks: Turning Fragmented Marketing into Revenue Intelligence",
        hero: {
            title: "Re-Engineering the Growth Ecosystem for Sustainable Revenue",
            subtitle: "From scattered campaigns to measurable revenue acceleration.",
            bgImage: ecommercehero
        },
        snapshot: {
            industry: "D2C E-Commerce (Fashion & Lifestyle)",
            objective: "Revenue Scaling & Marketing Intelligence",
            duration: "8 Months",
            cardSummary: "Re-engineering a D2C ecosystem to turn fragmented marketing into a unified revenue engine.",
            image: ecommercesnap
        },
        challenge: [
            "Rising ad costs",
            "Declining organic visibility due to AI SERP changes",
            "Poor first-party data strategy",
            "Disconnected marketing channels",
            "Low returning customer ratio"
        ],
        strategy: [
            "Search Repositioning (SEO + AI Optimization)",
            "Performance Marketing Rebuild (Revenue Per Visitor Focus)",
            "CRO Sprint Model (UX & Friction Removal)",
            "Marketing Automation & Retention Strategy"
        ],
        execution: [
            {
                phase: "Search Repositioning",
                steps: [
                    "Search intent mapping across the buyer journey",
                    "AI-overview optimized content clusters",
                    "Topical authority building",
                    "Technical SEO & Core Web Vitals improvements"
                ]
            },
            {
                phase: "Performance Marketing Rebuild",
                steps: [
                    "Full-funnel segmentation & audience modeling",
                    "Server-side tracking integration",
                    "First-party data activation",
                    "A/B dynamic creative testing"
                ]
            },
            {
                phase: "Automation & Retention",
                steps: [
                    "Segmented lifecycle email & WhatsApp flows",
                    "Dynamic remarketing funnels",
                    "Loyalty program integration"
                ]
            }
        ],
        transformation: [
            { metric: "Monthly Revenue", before: "₹32 Lakhs", after: "₹74 Lakhs" },
            { metric: "Organic Traffic", before: "18K", after: "43K" },
            { metric: "CAC", before: "High & Unstable", after: "41% Reduced" },
            { metric: "Returning Rate", before: "18%", after: "35%" },
            { metric: "ROAS", before: "2.4X", after: "4.0X" }
        ],
        results: [
            "138% growth in non-branded organic traffic",
            "41% reduction in CAC",
            "67% increase in ROAS",
            "52% increase in returning customers",
            "3.2X revenue growth from automation"
        ],
        takeaway: "Modern digital marketing is about building an integrated revenue engine, not just running ads."
    }
];

export default caseStudiesData;



