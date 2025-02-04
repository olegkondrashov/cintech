import React, { useState } from "react";

import AnimatedDots from "../animated-dots/animated-dots.component";

import routing from '../../images/routing.webp';
import firewall from '../../images/firewall.jpg';
import domain from '../../images/domain.jpg';
import activeDirectory from '../../images/active-directory.webp';
import terminalserver from '../../images/terminalserver.webp';
import webdev from '../../images/webdev.jpg';
import camera from '../../images/camera.jpg';
import data from '../../images/data.jpg';
import ScrollDownArrow from "../arrrow-down/arrow-down.component";



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
                    <p className="text-center mt-10 font-black text-lg">Hier sind einige Beispiele:</p>
                </div>

                {/* Karten-Container */}
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Karte 1 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${routing})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                Routing 
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                diverser Glasfaser- und Kupferleitungen zwischen den verschiedenen Subnetzen
                            </p>
                        </div>
                    </div>

                    {/* Karte 2 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${firewall})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                Firewall 
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                zentrale Firewall mit angepassten Filterregeln für die in Sicherheitsstufen definierten Subnetze
                            </p>
                        </div>
                    </div>

                    {/* Karte 3 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${domain})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                Domain-Name-Service
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                für die verwalteten Netzwerkzonen (primärer & sekundärer DNS)
                            </p>
                        </div>
                    </div>

                    {/* Karte 4 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${webdev})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                Web-Entwicklung 
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                Ihre Ideen werden von uns entweder in Code oder in den Content-Management-Systemen TYPO3 und WordPress professionell umgesetzt.
                            </p>
                        </div>
                    </div>
                    
                </div>

                {/* Karten-Container */}
                <div className={`${isClicked ? "grid" : "hidden"} gap-8 md:grid-cols-4 mt-8`}>
                    {/* Karte 1 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${camera})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                Security Lösungen 
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                Ihre Sicherheit ist unser Fokus: Wir bieten innovative Kamera- und Sicherheitslösungen nach Maß.
                            </p>
                        </div>
                    </div>
                    

                    {/* Karte 2 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${activeDirectory})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                Active Directory
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                Mit unseren Active Directory-Lösungen ermöglichen wir eine strukturierte und sichere IT-Administration für Ihr Unternehmen.
                            </p>
                        </div>
                    </div>

                    {/* Karte 3 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${terminalserver})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                Terminalserver 
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                ermöglicht den zentralen Zugriff auf Anwendungen und Ressourcen, indem mehrere Benutzer gleichzeitig über Remote-Verbindungen auf einen Server zugreifen können.
                            </p>
                        </div>
                    </div>

                    {/* Karte 4 */}
                    <div className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition hover:scale-110 -z-1ß" style={{
                                        backgroundImage: `url(${data})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover'}}>
                        <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl  opacity-40 z-0">
                        </div>
                        <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                            <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                BackUp 
                            </h3>
                            <p className="text-zinc-100 text-lg mb-4">
                                Wir sorgen dafür, dass Ihre Daten sicher und jederzeit verfügbar sind – mit modernen Backup-Lösungen.
                            </p>
                        </div>
                    </div>
                </div>

                {
                    isClicked ? 
                    (
                        <div className="flex flex-col items-center gap-10 w-full flex justify-center mt-20">
                            <p className="block text-center">Kontaktieren Sie uns um professionelle Beratung zu bekommen</p>
                            <ScrollDownArrow link={"#contacts"}/>
                        </div>
                    )
                    
                    :
                    (
                        <div className="w-full flex justify-center mt-20">
                            <button onClick={cardLoader} className={`block relative rounded-full h-[50px] w-[50px] bg-blue-300 after:content-[''] after:w-[4px] after:h-[60%]  after:bg-neutral-50 after:absolute after:left-[50%] after:top-[20%] after:-translate-x-[50%] before:content-[''] before:w-[60%] before:h-[4px]  before:bg-neutral-50 before:absolute before:left-[20%] before:top-[50%] before:-translate-y-[50%]`}></button>
                        </div>

                    ) 
                }

            </div>
        </section>
    );
};

export default Services;
