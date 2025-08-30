import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black/40 border-t border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">PURESYSTEM</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Pages légales */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.legal.privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.legal.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Vos données */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.data.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/data-request" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.data.request')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/data-deletion" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.data.deletion')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">support@puresystem.bot</span>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 text-gray-400" />
                <a 
                  href="https://discord.gg/puresystem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.contact.discord')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="border-white/10 my-8" />

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 PURESYSTEM. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">{t('footer.status.online')}</span>
            </div>
          </div>
          
          <div className="text-gray-500 text-sm">
            {t('footer.version')} 1.02
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;