import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../arrow-back/arrow-back.component";
import Footer from "../footer/footer.component";

const Datenschutz = () => {
  return (
    <>
        <section className="w-full bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
            <Link className="flex items-center gap-5 text-4xl font-black" to={"/"}><ArrowIcon/> Zurück zur Homepage</Link>
        </div>
        {/* Hauptüberschrift */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Datenschutzerklärung
        </h1>

        {/* 1. Name und Kontaktdaten */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Datenschutz-Information gilt für die Datenverarbeitung durch:
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Verantwortlicher:</strong><br/>
            Cintech GmbH<br/>
            Gerhard-Rauschenbach-Str.12, 38678 Clausthal-Zellerfeld<br/>
            Telefon: 05323-987427, E-Mail:{" "}
            <a
              href="mailto:info@cintech.de"
              className="text-blue-500 hover:underline"
            >
              info@cintech.de
            </a>
          </p>
        </article>

        {/* 2. Erhebung und Speicherung personenbezogener Daten */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung
          </h2>

          {/* 2.a) Beim Besuch der Website */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              a) Beim Besuch der Website
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Beim Aufrufen unserer Website{" "}
              <a
                href="https://www.cintech.de"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cintech.de
              </a>{" "}
              werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
              automatisch Informationen an den Server unserer Website gesendet.
              Diese Informationen werden temporär in einem sog. Logfile
              gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun
              erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>
                verwendeter Browser und ggf. das Betriebssystem Ihres Rechners
                sowie der Name Ihres Access-Providers
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Die genannten Daten werden durch uns zu folgenden Zwecken
              verarbeitet:
            </p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus</li>
              <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
              <li>weitere administrative Zwecke</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie
              Analysedienste ein. Nähere Erläuterungen dazu erhalten Sie unter
              den Ziff. 4 und 5 dieser Datenschutzerklärung.
            </p>
          </div>

          {/* 2.b) Bei Anmeldung für Newsletter */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              b) Bei Anmeldung für unseren Newsletter
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sofern Sie nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrücklich
              eingewilligt haben, verwenden wir Ihre E-Mail-Adresse dafür, Ihnen
              regelmäßig unseren Newsletter zu übersenden. Für den Empfang des
              Newsletters ist die Angabe einer E-Mail-Adresse ausreichend.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Die Abmeldung ist jederzeit möglich, zum Beispiel über einen Link
              am Ende eines jeden Newsletters. Alternativ können Sie Ihren
              Abmeldewunsch gerne auch jederzeit an{" "}
              <a
                href="mailto:info@cintech.de"
                className="text-blue-500 hover:underline"
              >
                info@cintech.de
              </a>{" "}
              per E-Mail senden.
            </p>
          </div>

          {/* 2.c) Bei Nutzung unseres Kontaktformulars */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              c) Bei Nutzung unseres Kontaktformulars
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
              Telefon oder via sozialer Medien) werden die Angaben des Nutzers
              zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6
              Abs. 1 lit. b) DSGVO verarbeitet. Die Angaben der Nutzer können in
              einem Customer-Relationship-Management System ("CRM System") oder
              vergleichbarer Anfragenorganisation gespeichert werden. Wir löschen
              die Anfragen, sofern diese nicht mehr erforderlich sind. Wir
              überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die
              gesetzlichen Archivierungspflichten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns
              erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer
              freiwillig erteilten Einwilligung.
            </p>
          </div>
        </article>

        {/* 3. Weitergabe/Speicherung von Daten */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Weitergabe/Speicherung von Daten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Wir speichern die von Ihnen erhobenen Daten im Rahmen der gesetzlichen
            Dokumentations- und Aufbewahrungspflicht. Gemäß §28 Abs. 1 S 1 Nr.1
            BDSG werden Stamm-, Vertrags- und Abrechnungsdaten sowie Ihr Name,
            Rechnungsadresse und gegebenenfalls abweichende Lieferadresse erhoben,
            um den Vertrag oder vorvertragliche Maßnahmen erfüllen zu können. Diese
            Daten werden nur durch die cintech GmbH verarbeitet und gespeichert.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als
            den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben
            Ihre persönlichen Daten nur an Dritte weiter, wenn:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li>
              Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche
              Einwilligung dazu erteilt haben,
            </li>
            <li>
              die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein
              überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
              Daten haben,
            </li>
            <li>
              für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit.
              c DSGVO eine gesetzliche Verpflichtung besteht,
            </li>
            <li>
              dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO
              für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich
              ist.
            </li>
          </ul>
        </article>

        {/* 4. Cookies */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um
            kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem
            Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn
            Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen
            Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            In dem Cookie werden Informationen abgelegt, die sich jeweils im
            Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies
            bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer
            Identität erhalten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres
            Angebots für Sie angenehmer zu gestalten (z.B. Session-Cookies). Diese
            werden nach Verlassen unserer Seite automatisch gelöscht. Darüber
            hinaus setzen wir ebenfalls temporäre Cookies ein, die für einen
            bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert
            werden, um bestimmte Einstellungen beim erneuten Besuch wiederzuerkennen
            und zu übernehmen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website
            statistisch zu erfassen und zum Zwecke der Optimierung unseres
            Angebotes für Sie auszuwerten (siehe Ziff. 5). Diese Cookies werden
            nach einer jeweils definierten Zeit automatisch gelöscht.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur
            Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6
            Abs. 1 S. 1 lit. f DSGVO erforderlich.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren
            Browser jedoch so konfigurieren, dass keine Cookies gespeichert
            werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie
            angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch
            dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen
            können.
          </p>
        </article>

        {/* 5. Analyse-Tools */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Analyse-Tools
          </h2>

          {/* 5.a) Tracking-Tools */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">a) Tracking-Tools</h3>
            <p className="text-gray-700 leading-relaxed">
              Die im Folgenden aufgeführten und von uns eingesetzten
              Tracking-Maßnahmen werden auf Grundlage des Art. 6 Abs. 1 S. 1 lit.
              f DSGVO durchgeführt. Mit den zum Einsatz kommenden
              Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und
              die fortlaufende Optimierung unserer Webseite sicherstellen sowie
              die Nutzung unserer Webseite statistisch erfassen und zum Zwecke der
              Optimierung unseres Angebotes für Sie auszuwerten.
            </p>
          </div>

          {/* 5.a).i Google Analytics */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              i) Google Analytics
            </h4>
            <p className="text-gray-700 leading-relaxed mb-2">
              Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden
              Optimierung unserer Seiten nutzen wir Google Analytics, ein
              Webanalysedienst der Google Inc. (1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA; „Google“). In diesem Zusammenhang
              werden pseudonymisierte Nutzungsprofile erstellt und Cookies
              (siehe unter Ziff. 4) verwendet. Die durch den Cookie erzeugten
              Informationen über Ihre Benutzung dieser Website (z.B. Browser-Typ,
              verwendetes Betriebssystem, Referrer-URL, IP-Adresse) werden an
              einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Die Informationen werden verwendet, um die Nutzung der Website
              auszuwerten, Reports über die Websiteaktivitäten zusammenzustellen
              und weitere Dienstleistungen zu erbringen. Eine Zusammenführung
              Ihrer IP-Adresse mit anderen Daten von Google erfolgt nicht
              (IP-Masking).
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Sie können die Installation der Cookies durch eine entsprechende
              Einstellung der Browser-Software verhindern. Weiterhin können Sie
              die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung
              der Website bezogenen Daten (inkl. Ihrer IP-Adresse) sowie die
              Verarbeitung dieser Daten durch Google verhindern, indem Sie ein
              Browser-Add-on herunterladen und installieren ({" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              ).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Weitere Informationen zum Datenschutz im Zusammenhang mit Google
              Analytics finden Sie in der{" "}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics-Hilfe
              </a>
              .
            </p>
          </div>

          {/* 5.a).ii Google Adwords Conversion Tracking */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              ii) Google Adwords Conversion Tracking
            </h4>
            <p className="text-gray-700 leading-relaxed mb-2">
              Um die Nutzung unserer Webseite statistisch zu erfassen und zum
              Zwecke der Optimierung unserer Website für Sie auszuwerten, nutzen
              wir ferner das Google Conversion Tracking. Dabei wird von Google
              Adwords ein Cookie (siehe Ziffer 4) auf Ihrem Rechner gesetzt,
              sofern Sie über eine Google-Anzeige auf unsere Webseite gelangt
              sind.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen
              nicht der persönlichen Identifizierung. Besucht der Nutzer
              bestimmte Seiten der Webseite und das Cookie ist noch nicht
              abgelaufen, können Google und der Kunde erkennen, dass der Nutzer
              auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet
              wurde. Jeder Adwords-Kunde erhält ein anderes Cookie. Cookies
              können somit nicht über die Webseiten von Adwords-Kunden
              nachverfolgt werden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Die mithilfe des Conversion-Cookies eingeholten Informationen
              dienen dazu, Conversion-Statistiken für Adwords-Kunden zu
              erstellen. Wir erfahren die Gesamtanzahl der Nutzer, die auf eine
              Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag
              versehenen Seite weitergeleitet wurden; jedoch keine Informationen
              zur persönlichen Identifizierung.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie nicht an dem Tracking-Verfahren teilnehmen möchten,
              können Sie das erforderliche Setzen eines Cookies ablehnen,
              beispielsweise per Browser-Einstellung, die das automatische Setzen
              von Cookies generell deaktiviert. Weitere Informationen finden Sie{" "}
              <a
                href="https://services.google.com/sitestats/de.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                hier
              </a>
              .
            </p>
          </div>
        </article>

        {/* 6. Social Media Plug-ins */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Social Media Plug-ins
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Wir setzen auf unserer Website auf Grundlage von Art. 6 Abs. 1 S. 1
            lit. f DSGVO Social Plug-ins der sozialen Netzwerke Facebook, Twitter
            und Instagram ein, um unsere Firma bekannter zu machen. Die dahinter
            stehenden werblichen Zwecke sind als berechtigtes Interesse im Sinne
            der DSGVO anzusehen. Die Verantwortung für den datenschutzkonformen
            Betrieb ist durch deren jeweiligen Anbieter zu gewährleisten.
          </p>

          {/* a) Facebook */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">a) Facebook</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Auf unserer Website kommen Social-Media Plugins von Facebook zum
              Einsatz, um deren Nutzung persönlicher zu gestalten (z.B. „LIKE“
              oder „TEILEN“-Button). Es handelt sich dabei um ein Angebot von
              Facebook. Wenn Sie eine Seite unseres Webauftritts aufrufen, die
              ein solches Plugin enthält, baut Ihr Browser eine direkte Verbindung
              mit den Servern von Facebook auf. Der Inhalt des Plugins wird von
              Facebook direkt an Ihren Browser übermittelt und eingebunden.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Hierdurch erhält Facebook die Information, dass Ihr Browser die
              entsprechende Seite aufgerufen hat, auch wenn Sie kein
              Facebook-Konto besitzen oder nicht eingeloggt sind. Diese
              Information (einschließlich Ihrer IP-Adresse) wird direkt an einen
              Server von Facebook in den USA übermittelt und dort gespeichert.
              Sind Sie bei Facebook eingeloggt, kann Facebook den Besuch unserer
              Website Ihrem Facebook-Konto zuordnen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie nicht möchten, dass Facebook die über unseren Webauftritt
              gesammelten Daten Ihrem Facebook-Konto zuordnet, müssen Sie sich
              vor Ihrem Besuch unserer Website bei Facebook ausloggen. Weitere
              Informationen finden Sie in den{" "}
              <a
                href="https://www.facebook.com/about/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Datenschutzhinweisen
              </a>{" "}
              von Facebook.
            </p>
          </div>

          {/* b) Twitter */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">b) Twitter</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Auf unseren Internetseiten sind Plugins des Kurznachrichtennetzwerks
              Twitter Inc. integriert. Die Twitter-Plugins (tweet-Button)
              erkennen Sie an dem Twitter-Logo auf unserer Seite. Wenn Sie eine
              Seite mit einem solchen Plugin aufrufen, wird eine direkte Verbindung
              zwischen Ihrem Browser und dem Twitter-Server hergestellt. Twitter
              erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere
              Seite besucht haben.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wenn Sie den Twitter „tweet-Button“ anklicken, während Sie in Ihrem
              Twitter-Account eingeloggt sind, können Sie die Inhalte unserer
              Seiten auf Ihrem Twitter-Profil verlinken. Dadurch kann Twitter den
              Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Weitere
              Informationen hierzu finden Sie in der{" "}
              <a
                href="https://twitter.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Datenschutzerklärung von Twitter
              </a>
              .
            </p>
          </div>

          {/* c) Instagram */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">c) Instagram</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Auf unserer Website werden auch sogenannte Social Plugins („Plugins“)
              von Instagram verwendet, das von der Instagram LLC. 1601 Willow Road,
              Menlo Park, CA 94025, USA („Instagram“) betrieben wird.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches
              Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den
              Servern von Instagram her. Instagram erhält die Information, dass Ihr
              Browser die entsprechende Seite aufgerufen hat, auch wenn Sie kein
              Instagram-Profil besitzen oder nicht eingeloggt sind.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sind Sie bei Instagram eingeloggt, kann Instagram den Besuch unserer
              Website Ihrem Instagram-Account unmittelbar zuordnen. Weitere
              Informationen finden Sie in der{" "}
              <a
                href="https://help.instagram.com/155833707900388"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Datenschutzerklärung von Instagram
              </a>
              .
            </p>
          </div>
        </article>

        {/* 7. Betroffenenrechte */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Betroffenenrechte
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Sie haben das Recht:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-2">
            <li>
              gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
              personenbezogenen Daten zu verlangen
            </li>
            <li>
              gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
              Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
              Daten zu verlangen
            </li>
            <li>
              gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
              personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung
              aus bestimmten Gründen erforderlich ist
            </li>
            <li>
              gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen, sofern bestimmte
              Voraussetzungen erfüllt sind
            </li>
            <li>
              gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
              bereitgestellt haben, in einem strukturierten, gängigen und
              maschinenlesebaren Format zu erhalten
            </li>
            <li>
              gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
              jederzeit gegenüber uns zu widerrufen
            </li>
            <li>
              gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren
            </li>
          </ul>
        </article>

        {/* 8. Widerspruchsrecht */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            8. Widerspruchsrecht
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
            Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO) verarbeitet werden,
            haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
            Verarbeitung einzulegen, soweit dafür Gründe vorliegen, die sich aus
            Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen
            Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles
            Widerspruchsrecht. Möchten Sie von Ihrem Widerrufs- oder
            Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an{" "}
            <a
              href="mailto:info@cintech.de"
              className="text-blue-500 hover:underline"
            >
              info@cintech.de
            </a>
            .
          </p>
        </article>

        {/* 9. Datensicherheit */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            9. Datensicherheit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Wir verwenden innerhalb des Website-Besuchs das verbreitete
            SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
            höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
            wird. In der Regel ist dies eine 256-Bit-Verschlüsselung. Ob eine
            einzelne Seite unseres Internetauftrittes verschlüsselt übertragen
            wird, erkennen Sie an dem Schloss-Symbol in der Adressleiste Ihres
            Browsers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wir bedienen uns geeigneter technischer und organisatorischer
            Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche
            Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder
            gegen den unbefugten Zugriff Dritter zu schützen. Unsere
            Sicherheitsmaßnahmen werden entsprechend der technologischen
            Entwicklung fortlaufend verbessert.
          </p>
        </article>

        {/* 10. Aktualität und Änderung dieser Datenschutzerklärung */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            10. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai
            2018. Durch die Weiterentwicklung unserer Website und Angebote darüber
            oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
            Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
            ändern.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der
            Website unter{" "}
            <a
              href="https://www.cintech.de"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.cintech.de
            </a>{" "}
            von Ihnen abgerufen und ausgedruckt werden.
          </p>
        </article>

        {/* Fußnote zu Google Analytics AV-Vereinbarung (Optionaler Hinweis) */}
        <footer className="mt-8 text-sm text-gray-500">
          <p>
            1&nbsp;Datenschutzbehörden verlangen für den zulässigen Einsatz von
            Google Analytics den Abschluss einer Auftragsdatenverarbeitungs-Vereinbarung.
            Eine entsprechende Vorlage wird unter{" "}
            <a
              href="http://www.google.com/analytics/terms/de.pdf"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.google.com/analytics/terms/de.pdf
            </a>{" "}
            von Google angeboten.
          </p>
        </footer>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Datenschutz;
