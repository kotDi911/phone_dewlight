import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="section hero flex between h-100">
            <div className="flex column text-block j-center w-60 mr-5">
                <h1 className="h1">
                    СИЯНИЕ ИННОВАЦИЙ
                </h1>
                <p className="h3">
                    Встречайте <span className="text-blue-300">Phone Dewlight</span>
                </p>
                <p className="regular">
                    Кристально чистый дисплей. Революционная камера. Найдите своё место в новой эре.
                </p>
                <Link
                    href="#order"
                    className="big-btn"
                >
                    Pre - order
                </Link>
            </div>
            <div className="img-container">
                <Image
                    src="/phone_dewlight/images/phone.jpg"
                    alt="Phone Dewlight"
                    width={300}
                    height={600}
                    className="main-img"
                />
            </div>
        </section>
    );
}
