
import React from 'react';
import { Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  dict: any;
}

const Layout: React.FC<LayoutProps> = ({ children, currentLang, onLanguageChange, dict }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass-effect border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://www.dropbox.com/scl/fi/8ql3t6b7ha5ogpvof2urz/Emyti-nuevo-icono.jpg?rlkey=u8s8u5u6gozc11eq1pu24dqal&raw=1" 
              alt="EMYTI Logo" 
              className="w-10 h-10 rounded-lg object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Emyti</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#modelo" className="hover:text-indigo-600 transition-colors">{dict.nav.model}</a>
            <a href="#programas" className="hover:text-indigo-600 transition-colors">{dict.nav.programs}</a>
            <a href="#equipo" className="hover:text-indigo-600 transition-colors">{dict.nav.team}</a>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button 
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${currentLang === 'es' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                ESP
              </button>
              <button 
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${currentLang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <img 
                src="https://www.dropbox.com/scl/fi/8ql3t6b7ha5ogpvof2urz/Emyti-nuevo-icono.jpg?rlkey=u8s8u5u6gozc11eq1pu24dqal&raw=1" 
                alt="EMYTI Logo" 
                className="w-8 h-8 rounded object-cover"
                referrerPolicy="no-referrer"
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
              <li><a href="#modelo" className="hover:text-white transition-colors">{dict.footer.links.model}</a></li>
              <li><a href="#programas" className="hover:text-white transition-colors">{dict.footer.links.programs}</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">{dict.footer.links.team}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{dict.footer.modality}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#rosario" className="hover:text-white transition-colors">{dict.footer.links.rosario}</a></li>
              <li><a href="#reservar" className="hover:text-white transition-colors">{dict.footer.links.virtual}</a></li>
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
