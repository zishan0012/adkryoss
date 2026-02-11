import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1A1A1A', color: '#fff', padding: '60px 0 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>

                    {/* Column 1: About */}
                    <div>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>About Adkryoss</h3>
                        <p style={{
                            color: '#999',
                            fontSize: '14px',
                            lineHeight: '1.8',
                            marginBottom: '20px'
                        }}>
                            We are India's top Digital Marketing Company, based in New Delhi, India. We provide full-suite Internet Marketing services.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                            <a href="#" style={{
                                color: '#999',
                                transition: 'color 0.3s',
                                display: 'inline-block'
                            }}>
                                <Facebook size={20} />
                            </a>
                            <a href="#" style={{ color: '#999', transition: 'color 0.3s' }}>
                                <Twitter size={20} />
                            </a>
                            <a href="#" style={{ color: '#999', transition: 'color 0.3s' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" style={{ color: '#999', transition: 'color 0.3s' }}>
                                <Instagram size={20} />
                            </a>
                            <a href="#" style={{ color: '#999', transition: 'color 0.3s' }}>
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>Our Services</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
                            {[
                                { name: 'Search Engine Optimization', path: '/services/seo' },
                                { name: 'Digital Marketing', path: '/services/digital-marketing' },
                                { name: 'App Marketing', path: '/services/app-marketing' },
                                { name: 'Content Marketing', path: '/services/content-marketing' },
                                { name: 'PPC/Paid Marketing', path: '/services/paid-marketing' },
                                { name: 'Marketing Technology', path: '/services/martech' },
                                { name: 'Web Designing & Development', path: '/services/web-design' }
                            ].map(service => (
                                <li key={service.name}>
                                    <Link to={service.path} style={{
                                        color: '#ccc',
                                        fontSize: '14px',
                                        transition: 'color 0.2s',
                                        textDecoration: 'none'
                                    }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>Company</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
                            {[
                                { name: 'About us', path: '/company/about-us' },
                                { name: 'Press Releases', path: '/company/press-releases' },
                                { name: 'Careers', path: '/company/careers' },
                                { name: 'Best Place to Work in India', path: '/company/best-place-to-work' },
                                { name: 'Awards and Recognition', path: '/company/awards' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} style={{
                                        color: '#ccc',
                                        fontSize: '14px',
                                        transition: 'color 0.2s',
                                        textDecoration: 'none'
                                    }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            marginTop: '30px',
                            fontWeight: '600'
                        }}>Tools</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
                            {[
                                { name: 'SEO ROI Calculator', path: '/tools/seo-roi' },
                                { name: 'PPC ROI Calculator', path: '/tools/ppc-roi' },
                                { name: 'CRO ROI Calculator', path: '/tools/cro-roi' }
                            ].map(tool => (
                                <li key={tool.name}>
                                    <Link to={tool.path} style={{
                                        color: '#ccc',
                                        fontSize: '14px',
                                        transition: 'color 0.2s',
                                        textDecoration: 'none'
                                    }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                                        {tool.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Industries */}
                    <div>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>Industries</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
                            {[
                                { name: 'BFSI', path: '/industry/bfsi' },
                                { name: 'B2B', path: '/industry/b2b' },
                                { name: 'Education', path: '/industry/education' },
                                { name: 'Healthcare', path: '/industry/healthcare' }
                            ].map(industry => (
                                <li key={industry.name}>
                                    <Link to={industry.path} style={{
                                        color: '#ccc',
                                        fontSize: '14px',
                                        transition: 'color 0.2s',
                                        textDecoration: 'none'
                                    }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                                        {industry.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            marginTop: '50px',
                            fontWeight: '600'
                        }}>Quick Links</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '12px 30px'
                        }}>
                            {[
                                { name: 'Blog', path: '/blog' },
                                { name: 'FAQs', path: '/faqs' },
                                { name: 'Web Stories', path: '/web-stories' },
                                { name: 'Case Studies', path: '/work/case-study' },
                                { name: 'Testimonial', path: '/work/testimonial' },
                                { name: 'Portfolio', path: '/work/portfolio' },
                                { name: 'Search Trends Report', path: '/search-trends' },
                                { name: 'Digital Report Card', path: '/digital-report-card' },
                                { name: 'BlogX', path: '/blogx' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map(link => (
                                <Link key={link.name} to={link.path} style={{
                                    color: '#ccc',
                                    fontSize: '14px',
                                    transition: 'color 0.2s',
                                    textDecoration: 'none'
                                }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 5: Contact Info */}
                    <div>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>Contact Info</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <MapPin size={18} color="#999" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                                    507, 5th Floor, Vipul Trade Center Sector – 48,
                                    Sohna Road Gurgaon,<br /> Haryana - 122018, Gurugram, India
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Phone size={18} color="#999" style={{ flexShrink: 0 }} />
                                <a href="tel:+919910308266" style={{
                                    color: '#999',
                                    fontSize: '14px',
                                    transition: 'color 0.3s'
                                }}>
                                    0124 429 9985
                                </a>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Mail size={18} color="#999" style={{ flexShrink: 0 }} />
                                <a href="mailto:enquiry@adkryoss.com" style={{
                                    color: '#999',
                                    fontSize: '14px',
                                    transition: 'color 0.3s'
                                }}>
                                    enquiry@adkryoss.com
                                </a>
                            </div>
                        </div>
                    </div>



                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid #333',
                    paddingTop: '30px',
                    paddingBottom: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{
                        fontSize: '14px',
                        color: '#666',
                        margin: 0
                    }}>
                        © {new Date().getFullYear()} Adkryoss. All Rights Reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/privacy-policy" style={{
                            fontSize: '14px',
                            color: '#666',
                            transition: 'color 0.3s'
                        }}>
                            Privacy Policy
                        </Link>
                        <Link to="/terms-conditions" style={{
                            fontSize: '14px',
                            color: '#666',
                            transition: 'color 0.3s'
                        }}>
                            Terms & Conditions
                        </Link>
                        <Link to="/sitemap" style={{
                            fontSize: '14px',
                            color: '#666',
                            transition: 'color 0.3s'
                        }}>
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
