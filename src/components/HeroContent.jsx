import React from "react";
import Button from "../ui/Button";
const HeroContent = () => {
    return(
        <div className="flex flex-col md:flex-row gap-12  justify-center items-center md:items-start lg:items-center ">
            <div className="flex w-full gap-6 flex-col flex-1 ">
                <div className="flex flex-col gap-4  md:min-w-[450px] lg:min-w-[600px] xl:w-3/4">
                    <h1 className="text-h1 w-full text-text font-header leading-tight ">TWORZĘ NOWOCZESNE STRONY <span className="text-secondary">INTERNETOWE</span></h1>
                    <p className="text-body w-full text-text  ">Jestem studentem informatyki i zajmuję się tworzeniem nowoczesnych stron internetowych. Łączę estetykę z funkcjonalnością, oferując solidne rozwiązania w przystępnych cenach – idealne dla małych firm, freelancerów i każdego, kto chce się wyróżnić w sieci.</p>
                </div>
                <div className="flex flex-row items-center w-full gap-4 flex-wrap">
                    <Button type="kontakt"/>
                    <Button type="github"/>

                </div>
            </div>
            <div className="flex-1 flex justify-end">
                <img src="/images/hero.png" className=" max-h-[70dvh] h-full   rounded-xl"  alt="hero" />
            </div>
        </div>
    )
}
export default HeroContent;