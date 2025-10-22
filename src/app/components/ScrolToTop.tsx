"use client";
import { useState, useEffect } from "react";

export default function ScrollToTopBtn() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top ${showScrollTop ? "visible" : ""}`}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
}
