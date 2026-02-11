import React from 'react';

const Testimonial = () => {
    return (
        <div className="container" style={{ padding: '80px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '20px' }}>
                    Testimonials
                </h1>
                <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                    Hear what our clients have to say about working with us.
                </p>
            </div>
        </div>
    );
};

export default Testimonial;
