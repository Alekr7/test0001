import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const UserCard = ({ user }) => {
  const { t } = useLanguage();

  const bandColors = {
    TOXIC: { 
      bg: 'from-red-600 to-red-700', 
      border: 'border-red-500/30', 
      ring: 'ring-red-500/50',
      progress: 'bg-red-500',
      chip: 'bg-red-500/20 text-red-300 border-red-500/30'
    },
    RISKY: { 
      bg: 'from-orange-600 to-red-600', 
      border: 'border-orange-500/30', 
      ring: 'ring-orange-500/50',
      progress: 'bg-orange-500',
      chip: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
    },
    NEUTRAL: { 
      bg: 'from-gray-600 to-gray-700', 
      border: 'border-gray-500/30', 
      ring: 'ring-gray-500/50',
      progress: 'bg-gray-500',
      chip: 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    },
    CLEAN: { 
      bg: 'from-purple-600 to-purple-700', 
      border: 'border-purple-500/30', 
      ring: 'ring-purple-500/50',
      progress: 'bg-purple-500',
      chip: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    },
    PURE: { 
      bg: 'from-emerald-600 to-emerald-700', 
      border: 'border-emerald-500/30', 
      ring: 'ring-emerald-500/50',
      progress: 'bg-emerald-500',
      chip: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    }
  };

  const colors = bandColors[user.band];
  const progressPercentage = (user.score / 150) * 100;

  return (
    <div className={`p-6 rounded-2xl bg-gradient-to-r ${colors.bg} bg-opacity-10 border ${colors.border} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}>
      {/* Section principale */}
      <div className="flex items-center justify-between mb-4">
        {/* Informations utilisateur */}
        <div className="flex items-center space-x-4">
          <div className={`relative ring-2 ${colors.ring} rounded-full p-1`}>
            <img 
              src={user.avatar} 
              alt={user.username}
              className="w-16 h-16 rounded-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200x200/374151/ffffff?text=User';
              }}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white">{user.username}#{user.discriminator}</h3>
            <div className="flex items-center space-x-3 mt-2">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${colors.chip}`}>
                {user.band}
              </span>
              <span className="text-sm text-gray-400">{t('userCard.score', 'Score')}: {user.score}/150</span>
            </div>
          </div>
        </div>

        {/* Permissions */}
        <div className="text-right">
          <p className="text-sm text-gray-400 mb-2">{t('userCard.permissions', 'Permissions')}</p>
          <div className="flex space-x-2">
            <span className={`px-2 py-1 text-xs rounded ${user.permissions.images ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
              {t('userCard.images', 'Images')}
            </span>
            <span className={`px-2 py-1 text-xs rounded ${user.permissions.links ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
              {t('userCard.links', 'Liens')}
            </span>
            <span className={`px-2 py-1 text-xs rounded ${user.permissions.giveaways ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
              {t('userCard.giveaways', 'Giveaways')}
            </span>
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>{t('userCard.progress', 'Progression')}</span>
          <span>{progressPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className={`${colors.progress} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Insight du band */}
      <div className="mt-4 p-3 bg-black/20 rounded-lg border border-white/10">
        <p className="text-xs text-gray-400">
          {t(`userCard.bandInsights.${user.band.toLowerCase()}`, `Utilisateur ${user.band}`)}
        </p>
      </div>
    </div>
  );
};

export default UserCard;