import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/arrow-back/arrow-back.component";
import Footer from "../components/footer/footer.component";

const Impressum = () => {
  return (
    <>
      <section className="w-full bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <Link className="flex items-center gap-5 text-4xl font-black" to={"/"}><ArrowIcon/> Zurück zur Homepage</Link>
        </div>
        {/* Hauptüberschrift */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Impressum</h1>

        {/* Abschnitt: Hinweis nach BDSG */}
        <article className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-2">
            Gemäß § 28 BDSG widerspricht die cintech GmbH jeder kommerziellen
            Verwendung und Weitergabe ihrer Daten.
          </p>
        </article>

        {/* Abschnitt: Verantwortungsbereich */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Verantwortungsbereich
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Das Impressum gilt nur für die Internetpräsenz unter der Adresse:{" "}
            <a
              href="https://www.cintech.de"
              className="text-blue-500 hover:underline"
            >
              www.cintech.de
            </a>
          </p>
        </article>

        {/* Abschnitt: Abgrenzung */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Abgrenzung</h2>
          <p className="text-gray-700 leading-relaxed">
            Die Web-Präsenz ist Teil des WWW und dementsprechend mit fremden,
            sich jederzeit wandeln könnenden Web-Sites verknüpft, die folglich
            auch nicht diesem Verantwortungsbereich unterliegen und für die
            nachfolgende Informationen nicht gelten. Dass die Links weder gegen
            Sitten noch Gesetze verstoßen, wurde genau ein Mal geprüft: bevor sie
            hier aufgenommen wurden. Solche Links, die zu fremden Webprojekten
            führen, erkennen Sie daran: Bei externen Links öffnet sich ein neues
            Browserfenster.
          </p>
        </article>

        {/* Abschnitt: Diensteanbieter */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Diensteanbieter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>cintech GmbH</strong>
            <br />
            Registiert unter: Amtsgricht Braunschweig HRB 110716
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Verantwortliche Ansprechperson:</strong> Andreas Wedler
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Anschrift:</strong> Gerhard-Rauschenbach-Str. 12, 38678
            Clausthal-Zellerfeld
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Elektronische Postadresse:</strong>{" "}
            <a
              href="mailto:info@cintech.de"
              className="text-blue-500 hover:underline"
            >
              info@cintech.de
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Schnelle elektronische und unmittelbare Kommunikation:</strong>
            <br />
            Tel.: 05323/987427, Fax: 05323/987428
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <strong>Umsatzsteueridentifikationsnummer:</strong> DE199477321
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Geschäftsführer:</strong> Andreas Wedler, geschäftsansässig:
            G.Rauschenbach-Str.12, 38678 Clausthal-Zellerfeld
          </p>
        </article>

        {/* Abschnitt: Zweck des Webprojektes */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Zweck dieses Webprojektes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Präsenz im Internet zur Kundeninformation
          </p>
        </article>

        {/* Abschnitt: Journalistisch-redaktionelle Verantwortung */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Journalistisch-redaktionelle Verantwortung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Andreas Wedler, Gerhard-Rauschenbach-Str.12, 38678
            Clausthal-Zellerfeld
          </p>
        </article>

        {/* Abschnitt: Urheberschutz und Nutzung */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Urheberschutz und Nutzung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Der Urheber räumt Ihnen ganz konkret das Nutzungsrecht ein, sich eine
            private Kopie für persönliche Zwecke anzufertigen. Nicht berechtigt
            sind Sie dagegen, die Materialien zu verändern und / oder weiter zu
            geben oder gar selbst zu veröffentlichen. Wenn nicht ausdrücklich
            anders vermerkt, liegen die Urheberrechte für Texte bei der: cintech
            GmbH
          </p>
          <p className="text-gray-700 leading-relaxed">
            Die meisten Illustrationen unterliegen den Urheberrechten von: cintech
            GmbH
          </p>
        </article>

        {/* Abschnitt: Datenschutz */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Datenschutz
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Personenbezogene Daten werden nur mit Ihrem Wissen und Ihrer
            Einwilligung erhoben. Auf Antrag erhalten Sie unentgeltlich Auskunft
            zu den über Sie gespeicherten personenbezogenen Daten. Wenden Sie sich
            dazu bitte an: Andreas Wedler,{" "}
            <a
              href="mailto:wedler@cintech.de"
              className="text-blue-500 hover:underline"
            >
              wedler@cintech.de
            </a>
          </p>
        </article>

        {/* Abschnitt: Keine Haftung */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Keine Haftung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Die Inhalte dieses Webprojektes wurden sorgfältig geprüft und nach
            bestem Wissen erstellt. Aber für die hier dargebotenen Informationen
            wird kein Anspruch auf Vollständigkeit, Aktualität, Qualität und
            Richtigkeit erhoben. Es kann keine Verantwortung für Schäden
            übernommen werden, die durch das Vertrauen auf die Inhalte dieser
            Website oder deren Gebrauch entstehen.
          </p>
        </article>

        {/* Abschnitt: Schutzrechtsverletzung */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Schutzrechtsverletzung
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Falls Sie vermuten, dass von dieser Website aus eines Ihrer
            Schutzrechte verletzt wird, teilen Sie das bitte umgehend per
            elektronischer Post mit, damit zügig Abhilfe geschafft werden kann.
            Bitte nehmen Sie zur Kenntnis: Die zeitaufwändigere Einschaltung
            eines Anwaltes zur für den Diensteanbieter kostenpflichtigen Abmahnung
            entspricht nicht dessen wirklichen oder mutmaßlichen Willen.
          </p>
        </article>

        {/* Abschnitt: Online-Streitbeilegung */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Online Streitbeilegung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Hinweis zur Online-Streitbeilegung gemä&szlig; Art. 14 Abs. 1
            ODR-VO: Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>{" "}
            finden. Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </article>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Impressum;
