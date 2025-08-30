import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Shield, Plus, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/');
  };
  
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer transition-all duration-200 hover:scale-105"
            onClick={handleLogoClick}
          >
            <div className="relative">
              <Shield className="h-10 w-10 text-white" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-xl font-bold text-white">PURESYSTEM</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Commutateur de langue */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-200"
            >
              <Globe className="h-4 w-4 text-gray-300" />
              <span className="text-sm font-medium text-gray-300 uppercase">
                {language}
              </span>
            </button>
            
            {/* Bouton Discord */}
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-xl hover:shadow-blue-500/25 transition-all duration-200">
              <Plus className="h-4 w-4 mr-2" />
              {t('nav.addToDiscord', 'Ajouter à Discord')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;