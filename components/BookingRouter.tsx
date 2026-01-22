
import React, { useState, useMemo, useEffect } from 'react';
import { BookingState, Modality, ConsultationType, Area, Language } from '../types';
import { getCalendlyUrl, CALENDLY } from '../services/calendlyConfig';

interface BookingRouterProps {
  initialState?: Partial<BookingState>;
  initialLang?: Language;
  onClose?: () => void;
}

const BookingRouter: React.FC<BookingRouterProps> = ({ initialState, initialLang, onClose }) => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingState>({
    modality: initialState?.modality || null,
    type: initialState?.type || null,
    area: initialState?.area || null,
    lang: initialState?.lang || initialLang || null,
  });

  // Sync with global language changes if the user hasn't started the router yet
  useEffect(() => {
    if (step === 1 && initialLang) {
      setBooking(prev => ({ ...prev, lang: initialLang }));
    }
  }, [initialLang, step]);

  const updateBooking = (key: keyof BookingState, value: any) => {
    setBooking(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const handleLangChange = (lang: Language) => {
    if (lang === 'en') {
      setBooking(prev => ({ ...prev, lang, area: 'dra' }));
    } else {
      setBooking(prev => ({ ...prev, lang }));
    }
    setStep(prev => prev + 1);
  };

  const finalUrl = useMemo(() => {
    if (booking.area && booking.type && booking.modality && booking.lang) {
      return getCalendlyUrl(booking.area, booking.type, booking.modality, booking.lang);
    }
    return null;
  }, [booking]);

  const reset = () => {
    setStep(1);
    setBooking({ modality: null, type: null, area: null, lang: initialLang || null });
  };

  const isEnglishRestricted = booking.lang === 'en' && (booking.area === 'ariel' || booking.area === 'integrado');

  return (
    <div id="booking-router" className="max-w-4xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-xl border border-slate-100 my-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Reserva tu consulta</h2>
        <button onClick={reset} className="text-sm text-slate-400 hover:text-slate-600 transition-colors underline">Reiniciar</button>
      </div>

      <div className="flex gap-2 mb-12 overflow-hidden rounded-full bg-slate-100 h-2">
        {[1, 2, 3, 4, 5].map(s => (
          <div key={s} className={`flex-1 transition-all duration-500 ${step >= s ? 'bg-indigo-600' : 'bg-transparent'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">¿Cómo prefieres realizar tu consulta?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <OptionCard 
              title="Virtual" 
              desc="Sesión por videollamada desde cualquier parte del mundo." 
              onClick={() => updateBooking('modality', 'virtual')}
            />
            <OptionCard 
              title="Presencial" 
              desc="Consultorio físico en Rosario, Argentina." 
              onClick={() => updateBooking('modality', 'presencial')}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">¿Qué tipo de atención buscas?</p>
          <div className="grid grid-cols-1 gap-4">
            <OptionCard 
              title="Consulta Puntual" 
              desc="Atención enfocada en un problema específico o evaluación inicial." 
              onClick={() => updateBooking('type', 'puntual')}
            />
            <OptionCard 
              title="Programa" 
              desc="Acompañamiento estructurado de varias semanas para cambios profundos." 
              onClick={() => updateBooking('type', 'programa')}
            />
            {booking.modality === 'virtual' && (
              <OptionCard 
                title="Membresía" 
                desc="Continuidad y optimización constante de tu salud." 
                onClick={() => updateBooking('type', 'membresia')}
              />
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">¿En qué área necesitas enfocarte?</p>
          <div className={`grid grid-cols-1 gap-4 ${booking.modality === 'presencial' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
            {booking.modality === 'presencial' && (
              <OptionCard 
                title="Acupuntura" 
                desc="Técnica milenaria para dolor y equilibrio energético. Solo presencial." 
                onClick={() => updateBooking('area', 'acupuntura')}
              />
            )}
            <OptionCard 
              title="Metabólica / Funcional" 
              desc="Liderada por la Dra. Adriana Ortiz. Salud hormonal, nutrición y metabolismo." 
              onClick={() => updateBooking('area', 'dra')}
            />
            <OptionCard 
              title="Manejo de Estrés" 
              desc="Liderada por Ariel Reinaudo. Gestión del estrés y regulación emocional." 
              onClick={() => updateBooking('area', 'ariel')}
            />
            <OptionCard 
              title="Modelo Integrado" 
              desc="Atención conjunta Dra + Ariel. El enfoque más completo de Emyti (Recomendado)." 
              isFeatured
              onClick={() => updateBooking('area', 'integrado')}
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">Selecciona el idioma de la consulta</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <OptionCard 
              title="Español" 
              desc="Servicio completo en nuestro idioma principal." 
              onClick={() => handleLangChange('es')}
            />
            <OptionCard 
              title="English" 
              desc="Available only for consultations with Dr. Adriana Ortiz." 
              onClick={() => handleLangChange('en')}
            />
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="text-center space-y-8 animate-in zoom-in duration-500">
          <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 inline-block w-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Tu mejor opción</h3>
            <p className="text-slate-600 mb-6">
              Hemos seleccionado el canal de atención óptimo basado en tus necesidades.
            </p>
            
            {isEnglishRestricted ? (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg mb-6 text-sm">
                English consultations are available only with Dr. Adriana Ortiz. Stress management with Ariel is Spanish only. We've routed you to Dr. Ortiz's English booking page.
              </div>
            ) : null}

            <a 
              href={finalUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
            >
              Confirmar y Agendar en Calendly
            </a>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400 mb-4">¿No es lo que buscabas? Puedes volver atrás o iniciar una consulta general.</p>
            <div className="flex justify-center gap-4">
               <button onClick={() => setStep(4)} className="px-4 py-2 text-slate-600 hover:text-indigo-600">Volver</button>
               <a href={CALENDLY.default_orientacion} target="_blank" className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-600 transition-colors">Consulta de Orientación</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OptionCard: React.FC<{ title: string, desc: string, onClick: () => void, isFeatured?: boolean }> = ({ title, desc, onClick, isFeatured }) => (
  <button 
    onClick={onClick}
    className={`p-6 text-left rounded-xl border transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
      isFeatured 
      ? 'border-indigo-300 bg-indigo-50 shadow-md ring-1 ring-indigo-200' 
      : 'border-slate-200 bg-white hover:border-indigo-400 hover:shadow-lg'
    }`}
  >
    <div className="flex justify-between items-start mb-2">
      <span className={`text-lg font-semibold ${isFeatured ? 'text-indigo-900' : 'text-slate-800'}`}>{title}</span>
      {isFeatured && <span className="bg-indigo-600 text-white text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wider">Premium</span>}
    </div>
    <p className={`text-sm leading-relaxed ${isFeatured ? 'text-indigo-700' : 'text-slate-500'}`}>{desc}</p>
  </button>
);

export default BookingRouter;
