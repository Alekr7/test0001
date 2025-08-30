import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Composants
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UserCard from './components/UserCard';
import InviteSection from './components/InviteSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DataRequest from './pages/DataRequest';
import DataDeletion from './pages/DataDeletion';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';

// Contextes
import { LanguageProvider } from './contexts/LanguageContext';

// Configuration des données utilisateur avec photo corrigée CommunityHelper
const tierExamples = [
  {
    id: 'toxic',
    username: 'DarkLord',
    discriminator: '6666',
    score: 5,
    band: 'TOXIC',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=200&h=200&fit=crop&crop=face',
    permissions: { images: false, links: false, giveaways: false }
  },
  {
    id: 'risky',
    username: 'TrollingMaster',
    discriminator: '1337',
    score: 35,
    band: 'RISKY',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    permissions: { images: false, links: true, giveaways: false }
  },
  {
    id: 'neutral',
    username: 'CasualUser',
    discriminator: '7890',
    score: 75,
    band: 'NEUTRAL',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=face',
    permissions: { images: true, links: true, giveaways: false }
  },
  {
    id: 'clean',
    username: 'CommunityHelper',
    discriminator: '2468',
    score: 135,
    band: 'CLEAN',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    permissions: { images: true, links: true, giveaways: true }
  },
  {
    id: 'pure',
    username: 'DiscordAngel',
    discriminator: '0001',
    score: 150,
    band: 'PURE',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    permissions: { images: true, links: true, giveaways: true }
  }
];

// Layout principal de l'app
const AppLayout = ({ children }) => {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Header />
      {children}
      <Footer />
      <CookieConsent />
    </div>
  );
};

// Page d'accueil
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Section des cartes utilisateur */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Système de Réputation par Paliers
            </h2>
            <p className="text-xl text-gray-400">
              Chaque utilisateur évolue à travers 5 paliers basés sur son comportement
            </p>
          </div>

          {/* Grille verticale des cartes */}
          <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
            {tierExamples.map(user => (
              <div key={user.id} className="transform hover:scale-[1.02] transition-all duration-300">
                <UserCard user={user} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <InviteSection />
    </div>
  );
};

// Application principale
function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          } />
          <Route path="/privacy" element={
            <AppLayout>
              <PrivacyPolicy />
            </AppLayout>
          } />
          <Route path="/terms" element={
            <AppLayout>
              <TermsOfService />
            </AppLayout>
          } />
          <Route path="/data-request" element={
            <AppLayout>
              <DataRequest />
            </AppLayout>
          } />
          <Route path="/data-deletion" element={
            <AppLayout>
              <DataDeletion />
            </AppLayout>
          } />
          <Route path="/error" element={
            <AppLayout>
              <ServerError />
            </AppLayout>
          } />
          <Route path="/404" element={
            <AppLayout>
              <NotFound />
            </AppLayout>
          } />
          <Route path="*" element={
            <AppLayout>
              <NotFound />
            </AppLayout>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;