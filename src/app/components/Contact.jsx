'use client';
import React from "react";
import { useState } from "react";
const envelopeSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H21V19H3V5Z" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 5L12 13L21 5" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const phoneSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V21C22 21.55 21.55 22 21 22C10.61 22 2 13.39 2 3C2 2.45 2.45 2 3 2H7.09C7.58 2 7.99 2.37 8.07 2.85C8.26 3.97 8.64 5.03 9.18 6.01C9.34 6.3 9.25 6.67 9 6.89L6.73 9.06C8.39 12.28 11.72 15.61 14.94 17.27L17.11 15C17.33 14.75 17.7 14.66 17.99 14.82C18.97 15.36 20.03 15.74 21.15 15.93C21.63 16.01 22 16.42 22 16.92Z" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const clockSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#D5F60C" strokeWidth="2"/>
    <path d="M12 7V12L15 14" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const instagramSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#D5F60C" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="#D5F60C" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" fill="#D5F60C"/>
  </svg>
);

const facebookSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#D5F60C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className="text-white justify-center py-4 w-full self-center gap-8 flex flex-col lg:flex-row lg:min-w-[1000px]" id="Kontakt">
      <div className="flex flex-col md:gap-4 lg:justify-between flex-1 gap-4">
          <div>
            <h2 className="font-header text-h2 leading-[1.3] truncate">Skontaktuj się ze mną</h2>
          </div>
            <div className="flex text-body gap-2">
              {envelopeSvg}
              <a href="mailto:j.stec0312@gmail.com" aria-label="Email kontaktowy">j.stec0312@gmail.com</a>
            </div>
            <div className="flex text-body gap-2">
              {instagramSvg}
              <a href="https://www.instagram.com/stecu03/" target="_blank" rel="noopener noreferrer" aria-label="Profil Instagram">@stecu03</a>
            </div>
            <div className="flex text-body gap-2">
              {facebookSvg}
              <a href="https://www.facebook.com/kuba.stec.106" target="_blank" rel="noopener noreferrer" aria-label="Profil Facebook">Jakub Stec</a>
            </div>
            <div className="flex text-body gap-2">
              {phoneSvg}
              <a href="tel:+48570660663" aria-label="Numer telefonu">+48 570 660 663</a>
            </div>
            <div className="flex text-body gap-2">
              {clockSvg}
              <p className="text-body text-secondary font-bold font-main">Odpowiedź w 24 godziny!</p>
            </div>
          </div>      <form className="flex flex-col flex-1 w-full lg:max-w-[700px] items-start gap-4 justify-around" aria-label="Formularz kontaktowy"> 
        <input 
          type="text" 
          name="name"
          id="name"
          placeholder="Imię" 
          className="outline-none leading-0 text-secondary placeholder-secondary border-b-2 border-white w-full pb-1 font-bold"
          aria-label="Imię" 
          required
        />
        <input 
          type="email" 
          name="email"
          id="email"
          placeholder="Email" 
          className="outline-none leading-0 text-secondary placeholder-secondary border-b-2 border-white w-full pb-1 font-bold"
          aria-label="Email"
          required
        />
        <input 
          type="text" 
          name="subject"
          id="subject"
          placeholder="Temat" 
          className="outline-none text-secondary placeholder-secondary border-b-2 border-white font-bold w-full pb-1"
          aria-label="Temat"
          required
        />
        <textarea 
          name="message"
          id="message"
          placeholder="Zostaw wiadomość" 
          className="outline-none min-h-[130px] text-sm w-full border-2 mt-2 border-white rounded-sm p-2"
          aria-label="Wiadomość"
          required
        />
        <button 
          type="submit"
          className="group relative inline-flex h-12 w-full items-center justify-center rounded-md bg-secondary px-6 font-medium text-primary font-body"
          aria-label="Wyślij wiadomość"
        >
          <span className='truncate'>Wyślij</span>
          <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
              <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  aria-hidden="true"
              >
                  <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                  ></path>
              </svg>
          </div>
    </button>
</form>
    </section>
  );
};

export default Contact;