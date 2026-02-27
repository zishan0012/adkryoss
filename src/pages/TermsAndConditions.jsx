import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Info, Scale, CreditCard, Lock, AlertTriangle, FileText, Mail, Phone, Globe } from 'lucide-react';

const TermsAndConditions = () => {
    const SectionCard = ({ icon: Icon, title, children, dark = false, highlight = false }) => (
        <div className={`
            p-8 md:p-10 rounded-[32px] border transition-all duration-300 group
            ${dark ? 'bg-slate-900 text-white border-slate-800 hover:bg-slate-800' :
                highlight ? 'bg-blue-50 border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1' :
                    'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 hover:border-blue-400 hover:-translate-y-1'}
        `}>
            <div className="flex items-center gap-5 mb-8">
                <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                    ${dark ? 'bg-white/10 text-white' : highlight ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-blue-100 text-blue-600'}
                `}>
                    <Icon size={24} />
                </div>
                <h2 className={`text-2xl md:text-3xl font-bold m-0 transition-colors duration-300 ${dark ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {title}
                </h2>
            </div>
            <div className={`leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                {children}
            </div>
        </div>
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

                <div className="container px-6 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Terms & Conditions</h1>
                        <div className="flex flex-wrap justify-center gap-8 text-slate-400 font-medium">
                            <span className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
                                <FileText size={18} className="text-blue-400" /> Effective: Feb 23, 2026
                            </span>
                            <span className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
                                <FileText size={18} className="text-blue-400" /> Updated: Feb 23, 2026
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-slate-600 mb-20 leading-relaxed text-center italic font-medium border-b border-slate-100 pb-16">
                            "Welcome to our digital ecosystem. These Terms & Conditions outline the rules, responsibilities, and legal boundaries governing your access to and use of our website and services. By accessing this website, you agree to comply with the terms mentioned below."
                        </p>

                        <div className="flex flex-col gap-[40px]">
                            {/* Section 1 */}
                            <SectionCard icon={Info} title="1. About Us" highlight>
                                <p>
                                    This website is operated by <strong>Adkryoss managed by Clink Consultancy Services Private Limited</strong>, a digital marketing services provider delivering SEO, paid advertising, branding, web development, performance marketing, content marketing, and strategic consulting services globally.
                                </p>
                                <p className="mt-4">
                                    Throughout the website, the terms “Company”, “we”, “us”, and “our” refer to Adkryoss managed by Clink Consultancy Services Private Limited.
                                </p>
                            </SectionCard>

                            {/* Section 2 */}
                            <SectionCard icon={Scale} title="2. Acceptance of Terms">
                                <p className="mb-6 font-medium text-slate-800">By accessing, browsing, or engaging with this website, you confirm that:</p>
                                <div className="grid gap-4">
                                    {[
                                        "You are legally capable of entering into binding agreements.",
                                        "You will use this website only for lawful purposes.",
                                        "You agree to comply with all applicable laws and regulations."
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 shrink-0"></div>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>

                            {/* Section 3 */}
                            <SectionCard icon={Globe} title="3. Scope of Services">
                                <p className="mb-8">Adkryoss managed by Clink Consultancy Services Private Limited provides professional digital marketing services, including but not limited to:</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Search Engine Optimization (SEO)",
                                        "Search Engine Marketing (SEM)",
                                        "Social Media Marketing (SMM)",
                                        "Website Design & Development",
                                        "Branding & Creative Services",
                                        "Performance Marketing",
                                        "Content Strategy & Copywriting",
                                        "Analytics & Reporting"
                                    ].map((service, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl group-hover:border-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                                            <span className="text-slate-800 font-semibold">{service}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 italic font-medium py-3 border-l-4 border-blue-600 pl-6 bg-blue-50/50">
                                    All services are subject to mutually agreed proposals, contracts, or service agreements executed with clients.
                                </p>
                            </SectionCard>

                            {/* Section 4 */}
                            <SectionCard icon={Shield} title="4. User Responsibilities">
                                <p className="mb-6">By using this website or engaging our services, you agree to:</p>
                                <div className="space-y-4">
                                    {[
                                        "Provide accurate, current, and complete information.",
                                        "Not misuse, disrupt, or attempt unauthorized access to the website.",
                                        "Not upload harmful code, malware, or spam.",
                                        "Respect intellectual property rights."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-700">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 font-bold text-slate-900 border-t border-slate-200 pt-6">
                                    You are solely responsible for the information, content, and materials you provide to us for project execution.
                                </p>
                            </SectionCard>

                            {/* Section 5 */}
                            <SectionCard icon={Lock} title="5. Intellectual Property Rights" dark>
                                <p className="text-white">All content on this website — including text, graphics, logos, images, design elements, strategies, and proprietary frameworks — is the intellectual property of Adkryoss managed by Clink Consultancy Services Private Limited unless otherwise stated.</p>
                                <p className="mt-6 text-white">You may not reproduce, distribute, modify, transmit, republish, or exploit any website content without prior written consent.</p>
                                <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 text-white font-bold">
                                    Client deliverables remain the intellectual property of the client upon full and final payment unless otherwise agreed in writing.
                                </div>
                            </SectionCard>

                            {/* Section 6 */}
                            <SectionCard icon={CreditCard} title="6. Payments & Billing">
                                <div className="grid gap-4">
                                    {[
                                        "Service fees are governed by individual agreements.",
                                        "Payments must be made as per the agreed milestone schedule.",
                                        "Delayed payments may result in project suspension.",
                                        "All applicable taxes will be charged as per prevailing laws.",
                                        "Pricing revisions with prior notice for ongoing retainers."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 hover:bg-white rounded-xl transition-colors">
                                            <CreditCard className="text-blue-600 shrink-0 mt-1" size={18} />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>

                            {/* Section 7 */}
                            <SectionCard icon={Shield} title="7. Confidentiality">
                                <div className="space-y-6">
                                    <p className="bg-slate-100 p-6 rounded-2xl border-l-4 border-blue-600">
                                        We respect confidentiality. Any business information, marketing data, credentials, analytics, or proprietary information shared with us will be treated as confidential.
                                    </p>
                                    <p>
                                        Similarly, clients must not disclose proprietary methodologies, internal strategies, or frameworks developed by Adkryoss managed by Clink Consultancy Services Private Limited without written consent.
                                    </p>
                                </div>
                            </SectionCard>

                            {/* Section 8 */}
                            <SectionCard icon={AlertTriangle} title="8. Performance & Results Disclaimer">
                                <p className="mb-8">Digital marketing performance depends on multiple external variables:</p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {["Algorithm updates", "Market competition", "Industry trends", "Budget allocation", "Consumer behavior"].map((item, i) => (
                                        <span key={i} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-slate-800 font-bold hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <p className="font-medium text-slate-700 bg-blue-50 p-6 rounded-2xl">
                                    While we apply best practices, we do not guarantee specific rankings, traffic numbers, leads, or revenue outcomes unless explicitly mentioned in a signed agreement.
                                </p>
                            </SectionCard>

                            {/* Section 9 */}
                            <SectionCard icon={Globe} title="9. Third-Party Tools & Platforms">
                                <p className="mb-6">Our services involve third-party platforms. We are not responsible for:</p>
                                <div className="grid gap-4">
                                    {["Platform policy changes", "Account suspensions due to policy violations", "Service interruptions beyond our control"].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:border-red-200 transition-colors">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2shrink-0"></div>
                                            <span className="text-slate-800">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>

                            {/* Section 10 */}
                            <SectionCard icon={AlertTriangle} title="10. Limitation of Liability">
                                <div className="space-y-4">
                                    <p className="font-bold text-slate-900 mb-4">Liability shall not be held for:</p>
                                    <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                        {["Indirect damages", "Loss of profits", "Data loss", "Service misuse"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 p-4 bg-red-50/50 border border-red-100 rounded-xl text-red-700 font-semibold">
                                                <AlertTriangle size={16} /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-8 p-6 bg-slate-900 text-white rounded-2xl text-center font-bold text-lg">
                                        Total liability shall not exceed the fees paid for the specific service.
                                    </p>
                                </div>
                            </SectionCard>

                            {/* Section 11 - 16 Simplified Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <SectionCard icon={AlertTriangle} title="11. Termination">
                                    <p className="text-sm">Breach of terms, overdue payments, or legal violations may result in termination of services as per contractual terms.</p>
                                </SectionCard>
                                <SectionCard icon={Shield} title="12. Restrictions">
                                    <p className="text-sm">No hacking, data scraping, or posting harmful content. Security is our priority.</p>
                                </SectionCard>
                                <SectionCard icon={FileText} title="13. Privacy">
                                    <p className="text-sm">Use is governed by our Privacy Policy, ensuring data protection and compliance.</p>
                                </SectionCard>
                                <SectionCard icon={Shield} title="14. Indemnity">
                                    <p className="text-sm">Users agree to indemnify the Company from claims arising from their breach of these Terms.</p>
                                </SectionCard>
                                <SectionCard icon={Scale} title="15. Governing Law">
                                    <p className="text-sm">Governed by the laws of India. Exclusive jurisdiction of Indian courts for all disputes.</p>
                                </SectionCard>
                                <SectionCard icon={FileText} title="16. Updates">
                                    <p className="text-sm">We reserve the right to modify Terms. Continued use constitutes acceptance of updates.</p>
                                </SectionCard>
                            </div>

                            {/* Section 17 */}
                            <div className="p-12 md:p-16 bg-slate-900 text-white rounded-[40px] text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white relative z-10">17. Contact Information</h2>
                                <p className="text-slate-400 mb-12 max-w-2xl mx-auto relative z-10 text-lg">
                                    For any queries regarding these Terms & Conditions, please contact:
                                </p>
                                <div className="grid md:grid-cols-3 gap-10 relative z-10">
                                    <div className="flex flex-col items-center group/item cursor-pointer">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover/item:bg-blue-600 group-hover/item:-translate-y-2">
                                            <Mail size={24} />
                                        </div>
                                        <span className="font-bold text-lg mb-1">Email</span>
                                        <a href="mailto:info@adkryoss.com" className="text-slate-400 hover:text-white transition-colors">info@adkryoss.com</a>
                                    </div>
                                    <div className="flex flex-col items-center group/item cursor-pointer">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover/item:bg-blue-600 group-hover/item:-translate-y-2">
                                            <Phone size={24} />
                                        </div>
                                        <span className="font-bold text-lg mb-1">Phone</span>
                                        <a href="tel:01169269633" className="text-slate-400 hover:text-white transition-colors">01169269633</a>
                                    </div>
                                    <div className="flex flex-col items-center group/item cursor-pointer">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover/item:bg-blue-600 group-hover/item:-translate-y-2">
                                            <Globe size={24} />
                                        </div>
                                        <span className="font-bold text-lg mb-1">Website</span>
                                        <a href="http://adkryoss.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">adkryoss.com</a>
                                    </div>
                                </div>
                            </div>

                            {/* Final Note */}
                            <div className="text-center pt-24 border-t border-slate-100">
                                <p className="text-2xl md:text-3xl font-bold text-slate-900 italic leading-tight max-w-3xl mx-auto">
                                    "Transparency builds trust. Digital growth is a collaborative journey driven by strategy, execution, and compliance."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
