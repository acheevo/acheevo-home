import { useState, useEffect } from 'react';

type ConsentChoice = 'accepted' | 'rejected' | 'custom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (choice: ConsentChoice, prefs?: CookiePreferences) => {
    const data = {
      choice,
      preferences: prefs || preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(data));
    setVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent('accepted', allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
    saveConsent('rejected', essentialOnly);
  };

  const handleSavePreferences = () => {
    saveConsent('custom', preferences);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-md">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-purple-200 dark:border-purple-800 p-lg transition-colors duration-300">
        {!showPreferences ? (
          <>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-md">
              <div className="flex-1">
                <h3 className="font-heading text-body-lg font-semibold text-neutral-900 dark:text-white mb-xs">
                  We value your privacy
                </h3>
                <p className="font-body text-body-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
                  We use cookies to improve your experience and analyze site usage. You can choose which cookies to accept.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-xs w-full sm:w-auto">
                <button
                  onClick={handleAcceptAll}
                  className="px-md py-sm bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-lg font-semibold text-body-sm transition-all duration-200 whitespace-nowrap"
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="px-md py-sm bg-neutral-200 dark:bg-gray-700 hover:bg-neutral-300 dark:hover:bg-gray-600 text-neutral-700 dark:text-gray-200 rounded-lg font-semibold text-body-sm transition-all duration-200 whitespace-nowrap"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-md py-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-body-sm transition-colors duration-200 whitespace-nowrap underline underline-offset-2"
                >
                  Manage Preferences
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-heading text-body-lg font-semibold text-neutral-900 dark:text-white mb-md">
              Cookie Preferences
            </h3>
            <div className="space-y-sm mb-lg">
              <label className="flex items-center justify-between p-sm rounded-lg bg-neutral-50 dark:bg-gray-700/50">
                <div>
                  <span className="font-semibold text-body-sm text-neutral-900 dark:text-white">Essential</span>
                  <p className="text-body-xs text-neutral-500 dark:text-gray-400">Required for the site to function</p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-5 h-5 accent-purple-600 rounded"
                />
              </label>
              <label className="flex items-center justify-between p-sm rounded-lg bg-neutral-50 dark:bg-gray-700/50 cursor-pointer">
                <div>
                  <span className="font-semibold text-body-sm text-neutral-900 dark:text-white">Analytics</span>
                  <p className="text-body-xs text-neutral-500 dark:text-gray-400">Help us understand how you use the site</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-5 h-5 accent-purple-600 rounded cursor-pointer"
                />
              </label>
              <label className="flex items-center justify-between p-sm rounded-lg bg-neutral-50 dark:bg-gray-700/50 cursor-pointer">
                <div>
                  <span className="font-semibold text-body-sm text-neutral-900 dark:text-white">Marketing</span>
                  <p className="text-body-xs text-neutral-500 dark:text-gray-400">Personalized content and ads</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="w-5 h-5 accent-purple-600 rounded cursor-pointer"
                />
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-xs">
              <button
                onClick={handleSavePreferences}
                className="px-md py-sm bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-lg font-semibold text-body-sm transition-all duration-200"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="px-md py-sm text-neutral-600 dark:text-gray-300 hover:text-neutral-800 dark:hover:text-white font-semibold text-body-sm transition-colors duration-200"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
