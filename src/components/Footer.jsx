import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import footerlogo from '../assets/footerlogo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-[60px]">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

                    {/* Column 1: About */}
                    <div>
                        <Link to="/" className="mb-2 block -mt-2">
                            <img
                                src={footerlogo}
                                alt="Adkryoss"
                                className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-colors duration-300 object-contain object-left"
                            />
                        </Link>
                        <p className="text-[#999] text-sm leading-[1.8] mb-5">
                            We are India's top Digital Marketing Company, based in New Delhi, India. We provide full-suite Internet Marketing services.
                        </p>
                        <div className="flex gap-[15px] mt-5">
                            <a href="#" className="text-[#999] transition-colors duration-300 inline-block hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-[#999] transition-colors duration-300 hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-[#999] transition-colors duration-300 hover:text-white">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-[#999] transition-colors duration-300 hover:text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-[#999] transition-colors duration-300 hover:text-white">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className="text-white text-lg mb-5 font-semibold">Our Services</h3>
                        <ul className="flex flex-col gap-3 list-none p-0">
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
                                    <Link to={service.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-white text-lg mb-5 font-semibold">Company</h3>
                        <ul className="flex flex-col gap-3 list-none p-0">
                            {[
                                { name: 'About us', path: '/company/about-us' },
                                { name: 'Press Releases', path: '/company/press-releases' },
                                { name: 'Careers', path: '/company/careers' },
                                { name: 'Best Place to Work in India', path: '/company/best-place-to-work' },
                                { name: 'Awards and Recognition', path: '/company/awards' }
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-white text-lg mb-5 mt-[30px] font-semibold">Tools</h3>
                        <ul className="flex flex-col gap-3 list-none p-0">
                            {[
                                { name: 'SEO ROI Calculator', path: '/tools/seo-roi' },
                                { name: 'PPC ROI Calculator', path: '/tools/ppc-roi' },
                                { name: 'CRO ROI Calculator', path: '/tools/cro-roi' }
                            ].map(tool => (
                                <li key={tool.name}>
                                    <Link to={tool.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white">
                                        {tool.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Industries */}
                    <div>
                        <h3 className="text-white text-lg mb-5 font-semibold">Industries</h3>
                        <ul className="flex flex-col gap-3 list-none p-0">
                            {[
                                { name: 'BFSI', path: '/industry/bfsi' },
                                { name: 'B2B', path: '/industry/b2b' },
                                { name: 'Education', path: '/industry/education' },
                                { name: 'Healthcare', path: '/industry/healthcare' }
                            ].map(industry => (
                                <li key={industry.name}>
                                    <Link to={industry.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white">
                                        {industry.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-white text-lg mb-5 mt-[50px] font-semibold">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-x-[30px] gap-y-3">
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
                                <Link key={link.name} to={link.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 5: Contact Info */}
                    <div>
                        <h3 className="text-white text-lg mb-5 font-semibold">Contact Info</h3>
                        <div className="flex flex-col gap-[15px]">
                            <div className="flex gap-3 items-start">
                                <MapPin size={18} className="text-[#999] mt-0.5 shrink-0" />
                                <p className="text-[#999] text-sm leading-[1.6] m-0">
                                    507, 5th Floor, Vipul Trade Center Sector – 48,
                                    Sohna Road Gurgaon,<br /> Haryana - 122018, Gurugram, India
                                </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Phone size={18} className="text-[#999] shrink-0" />
                                <a href="tel:+919910308266" className="text-[#999] text-sm transition-colors duration-300 hover:text-white">
                                    0124 429 9985
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail size={18} className="text-[#999] shrink-0" />
                                <a href="mailto:enquiry@adkryoss.com" className="text-[#999] text-sm transition-colors duration-300 hover:text-white">
                                    enquiry@adkryoss.com
                                </a>
                            </div>
                        </div>
                    </div>



                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#333] py-[30px] flex justify-between items-center flex-wrap gap-5">
                    <p className="text-sm text-[#666] m-0">
                        © {new Date().getFullYear()} Adkryoss. All Rights Reserved.
                    </p>
                    <div className="flex gap-5 flex-wrap">
                        <Link to="/privacy-policy" className="text-sm text-[#666] transition-colors duration-300 hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-conditions" className="text-sm text-[#666] transition-colors duration-300 hover:text-white">
                            Terms & Conditions
                        </Link>
                        <Link to="/sitemap" className="text-sm text-[#666] transition-colors duration-300 hover:text-white">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
