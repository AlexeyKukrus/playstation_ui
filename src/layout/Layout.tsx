import type { PropsWithChildren } from "react";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";

export default function Layout({
  children,
}: PropsWithChildren<PropsWithChildren<unknown>>) {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen relative"
      style={{ backgroundImage: "url('/img/backgrounds/pss-bg.jpg')" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.75)_100%)]"></div>
      <div className="relative h-full">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
