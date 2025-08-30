import React from 'react';
import { Shield, Scale, Users, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Scale className="h-12 w-12 text-purple-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">{t('terms.title')}</h1>
            </div>
            <p className="text-xl text-gray-400">{t('terms.subtitle')}</p>
            <p className="text-sm text-gray-500 mt-2">{t('terms.lastUpdated')}</p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-12">
            {/* Acceptation */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-purple-400" />
                {t('terms.acceptance.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('terms.acceptance.content')}
              </p>
            </div>

            {/* Utilisation du service */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-purple-400" />
                {t('terms.usage.title')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{t('terms.usage.permitted.title')}</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• {t('terms.usage.permitted.moderation')}</li>
                    <li>• {t('terms.usage.permitted.reputation')}</li>
                    <li>• {t('terms.usage.permitted.community')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{t('terms.usage.prohibited.title')}</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• {t('terms.usage.prohibited.abuse')}</li>
                    <li>• {t('terms.usage.prohibited.manipulation')}</li>
                    <li>• {t('terms.usage.prohibited.spam')}</li>
                    <li>• {t('terms.usage.prohibited.illegal')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Responsabilités */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-500/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-orange-400" />
                {t('terms.responsibilities.title')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-orange-300 mb-3">{t('terms.responsibilities.user.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('terms.responsibilities.user.content')}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-orange-300 mb-3">{t('terms.responsibilities.service.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('terms.responsibilities.service.content')}</p>
                </div>
              </div>
            </div>

            {/* Limitations */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.limitations.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('terms.limitations.liability')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('terms.limitations.availability')}
              </p>
            </div>

            {/* Modifications */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.modifications.title')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t('terms.modifications.content')}
              </p>
            </div>

            {/* Contact */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.contact.title')}</h2>
              <p className="text-gray-300 mb-4">{t('terms.contact.description')}</p>
              <p className="text-purple-400 font-semibold">support@puresystem.bot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;