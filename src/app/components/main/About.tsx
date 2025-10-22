export default function About() {
    return (
            <section id="about" className="section about">
                <h2 className="h2">
                    About
                </h2>
                <p className="regular">
                    Почувствуйте, как каждый бли́к света открывает новые горизонты.
                </p>
                <div className="">
                    {["Оптика", "Безопасность", "Связь", "ИИ"].map((tech, i) => (
                        <div key={i} className="">
                            <p className="small">{tech}</p>
                        </div>
                    ))}
                </div>
            </section>
    );
}
