import React from 'react';
import { Shield, Eye, Database, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Shield className="h-12 w-12 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">{t('privacy.title')}</h1>
            </div>
            <p className="text-xl text-gray-400">{t('privacy.subtitle')}</p>
            <p className="text-sm text-gray-500 mt-2">{t('privacy.lastUpdated')}</p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-12">
            {/* Introduction */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-blue-400" />
                {t('privacy.intro.title')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('privacy.intro.content')}
              </p>
            </div>

            {/* Données collectées */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="h-6 w-6 mr-3 text-blue-400" />
                {t('privacy.dataCollection.title')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{t('privacy.dataCollection.automatic.title')}</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• {t('privacy.dataCollection.automatic.discordId')}</li>
                    <li>• {t('privacy.dataCollection.automatic.username')}</li>
                    <li>• {t('privacy.dataCollection.automatic.messages')}</li>
                    <li>• {t('privacy.dataCollection.automatic.serverActivity')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{t('privacy.dataCollection.manual.title')}</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• {t('privacy.dataCollection.manual.email')}</li>
                    <li>• {t('privacy.dataCollection.manual.preferences')}</li>
                    <li>• {t('privacy.dataCollection.manual.reports')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Utilisation des données */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="h-6 w-6 mr-3 text-blue-400" />
                {t('privacy.dataUsage.title')}
              </h2>
              
              <div className="text-gray-300 space-y-4">
                <p>{t('privacy.dataUsage.moderation')}</p>
                <p>{t('privacy.dataUsage.reputation')}</p>
                <p>{t('privacy.dataUsage.analytics')}</p>
                <p>{t('privacy.dataUsage.support')}</p>
              </div>
            </div>

            {/* Droits de l'utilisateur */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 border border-emerald-500/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">{t('privacy.userRights.title')}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-300 mb-3">{t('privacy.userRights.access.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('privacy.userRights.access.description')}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-emerald-300 mb-3">{t('privacy.userRights.rectification.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('privacy.userRights.rectification.description')}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-emerald-300 mb-3">{t('privacy.userRights.deletion.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('privacy.userRights.deletion.description')}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-emerald-300 mb-3">{t('privacy.userRights.portability.title')}</h3>
                  <p className="text-gray-300 text-sm">{t('privacy.userRights.portability.description')}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-gray-300 mb-4">{t('privacy.contact.description')}</p>
              <p className="text-blue-400 font-semibold">support@puresystem.bot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;