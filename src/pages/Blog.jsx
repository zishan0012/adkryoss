import React from 'react';

const Blog = () => {
    return (
        <div className="container" style={{ padding: '80px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '20px' }}>
                    Blog
                </h1>
                <p style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                    Insights, tips, and news from the world of digital marketing.
                </p>
            </div>
        </div>
    );
};

export default Blog;
