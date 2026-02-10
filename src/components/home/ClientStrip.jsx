import React from 'react';

const ClientStrip = () => {
    const clients = ['Bajaj Finserv', 'Airtel', 'Apollo', 'Jio', 'Unacademy', 'Dabur'];

    return (
        <section className="client-strip" style={{ padding: '40px 0', borderBottom: '1px solid #eee' }}>
            <div className="container">
                <p style={{ textAlign: 'center', color: '#999', marginBottom: '20px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Trusted by Market Leaders</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px', opacity: 0.6 }}>
                    {clients.map((client, index) => (
                        <div key={index} style={{ fontSize: '24px', fontWeight: 'bold', color: '#ccc' }}>
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientStrip;
