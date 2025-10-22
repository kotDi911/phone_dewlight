import Hero from "@/app/components/main/Hero";
import Product from "@/app/components/main/Product";
import About from "@/app/components/main/About";
import Order from "@/app/components/main/Order";

export default function Main() {
    return (
            <main className="main">
                <Hero/>
                <Product/>
                <About/>
                <Order/>
            </main>
    );
}
