const pythonPath="/images/python.png";
const javascriptPath="/images/js.png";
const cssPath="/images/css.png";
const htmlPath="/images/html.png";
const reactPath="/images/react.png";
const nodePath="/images/node.png";
const tailwindPath="/images/tailwind.png";
const postgresPath="/images/postgres.png";
const figmaPath="/images/figma.png";
const logos = [
    {
        src: pythonPath,
        alt: "Python",
        title: "Python",
        description: "Python to wysokopoziomowy, interpretowany język programowania, ceniony za czytelność składni i wszechstronność. Wykorzystuję go głównie do tworzenia backendu oraz systemów zarządzania treścią (CMS)."
    },
    {
        src: javascriptPath,
        alt: "JavaScript",
        title: "JavaScript",
        description: "JavaScript to dynamiczny język programowania, powszechnie stosowany w tworzeniu interaktywnych elementów na stronach internetowych. Używam go do budowy dynamicznych interfejsów użytkownika."
    },
    {
        src: cssPath,
        alt: "CSS",
        title: "CSS",
        description: "CSS (Cascading Style Sheets) to język stylów używany do opisywania wyglądu dokumentów HTML. Wykorzystuję go do tworzenia estetycznych i responsywnych interfejsów użytkownika."
    },
    {
        src: htmlPath,
        alt: "HTML",
        title: "HTML",
        description: "HTML (HyperText Markup Language) to standardowy język znaczników wykorzystywany do tworzenia struktury stron internetowych. Używam go jako podstawy przy projektowaniu aplikacji webowych."
    },
    {
        src: reactPath,
        alt: "React",
        title: "React",
        description: "React to biblioteka JavaScript służąca do budowy interfejsów użytkownika, szczególnie aplikacji jednostronicowych (SPA). Korzystam z niej do tworzenia nowoczesnych i wydajnych frontów."
    },
    {
        src: nodePath,
        alt: "Node.js",
        title: "Node.js",
        description: "Node.js to środowisko uruchomieniowe JavaScript poza przeglądarką, wykorzystywane do tworzenia backendu. Stosuję je do budowy serwerów oraz API dla aplikacji internetowych."
    },
    {
        src: tailwindPath,
        alt: "Tailwind CSS",
        title: "Tailwind CSS",
        description: "Tailwind CSS to framework oparty na klasach narzędziowych, pozwalający na szybkie i elastyczne tworzenie stylów. Wykorzystuję go do projektowania spójnych i nowoczesnych interfejsów."
    },
    {
        src: postgresPath,
        alt: "PostgreSQL",
        title: "PostgreSQL",
        description: "PostgreSQL to zaawansowany, otwartoźródłowy system zarządzania relacyjnymi bazami danych. Używam go do przechowywania i zarządzania danymi w projektach webowych."
    },
    {
        src: figmaPath,
        alt: "Figma",
        title: "Figma",
        description: "Figma to przeglądarkowe narzędzie do projektowania UI/UX, umożliwiające współpracę w czasie rzeczywistym. Wykorzystuję je do tworzenia makiet i prototypów interfejsów aplikacji."
    }
    

    
]

const Logo = ({ src, alt, clickAction }) => {
    return (
        <button className="flex h-full  ">
            <img src={src} onClick={clickAction} alt={alt} className=" h-20 w-20 md:h-25 md:w-25 lg:h-30 lg:w-30 hover:scale-110 transition 0.3s all"  />
        </button>
    );
}

export {logos};
export default Logo;