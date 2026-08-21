import React, { useState } from 'react';
import { Language, CurrentView } from '../types';
import { BookOpen, Menu, X } from 'lucide-react';

const logoImg = 'https://www.dropbox.com/scl/fi/8ql3t6b7ha5ogpvof2urz/Emyti-nuevo-icono.jpg?rlkey=u8s8u5u6gozc11eq1pu24dqal&raw=1';

interface LayoutProps {
  children: React.ReactNode;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  dict: any;
  currentView?: CurrentView;
  onNavigate?: (view: CurrentView, sectionId?: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentLang, 
  onLanguageChange, 
  dict,
  currentView = 'home',
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: CurrentView, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(view, sectionId);
    } else {
      if (view === 'home' && sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <img 
              src={logoImg} 
              alt="EMYTI Logo" 
              className="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 uppercase">Emyti</span>
              <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase -mt-1">Holistic Healing</span>
            </div>
          </button>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button 
              onClick={() => handleNavClick('home', 'modelo')} 
              className="hover:text-indigo-600 transition-colors py-2"
            >
              {dict.nav.model}
            </button>

            <button 
              onClick={() => handleNavClick('home', 'programas')} 
              className="hover:text-indigo-600 transition-colors py-2"
            >
              {dict.nav.programs}
            </button>

            <button 
              onClick={() => handleNavClick('home', 'equipo')} 
              className="hover:text-indigo-600 transition-colors py-2"
            >
              {dict.nav.team}
            </button>

            {/* E-books Nav Item */}
            <button 
              onClick={() => handleNavClick('ebooks')} 
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all ${
                currentView === 'ebooks'
                  ? 'bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-xs'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${currentView === 'ebooks' ? 'text-indigo-600' : 'text-indigo-400'}`} />
              <span>{dict.nav.ebooks || 'E-books'}</span>
            </button>

            <button 
              onClick={() => handleNavClick('home', 'rosario')} 
              className="hover:text-indigo-600 transition-colors py-2 text-slate-500"
            >
              {dict.nav.rosario || 'Presencial'}
            </button>
          </nav>

          {/* Right Header: CTA + Language Switcher + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            
            {/* Quick Book CTA on desktop */}
            <button
              onClick={() => handleNavClick('home', 'reservar')}
              className="hidden lg:inline-flex items-center px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
            >
              {dict.hero?.ctaPrimary || 'Reservar'}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button 
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  currentLang === 'es' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                ESP
              </button>
              <button 
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                  currentLang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                ENG
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => handleNavClick('home', 'modelo')} 
                className="text-left py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
              >
                {dict.nav.model}
              </button>

              <button 
                onClick={() => handleNavClick('home', 'programas')} 
                className="text-left py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
              >
                {dict.nav.programs}
              </button>

              <button 
                onClick={() => handleNavClick('home', 'equipo')} 
                className="text-left py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
              >
                {dict.nav.team}
              </button>

              {/* Mobile E-books link */}
              <button 
                onClick={() => handleNavClick('ebooks')} 
                className={`flex items-center gap-2 py-2 text-base font-bold rounded-xl px-3 transition-colors ${
                  currentView === 'ebooks'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-indigo-600 hover:bg-indigo-50/50'
                }`}
              >
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>{dict.nav.ebooks || 'E-books'}</span>
              </button>

              <button 
                onClick={() => handleNavClick('home', 'rosario')} 
                className="text-left py-2 text-base font-semibold text-slate-700 hover:text-indigo-600"
              >
                {dict.nav.rosario || 'Presencial Rosario'}
              </button>

              <button 
                onClick={() => handleNavClick('home', 'reservar')} 
                className="w-full mt-2 py-3 bg-indigo-600 text-white font-bold text-center rounded-xl shadow-md"
              >
                {dict.hero?.ctaPrimary || 'Reservar Consulta'}
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img 
                src={logoImg} 
                alt="EMYTI Logo" 
                className="w-8 h-8 rounded object-cover"
              />
              <span className="text-lg font-bold tracking-tight">EMYTI</span>
            </div>
            <p className="text-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">{dict.footer.explore}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('home', 'modelo')} 
                  className="hover:text-white transition-colors text-left"
                >
                  {dict.footer.links.model}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('home', 'programas')} 
                  className="hover:text-white transition-colors text-left"
                >
                  {dict.footer.links.programs}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('home', 'equipo')} 
                  className="hover:text-white transition-colors text-left"
                >
                  {dict.footer.links.team}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('ebooks')} 
                  className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{dict.nav.ebooks || 'E-books'}</span>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{dict.footer.modality}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('home', 'rosario')} 
                  className="hover:text-white transition-colors text-left"
                >
                  {dict.footer.links.rosario}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('home', 'reservar')} 
                  className="hover:text-white transition-colors text-left"
                >
                  {dict.footer.links.virtual}
                </button>
              </li>
              <li><span className="text-slate-500">{dict.footer.links.englishNote}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{dict.footer.links.terms}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{dict.footer.links.privacy}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
          <p>© 2024 Emyti. {dict.footer.rights}</p>
          <p>Rosario, Argentina</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
