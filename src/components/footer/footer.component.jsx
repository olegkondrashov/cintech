
import { Link } from "react-router-dom";

const Footer = ({ footerRef }) => {
    return (
        <footer ref={footerRef} className="relative flex flex-col items-center bg-gray-900 text-white pt-10 md:pt-20 pb-5">
            <div className="flex flex-col items-center lg:flex-row justify-evenly w-full px-2 md:px-10 flex-wrap gap-10 text-center lg:text-left">
                
                <div className="flex flex-col">
                    <h2 className="text-4xl uppercase  md:text-5xl mb-10">Kontakte</h2>
                    <div className="flex flex-col gap-2 text-lg">
                        <a href="tel:+495323987427">Tel: 05323/987427</a>
                        <a href="mailto:info@cintech.de">E-Mail: info@cintech.de</a>
                        <a rel="noreferrer" target="_blank" href="https://maps.app.goo.gl/xF5dUjqUzM63cmsg7">Innovationspark Tannenhöhe <br /> Gerhard-Rauschenbach-Straße 12 <br /> 38678 Clausthal-Zellerfeld</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl uppercase  md:text-5xl mb-10">Öffnungszeiten</h2>
                    <div className="flex flex-col gap-2 text-lg">
                        <h4>Montag - Freitag</h4>
                        <p>08:00 - 17:00</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl uppercase  md:text-5xl mb-10">Wir bilden aus</h2>
                    <div className="flex flex-col gap-2 text-lg">
                        <h4>Fachinformatiker</h4>
                        <p>IT-Systemkauffrau/mann</p>
                        <p>Bürokauffrau/mann</p>
                    </div>
                </div>
                <div className="w-full md:w-[300px] mt-10 md:mt-0">
                    <iframe className="w-full md:w-[300px] h-[200px] border-none" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.9829769109133!2d10.351726512704113!3d51.806471671765614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a53c09b209b015%3A0x51609c460dd56dd9!2sCintech%20GmbH!5e0!3m2!1sde!2sde!4v1737706433071!5m2!1sde!2sde"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
            <div className="flex gap-5 mt-10">
                <Link to="/impressum">impressum</Link>
                <Link to="/datenschutz">datenschutz</Link>
            </div>
            
        </footer>
    )
}

export default Footer;