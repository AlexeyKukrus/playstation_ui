import type { PropsWithChildren } from "react";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";

export default function Layout({ children }: PropsWithChildren<PropsWithChildren<unknown>>) {
    return (
        <div
            className='bg-cover bg-no-repeat bg-center h-screen'
            style={{backgroundImage: "url('/img/backgrounds/ff-7-bg.jpg')"}}
        >
            <Header />
            {children}
            <Footer />
        </div>
    )
}