import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Info, CreditCard, XCircle, RefreshCcw, AlertOctagon, HelpCircle, FileText, Clock, Milestone, Ban } from 'lucide-react';

const RefundAndCancellation = () => {
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Refund & Cancellation Policy</h1>
                        <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">Clear. Transparent. Professional.</h2>
                        <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-medium">
                            <span className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
                                <Clock size={18} className="text-blue-400" /> Last Updated: February 2026
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-20 text-center border-b border-slate-100 pb-16">
                            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                                At <strong>Adkryoss</strong>, we believe in building long-term partnerships through clarity and accountability. This Refund & Cancellation Policy outlines how payments, cancellations, and refunds are handled for all digital marketing services offered by <strong>Adkryoss managed by Clink Consultancy Services Private Limited</strong>.
                            </p>
                        </div>

                        <div className="flex flex-col gap-20">

                            {/* Section 1 */}
                            <SectionCard icon={Info} title="1. Scope of Services" highlight>
                                <p className="mb-6 font-medium text-slate-800">This policy applies to all services including but not limited to:</p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        "SEO (Search Engine Optimization)",
                                        "Social Media Marketing (SMM)",
                                        "Paid Advertising (Meta & Google Ads)",
                                        "Website Development & Optimization",
                                        "Branding & Creative Services",
                                        "Content Marketing & Strategy"
                                    ].map((service, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl group-hover:border-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            <span className="text-slate-800 font-semibold text-sm">{service}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="p-4 bg-blue-600 text-white rounded-2xl text-center font-bold text-sm italic">
                                    "All services are delivered on a project-based, milestone-based, or retainer-based model depending on the agreement signed with the client."
                                </p>
                            </SectionCard>

                            {/* Section 2 */}
                            <SectionCard icon={CreditCard} title="2. Payment Terms">
                                <ul className="space-y-4">
                                    {[
                                        "All services require advance payment as agreed in the proposal or service contract.",
                                        "Payments once made are considered confirmation of service booking.",
                                        "Retainer-based services are billed monthly or quarterly in advance.",
                                        "Custom project payments may follow milestone-based structures."
                                    ].map((term, i) => (
                                        <li key={i} className="flex items-start gap-4 p-4 hover:bg-white rounded-xl transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                                            <span className="font-medium">{term}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 flex items-center gap-4">
                                    <AlertOctagon className="text-blue-400 shrink-0" size={20} />
                                    <p className="text-sm m-0">Adkryoss managed by Clink Consultancy Services Private Limited reserves the right to pause services if payments are delayed beyond the agreed timeline.</p>
                                </div>
                            </SectionCard>

                            {/* Section 3 */}
                            <SectionCard icon={XCircle} title="3. Cancellation Policy" highlight>
                                <div className="space-y-8">
                                    <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 transition-all">
                                        <h3 className="text-lg font-bold text-blue-600 mb-3">Before Project Initiation:</h3>
                                        <p className="text-slate-600">If cancellation is requested before work officially begins, a partial refund may be processed after deducting administrative and consultation charges.</p>
                                    </div>

                                    <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-red-200 transition-all">
                                        <h3 className="text-lg font-bold text-red-600 mb-3">After Project Initiation:</h3>
                                        <p className="text-slate-600">Once strategy development, campaign setup, design work, ad account configuration, keyword research, or content planning has started, cancellation requests will not be eligible for a refund.</p>
                                    </div>

                                    <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 transition-all">
                                        <h3 className="text-lg font-bold text-blue-600 mb-3">Retainer Services:</h3>
                                        <p className="text-slate-600">Retainer plans can be discontinued with prior written notice (minimum 15 days before next billing cycle). However, no refund will be issued for the current active billing period.</p>
                                    </div>
                                </div>
                            </SectionCard>

                            {/* Section 4 */}
                            <SectionCard icon={RefreshCcw} title="4. Refund Policy">
                                <p className="mb-6 font-medium text-slate-800 italic">Due to the digital and customized nature of marketing services:</p>
                                <div className="grid gap-4">
                                    {[
                                        "Refunds are not applicable once services have commenced.",
                                        "Deliverables such as strategy documents, creatives, ad copies, SEO audits, landing pages, and analytics reports are non-refundable once shared.",
                                        "No refunds will be provided for performance-based fluctuations (e.g., ranking changes, ad results, algorithm updates, market competition factors)."
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
                                            <Ban className="text-red-500 shrink-0" size={20} />
                                            <p className="m-0 font-medium text-slate-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl font-medium text-slate-800">
                                    Adkryoss managed by Clink Consultancy Services Private Limited focuses on delivering strategic execution and professional expertise, not guaranteed outcomes influenced by third-party platforms like search engines or social media networks.
                                </p>
                            </SectionCard>

                            {/* Section 5 */}
                            <SectionCard icon={Ban} title="5. Non-Refundable Situations" highlight>
                                <p className="mb-6 font-bold text-slate-900">Refund requests will not be entertained under the following circumstances:</p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Change in business goals after launch",
                                        "Client's internal delays in approvals",
                                        "Failure to provide necessary access",
                                        "Suspension of ad accounts by platforms",
                                        "Dissatisfaction due to algorithm updates"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl">
                                            <XCircle size={16} className="text-red-400" />
                                            <span className="text-sm font-semibold text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>

                            {/* Section 6 */}
                            <SectionCard icon={FileText} title="6. Exceptional Cases" dark>
                                <p className="mb-6">In rare and genuine cases, refund requests may be reviewed by the management team. Decisions will be made based on documented communication, project progress, and contractual commitments.</p>
                                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-center font-bold text-lg text-blue-400">
                                    All refund decisions are final and at the sole discretion of Adkryoss managed by Clink Consultancy Services Private Limited.
                                </div>
                            </SectionCard>

                            {/* Section 7 - 8 Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <SectionCard icon={Shield} title="7. Disputes">
                                    <p className="text-sm">Clients should contact support before initiating chargebacks. Unauthorized disputes may lead to service termination.</p>
                                </SectionCard>
                                <SectionCard icon={RefreshCcw} title="8. Policy Updates">
                                    <p className="text-sm">This policy may be updated periodically. Clients are advised to review this page regularly for changes.</p>
                                </SectionCard>
                            </div>

                            {/* Final CTA */}
                            <div className="p-12 md:p-16 bg-slate-900 text-white rounded-[40px] text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white relative z-10">Need Assistance?</h2>
                                <p className="text-slate-400 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                                    For questions regarding cancellations, billing, or refunds, please contact our official support team through the Contact Us page on our website.
                                </p>
                                <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 relative z-10">
                                    <HelpCircle size={20} /> Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundAndCancellation;
