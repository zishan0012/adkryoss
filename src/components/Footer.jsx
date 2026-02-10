import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1A1A1A', color: '#fff', padding: '60px 0 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
                        }}>About Adkross</h3>
                        <p style={{
                            color: '#999',
                            fontSize: '14px',
                            lineHeight: '1.8',
                            marginBottom: '20px'
                        }}>
                            We are India's top Digital Marketing Company, based in New Delhi, India. We provide full-suite Internet Marketing services. From conceptualization and strategy to final-stage execution, we implement your entire digital marketing strategy.
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

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'About Us', path: '/company/about-us' },
                                { name: 'Our Services', path: '/services' },
                                { name: 'Case Studies', path: '/work/case-study' },
                                { name: 'Careers', path: '/company/careers' },
                                { name: 'Blog', path: '/blog' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} style={{
                                        color: '#999',
                                        fontSize: '14px',
                                        transition: 'color 0.3s'
                                    }}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>Our Services</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'SEO Services', path: '/services/seo' },
                                { name: 'Content Marketing', path: '/services/content-marketing' },
                                { name: 'PPC Services', path: '/services/ppc' },
                                { name: 'App Marketing', path: '/services/app-marketing' },
                                { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
                                { name: 'Martech Services', path: '/services/martech' }
                            ].map(service => (
                                <li key={service.name}>
                                    <Link to={service.path} style={{
                                        color: '#999',
                                        fontSize: '14px',
                                        transition: 'color 0.3s'
                                    }}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
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
                                    Sohna Road Gurgaon,<br /> Haryana - 122018 , Gurugram, India
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
                                <a href="mailto:enquiry@adkross.com" style={{
                                    color: '#999',
                                    fontSize: '14px',
                                    transition: 'color 0.3s'
                                }}>
                                    enquiry@adkross.com
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
                        © {new Date().getFullYear()} Adkross. All Rights Reserved.
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
