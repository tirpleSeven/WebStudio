import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <Toaster position="top-right" toastOptions={{
            style: {
              borderRadius: '8px',
              background: 'var(--toast-bg, #fff)',
              color: 'var(--toast-color, #333)',
            },
            className: '!font-medium',
          }} />
          <Header />
          <main className="flex-grow">
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <Testimonials />
            <Contact />
          </main>
          <FloatingContact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;