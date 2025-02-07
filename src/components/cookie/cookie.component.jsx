import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  // Anzeige des Consent-Modals, falls noch keine Entscheidung getroffen wurde
  const [showConsentModal, setShowConsentModal] = useState(false);
  // Anzeige des Optionsfensters
  const [showOptions, setShowOptions] = useState(false);
  // Cookie-Einstellungen: Funktionale Cookies sind immer erforderlich (true)
  const [cookieSettings, setCookieSettings] = useState({
    analytics: false,
    marketing: false,
    functional: true,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (!storedConsent) {
      setShowConsentModal(true);
    } else {
      // Bereits getroffene Entscheidung laden
      const parsedConsent = JSON.parse(storedConsent);
      if (parsedConsent.settings) {
        setCookieSettings(parsedConsent.settings);
      }
    }
  }, []);

  // Bei Zustimmung: Alle Cookie-Kategorien werden aktiviert
  const handleAccept = () => {
    const acceptedSettings = {
      analytics: true,
      marketing: true,
      functional: true,
    };
    setCookieSettings(acceptedSettings);
    localStorage.setItem('cookieConsent', JSON.stringify({ consent: true, settings: acceptedSettings }));
    setShowConsentModal(false);
  };

  // Bei Ablehnung: Nur die erforderlichen (funktionalen) Cookies bleiben aktiv
  const handleReject = () => {
    const rejectedSettings = {
      analytics: false,
      marketing: false,
      functional: true,
    };
    setCookieSettings(rejectedSettings);
    localStorage.setItem('cookieConsent', JSON.stringify({ consent: false, settings: rejectedSettings }));
    setShowConsentModal(false);
  };

  // Wechseln zwischen Anzeige und Ausblenden des Optionsfensters
  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  // Änderung der nicht erforderlichen Cookie-Einstellungen
  const handleSettingChange = (e) => {
    const { name, checked } = e.target;
    // Funktionale Cookies sind zwingend aktiv – daher ignorieren wir Änderungen
    if (name === 'functional') return;
    setCookieSettings((prev) => {
      const updatedSettings = { ...prev, [name]: checked };
      localStorage.setItem('cookieConsent', JSON.stringify({ consent: true, settings: updatedSettings }));
      return updatedSettings;
    });
  };

  // Speichern der geänderten Einstellungen
  const saveSettings = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ consent: true, settings: cookieSettings }));
    setShowOptions(false);
  };

  return (
    <div>
      {/* Consent-Modale, falls noch keine Entscheidung getroffen wurde */}
      {showConsentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md max-w-lg w-full text-center">
            <p className="mb-4">
              Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen und
              unsere Dienste zu verbessern. Bitte wählen Sie, ob Sie der Verwendung von Cookies zustimmen oder ablehnen möchten.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Zustimmen
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie-Logo in der linken unteren Ecke (nach Consent) */}
      {!showConsentModal && (
        <div className="fixed bottom-5 left-5 z-40">
          <button
            onClick={toggleOptions}
            title="Cookie Einstellungen"
            className="bg-white p-3 border border-gray-300 rounded-full text-2xl shadow hover:shadow-lg transition-shadow"
          >
            🍪
          </button>
        </div>
      )}

      {/* Optionsfenster zur Anpassung der Cookie-Einstellungen */}
      {showOptions && (
        <div className="fixed bottom-20 left-5 bg-white border border-gray-300 p-4 rounded-md z-40 w-72 shadow">
          <h4 className="text-lg font-semibold mb-3">Cookie Einstellungen</h4>
          <form>
            <div className="mb-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="analytics"
                  checked={cookieSettings.analytics}
                  onChange={handleSettingChange}
                  className="form-checkbox"
                />
                <span>Analytics Cookies</span>
              </label>
            </div>
            <div className="mb-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="marketing"
                  checked={cookieSettings.marketing}
                  onChange={handleSettingChange}
                  className="form-checkbox"
                />
                <span>Marketing Cookies</span>
              </label>
            </div>
            <div className="mb-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="functional"
                  checked={cookieSettings.functional}
                  disabled
                  className="form-checkbox cursor-not-allowed"
                />
                <span>Funktionale Cookies (erforderlich)</span>
              </label>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={saveSettings}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Speichern
              </button>
              <button
                type="button"
                onClick={toggleOptions}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Schließen
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
