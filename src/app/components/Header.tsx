import Link from "next/link";

export default function Header() {

    return (
            <header className="fixed top-0 left-0 right-0 z-50">
                <div className="flex justify-between items-center header">
                    <Link href="/" className="logo transition">
                        PD
                    </Link>
                    <nav className="hidden">
                        <Link href="#product" className="nav-link transition">
                            Product
                        </Link>
                        <Link href="#about" className="nav-link transition">
                            About
                        </Link>
                        {/*<Link*/}
                        {/*    href="#order"*/}
                        {/*    className="nav-link pre-order transition"*/}
                        {/*>*/}
                        {/*    Pre-order*/}
                        {/*</Link>*/}
                    </nav>
                </div>
            </header>
    );
}