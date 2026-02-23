import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-25 right-8 w-[50px] h-[50px] rounded-full bg-[#0066cc] text-white border-none cursor-pointer flex items-center justify-center shadow-[0_4px_12px_rgba(0,102,204,0.3)] transition-all duration-300 z-[999] hover:-translate-y-[5px] hover:shadow-[0_6px_16px_rgba(0,102,204,0.4)]"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={34} strokeWidth={2.5} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
