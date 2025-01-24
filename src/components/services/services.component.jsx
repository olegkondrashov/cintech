import React, { useState } from "react";
import AnimatedDots from "../animated-dots/animated-dots.component";

const Services = () => {

    const [isClicked, setIsClicked] = useState(false)

    const cardLoader = () => {
        setIsClicked(true)
    }

    return (
        <section id="services" className="w-full h-full  flex flex-col items-center justify-center gap-20 bg-neutral-100 py-20">
            <AnimatedDots/>
            {/* Container zum Zentrieren des Inhalts */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Titelbereich */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Wir bieten vielfältige Services im IT-Bereich
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Wir erstellen Ihnen Einzelplatz- und Serversysteme auf allen Microsoft und UNIX-Plattformen, planen den Aufbau Ihrer Telekommunikationszentrale und kümmern uns um die Beschaffung Ihrer Verbrauchsmaterialien. Unseren Geschäftskunden bieten wir günstige Wartungsverträge mit Online- und Vor-Ort-Service an.
                    </p>
                </div>

                {/* Karten-Container */}
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Karte 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            {/* Beispiel-Icon (kann durch SVG/Font-Icon ersetzt werden) */}
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-chart-line" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Interaktive Kapazitätsplanung
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Dramatisch wachsen durch benutzerzentrierte Lösungsansätze für IT-Ressourcen.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>

                    {/* Karte 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-cogs" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Neue Technologiedienste
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Wir entwickeln modernste Technologiedienste für nachhaltige Wettbewerbsfähigkeit.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>

                    {/* Karte 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-cloud" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Cloud-Computing-Lösungen
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Skalierbare Cloud-Angebote für mehr Flexibilität und hohe Sicherheit.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>

                    {/* Karte 4 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-laptop-code" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Top-Informationstechnologie
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Moderne IT-Lösungen, die auf Qualität und Benutzerorientierung setzen.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>
                </div>

                {/* Karten-Container */}
                <div className={`${isClicked ? "grid" : "hidden"} gap-8 md:grid-cols-4 mt-20`}>
                    {/* Karte 1 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            {/* Beispiel-Icon (kann durch SVG/Font-Icon ersetzt werden) */}
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-chart-line" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Interaktive Kapazitätsplanung
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Dramatisch wachsen durch benutzerzentrierte Lösungsansätze für IT-Ressourcen.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>

                    {/* Karte 2 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-cogs" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Neue Technologiedienste
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Wir entwickeln modernste Technologiedienste für nachhaltige Wettbewerbsfähigkeit.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>

                    {/* Karte 3 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-cloud" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Cloud-Computing-Lösungen
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Skalierbare Cloud-Angebote für mehr Flexibilität und hohe Sicherheit.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>

                    {/* Karte 4 */}
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <div className="text-4xl text-blue-300">
                                <i className="fas fa-laptop-code" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Top-Informationstechnologie
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Moderne IT-Lösungen, die auf Qualität und Benutzerorientierung setzen.
                        </p>
                        <button className="text-blue-300 font-semibold hover:text-blue-600">
                            Mehr erfahren +
                        </button>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-20">
                    <button onClick={cardLoader} className={`${isClicked ? "hidden" : "block"} relative rounded-full h-[50px] w-[50px] bg-blue-300 after:content-[''] after:w-[4px] after:h-[60%]  after:bg-neutral-50 after:absolute after:left-[50%] after:top-[20%] after:-translate-x-[50%] before:content-[''] before:w-[60%] before:h-[4px]  before:bg-neutral-50 before:absolute before:left-[20%] before:top-[50%] before:-translate-y-[50%]`}></button>

                </div>
            </div>
        </section>
    );
};

export default Services;
