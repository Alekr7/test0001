import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Shield, Home, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
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
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
            </div>
            <AlertTriangle className="h-16 w-16 text-red-400" />
          </div>

          {/* Code d'erreur 404 */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('error.404.title', 'Page Introuvable')}
            </h2>
          </div>

          {/* Message d'erreur */}
          <div className="mb-12">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {t('error.404.message', 'La page que vous recherchez semble avoir disparu dans les méandres de Discord.')}
            </p>
            <p className="text-gray-400">
              {t('error.404.suggestion', 'Vérifiez l\'URL ou retournez à l\'accueil pour continuer votre navigation.')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGoHome}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 px-8 py-3"
            >
              <Home className="h-5 w-5 mr-2" />
              {t('error.404.goHome', 'Retour à l\'accueil')}
            </Button>
            
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
            >
              {t('error.404.goBack', 'Page précédente')}
            </Button>
          </div>

          {/* Info PURESYSTEM */}
          <div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-semibold text-white">PURESYSTEM</h3>
            </div>
            <p className="text-gray-400 text-sm">
              {t('error.404.about', 'Bot Discord de modération premium avec système de réputation avancé')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;