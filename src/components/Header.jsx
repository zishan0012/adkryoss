import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Search, Monitor, Smartphone, FileText, MousePointerClick, Database } from 'lucide-react';
import mainlogo from '../assets/mainlogo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Search Engine Optimization");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [expandedItems, setExpandedItems] = useState({});

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setExpandedItems({}); // Reset expanded items when closing/opening? Or maybe keep them? User usually expects them to reset or stay. Let's stay for now or reset. User said "when user open mobile view only main menu appear first", so reset is good.
        }
    };

    const toggleMobileAccordion = (e, key) => {
        e.preventDefault();
        e.stopPropagation();
        setExpandedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleLinkClick = () => {
        setOpenDropdown(null);
    };

    const getServiceIcon = (categoryName) => {
        const iconProps = { size: 18, strokeWidth: 2 };
        switch (categoryName) {
            case 'Search Engine Optimization':
                return <Search {...iconProps} />;
            case 'Digital Marketing':
                return <Monitor {...iconProps} />;
            case 'App Marketing':
                return <Smartphone {...iconProps} />;
            case 'Content Marketing':
                return <FileText {...iconProps} />;
            case 'PPC/Paid Marketing':
                return <MousePointerClick {...iconProps} />;
            case 'MarTech / Data Analytics':
                return <Database {...iconProps} />;
            default:
                return null;
        }
    };

    const navItems = [
        {
            name: 'Company',
            path: '/company',
            subItems: [
                { name: 'About Us', path: '/company/about-us' },
                { name: 'Careers', path: '/company/careers' },
                { name: 'Awards', path: '/company/awards' },
                { name: 'Press Releases', path: '/company/press-releases' },
                { name: 'Best Place to Work', path: '/company/best-place-to-work' },
            ]
        },
        {
            name: 'Our Services',
            path: '/services',
            subItems: [
                {
                    name: 'Search Engine Optimization',
                    path: '/services/seo',
                    subItems: [
                        { name: 'SEO Services', path: '/services/seo/seo-services' },
                        { name: 'Enterprise SEO', path: '/services/seo/enterprise-seo' },
                        { name: 'SEO Migration Services', path: '/services/seo/seo-migration-services' },
                        { name: 'Vernacular SEO Services', path: '/services/seo/vernacular-seo-services' },
                        { name: 'White Label SEO Services', path: '/services/seo/white-label-seo-services' },
                        { name: 'HyperLocal Marketing', path: '/services/seo/hyperlocal-marketing' },
                        { name: 'AI SEO', path: '/services/seo/ai-seo' },
                        { name: 'Agentic AI SEO', path: '/services/seo/agentic-ai-seo' },
                        { name: 'Ecommerce SEO', path: '/services/seo/ecommerce-seo' },
                        { name: 'Javascript SEO', path: '/services/seo/javascript-seo' },
                        { name: 'Multilingual SEO Services', path: '/services/seo/multilingual-seo-services' },
                        { name: 'SEO Audit', path: '/services/seo/seo-audit' },
                        { name: 'Google Penalty Recovery', path: '/services/seo/google-penalty-recovery' },
                        { name: 'LLM Optimization', path: '/services/seo/llm-optimization' },
                        { name: 'Technical SEO', path: '/services/seo/technical-seo' },
                        { name: 'Local SEO', path: '/services/seo/local-seo' },
                        { name: 'Link Building Services', path: '/services/seo/link-building-services' },
                        { name: 'SEO Reseller Services', path: '/services/seo/seo-reseller-services' },
                    ]
                },
                {
                    name: 'Digital Marketing',
                    path: '/services/digital-marketing',
                    subItems: [
                        { name: 'Digital Marketing Services', path: '/services/digital-marketing/services' },
                        { name: 'Affiliate Marketing', path: '/services/digital-marketing/affiliate-marketing' },
                        { name: 'Email Marketing Services', path: '/services/digital-marketing/email-marketing' },
                        { name: 'ORM Services', path: '/services/digital-marketing/orm-services' },
                        { name: 'AI Digital Marketing Services', path: '/services/digital-marketing/ai-marketing' },
                        { name: 'Agentic AI Digital Marketing', path: '/services/digital-marketing/agentic-ai' },
                        { name: 'Youtube Video Marketing', path: '/services/digital-marketing/youtube-marketing' },
                    ]
                },
                {
                    name: 'App Marketing',
                    path: '/services/app-marketing',
                    subItems: [
                        { name: 'ASO Services', path: '/services/app-marketing/aso' },
                        { name: 'Mobile App Marketing Services', path: '/services/app-marketing/mobile-app-marketing' },
                        { name: 'App CRO', path: '/services/app-marketing/app-cro' },
                    ]
                },
                {
                    name: 'Content Marketing',
                    path: '/services/content-marketing',
                    subItems: [
                        { name: 'Content Marketing Services', path: '/services/content-marketing/services' },
                        { name: 'Guest Posting', path: '/services/content-marketing/guest-posting' },
                        { name: 'Content Writing Services', path: '/services/content-marketing/writing-services' },
                        { name: 'Digital PR', path: '/services/content-marketing/digital-pr' },
                        { name: 'SEO Copywriting', path: '/services/content-marketing/seo-copywriting' },
                    ]
                },
                {
                    name: 'PPC/Paid Marketing',
                    path: '/services/paid-marketing',
                    subItems: [
                        { name: 'PPC Services', path: '/services/paid-marketing/ppc-services' },
                        { name: 'Mobile Advertising services', path: '/services/paid-marketing/mobile-advertising' },
                        { name: 'Amazon Advertising', path: '/services/paid-marketing/amazon-advertising' },
                        { name: 'PPC Reseller Services', path: '/services/paid-marketing/ppc-reseller' },
                        { name: 'Social Media Advertising', path: '/services/paid-marketing/social-media-advertising' },
                    ]
                },
                {
                    name: 'MarTech / Data Analytics',
                    path: '/services/martech',
                    subItems: [
                        { name: 'CRO Services', path: '/services/martech/cro-services' },
                        { name: 'Ecommerce CRO', path: '/services/martech/ecommerce-cro' },
                        { name: 'GA 4 Consulting', path: '/services/martech/ga4-consulting' },
                        { name: 'Shopify CRO', path: '/services/martech/shopify-cro' },
                        { name: 'Martech Services', path: '/services/martech/martech-services' },
                        { name: 'CDP Services', path: '/services/martech/cdp-services' },
                        { name: 'B2B CRO', path: '/services/martech/b2b-cro' },
                    ]
                },
            ]
        },
        {
            name: 'Work',
            path: '/work',
            subItems: [
                { name: 'Portfolio', path: '/work/portfolio' },
                { name: 'Case Study', path: '/work/case-study' },
                { name: 'Testimonial', path: '/work/testimonial' },
            ]
        },
        {
            name: 'Industry',
            path: '/industry',
            subItems: [
                { name: 'BFSI', path: '/industry/bfsi' },
                { name: 'B2B', path: '/industry/b2b' },
                { name: 'Healthcare', path: '/industry/healthcare' },
                { name: 'Education', path: '/industry/education' },
                { name: 'Ecommerce', path: '/industry/ecommerce' },
            ]
        },
        {
            name: 'Partners', path: '/partners', 
            subItems: [
                { name: 'Become Our IPP', path: '/partners/ipp' },
                { name: 'Become Our IBP', path: '/partners/ibp' },
            ]
         },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-[0_2_10px_rgba(0,0,0,0.1)] z-[1000] h-20 flex items-center">
            <div className="container flex justify-between items-center w-full h-full">
                {/* Logo */}
                <div className="logo">
                    <Link to="/" className="flex items-center h-full">
                        <img
                            src={mainlogo}
                            alt="Adkryoss"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </Link>

                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex h-full">
                    <ul className="flex gap-9 items-stretch h-full">
                        {navItems.map((item) => (
                            <li key={item.name}
                                className={`relative flex h-full group ${item.name === 'Our Services' ? 'static' : ''}`}
                                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {item.subItems ? (
                                    <div className="flex items-center cursor-pointer h-full">
                                        <Link to={item.path} className="font-semibold text-[15px] text-[#333] flex items-center h-full group-hover:text-[#0066cc] transition-colors" onClick={handleLinkClick}>
                                            {item.name}
                                        </Link>
                                        <ChevronDown size={14} className="ml-1 text-[#333] group-hover:text-[#0066cc] transition-colors" />

                                        {item.name === 'Our Services' ? (
                                            <div className={`submenu absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-xl border-t-4 border-[#0066cc] flex-col z-[1001] w-[96vw] max-w-[1400px] max-h-[calc(100vh-100px)] mt-0 overflow-hidden ${openDropdown === item.name ? 'flex' : 'hidden'}`}>
                                                {/* Category Tabs Row - Fixed Header */}
                                                <div className="bg-white px-10 py-5 border-b border-[#f0f0f0] shrink-0">
                                                    {/* Category Tabs Row (Row 1) */}
                                                    <div className="flex justify-start gap-[10px] flex-wrap">
                                                        {item.subItems.map((sub) => (
                                                            // <div
                                                            //     key={sub.name}
                                                            //     onMouseEnter={() => setActiveCategory(sub.name)}
                                                            //     className={`px-[18px] py-2 rounded-[20px] cursor-pointer transition-all duration-200 border flex items-center gap-2 ${activeCategory === sub.name ? 'bg-[#0066cc] border-[#0066cc]' : 'bg-[#f5f5f5] border-[#eee]'}`}
                                                            // >
                                                            //     <span className={`flex items-center ${activeCategory === sub.name ? 'text-white' : 'text-[#666]'}`}>
                                                            //         {getServiceIcon(sub.name)}
                                                            //     </span>
                                                            //     <span className={`text-[13px] font-semibold whitespace-nowrap ${activeCategory === sub.name ? 'text-white' : 'text-[#666]'}`}>
                                                            //         {sub.name}
                                                            //     </span>
                                                            // </div>


<div
  key={sub.name}
  onMouseEnter={() => setActiveCategory(sub.name)}
  className="relative overflow-hidden px-[18px] py-2 rounded-[20px] cursor-pointer border flex items-center gap-2 group"
>

  {/* Sliding Background */}
  <span
    className={`absolute inset-0 bg-[#0066cc] transition-transform duration-300 ease-out ${
      activeCategory === sub.name
        ? "translate-x-0"
        : "-translate-x-full"
    }`}
  />

  {/* Content */}
  <span
    className={`relative flex items-center gap-2 z-10 transition-colors duration-300 ${
      activeCategory === sub.name
        ? "text-white"
        : "text-[#666] group-hover:text-[#0066cc]"
    }`}
  >
    {getServiceIcon(sub.name)}
    <span className="text-[13px] font-semibold whitespace-nowrap">
      {sub.name}
    </span>
  </span>
</div>


                                                        ))}
                                                    </div>






                                                </div>

                                                {/* Sub-items Grid - Scrollable Content */}
                                                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                                                    {item.subItems.find(sub => sub.name === activeCategory) && (
                                                        <div className="px-10 py-[25px] bg-white min-h-[250px]">
                                                            <div className="grid grid-cols-[max-content_max-content] gap-x-20 gap-y-3">
                                                                {item.subItems.find(sub => sub.name === activeCategory).subItems.map(subSub => (
                                                                    <div key={subSub.name} className="flex items-center gap-2.5">
                                                                        <div className="w-1.5 h-1.5 bg-[#0066cc] rounded-full shrink-0"></div>
                                                                        <Link
                                                                            to={subSub.path}
                                                                            onClick={handleLinkClick}
                                                                            className="text-[#444] text-[14.5px] font-medium py-1 transition-all duration-200 no-underline hover:text-[#0066cc]"
                                                                        >
                                                                            {subSub.name}
                                                                        </Link>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`submenu absolute top-full left-0 bg-white shadow-[0_5_15px_rgba(0,0,0,0.1)] w-[220px] p-2.5 rounded flex-col z-[1001] ${openDropdown === item.name ? 'flex' : 'hidden'}`}>
                                                {item.subItems.map(sub => (
                                                    <div key={sub.name} className="relative group/sub">
                                                        <Link to={sub.path} onClick={handleLinkClick} className="flex items-center justify-between px-5 py-2.5 text-[#333] text-sm font-medium border-b border-[#f5f5f5] hover:text-[#0066cc] transition-colors">
                                                            {sub.name}
                                                            {sub.subItems && <ChevronDown size={12} className="-rotate-90" />}
                                                        </Link>

                                                        {sub.subItems && (
                                                            <div className="absolute top-0 left-full bg-white shadow-[0_5_15px_rgba(0,0,0,0.1)] w-[220px] py-2.5 rounded hidden flex-col z-[1002] group-hover/sub:flex">
                                                                {sub.subItems.map(subSub => (
                                                                    <Link key={subSub.name} to={subSub.path} onClick={handleLinkClick} className="block px-5 py-2.5 text-[#333] text-[13px] font-medium border-b border-[#f5f5f5] hover:text-[#0066cc] transition-colors">
                                                                        {subSub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link to={item.path} className="font-semibold text-[15px] text-[#333] flex items-center h-full hover:text-[#0066cc] transition-colors">
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2 text-[#333]" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Action Buttons (Desktop) */}
                <div className="hidden lg:flex">
                    <Link to="/request-quote" className="bg-[#0066cc] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0052a3] transition-colors">Request a Quote</Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white px-5 py-5 shadow-[0_5_10px_rgba(0,0,0,0.1)] flex flex-col gap-[5px] h-[calc(100vh-80px)] overflow-y-auto z-[1000]">
                    {navItems.map((item) => (
                        <div key={item.name} className="border-b border-[#f0f0f0] last:border-0">
                            <div className="flex justify-between items-center py-3">
                                <Link
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[17px] font-bold text-[#333]"
                                >
                                    {item.name}
                                </Link>
                                {item.subItems && (
                                    <button
                                        onClick={(e) => toggleMobileAccordion(e, item.name)}
                                        className={`p-2 transition-transform duration-200 ${expandedItems[item.name] ? 'rotate-180 bg-[#f0f7ff] rounded-lg' : ''}`}
                                    >
                                        <ChevronDown size={20} className={expandedItems[item.name] ? 'text-[#0066cc]' : 'text-[#666]'} />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Submenu (Accordion) */}
                            {item.subItems && expandedItems[item.name] && (
                                <div className="pl-4 pb-3 flex flex-col gap-1">
                                    {item.subItems.map(sub => (
                                        <div key={sub.name}>
                                            <div className="flex justify-between items-center py-2">
                                                <Link
                                                    to={sub.path}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="text-[15px] font-semibold text-[#555]"
                                                >
                                                    {sub.name}
                                                </Link>
                                                {sub.subItems && (
                                                    <button
                                                        onClick={(e) => toggleMobileAccordion(e, `${item.name}-${sub.name}`)}
                                                        className={`p-1.5 transition-transform duration-200 ${expandedItems[`${item.name}-${sub.name}`] ? 'rotate-180 text-[#0066cc]' : 'text-[#888]'}`}
                                                    >
                                                        <ChevronDown size={18} />
                                                    </button>
                                                )}
                                            </div>

                                            {/* Mobile Sub-submenu (Accordion) */}
                                            {sub.subItems && expandedItems[`${item.name}-${sub.name}`] && (
                                                <div className="pl-4 border-l-2 border-[#f0f0f0] ml-1 mb-2 flex flex-col gap-1">
                                                    {sub.subItems.map(subSub => (
                                                        <Link
                                                            key={subSub.name}
                                                            to={subSub.path}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="text-[14px] font-medium py-2 block text-[#777] hover:text-[#0066cc]"
                                                        >
                                                            {subSub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/request-quote" className="bg-[#0066cc] text-white py-3.5 rounded-full font-bold text-center mt-4 shadow-lg shadow-[#0066cc]/20" onClick={() => setIsMenuOpen(false)}>
                        Request a Quote
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
