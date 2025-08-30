import React from 'react';
import { Button } from './ui/button';
import { Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PureSystemAnimation from './PureSystemAnimation';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">{t('hero.badge')}</span>
          </div>

          {/* Logo et titre principal */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <div className="relative">
              <Shield className="h-20 w-20 text-white" />
              <div className="absolute -top-2 -right-2 h-5 w-5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-ping" />
            </div>
            <PureSystemAnimation 
              text={t('hero.title')}
              className="text-7xl md:text-9xl font-black"
            />
          </div>

          {/* Sous-titre avec mots colorés */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
            {t('hero.subtitle.prefix')}{' '}
            <span className="text-emerald-400 font-semibold">{t('hero.subtitle.verification')}</span>
            {t('hero.subtitle.comma')}{' '}
            <span className="text-cyan-400 font-semibold">{t('hero.subtitle.reputation')}</span>{' '}
            {t('hero.subtitle.and')}{' '}
            <span className="text-purple-400 font-semibold">{t('hero.subtitle.moderation')}</span>{' '}
            {t('hero.subtitle.suffix')}
          </p>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Score Moyen Global */}
          <div className="mb-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">{t('hero.globalScore.title')}</h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400">{t('hero.globalScore.average')}</span>
              <span className="text-2xl font-bold text-emerald-400">78.5/100</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style={{ width: '78.5%' }}></div>
            </div>
            <p className="text-sm text-gray-500">{t('hero.globalScore.subtitle')}</p>
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xl px-12 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;