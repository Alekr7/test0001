import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Shield, Home, AlertCircle, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServerError = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo et icône d'erreur */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="relative">
              <Shield className="h-16 w-16 text-white" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full animate-pulse"></div>
            </div>
            <AlertCircle className="h-16 w-16 text-orange-400" />
          </div>

          {/* Code d'erreur 500 */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              500
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('error.500.title', 'Erreur Serveur')}
            </h2>
          </div>

          {/* Message d'erreur */}
          <div className="mb-12">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {t('error.500.message', 'Une erreur inattendue s\'est produite sur nos serveurs.')}
            </p>
            <p className="text-gray-400">
              {t('error.500.suggestion', 'Nos équipes ont été notifiées et travaillent sur une solution. Veuillez réessayer dans quelques minutes.')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleRefresh}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-xl hover:shadow-orange-500/25 transition-all duration-300 px-8 py-3"
            >
              <RefreshCw className="h-5 w-5 mr-2" />
              {t('error.500.refresh', 'Réessayer')}
            </Button>
            
            <Button 
              onClick={handleGoHome}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
            >
              <Home className="h-5 w-5 mr-2" />
              {t('error.500.goHome', 'Retour à l\'accueil')}
            </Button>
          </div>

          {/* Info technique */}
          <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('error.500.technical.title', 'Informations Techniques')}
            </h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>{t('error.500.technical.timestamp', 'Heure')} : {new Date().toLocaleString()}</p>
              <p>{t('error.500.technical.code', 'Code d\'erreur')} : PURESYSTEM_500</p>
              <p>{t('error.500.technical.contact', 'Si le problème persiste, contactez notre support.')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerError;