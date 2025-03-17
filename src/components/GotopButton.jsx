import { useEffect, useState } from "react";
import { ArrowUpCircle } from 'lucide-react';
import '../assets/sass/GotopButton.scss'

export default function GotopButton() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <button
                className={`go-top-button ${isVisible ? 'visible' : 'hidden'}`}
                onClick={scrollToTop}
                aria-label="回到頂部"
            >
                <ArrowUpCircle />
            </button>


        </>
    )
}