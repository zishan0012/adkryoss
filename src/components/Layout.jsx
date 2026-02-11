import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 400px)' }}>
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Layout;
