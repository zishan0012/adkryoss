import React from 'react';

const CaseStudies = () => {
    const studies = [
        { title: 'Bajaj Finserv', metric: '400 Cr+', label: 'Disbursals of Gold Loans', color: '#005a8d' },
        { title: 'Online Pharmacy', metric: '6x', label: 'Increase in Monthly Traffic', color: '#27ae60' },
        { title: 'Bajaj Broking', metric: '502%', label: 'Growth in Traffic & Rankings', color: '#e67e22' }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2>Driving Actual Business Growth</h2>
                    <p>See how we have transformed businesses across industries.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {studies.map((study, index) => (
                        <div key={index} style={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ height: '200px', backgroundColor: study.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
                                {study.title} Logo
                            </div>
                            <div style={{ padding: '30px', textAlign: 'center' }}>
                                <div style={{ fontSize: '42px', fontWeight: '800', color: 'var(--secondary)', marginBottom: '5px' }}>{study.metric}</div>
                                <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>{study.label}</p>
                                <a href="#" style={{ color: 'var(--primary)', fontWeight: '700' }}>Read Case Study</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <button className="btn btn-primary">View All Case Studies</button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
