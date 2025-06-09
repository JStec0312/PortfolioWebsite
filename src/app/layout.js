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
  description: "Portfolio profesjonalnego web developera specjalizującego się w React, Next.js i nowoczesnych technologiach frontendowych.",
  keywords: ["web developer", "frontend developer", "React", "Next.js", "portfolio", "Jakub Stec"],
  authors: [{ name: "Jakub Stec", url: "https://www.instagram.com/stecu03/" }],
  creator: "Jakub Stec",
  openGraph: {
    title: "Jakub Stec | Web Developer Portfolio",
    description: "Portfolio profesjonalnego web developera specjalizującego się w React, Next.js i nowoczesnych technologiach frontendowych.",
    url: "https://jakub-stec-portfolio.vercel.app",
    siteName: "Jakub Stec Portfolio",
    images: [
      {
        url: "/images/hero.png",
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
    description: "Portfolio profesjonalnego web developera specjalizującego się w React, Next.js i nowoczesnych technologiach frontendowych.",
    images: ["/images/hero.png"],
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
        <link rel="canonical" href="https://jakub-stec-portfolio.vercel.app" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
