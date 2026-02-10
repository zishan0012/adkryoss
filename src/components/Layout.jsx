import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 400px)' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
