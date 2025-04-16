import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400", // Bebas Neue only comes in 400 weight
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
})
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body
        className= "antialiased "
      >
        {children}
      </body>
    </html>
  );
}
