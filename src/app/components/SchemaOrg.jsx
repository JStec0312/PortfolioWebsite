'use client';
import Script from 'next/script';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jakub Stec",
    "jobTitle": "Web Developer",
    "url": "https://portfolio-website-iota-jet.vercel.app",
    "image": "/images/meta.png",
    "sameAs": [
      "https://www.instagram.com/stecu03/",
      "https://www.facebook.com/kuba.stec.106"
    ],
    "email": "j.stec0312@gmail.com",
    "telephone": "+48570660663",
    "knowsAbout": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Web Development",
      "Frontend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Web Developer",
      "description": "Tworzenie nowoczesnych stron internetowych i aplikacji webowych"
    }
  };

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}
