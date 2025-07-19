'use client';
import { useLanguage } from "../context/LanguageContext";
const pythonPath="/images/python.png";
const javascriptPath="/images/js.png";
const cssPath="/images/css.png";
const htmlPath="/images/html.png";
const reactPath="/images/react.png";
const nodePath="/images/node.png";
const tailwindPath="/images/tailwind.png";
const postgresPath="/images/postgres.png";
const figmaPath="/images/figma.png";

const getLogos = (translations) => [
    {
        src: pythonPath,
        alt: "Python",
        title: translations.logoPythonTitle,
        description: translations.logoPythonDesc
    },
    {
        src: javascriptPath,
        alt: "JavaScript",
        title: translations.logoJSTitle,
        description: translations.logoJSDesc
    },
    {
        src: cssPath,
        alt: "CSS",
        title: translations.logoCSSTitle,
        description: translations.logoCSSDesc
    },
    {
        src: htmlPath,
        alt: "HTML",
        title: translations.logoHTMLTitle,
        description: translations.logoHTMLDesc
    },
    {
        src: reactPath,
        alt: "React",
        title: translations.logoReactTitle,
        description: translations.logoReactDesc
    },
    {
        src: nodePath,
        alt: "Node.js",
        title: translations.logoNodeTitle,
        description: translations.logoNodeDesc
    },
    {
        src: tailwindPath,
        alt: "Tailwind CSS",
        title: translations.logoTailwindTitle,
        description: translations.logoTailwindDesc
    },
    {
        src: postgresPath,
        alt: "PostgreSQL",
        title: translations.logoPostgresTitle,
        description: translations.logoPostgresDesc
    },
    {
        src: figmaPath,
        alt: "Figma",
        title: translations.logoFigmaTitle,
        description: translations.logoFigmaDesc
    }
];

const Logo = ({ src, alt, clickAction }) => {
    return (
        <button className="flex h-full flex-col gap-2 items-center   ">
            <img src={src} onClick={clickAction} alt={alt} className=" h-20 w-20 md:h-25 md:w-25 lg:h-30 lg:w-30 hover:scale-110 transition 0.3s all"  />
            <span className=" text-2xl font-medium font-header text-white">{alt}</span>
        </button>
    );
}

// Export a function that gets logos with the current translations
export const useLogos = () => {
    const { t } = useLanguage();
    return getLogos(t);
};

export default Logo;