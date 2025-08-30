import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { UserX, Download, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { apiService } from '../hooks/useApi';

const DataRequest = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    discordId: '',
    email: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const requestData = {
        discord_id: formData.discordId,
        email: formData.email,
        reason: formData.reason || null
      };
      
      await apiService.createDataRequest(requestData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erreur lors de la création de la demande:', error);
      setError(error.response?.data?.detail || "Une erreur s'est produite lors de l'envoi de votre demande.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-emerald-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">{t('dataRequest.success.title')}</h1>
              <p className="text-xl text-gray-300">{t('dataRequest.success.message')}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2">{t('dataRequest.success.nextSteps')}</h3>
              <p className="text-gray-400 text-sm">{t('dataRequest.success.timeline')}</p>
            </div>

            <div className="mt-8">
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
              >
                {t('dataRequest.success.backHome')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Informations */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Download className="h-12 w-12 text-cyan-400" />
                <h1 className="text-4xl font-bold text-white">{t('dataRequest.title')}</h1>
              </div>

              <p className="text-xl text-gray-300 mb-8">{t('dataRequest.description')}</p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <UserX className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('dataRequest.info.what.title')}</h3>
                    <p className="text-gray-400">{t('dataRequest.info.what.description')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Download className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t('dataRequest.info.format.title')}</h3>
                    <p className="text-gray-400">{t('dataRequest.info.format.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-white mb-6">{t('dataRequest.form.title')}</h2>
              
              {/* Affichage d'erreur */}
              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('dataRequest.form.discordId')}
                  </label>
                  <input
                    type="text"
                    name="discordId"
                    value={formData.discordId}
                    onChange={handleInputChange}
                    required
                    placeholder="123456789012345678"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-400 mt-1">{t('dataRequest.form.discordIdHelp')}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('dataRequest.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('dataRequest.form.reason')}
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder={t('dataRequest.form.reasonPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">{t('dataRequest.form.reasonHelp')}</p>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0 shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {isLoading ? 'Envoi en cours...' : t('dataRequest.form.submit')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataRequest;