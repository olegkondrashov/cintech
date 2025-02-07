import React from 'react';

const Unilogo = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase">
          Unilogo
        </h2>

        {/* Infotext */}
        <p className="text-center text-gray-700 leading-relaxed mb-8">
          Entdecken Sie unsere innovativen Lösungen für individuelle Werbebeschriftungen und Beschilderungen. Mit kreativen Designs und modernster Technik setzen wir Ihre Marke in Szene – ob mobil oder stationär.
        </p>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fahrzeugbeschriftungen */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-car"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fahrzeugbeschriftungen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Verwandeln Sie Ihr Fahrzeug in ein mobiles Aushängeschild. Mit hochwertigen Folien und passgenauem Design sorgen wir dafür, dass Ihre Marke auf jeder Fahrt für Aufmerksamkeit sorgt.
            </p>
          </div>

          {/* Beschilderungen */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-map-signs"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Beschilderungen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Unsere maßgeschneiderten Beschilderungen verbinden Funktionalität mit ästhetischem Anspruch. Ob für Innenräume oder Außenbereiche – wir setzen Ihre Botschaft klar und überzeugend in Szene.
            </p>
          </div>

          {/* Banner */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-image"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Banner
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Setzen Sie Ihre Kampagnen eindrucksvoll in Szene – mit individuell gestalteten Bannern, die sowohl bei Events als auch im täglichen Werbebetrieb überzeugen. Kreativität und Qualität gehen hier Hand in Hand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unilogo;
