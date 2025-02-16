import React from 'react';

const MicrosoftSolutions = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">
          Autorisierte Microsoft-Lösungen
        </h2>

        {/* Infotext */}
        <p className="text-center text-gray-700 leading-relaxed mb-8">
          Wir sind stolz darauf, als autorisierter Microsoft-Partner auftreten zu
          dürfen. Durch unsere enge Zusammenarbeit mit Microsoft können wir Ihnen
          maßgeschneiderte Lösungen anbieten, die Ihre Geschäftsprozesse
          optimieren und zugleich höchste Sicherheits- und Qualitätsstandards
          erfüllen.
        </p>

        {/* Details (Beispiele, Icons etc.) */}
        <div className="flex flex-wrap gap-8">
          {/* Beispiel-Kachel 1 */}
          <div className="lg:max-w-[30%] bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">
              {/* Beispiel-Icon, kann durch SVG oder anderes Icon ersetzt werden */}
              <i className="fab fa-microsoft"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cloud-Lösungen (Azure)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Skalierbare Infrastructure-as-a-Service, Container-Lösungen und
              Serverless-Architekturen in der Azure-Cloud für maximale
              Flexibilität.
            </p>
          </div>

          {/* Beispiel-Kachel 2 */}
          <div className="lg:max-w-[30%] bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-user-friends"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Microsoft 365
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Nahtlose Zusammenarbeit im Team dank der Microsoft 365 Suite
              (Teams, SharePoint, OneDrive und weitere), inklusive Migrations- und
              Einrichtungsservice.
            </p>
          </div>

          {/* Beispiel-Kachel 3 */}
          <div className="lg:max-w-[30%] bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-clipboard-check"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Individuelle Lösungen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Von .NET-Entwicklung bis hin zu Power Apps – wir passen
              Microsoft-Technologien an Ihre spezifischen Geschäftsanforderungen
              an und sorgen für eine reibungslose Integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrosoftSolutions;
