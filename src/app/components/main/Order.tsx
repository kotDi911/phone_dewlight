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
            phone: 499.99,
            laptop: 999.99,
            watch: 199.99,
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
                alert("Произошла ошибка: " + error.message);
            } else {
                console.error("Неизвестная ошибка:", error);
            }
        }
    };

    return (
        <section id="order" className="section order">
            <div className="flex">
                <div className="img-container">
                    <Image
                        src="/phone_dewlight/images/phone.jpg"
                        alt="Phone Dewlight"
                        width={300}
                        height={600}
                        className="main-img"
                    />
                </div>
                <div className="w-60 ml-5">
                    <div>
                        <h2 className="h2">MAKE A BOOKING</h2>
                        <p className="regular">Впустите Сияние Инноваций</p>
                    </div>
                    <form className="w-full md:w-1/2 space-y-4 text-left" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="product">Выберите товар:</label>
                            <select
                                id="product"
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                                required
                            >
                                <option value="">-- Выберите --</option>
                                <option value="phone">Смартфон</option>
                                <option value="laptop">Ноутбук</option>
                                <option value="watch">Смарт-часы</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="quantity">Количество:</label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min={1}
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="name">Имя:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Имя"
                                className="w-full mt-1 p-2 border rounded"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full mt-1 p-2 border rounded"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">Телефон:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Телефон"
                                className="w-full mt-1 p-2 border rounded"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="address">Адрес:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Адрес доставки"
                                className="w-full mt-1 p-2 border rounded"
                                required
                            />
                        </div>

                        <button type="submit" className="big-btn">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}