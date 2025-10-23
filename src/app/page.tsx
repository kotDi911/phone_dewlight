import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import ScrollToTopBtn from "@/app/components/ScrolToTop";
import ScrollPreOrderBtn from "@/app/components/ScrollPreOrderBtn";

export default function Home() {
    return (
        <div>
            <Header/>
            <Main/>
            <ScrollToTopBtn/>
            <ScrollPreOrderBtn/>
        </div>
    );
}