

import BgDark from '../bg-dark/bg-dark.component';
import bg from './bg.jpg';

import img1 from './motherboard.jpg';


const About = ({ aboutRef }) => {
    return (
        <section
            id="about"
            className="relative text-white overflow-hidden h-full lg:h-[70vh]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            ref={aboutRef}
        >
            {/* Optionaler Overlay für bessere Lesbarkeit */}
            <BgDark />

            {/* 
        Container: 
        - max-w-screen-xl => Breite begrenzt, auf großen Bildschirmen max 1280px
        - px-4 py-16 => Innenabstände
        - flex => Layout in zwei Spalten (ab md: Flex-Row)
      */}
            <div className="relative mt-20 z-10 mx-auto max-w-screen-xl px-4 py-16 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">

                <div className="flex flex-col gap-4 w-full md:w-1/2 items-center justify-center">
                    <div className="w-full h-96 overflow-hidden relative group rounded-lg shadow-lg">
                        <img
                            src={img1}
                            alt="Bild 1"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Rechte Spalte: Titel, Text, 4 “Buttons” */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight ">
                        Über uns
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed mt-4">
                        Wir sind ein IT-Unternehmen, das sowohl mit privaten Kunden
                        als auch im B2B-Bereich zusammenarbeitet. Unser Team aus
                        Experten bietet umfassende Lösungen im Bereich Software-
                        und Hardware-Support, um Ihren Alltag und Ihr Business
                        effizienter zu gestalten. Hier sind ein paar Beispiele was wir machen:
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center md:justify-start items-start gap-3">
                        {/* 4 “Buttons” ohne Funktion, nur Stil und Hover-Effekt */}
                        <div className="px-5 py-2 bg-black/50 hover:bg-neutral-700 rounded-lg cursor-pointer transition-colors duration-200 w-full lg:w-max text-center">
                            Soft-&Hardware Problemlösung
                        </div>
                        <div className="px-5 py-2 bg-black/50 hover:bg-neutral-700 rounded-lg cursor-pointer transition-colors duration-200 w-full lg:w-max text-center">
                            PC-Zusammenstellung
                        </div>
                        <div className="px-5 py-2 bg-black/50 hover:bg-neutral-700 rounded-lg cursor-pointer transition-colors duration-200 w-full lg:w-max text-center">
                            Web-Entwicklung
                        </div>
                        <div className="px-5 py-2 bg-black/50 hover:bg-neutral-700 rounded-lg cursor-pointer transition-colors duration-200 w-full lg:w-max text-center">
                            Netzwerklösungen
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
};

export default About;