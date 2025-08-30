import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Cookie, X, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('puresystem-cookie-consent');
    if (!cookieConsent) {
      // Afficher avec un petit délai pour ne pas être intrusif
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('puresystem-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('puresystem-cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-50 animate-slide-up">
      <div className="relative">
        {/* Effet de lueur subtile - en arrière-plan avec pointer-events: none */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur opacity-30 pointer-events-none" />
        
        {/* Effet de glassmorphisme - en arrière-plan avec pointer-events: none */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl pointer-events-none" />
        
        {/* Contenu - seul élément avec pointer-events actifs */}
        <div className="relative p-6 pointer-events-auto">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Cookie className="h-8 w-8 text-emerald-400" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">
                {t('cookie.title') || 'Cookies & Confidentialité'}
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {t('cookie.description') || 'Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.'}
              </p>
              
              {showDetails && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    {t('cookie.details.title') || 'Types de cookies :'}
                  </h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• {t('cookie.details.essential') || 'Cookies essentiels (obligatoires)'}</li>
                    <li>• {t('cookie.details.analytics') || 'Cookies d\'analyse (optionnels)'}</li>
                    <li>• {t('cookie.details.performance') || 'Cookies de performance (optionnels)'}</li>
                  </ul>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={acceptCookies}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 text-sm px-4 py-2"
                >
                  {t('cookie.accept') || 'Accepter'}
                </Button>
                
                <Button
                  onClick={rejectCookies}
                  variant="outline"
                  className="border-white/20 text-gray-300 hover:bg-white/10 hover:text-white text-sm px-4 py-2"
                >
                  {t('cookie.reject') || 'Refuser'}
                </Button>
                
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;