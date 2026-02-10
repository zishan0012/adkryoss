import React from 'react';

const ContactCTA = () => {
    return (
        <section className="section-padding" style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #c0191e 100%)',
            color: '#fff',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{ color: '#fff', marginBottom: '20px', fontSize: '42px' }}>Let's Do Great Work Together</h2>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                    Ready to grow your business? Speak to our digital marketing experts today.
                </p>
                <button className="btn" style={{
                    backgroundColor: '#fff',
                    color: 'var(--primary)',
                    fontSize: '18px',
                    padding: '15px 40px',
                    fontWeight: '700'
                }}>
                    Request a Quote
                </button>
            </div>
        </section>
    );
};

export default ContactCTA;
