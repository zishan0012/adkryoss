import React from 'react';

const Portfolio = () => {
    return (
        <div className="container" style={{ padding: '80px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '20px' }}>
                    Portfolio
                </h1>
                <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                    Browse our portfolio of successful projects and client work.
                </p>
            </div>
        </div>
    );
};

export default Portfolio;
