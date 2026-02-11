import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Search, Monitor, Smartphone, FileText, MousePointerClick, Database } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Search Engine Optimization");
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="header" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
            height: 'var(--header-height, 80px)',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}>
                {/* Logo */}
                <div className="logo">
                    <Link to="/" style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        ADKRYOSS
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{ height: '100%' }}>
                    <ul style={{ display: 'flex', gap: '35px', alignItems: 'stretch', height: '100%' }}>
                        {navItems.map((item) => (
                            <li key={item.name} style={{
                                position: item.name === 'Our Services' ? 'static' : 'relative',
                                display: 'flex',
                                height: '100%'
                            }}
                                className="nav-item-group"
                                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {item.subItems ? (
                                    <div className="nav-item-has-submenu" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', height: '100%' }}>
                                        <Link to={item.path} style={{
                                            fontWeight: '500',
                                            fontSize: '15px',
                                            color: 'var(--secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: '100%'
                                        }} onClick={handleLinkClick}>
                                            {item.name}
                                        </Link>
                                        <ChevronDown size={14} style={{ marginLeft: '4px', color: 'var(--secondary)' }} />

                                        {item.name === 'Our Services' ? (
                                            <div className="submenu mega-menu-modern" style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'white',
                                                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                                                borderRadius: '12px',
                                                borderTop: '4px solid var(--primary)',
                                                display: openDropdown === item.name ? 'block' : 'none',
                                                zIndex: 1001,
                                                minWidth: 'auto',
                                                width: '96vw',
                                                maxWidth: '1400px',
                                                maxHeight: '90vh',
                                                overflowY: 'auto',
                                                marginTop: '0'
                                            }}>
                                                {/* Category Tabs Row */}
                                                <div style={{
                                                    backgroundColor: '#fff',
                                                    padding: '20px 40px',
                                                    borderBottom: '1px solid #f0f0f0'
                                                }}>
                                                    {/* Category Tabs Row (Row 1) */}
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'flex-start',
                                                        gap: '10px',
                                                        flexWrap: 'wrap',
                                                        marginBottom: '15px'
                                                    }}>
                                                        {item.subItems.map((sub) => (
                                                            <div
                                                                key={sub.name}
                                                                onMouseEnter={() => setActiveCategory(sub.name)}
                                                                style={{
                                                                    padding: '8px 18px',
                                                                    borderRadius: '20px',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.2s ease',
                                                                    backgroundColor: activeCategory === sub.name ? 'var(--primary)' : '#f5f5f5',
                                                                    border: '1px solid',
                                                                    borderColor: activeCategory === sub.name ? 'var(--primary)' : '#eee',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '8px'
                                                                }}
                                                            >
                                                                <span style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    color: activeCategory === sub.name ? '#fff' : '#666'
                                                                }}>
                                                                    {getServiceIcon(sub.name)}
                                                                </span>
                                                                <span style={{
                                                                    fontSize: '13px',
                                                                    fontWeight: '600',
                                                                    color: activeCategory === sub.name ? '#fff' : '#666',
                                                                    whiteSpace: 'nowrap'
                                                                }}>
                                                                    {sub.name}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Sub-items Grid (2 Columns with Bullets) */}
                                                    {item.subItems.find(sub => sub.name === activeCategory) && (
                                                        <div style={{
                                                            padding: '25px 40px',
                                                            backgroundColor: '#fff',
                                                            minHeight: '250px',
                                                            borderTop: '1px solid #f0f0f0',
                                                            animation: 'fadeIn 0.3s ease'
                                                        }}>
                                                            <div style={{
                                                                display: 'grid',
                                                                gridTemplateColumns: 'max-content max-content',
                                                                gap: '12px 80px'
                                                            }}>
                                                                {item.subItems.find(sub => sub.name === activeCategory).subItems.map(subSub => (
                                                                    <div key={subSub.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                                        <div style={{
                                                                            width: '6px',
                                                                            height: '6px',
                                                                            backgroundColor: '#0066cc',
                                                                            borderRadius: '50%',
                                                                            flexShrink: 0
                                                                        }}></div>
                                                                        <Link
                                                                            to={subSub.path}
                                                                            onClick={handleLinkClick}
                                                                            style={{
                                                                                color: '#444',
                                                                                fontSize: '14.5px',
                                                                                fontWeight: '500',
                                                                                padding: '4px 0',
                                                                                transition: 'all 0.2s ease',
                                                                                textDecoration: 'none'
                                                                            }}
                                                                            onMouseEnter={(e) => e.target.style.color = '#0066cc'}
                                                                            onMouseLeave={(e) => e.target.style.color = '#444'}
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
                                            <div className="submenu" style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: 0,
                                                backgroundColor: 'white',
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                                width: '220px',
                                                padding: '10px 0',
                                                borderRadius: '4px',
                                                display: openDropdown === item.name ? 'flex' : 'none',
                                                flexDirection: 'column',
                                                zIndex: 1001
                                            }}>
                                                {item.subItems.map(sub => (
                                                    <div key={sub.name} style={{ position: 'relative' }} className="submenu-item-group">
                                                        <Link to={sub.path} onClick={handleLinkClick} style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            padding: '10px 20px',
                                                            color: '#333',
                                                            fontSize: '14px',
                                                            fontWeight: '500',
                                                            borderBottom: '1px solid #f5f5f5'
                                                        }}>
                                                            {sub.name}
                                                            {sub.subItems && <ChevronDown size={12} style={{ transform: 'rotate(-90deg)' }} />}
                                                        </Link>

                                                        {sub.subItems && (
                                                            <div className="sub-submenu" style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: '100%',
                                                                backgroundColor: 'white',
                                                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                                                width: '220px',
                                                                padding: '10px 0',
                                                                borderRadius: '4px',
                                                                display: 'none',
                                                                flexDirection: 'column',
                                                                zIndex: 1002
                                                            }}>
                                                                {sub.subItems.map(subSub => (
                                                                    <Link key={subSub.name} to={subSub.path} onClick={handleLinkClick} style={{
                                                                        display: 'block',
                                                                        padding: '10px 20px',
                                                                        color: '#333',
                                                                        fontSize: '13px',
                                                                        fontWeight: '500',
                                                                        borderBottom: '1px solid #f5f5f5'
                                                                    }}>
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
                                    <Link to={item.path} style={{
                                        fontWeight: '500',
                                        fontSize: '15px',
                                        color: 'var(--secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%'
                                    }}>
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none' }}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Action Buttons (Desktop) */}
                <div className="header-actions">
                    <Link to="/request-quote" className="btn btn-primary">Request a Quote</Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-menu" style={{
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <Link
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    padding: '10px 0',
                                    borderBottom: '1px solid #f0f0f0',
                                    color: 'var(--secondary)',
                                    display: 'block'
                                }}
                            >
                                {item.name}
                            </Link>
                            {/* Mobile Submenu */}
                            {item.subItems && (
                                <div style={{ paddingLeft: '20px' }}>
                                    {item.subItems.map(sub => (
                                        <div key={sub.name}>
                                            <Link
                                                to={sub.path}
                                                onClick={() => setIsMenuOpen(false)}
                                                style={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    padding: '8px 0',
                                                    display: 'block',
                                                    color: '#666'
                                                }}
                                            >
                                                {sub.name}
                                            </Link>
                                            {/* Mobile Sub-submenu */}
                                            {sub.subItems && (
                                                <div style={{ paddingLeft: '15px' }}>
                                                    {sub.subItems.map(subSub => (
                                                        <Link
                                                            key={subSub.name}
                                                            to={subSub.path}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            style={{
                                                                fontSize: '13px',
                                                                fontWeight: '400',
                                                                padding: '6px 0',
                                                                display: 'block',
                                                                color: '#888'
                                                            }}
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
                    <Link to="/request-quote" className="btn btn-primary" style={{ textAlign: 'center' }}>
                        Request a Quote
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
