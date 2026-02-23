import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import FixedCTA from "../components/FixedCTA";
import WhatsappFloat from "./WhatsappFloat";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="flex-1 pt-20 min-h-[calc(100vh-400px)]">
                {children}
                
            </main>
            <Footer />
            <ScrollToTop />
            <FixedCTA />
            <WhatsappFloat />
        </div>
    );
};

export default Layout;
