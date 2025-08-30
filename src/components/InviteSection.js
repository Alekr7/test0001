import React from 'react';
import { Button } from './ui/button';
import { Shield, Plus, Users, Settings, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const InviteSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* En-tête */}
          <div className="mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Shield className="h-12 w-12 text-emerald-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">{t('invite.title')}</h2>
            </div>
            <p className="text-xl text-gray-400">{t('invite.subtitle')}</p>
          </div>

          {/* Instructions étape par étape */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('invite.steps.step1.title')}</h3>
              <p className="text-gray-400">{t('invite.steps.step1.description')}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('invite.steps.step2.title')}</h3>
              <p className="text-gray-400">{t('invite.steps.step2.description')}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t('invite.steps.step3.title')}</h3>
              <p className="text-gray-400">{t('invite.steps.step3.description')}</p>
            </div>
          </div>

          {/* Permissions recommandées */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 border border-emerald-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 mr-3 text-emerald-400" />
              {t('invite.permissions.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{t('invite.permissions.readMessages')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{t('invite.permissions.sendMessages')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{t('invite.permissions.manageMessages')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{t('invite.permissions.kickMembers')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{t('invite.permissions.banMembers')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">{t('invite.permissions.manageRoles')}</span>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xl px-12 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
            <Shield className="mr-3 h-6 w-6" />
            {t('invite.finalCta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;