import Image from "next/image";
import Link from "next/link";

export default function Product() {
    return (
        <section id="product" className="section product flex column">
            <h2 className="h2">Product</h2>
            <p className="regular">
                Окунитесь в мир быстродействия. Phone Dewlight поможет вам по-новому взглянуть на жизнь.
            </p>
            <div className="product-grid between mt-2 mb-2">
                {["moment1", "moment2", "moment3", "moment4", "moment5", "moment6"].map((feat, i) => (
                    <div
                        key={i}
                        className="flex column img-container-small"
                    >
                        {/*<span className="">{feat}</span>*/}
                        <Image src={`/phone_dewlight/images/a${i}.jpg`} alt={feat} width={64} height={64} className="img"/>

                    </div>
                ))}
            </div>
            {/*<Link*/}
            {/*    href="#order"*/}
            {/*    className="big-btn"*/}

            {/*>*/}
            {/*    Pre - order*/}
            {/*</Link>*/}
        </section>
    );
}
