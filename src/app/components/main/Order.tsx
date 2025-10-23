"use client";
import {useState} from "react";
import Image from "next/image";

export default function Order() {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 1, // по умолчанию 1
        price: 0,
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "quantity" ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 💡 Пример установки цены в зависимости от товара
        const productPrices: Record<string, number> = {
            small: 100,
            medium: 200,
            large: 300,
        };
        const price = productPrices[formData.product] ?? 0;

        try {
            const res = await fetch("/api/create_order.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-TOKEN": "SECRET_TOKEN_123",
                },
                body: JSON.stringify({
                    ...formData,
                    price, // актуализированная цена
                }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Ошибка при отправке формы");
            }

            alert("Заказ успешно оформлен!");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Ошибка:", error.message);
                // alert("Произошла ошибка: " + error.message);
            } else {
                console.error("Неизвестная ошибка:", error);
            }
        }
    };

    return (
        <section id="order" className="section order">
            <div className="container">
                <h2 className="h2">MAKE A BOOKING</h2>
                <p className="regular">Впустите Сияние Инноваций</p>
                <div className="form-container">
                    <div className="img-container-order">
                        <Image
                            src="/phone_dewlight/images/phone.jpg"
                            alt="Phone Dewlight"
                            width={300}
                            height={600}
                            className="main-img-order"
                        />
                    </div>
                    <div className="w-60 ml-5">
                        <form className="form flex column between" onSubmit={handleSubmit}>
                            {/*<div className="flex column input-cont">*/}
                            {/*    <label htmlFor="product" className="label">Change pack</label>*/}
                            {/*    <select*/}
                            {/*        id="product"*/}
                            {/*        name="product"*/}
                            {/*        value={formData.product}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        className="input"*/}
                            {/*        required*/}
                            {/*    >*/}
                            {/*        <option value="">-- Change pack --</option>*/}
                            {/*        <option value="small">Small pack</option>*/}
                            {/*        <option value="medium">Medium pack</option>*/}
                            {/*        <option value="large">Big pack</option>*/}
                            {/*    </select>*/}
                            {/*</div>*/}

                            {/*<div className="flex column input-cont">*/}
                            {/*    <label htmlFor="quantity" className="label">Quantity</label>*/}
                            {/*    <input*/}
                            {/*        type="number"*/}
                            {/*        id="quantity"*/}
                            {/*        name="quantity"*/}
                            {/*        min={1}*/}
                            {/*        value={formData.quantity}*/}
                            {/*        onChange={handleChange}*/}
                            {/*        className="input"*/}
                            {/*        required*/}
                            {/*    />*/}
                            {/*</div>*/}

                            <div className="flex column input-cont">
                                <label htmlFor="name" className="label">Enter your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="input"
                                    required
                                />
                            </div>

                            <div className="flex column input-cont">
                                <label htmlFor="email" className="label">Enter your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="input"
                                    required
                                />
                            </div>

                            <div className="flex column input-cont">
                                <label htmlFor="phone" className="label">Enter your phone number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="input"
                                    required
                                />
                            </div>

                            <div className="flex column input-cont">
                                <label htmlFor="address" className="label">Enter your address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Address"
                                    className="input"
                                    required
                                />
                            </div>

                            <button type="submit" className="big-btn">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}