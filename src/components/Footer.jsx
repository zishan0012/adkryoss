import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Building, Phone, Mail } from 'lucide-react';
import footerlogo from '../assets/footerlogo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-[60px]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10 mb-12">

                    {/* Column 1: About */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="mb-6 block -mt-2">
                            <img
                                src={footerlogo}
                                alt="Adkryoss"
                                className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain object-left"
                            />
                        </Link>
                        <p className="text-[#999] text-sm leading-[1.8] mb-8 pr-4">
                            We are a premier Digital Marketing agency based in New Delhi, India, delivering high-impact, performance-driven digital solutions for modern brands. With a strong focus on strategy, innovation, and measurable results.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {[
                                { Icon: Facebook, href: '#' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Linkedin, href: '#' },
                                { Icon: Instagram, href: '#' },
                                { Icon: Youtube, href: '#' }
                            ].map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#999] transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:border-white shadow-sm"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className="text-white text-lg mb-6 font-semibold relative inline-block">
                            Our Services
                        </h3>
                        <ul className="flex flex-col gap-4 list-none p-0">
                            {[
                                { name: 'Search Engine Optimization', path: '/services/seo/seo-services' },
                                { name: 'Digital Marketing', path: '/services/digital-marketing/services' },
                                { name: 'App Marketing', path: '/services/app-marketing/mobile-app-marketing' },
                                { name: 'Content Marketing', path: '/services/content-marketing/services' },
                                { name: 'PPC/Paid Marketing', path: '/services/paid-marketing/ppc-services' },
                                { name: 'Marketing Technology', path: '/services/martech/martech-services' },
                            ].map(service => (
                                <li key={service.name}>
                                    <Link to={service.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white flex items-center group">
                                        <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-white text-lg mb-6 font-semibold relative inline-block">
                            Company
                        </h3>
                        <ul className="flex flex-col gap-4 list-none p-0">
                            {[
                                { name: 'About us', path: '/company/about-us' },
                                { name: 'Press Releases', path: '/company/press-releases' },
                                { name: 'Careers', path: '/company/careers' },
                                { name: 'Best Place to Work in India', path: '/company/best-place-to-work' },
                            ].map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white flex items-center group">
                                        <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Tools */}
                    <div>
                        <h3 className="text-white text-lg mb-6 font-semibold relative inline-block">
                            Tools
                        </h3>
                        <ul className="flex flex-col gap-4 list-none p-0 mb-10">
                            {[
                                { name: 'SEO ROI Calculator', path: '/tools/seo-roi' },
                                { name: 'PPC ROI Calculator', path: '/tools/ppc-roi' },
                                { name: 'CRO ROI Calculator', path: '/tools/cro-roi' }
                            ].map(tool => (
                                <li key={tool.name}>
                                    <Link to={tool.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white flex items-center group">
                                        <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                                        {tool.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Quick Links */}
                    <div>
                        <h3 className="text-white text-lg mb-6 font-semibold relative inline-block">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-4">
                            {[
                                { name: 'Blog', path: '/blog' },
                                { name: 'Case Studies', path: '/work/case-study' },
                                { name: 'Testimonial', path: '/work/testimonial' },
                                { name: 'Portfolio', path: '/work/portfolio' }
                            ].map(link => (
                                <Link key={link.name} to={link.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white flex items-center group whitespace-nowrap">
                                    <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 6: Industries */}
                    <div>
                        <h3 className="text-white text-lg mb-6 font-semibold relative inline-block">
                            Industries
                        </h3>
                        <ul className="flex flex-col gap-4 list-none p-0">
                            {[
                                { name: 'BFSI', path: '/industry/bfsi' },
                                { name: 'B2B', path: '/industry/b2b' },
                                { name: 'Education', path: '/industry/education' },
                                { name: 'Healthcare', path: '/industry/healthcare' }
                            ].map(industry => (
                                <li key={industry.name}>
                                    <Link to={industry.path} className="text-[#ccc] text-sm transition-colors duration-200 no-underline hover:text-white flex items-center group">
                                        <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                                        {industry.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Reach Us Ribbon - Horizontal Row */}
                <div className="py-10 mb-2">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4">
                        <div className="flex gap-4 items-center group">
                            <Building size={20} className="text-[#999] transition-all duration-300 group-hover:text-blue-600 shrink-0" />
                            <p className="text-[#999] text-sm m-0 transition-colors duration-300 group-hover:text-white font-medium">
                                Clink Consultancy Service Private Limited
                            </p>
                        </div>
                        <div className="flex gap-4 items-center group max-w-md">
                            <MapPin size={20} className="text-[#999] transition-all duration-300 group-hover:text-blue-600 shrink-0" />
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Vipul+Trade+Center+Sector+48+Sohna+Road+Gurgaon+Haryana+122018"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#999] text-sm m-0 transition-colors duration-300 group-hover:text-white no-underline"
                            >
                                507, 5th Floor, Vipul Trade Center Sector – 48, Sohna Road Gurgaon, Haryana - 122018
                            </a>
                        </div>
                        <div className="flex gap-4 items-center group">
                            <Phone size={20} className="text-[#999] transition-all duration-300 group-hover:text-blue-600 shrink-0" />
                            <a href="tel:+919910308266" className="text-[#999] text-sm transition-colors duration-300 group-hover:text-white no-underline">
                                01169269633
                            </a>
                        </div>
                        <div className="flex gap-4 items-center group">
                            <Mail size={20} className="text-[#999] transition-all duration-300 group-hover:text-blue-600 shrink-0" />
                            <a href="mailto:info@adkryoss.com" className="text-[#999] text-sm transition-colors duration-300 group-hover:text-white no-underline">
                                info@adkryoss.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Centered inside the container */}
                <div className="border-t border-[#333] py-[30px] flex justify-between items-center flex-wrap gap-5">
                    <p className="text-sm text-[#666] m-0">
                        © {new Date().getFullYear()} Adkryoss. All Rights Reserved.
                    </p>
                    <div className="flex gap-5 flex-wrap">
                        <Link to="/privacy-policy" className="text-sm text-[#666] transition-colors duration-300 hover:text-white border-0 no-underline">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-conditions" className="text-sm text-[#666] transition-colors duration-300 hover:text-white border-0 no-underline">
                            Terms & Conditions
                        </Link>
                        <Link to="/refund-cancellation" className="text-sm text-[#666] transition-colors duration-300 hover:text-white border-0 no-underline">
                            Refund & Cancellation
                        </Link>
                        <Link to="/sitemap" className="text-sm text-[#666] transition-colors duration-300 hover:text-white border-0 no-underline">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
