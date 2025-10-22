import Image from "next/image";
import Link from "next/link";

export default function Product() {
    return (
            <section id="product" className="section product">
                <h2 className="h2">Product</h2>
                <p className="regular">
                    Окунитесь в мир быстродействия. Phone Dewlight поможет вам по-новому взглянуть на жизнь.
                </p>
                <div className="">
                    {["Камера", "Процессор", "Экран", "Дизайн"].map((feat, i) => (
                        <div
                            key={i}
                            className=""
                        >
                            <Image src="/images/feature-icons.png" alt="icon" width={48} height={48} />
                            <span className="">{feat}</span>
                        </div>
                    ))}
                </div>
                <Link
                    href="#order"
                    className="big-btn"
                >
                    Pre - order
                </Link>
            </section>
    );
}
