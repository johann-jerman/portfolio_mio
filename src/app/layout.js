import { Header } from "../components/header/Header.jsx";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers.jsx";
import Script from "next/script.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Johann Jerman Portfolio",
  description: "Johann Jerman Porfolio de desarrollador Back-End ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    className="light min-h-screen"  style={{colorScheme: "light"}}
    >
      <body className={inter.className + " bg-bc dark:bg-n"}>
        <Providers>
          <Header />
            {children}
          <footer></footer>
        </Providers>
        <Script src="https://kit.fontawesome.com/28e80e8067.js" crossOrigin="anonymous"/>
      </body>
    </html>
  );
}
