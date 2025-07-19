import {Github, Instagram} from "lucide-react";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  // Navigation links data
  const navigationLinks = [
    { title: t.navAbout, href: "#About" },
    { title: t.navPortfolio, href: "#Portfolio" },
    { title: t.navContact, href: "#Kontakt" },
  ];

  // Services links data
  const servicesLinks = [
    { title: "UI/UX Design",  },
    { title: "Web Development",},
    { title: "Consulting"},
  ];

  // Social media links data
  const socialLinks = [
    {
        name:"GitHub",
        href: "https://github.com/JStec0312",
        icon: <Github size={18} fill="#D5F60C"  />
    },
    {
        name:"Instagram",
        href: "https://www.instagram.com/stecu03/",
        icon: <Instagram size={18} fill="#D5F60C" />
    }

  ];

  return (
    <div className=" flex flex-row justify-between md:mt-8  w-full">
      <div className="w-full ">
        <footer className="  border-[#222222]  pb-8">
          <div className=" ">
            {/* Main footer content */}
            <div className="flex flex-row flex-wrap md:grid md:grid-cols-5 gap-8 md:gap-8 pb-8 border-b-[0.8px] w-full  border-[#222222]">
              {/* Brand section */}
              <div className="col-span-1 w-fit">
                <h3 className="font-header text-white leading-none text-4xl tracking-wide">
                  JAKUB STEC
                </h3>
                
              </div>
              <div className=" md:hidden w-full"></div>              {/* Navigation section */}
              <div className="col-span-1  mr-auto">
                <h3 className="font-body font-semibold text-white text-base leading-none">
                  {t.footerNav}
                </h3>
                <nav className="mt-4">
                  <ul className="space-y-4">
                    {navigationLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="font-body text-[#888888] text-sm leading-[21px] hover:text-white transition-colors"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            {/* Social media section */}
                <div className="col-span-1 flex flex-col md:ml-auto mr-auto items-baseline">
                    <h3 className="font-body font-semibold text-white mb-4 text-base leading-none w-fit">
                    {t.footerSocialMedia}
                    </h3>
                    <div>
                    <ul className="space-y-4">
                        {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="flex flex-row gap-2  items-center">
                            <span className="font-body text-[#888888] text-sm leading-[21px] hover:text-white transition-colors">{link.name}</span>
                            {link.icon}
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
 
                </div>
              {/* Services section */}
              <div className="col-span-1  md:ml-auto">
                <h3 className="font-body font-semibold text-white text-base leading-none">
                  {t.footerServices}
                </h3>
                <div className="mt-4">
                  <ul className="space-y-4">
                    {servicesLinks.map((link, index) => (
                      <li key={index } > 
                        <p 
                          className="font-body cursor-pointer text-[#888888] text-sm leading-[none] hover:text-white transition-colors"
                        >
                          {link.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>              
              <div className="col-span-1 flex md:ml-auto flex-col items-baseline">
                <h3 className="font-body font-semibold text-white mb-4 text-base leading-none w-fit">
                    {t.footerContact}
                </h3>
                <a href="tel:+48570660663" className=" font-body text-[#888888] text-sm leading-[22.4px] flex w-fit">
                  +48 570 660 663
                </a>
                <a href="mailto:j.stec0312@gmail.com" className=" font-body text-[#888888] mt-4 text-sm leading-[22.4px] flex w-fit">
                    j.stec0312@gmail.com
                </a>
                <div className="mt-6 space-y-3">
                  {/* <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[47px] bg-[#111111] border-[#333333] text-black font-['Montserrat-Regular',Helvetica] text-sm"
                  />
                  <Button className="w-full h-[45px] bg-[#d5f60c] hover:bg-[#c2e00b] text-black font-['Montserrat-Medium',Helvetica] text-sm">
                    Subscribe
                  </Button> */}
                </div>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="mt-8 flex flex-col md:flex-row md:justify-between">
              <div className="flex flex-col md:flex-row md:space-x-10 space-y-2 md:space-y-0">
                <p className="font-['Montserrat-Regular',Helvetica] text-[#888888] text-sm leading-[21px]">
                  {t.footerCopyright}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="font-['Montserrat-Regular',Helvetica] text-[#888888] text-sm leading-[21px]">
                  j.stec0312@gmail.com
                </p>
                <p className="font-['Montserrat-Regular',Helvetica] text-[#888888] text-sm leading-[21px]">
                  {t.footerLocation}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}