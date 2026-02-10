import React from 'react';
import { Search, MousePointer, Smartphone, PenTool, BarChart, Globe } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        { title: 'SEO Services', icon: <Search size={40} />, desc: 'Rank higher on Google with our data-driven SEO strategies.' },
        { title: 'PPC Services', icon: <MousePointer size={40} />, desc: 'Maximize ROI with targeted Pay-Per-Click campaigns.' },
        { title: 'App Marketing', icon: <Smartphone size={40} />, desc: 'Boost app installs and engagement with ASO and paid user acquisition.' },
        { title: 'Content Marketing', icon: <PenTool size={40} />, desc: 'Engage your audience with compelling, high-quality content.' },
        { title: 'Online Reputation', icon: <BarChart size={40} />, desc: 'Build and maintain a positive brand image online.' },
        { title: 'Web Design', icon: <Globe size={40} />, desc: 'Create stunning, user-friendly websites that convert.' },
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '10px' }}>Our Digital Marketing Services</h2>
                    <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
                        We offer a full suite of digital marketing services to help you grow your business online.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {services.map((service, index) => (
                        <div key={index} className="service-card" style={{
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                            backgroundColor: '#fff',
                            border: '1px solid #f0f0f0',
                            transition: 'transform 0.3s ease',
                            textAlign: 'center'
                        }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>{service.title}</h3>
                            <p style={{ marginBottom: '20px' }}>{service.desc}</p>
                            <a href="#" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Learn More &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
