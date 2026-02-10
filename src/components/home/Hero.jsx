import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero" style={{
            padding: '120px 0 80px',
            background: 'linear-gradient(to right, #f9f9f9 70%, #fff 70%)',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div className="hero-content" style={{ flex: '1 1 500px', paddingRight: '40px' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        backgroundColor: '#fceaeb',
                        color: 'var(--primary)',
                        borderRadius: '20px',
                        fontWeight: '600',
                        fontSize: '14px',
                        marginBottom: '20px'
                    }}>
                        #1 SEO Agency in India
                    </span>
                    <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', color: 'var(--secondary)' }}>
                        Drive Traffic, Leads & <span style={{ color: 'var(--primary)' }}>Revenue</span> with Expert Digital Marketing Services
                    </h1>
                    <p style={{ fontSize: '18px', marginBottom: '30px', color: '#555' }}>
                        Data Backed Services to Grow Your Revenue. We help you achieve a 2x Increase in Avg. Monthly Traffic.
                    </p>

                    <div className="cta-group" style={{ display: 'flex', gap: '20px' }}>
                        <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Get Started <ArrowRight size={18} />
                        </button>
                        {/* <button className="btn btn-secondary" style={{
                            color: 'var(--secondary)',
                            borderColor: 'var(--secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <Play size={18} fill="currentColor" /> Watch Video
                        </button> */}
                    </div>
                </div>

                <div className="hero-image" style={{ flex: '1 1 400px', marginTop: '40px' }}>
                    {/* Placeholder for Hero Image */}
                    <div style={{
                        width: '100%',
                        height: '400px',
                        backgroundColor: '#eee',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                        fontSize: '20px',
                        fontWeight: '500'
                    }}>
                        Hero Image / Video Area
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
