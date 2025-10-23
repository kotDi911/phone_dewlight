"use client";
import { useEffect, useState } from "react";

export default function ScrollPreOrderBtn() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // если до конца страницы остаётся меньше 300px — скрываем кнопку
            const nearBottom = scrollY + windowHeight >= documentHeight - 300;

            setVisible(!nearBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToPreOrder = () => {
        const orderSection = document.getElementById("order");
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToPreOrder}
            className={`scroll-preorder-btn ${visible ? "visible" : "hidden"}`}
            aria-label="Scroll to Pre-order"
        >
            ↓ Pre-order
        </button>
    );
}
