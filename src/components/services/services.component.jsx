import React, { useState } from "react";

import AnimatedDots from "../animated-dots/animated-dots.component";

import routingImg from '../../images/routing.webp';
import firewallImg from '../../images/firewall.jpg';
import pcImg from '../../images/computer.jpg';
import activeDirectoryImg from '../../images/active-directory.webp';
import terminalserverImg from '../../images/terminalserver.webp';
import webdevImg from '../../images/webdev.jpg';
import cameraImg from '../../images/camera.jpg';
import dataImg from '../../images/data.jpg';
import ScrollDownArrow from "../arrrow-down/arrow-down.component";



const Services = () => {

    const [isClicked, setIsClicked] = useState(false)

    const cardLoader = () => {
        setIsClicked(true)
    }

    const servicesData = [
        {
          "id": "routing",
          "name": "Routing",
          "description": "diverser Glasfaser- und Kupferleitungen zwischen den verschiedenen Subnetzen",
          "img": routingImg
        },
        {
          "id": "firewall",
          "name": "Firewall",
          "description": "zentrale Firewall mit angepassten Filterregeln für die in Sicherheitsstufen definierten Subnetze",
          "img": firewallImg
        },
        {
          "id": "PCZusammenstellung",
          "name": "PC-Zusammenstellung",
          "description": "Wir bieten maßgeschneiderte PC‑Zusammenstellungen, die optimal auf Ihre individuellen Leistungsanforderungen und Bedürfnisse abgestimmt sind.",
          "img": pcImg
        },
        {
          "id": "webEntwicklung",
          "name": "Web-Entwicklung",
          "description": "Ihre Ideen werden von uns in Code oder CMS (TYPO3/WordPress) professionell umgesetzt.",
          "img": webdevImg
        },
        {
          "id": "securityLoesungen",
          "name": "Security Lösungen",
          "description": "Wir bieten innovative Kamera- und Sicherheitslösungen nach Maß.",
          "img": cameraImg
        },
        {
          "id": "activeDirectory",
          "name": "Active Directory",
          "description": "Strukturierte und sichere IT-Administration für Ihr Unternehmen.",
          "img": activeDirectoryImg
        },
        {
          "id": "terminalserver",
          "name": "Terminalserver",
          "description": "Zentraler Zugriff für mehrere Benutzer via Remote-Verbindung.",
          "img": terminalserverImg
        },
        {
          "id": "backup",
          "name": "BackUp",
          "description": "Ihre Daten sind sicher und jederzeit verfügbar – mit modernen Backup-Lösungen.",
          "img": dataImg
        }
      ]
      

    // Wir teilen das Array in zwei Teile:
    // - die ersten 4 Karten
    // - die restlichen Karten (ab Index 4)
    const firstFourServices = servicesData.slice(0, 4);
    const remainingServices = servicesData.slice(4);

    return (
        <section id="services" className="w-full h-full  flex flex-col items-center justify-center gap-20 bg-neutral-100 py-20">
            <AnimatedDots />
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

                {/* Container 1: immer sichtbar, zeigt nur die ersten 4 Services */}
                <div className="grid gap-8 md:grid-cols-4">
                    {firstFourServices.map((service) => (
                        <div
                            key={service.id}
                            className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition md:hover:scale-110"
                            style={{
                                backgroundImage: `url(${service.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl opacity-40 z-0" />
                            <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                                <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-zinc-100 text-lg mb-4">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Container 2: wird nur angezeigt, wenn isClicked === true */}
                <div className={`${isClicked ? "grid" : "hidden"} gap-8 md:grid-cols-4 mt-8`}>
                    {remainingServices.map((service) => (
                        <div
                            key={service.id}
                            className="relative flex items-end rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 hover:transition md:hover:scale-110"
                            style={{
                                backgroundImage: `url(${service.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                        >
                            <div className="absolute top-0 left-0 h-full w-full bg-black rounded-xl opacity-40 z-0" />
                            <div className="relative min-h-[250px] h-full flex flex-col justify-between z-10">
                                <h3 className="text-xl font-bold text-blue-100 uppercase mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-zinc-100 text-lg mb-4">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {
                    isClicked ?
                        (
                            <div className="flex flex-col items-center gap-10 w-full flex justify-center mt-20">
                                <p className="block text-center">Kontaktieren Sie uns um professionelle Beratung zu bekommen</p>
                                <ScrollDownArrow link={"#contacts"} />
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
