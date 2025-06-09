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

export const metadata = {
  title: "Jakub Stec | Web Developer Portfolio",
  description: "Jakub Stec Web Developer Portfolio.",
  keywords: ["web developer", "frontend developer", "React", "Next.js", "portfolio", "Jakub Stec"],
  authors: [{ name: "Jakub Stec", url: "https://www.instagram.com/stecu03/" }],
  creator: "Jakub Stec",
  openGraph: {
    title: "Jakub Stec | Web Developer Portfolio",
    description: "Jakub Stec Web Developer Portfolio.",,
    url: "https://portfolio-website-iota-jet.vercel.app",
    siteName: "Jakub Stec Portfolio",
    images: [
      {
        url: "/images/META.png",
        width: 1200,
        height: 630,
        alt: "Jakub Stec - Web Developer Portfolio",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakub Stec | Web Developer Portfolio",
    description: "Jakub Stec - Web Developer Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        <link rel="canonical" href="https://portfolio-website-iota-jet.vercel.app" />
      </head>
      <body className="antialiased bg-black -z-20">
        {children}
      </body>
    </html>
  );
}
