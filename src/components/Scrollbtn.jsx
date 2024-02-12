import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This smoothens the scrolling behavior
        });
    };

    return (
        <button
            className="fixed bottom-4 right-4 bg-red hover:bg-blue text-white p-4 rounded-full shadow"
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
    );
}

export default ScrollToTopButton;
