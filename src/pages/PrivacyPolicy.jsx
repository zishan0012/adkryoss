import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Info, Lock, Eye, Cookie, Share2, ClipboardList, UserCheck, Link2, Ghost, RefreshCw, Mail, Globe, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <div className={`leading-relaxed ${dark ? 'text-white' : 'text-slate-600'}`}>
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
                        <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">Your Privacy. Our Responsibility.</h2>
                        <p className="text-xl text-slate-400 font-medium mb-10">Transparent data practices. Secure systems. Zero compromise.</p>
                        <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-medium">
                            <span className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
                                <Shield size={18} className="text-blue-400" /> Effective: Feb 23, 2026
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white font-sans">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-20 text-center border-b border-slate-100 pb-16">
                            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                                At <strong>Adkryoss managed by Clink Consultancy Services Private Limited</strong>, your trust matters. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, interact with our services, or engage with our digital platforms.
                            </p>
                            <p className="mt-8 text-lg text-blue-600 font-bold italic">
                                "By using our website and services, you agree to the practices described below."
                            </p>
                        </div>

                        {/* Use a generous gap to avoid 'tight' feeling */}
                        <div className="flex flex-col gap-20">

                            {/* Section 1 */}
                            <SectionCard icon={ClipboardList} title="1. Information We Collect" highlight>
                                <p className="mb-8 font-medium text-slate-800">We collect information to provide better marketing solutions, improve user experience, and ensure secure digital interactions.</p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            A. Information You Provide Voluntarily
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 ml-4">
                                            {["Name, email address, phone number", "Business details and company info", "Project requirements via forms", "Communication details (email, chat)"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl text-slate-700 text-sm font-medium">
                                                    <UserCheck size={14} className="text-blue-500" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            B. Information Collected Automatically
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 ml-4">
                                            {["IP address and browser type", "Device info and OS", "Pages visited and time spent", "Cookies and tracking technologies"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl text-slate-700 text-sm font-medium">
                                                    <Ghost size={14} className="text-blue-400" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-6 bg-white border border-blue-100 rounded-2xl italic text-slate-700">
                                        <h3 className="text-lg font-bold text-blue-600 mb-2">C. Third-Party Data</h3>
                                        We may receive limited information from advertising platforms, analytics providers, or CRM systems when integrated with our marketing campaigns.
                                    </div>
                                </div>
                            </SectionCard>

                            {/* Section 2 */}
                            <SectionCard icon={Eye} title="2. How We Use Your Information">
                                <p className="mb-6">Adkryoss managed by Clink Consultancy Services Private Limited uses your data to:</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Deliver digital marketing services",
                                        "Respond to inquiries and proposals",
                                        "Improve website performance",
                                        "Analyze campaign effectiveness",
                                        "Send relevant updates and offers",
                                        "Ensure legal compliance"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl group-hover:border-blue-200 transition-colors hover:shadow-md hover:-translate-y-0.5">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            <span className="text-slate-800 font-semibold">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 p-5 bg-blue-600 text-white rounded-2xl text-center font-bold shadow-lg shadow-blue-600/20">
                                    We do not sell, rent, or trade your personal information.
                                </p>
                            </SectionCard>

                            {/* Section 3 */}
                            <SectionCard icon={Cookie} title="3. Cookies & Tracking">
                                <p className="mb-6">We use cookies and similar technologies to enhance performance and personalize your experience. These include:</p>
                                <div className="space-y-4">
                                    {[
                                        { label: "Essential cookies", desc: "For core website functionality" },
                                        { label: "Analytics cookies", desc: "For performance tracking" },
                                        { label: "Marketing cookies", desc: "For campaign optimization" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
                                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                                                <Cookie size={20} />
                                            </div>
                                            <div>
                                                <span className="block font-bold text-slate-900">{item.label}</span>
                                                <span className="text-sm text-slate-500">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-6 text-sm text-slate-500 italic">You can control or disable cookies through your browser settings.</p>
                            </SectionCard>

                            {/* Section 4 */}
                            <SectionCard icon={Share2} title="4. Data Sharing & Disclosure">
                                <p className="mb-6">We may share information only when necessary and under strict safeguards:</p>
                                <ul className="space-y-4">
                                    {[
                                        "With trusted service providers (hosting, analytics, CRM tools)",
                                        "For legal compliance or regulatory requirements",
                                        "During business restructuring or lawful transfer of assets"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-700">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 font-bold text-slate-900 border-t border-slate-200 pt-6">
                                    All third-party partners are obligated to maintain confidentiality and data security standards.
                                </p>
                            </SectionCard>

                            {/* Section 5 */}
                            <SectionCard icon={Lock} title="5. Data Security" highlight>
                                <p className="mb-6">Adkryoss managed by Clink Consultancy Services Private Limited implements industry-standard safeguards including:</p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {["SSL encryption", "Secure hosting", "Access control", "System monitoring"].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center p-4 bg-white border border-blue-100 rounded-2xl text-center">
                                            <Shield className="text-blue-600 mb-2" size={24} />
                                            <span className="font-bold text-slate-900 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="p-6 bg-slate-900 text-white rounded-2xl font-medium text-center italic">
                                    "While we strive to protect your data, no system is completely immune to cyber threats."
                                </p>
                            </SectionCard>

                            {/* Section 6 */}
                            <SectionCard icon={RefreshCw} title="6. Data Retention">
                                <p className="mb-6">We retain personal information only as long as necessary for:</p>
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {["Service delivery", "Legal compliance", "Business analytics"].map((item, i) => (
                                        <span key={i} className="px-6 py-2 bg-white border border-blue-200 text-blue-700 rounded-full font-bold">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <p className="font-medium text-slate-700">
                                    When no longer required, data is securely deleted or anonymized.
                                </p>
                            </SectionCard>

                            {/* Section 7 */}
                            <SectionCard icon={UserCheck} title="7. Your Rights">
                                <p className="mb-6">Depending on your location, you may have rights including:</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {["Access to personal data", "Correction of inaccurate info", "Request for data deletion", "Withdrawal of consent", "Objection to processing"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-colors">
                                            <Shield className="text-blue-600" size={18} />
                                            <span className="text-slate-800 font-bold text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-slate-600">To exercise your rights, contact us through the details provided below.</p>
                            </SectionCard>

                            {/* Simplified Sections */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <SectionCard icon={Link2} title="8. Third-Party Links">
                                    <p className="text-sm">We are not responsible for the privacy practices of external websites linked from our platform. Review their policies independently.</p>
                                </SectionCard>
                                <SectionCard icon={UserCheck} title="9. Children's Privacy">
                                    <p className="text-sm">Our services are for professionals. We do not knowingly collect information from individuals under 18 years of age.</p>
                                </SectionCard>
                            </div>

                            <SectionCard icon={RefreshCw} title="10. Policy Updates">
                                <p>We may update this Privacy Policy to reflect changes in regulations, technologies, or business practices. Updated versions will be published on this page with a revised effective date.</p>
                            </SectionCard>

                            {/* Section 11 */}
                            <div className="p-12 md:p-16 bg-slate-900 text-white rounded-[40px] text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white relative z-10">11. Contact Us</h2>
                                <p className="text-slate-400 mb-12 max-w-2xl mx-auto relative z-10 text-lg">
                                    For privacy-related queries, requests, or concerns, please contact:
                                </p>
                                <div className="grid md:grid-cols-2 gap-10 relative z-10 max-w-2xl mx-auto">
                                    <div className="flex flex-col items-center group/item cursor-pointer">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover/item:bg-blue-600 group-hover/item:-translate-y-2">
                                            <Mail size={24} />
                                        </div>
                                        <span className="font-bold text-lg mb-1">Email</span>
                                        <a href="mailto:info@adkryoss.com" className="text-slate-400 hover:text-white transition-colors">info@adkryoss.com</a>
                                    </div>
                                    <div className="flex flex-col items-center group/item cursor-pointer">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover/item:bg-blue-600 group-hover/item:-translate-y-2">
                                            <Globe size={24} />
                                        </div>
                                        <span className="font-bold text-lg mb-1">Website</span>
                                        <a href="https://adkross.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">adkross.vercel.app</a>
                                    </div>
                                </div>
                            </div>

                            {/* Final Note */}
                            <div className="text-center pt-24 border-t border-slate-100 pb-16">
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Commitment to Transparency</h2>
                                <p className="text-xl md:text-2xl font-bold text-slate-800 italic leading-tight max-w-3xl mx-auto mb-8">
                                    "We believe responsible data handling builds stronger digital partnerships. Your information powers better marketing strategies — and we treat it with the highest level of care."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
