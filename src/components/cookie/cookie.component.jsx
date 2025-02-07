import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  // Anzeige des Consent-Modals, falls noch keine Entscheidung getroffen wurde
  const [showConsentModal, setShowConsentModal] = useState(false);
  // Anzeige des Optionsfensters
  const [showOptions, setShowOptions] = useState(false);
  // Cookie-Einstellungen für verschiedene Kategorien
  const [cookieSettings, setCookieSettings] = useState({
    analytics: false,
    marketing: false,
    // Funktionale Cookies sind in der Regel notwendig
    functional: true,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (!storedConsent) {
      setShowConsentModal(true);
    }
  }, []);

  // Funktion bei Zustimmung
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ consent: true, settings: cookieSettings }));
    setShowConsentModal(false);
  };

  // Funktion bei Ablehnung
  const handleReject = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ consent: false, settings: {} }));
    setShowConsentModal(false);
  };

  // Wechseln zwischen Anzeige und Ausblenden des Optionsfensters
  const toggleOptions = () => {
    setShowOptions(prev => !prev);
  };

  // Änderung einzelner Cookie-Einstellungen
  const handleSettingChange = (e) => {
    const { name, checked } = e.target;
    setCookieSettings(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Speichern der angepassten Einstellungen
  const saveSettings = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ consent: true, settings: cookieSettings }));
    setShowOptions(false);
  };

  return (
    <div>
      {/* Consent-Modal, falls noch keine Entscheidung getroffen wurde */}
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

      {/* Optionsfenster für Cookie-Einstellungen */}
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
