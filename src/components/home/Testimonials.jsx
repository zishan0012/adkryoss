import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>What Our Clients Say</h2>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '40px',
                    backgroundColor: '#fff',
                    border: '1px solid #eee',
                    borderRadius: '10px',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <div style={{ color: '#f1c40f', marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={24} />)}
                    </div>
                    <p style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '30px', color: '#555' }}>
                        "Adkryoss has been an incredible partner for us. Their SEO strategies have helped us increase our organic traffic by 300% in just one year. Highly recommended!"
                    </p>
                    <h4 style={{ marginBottom: '5px' }}>Marketing Director</h4>
                    <p style={{ fontSize: '14px', color: '#999' }}>Leading EdTech Company</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
