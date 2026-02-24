
import React, { useState, useMemo, useEffect } from 'react';
import { BookingState, Modality, ConsultationType, Area, Language } from '../types';
import { getCalendlyUrl, CALENDLY } from '../services/calendlyConfig';

interface BookingRouterProps {
  initialState?: Partial<BookingState>;
  initialLang?: Language;
  onClose?: () => void;
}

const DICT = {
  es: {
    title: 'Asistente de Reserva',
    reset: 'Reiniciar',
    step1: {
      q: '¿Cómo prefieres realizar tu consulta?',
      virtual: 'Solo Modalidad Virtual',
      virtualDesc: 'Sesión por videollamada desde cualquier parte del mundo.',
      presencial: 'Solo Modalidad Presencial',
      presencialDesc: 'Consultorio físico en Rosario, Argentina.'
    },
    step2: {
      q: 'Selecciona el idioma de la consulta',
      es: 'Español',
      esDesc: 'Atención completa en español.',
      en: 'English',
      enDesc: 'Consultations available in English (Limited to Metabolic Medicine).'
    },
    step3: {
      q: '¿Qué tipo de acompañamiento buscas?',
      puntual: 'Consulta puntual',
      puntualDesc: 'Evaluación inicial o consulta enfocada en un tema específico.',
      progVirtual: 'Programa (min 6 meses)',
      progVirtualDesc: 'Acompañamiento profundo y sostenido para cambios metabólicos reales.',
      progPresencial: 'Programa Pack 4 sesiones',
      progPresencialDesc: 'Ciclo de sesiones presenciales para un tratamiento estructurado.',
      membresia: 'Membresía (mes a mes)',
      membresiaDesc: 'Seguimiento continuo y optimización constante de tu salud.'
    },
    step4: {
      q: '¿En qué área necesitas enfocarte?',
      metabolica: 'Metabólica / Funcional',
      metabolicaDesc: 'Salud hormonal, nutrición y optimización metabólica.',
      estres: 'Manejo de Estrés',
      estresDesc: 'Regulación del sistema nervioso y coherencia cardíaca.',
      integrado: 'Modelo Integrado',
      integradoDesc: 'Enfoque completo combinando medicina y manejo de estrés.',
      acupuntura: 'Acupuntura',
      acupunturaDesc: 'Equilibrio energético y tratamiento de dolor crónico.',
      noteEn: 'Nota: Las consultas en inglés están limitadas actualmente a medicina Metabólica / Funcional con la Dra. Ortiz.',
      paymentNote: 'Importes expresados en Dólares Americanos, pagaderos en Dólares o Pesos Argentinos al precio del dólar oficial compra.',
      memberDiscount: 'Si sos miembro activo, tenés descuento.',
      promoArgentina: '(Consulta por precio promocional para quienes viven en Argentina)'
    },
    step5: {
      ready: '¡Todo listo!',
      found: 'Hemos encontrado el espacio ideal para tu consulta',
      cta: 'Agendar en Calendly',
      change: '¿Quieres cambiar algo? Puedes volver atrás o iniciar una consulta general.',
      back: 'Volver',
      orientation: 'Consulta de Orientación'
    }
  },
  en: {
    title: 'Booking Assistant',
    reset: 'Reset',
    step1: {
      q: 'How do you prefer to have your consultation?',
      virtual: 'Virtual Modality Only',
      virtualDesc: 'Video call session from anywhere in the world.',
      presencial: 'In-person Modality Only',
      presencialDesc: 'Physical office in Rosario, Argentina.'
    },
    step2: {
      q: 'Select the language for the consultation',
      es: 'Spanish',
      esDesc: 'Full care in Spanish.',
      en: 'English',
      enDesc: 'Consultations available in English (Limited to Metabolic Medicine).'
    },
    step3: {
      q: 'What type of support are you looking for?',
      puntual: 'One-time consultation',
      puntualDesc: 'Initial assessment or consultation focused on a specific topic.',
      progVirtual: 'Program (min 6 months)',
      progVirtualDesc: 'Deep and sustained support for real metabolic changes.',
      progPresencial: 'Program Pack 4 sessions',
      progPresencialDesc: 'Cycle of in-person sessions for a structured treatment.',
      membresia: 'Membership (month to month)',
      membresiaDesc: 'Continuous monitoring and constant optimization of your health.'
    },
    step4: {
      q: 'Which area do you need to focus on?',
      metabolica: 'Metabolic / Functional',
      metabolicaDesc: 'Hormonal health, nutrition, and metabolic optimization.',
      estres: 'Stress Management',
      estresDesc: 'Nervous system regulation and heart coherence.',
      integrado: 'Integrated Model',
      integradoDesc: 'Complete approach combining medicine and stress management.',
      acupuntura: 'Acupuncture',
      acupunturaDesc: 'Energy balance and chronic pain treatment.',
      noteEn: 'Note: English consultations are currently limited to Metabolic / Functional medicine with Dr. Ortiz.',
      paymentNote: 'Amounts expressed in US Dollars, payable in Dollars or Argentine Pesos at the official dollar rate.',
      memberDiscount: 'If you are an active member, you have a discount.',
      promoArgentina: '(Inquire for promotional price for residents in Argentina)'
    },
    step5: {
      ready: 'All set!',
      found: 'We have found the ideal space for your consultation',
      cta: 'Book on Calendly',
      change: 'Want to change something? You can go back or start a general consultation.',
      back: 'Back',
      orientation: 'Orientation Consultation'
    }
  }
};

const BookingRouter: React.FC<BookingRouterProps> = ({ initialState, initialLang, onClose }) => {
  // Calculamos el paso inicial basado en la información recibida
  const getInitialStep = () => {
    if (initialState?.modality === 'presencial') return 3; // Skip language for presencial
    if (initialState?.modality) return 2;
    return 1;
  };

  const [step, setStep] = useState(getInitialStep());
  const [booking, setBooking] = useState<BookingState>({
    modality: initialState?.modality || null,
    type: initialState?.type || null,
    area: initialState?.area || null,
    lang: initialState?.lang || initialLang || null,
  });

  // Sync with global language changes
  useEffect(() => {
    if (initialLang) {
      setBooking(prev => ({ ...prev, lang: initialLang }));
    }
  }, [initialLang]);

  const t = DICT[booking.lang || 'es'];

  const updateBooking = (key: keyof BookingState, value: any) => {
    setBooking(prev => ({ ...prev, [key]: value }));

    // Determine next step
    if (key === 'modality' && value === 'presencial') {
      setStep(3); // Skip language for presencial
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleAreaSelect = (area: Area) => {
    setBooking(prev => ({ ...prev, area }));
    setStep(5); // Final step
  };

  const finalUrl = useMemo(() => {
    if (booking.area && booking.type && booking.modality && booking.lang) {
      // Force 'es' for presencial links as they only exist in Spanish
      const linkLang = booking.modality === 'presencial' ? 'es' : booking.lang;
      return getCalendlyUrl(booking.area, booking.type, booking.modality, linkLang);
    }
    return null;
  }, [booking]);

  const reset = () => {
    setStep(1);
    setBooking({ modality: null, type: null, area: null, lang: initialLang || null });
  };

  const getPrice = (area: Area) => {
    const { modality, type } = booking;
    if (modality === 'virtual') {
      if (type === 'puntual') {
        if (area === 'dra') return '$80';
        if (area === 'ariel') return '$60';
        if (area === 'integrado') return '$120';
      }
      if (type === 'programa') {
        if (area === 'dra') return '$384';
        if (area === 'ariel') return '$288';
        if (area === 'integrado') return '$576';
      }
      if (type === 'membresia') return '$80 / $50';
    } else {
      // Presencial
      if (type === 'puntual') {
        if (area === 'dra') return '$80';
        if (area === 'ariel') return '$60';
        if (area === 'integrado') return '$120';
        if (area === 'acupuntura') return '$80';
      }
      if (type === 'programa') {
        if (area === 'dra') return '$120';
        if (area === 'ariel') return '$120';
        if (area === 'integrado') return '$180';
        if (area === 'acupuntura') return '$120';
      }
    }
    return null;
  };

  return (
    <div id="booking-router" className="max-w-4xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-xl border border-slate-100 my-12 scroll-mt-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
        <button onClick={reset} className="text-sm text-slate-400 hover:text-slate-600 transition-colors underline">{t.reset}</button>
      </div>

      <div className="flex gap-2 mb-12 overflow-hidden rounded-full bg-slate-100 h-2">
        {[1, 2, 3, 4, 5].map(s => (
          <div key={s} className={`flex-1 transition-all duration-500 ${step >= s ? 'bg-indigo-600' : 'bg-transparent'}`} />
        ))}
      </div>

      {/* STEP 1: MODALIDAD */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">{t.step1.q}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <OptionCard 
              title={t.step1.virtual} 
              desc={t.step1.virtualDesc} 
              onClick={() => updateBooking('modality', 'virtual')}
            />
            <OptionCard 
              title={t.step1.presencial} 
              desc={t.step1.presencialDesc} 
              onClick={() => updateBooking('modality', 'presencial')}
            />
          </div>
        </div>
      )}

      {/* STEP 2: IDIOMA (Solo para Virtual) */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">{t.step2.q}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <OptionCard 
              title={t.step2.es} 
              desc={t.step2.esDesc} 
              onClick={() => updateBooking('lang', 'es')}
            />
            <OptionCard 
              title={t.step2.en} 
              desc={t.step2.enDesc} 
              onClick={() => updateBooking('lang', 'en')}
            />
          </div>
        </div>
      )}

      {/* STEP 3: TIPO DE SERVICIO */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">{t.step3.q}</p>
          <div className="grid grid-cols-1 gap-4">
            <OptionCard 
              title={t.step3.puntual} 
              desc={t.step3.puntualDesc} 
              onClick={() => updateBooking('type', 'puntual')}
            />
            <OptionCard 
              title={booking.modality === 'virtual' ? t.step3.progVirtual : t.step3.progPresencial} 
              desc={booking.modality === 'virtual' ? t.step3.progVirtualDesc : t.step3.progPresencialDesc} 
              onClick={() => updateBooking('type', 'programa')}
            />
            {booking.modality === 'virtual' && (
              <OptionCard 
                title={t.step3.membresia} 
                desc={t.step3.membresiaDesc} 
                onClick={() => updateBooking('type', 'membresia')}
              />
            )}
          </div>
        </div>
      )}

      {/* STEP 4: ESPECIALIDAD */}
      {step === 4 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <p className="text-lg font-medium text-slate-600">{t.step4.q}</p>
          <div className={`grid grid-cols-1 gap-4 ${booking.modality === 'presencial' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
            <OptionCard 
              title={t.step4.metabolica} 
              desc={t.step4.metabolicaDesc} 
              price={getPrice('dra')}
              onClick={() => handleAreaSelect('dra')}
            />
            
            {/* Restrictions based on chart: English is restricted for virtual, but presencial shows all (in Spanish) */}
            {(booking.lang === 'es' || booking.modality === 'presencial') && (
              <>
                <OptionCard 
                  title={t.step4.estres} 
                  desc={t.step4.estresDesc} 
                  price={getPrice('ariel')}
                  onClick={() => handleAreaSelect('ariel')}
                />
                <OptionCard 
                  title={t.step4.integrado} 
                  desc={t.step4.integradoDesc} 
                  price={getPrice('integrado')}
                  isFeatured
                  onClick={() => handleAreaSelect('integrado')}
                />
              </>
            )}

            {booking.modality === 'presencial' && (
              <OptionCard 
                title={t.step4.acupuntura} 
                desc={t.step4.acupunturaDesc} 
                price={getPrice('acupuntura')}
                onClick={() => handleAreaSelect('acupuntura')}
              />
            )}
          </div>
          
          <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
            <p className="text-sm text-slate-500 font-medium">{t.step4.paymentNote}</p>
            <p className="text-xs text-slate-400 italic">{t.step4.memberDiscount}</p>
            {booking.modality === 'virtual' && (
              <p className="text-xs text-slate-400 italic">{t.step4.promoArgentina}</p>
            )}
            {booking.lang === 'en' && booking.modality === 'virtual' && (
              <p className="text-xs text-indigo-400 italic pt-2">{t.step4.noteEn}</p>
            )}
          </div>
        </div>
      )}

      {/* STEP 5: FINAL */}
      {step === 5 && (
        <div className="text-center space-y-8 animate-in zoom-in duration-500">
          <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 inline-block w-full text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.step5.ready}</h3>
            <p className="text-slate-600 mb-6">
              {t.step5.found} {booking.modality}.
            </p>
            
            <a 
              href={finalUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
            >
              {t.step5.cta}
            </a>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <p className="text-sm text-slate-400 mb-4">{t.step5.change}</p>
            <div className="flex justify-center gap-4">
               <button onClick={() => setStep(4)} className="px-4 py-2 text-slate-600 hover:text-indigo-600">{t.step5.back}</button>
               <a href={CALENDLY.default_orientacion} target="_blank" className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-600 transition-colors">{t.step5.orientation}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OptionCard: React.FC<{ title: string, desc: string, onClick: () => void, isFeatured?: boolean, price?: string | null }> = ({ title, desc, onClick, isFeatured, price }) => (
  <button 
    onClick={onClick}
    className={`p-6 text-left rounded-xl border transition-all transform hover:scale-[1.02] active:scale-[0.98] flex flex-col h-full ${
      isFeatured 
      ? 'border-indigo-300 bg-indigo-50 shadow-md ring-1 ring-indigo-200' 
      : 'border-slate-200 bg-white hover:border-indigo-400 hover:shadow-lg'
    }`}
  >
    <div className="flex justify-between items-start mb-2">
      <span className={`text-lg font-semibold ${isFeatured ? 'text-indigo-900' : 'text-slate-800'}`}>{title}</span>
      {isFeatured && <span className="bg-indigo-600 text-white text-[10px] px-2 py-1 rounded uppercase font-bold tracking-wider">Premium</span>}
    </div>
    <p className={`text-sm leading-relaxed mb-4 flex-grow ${isFeatured ? 'text-indigo-700' : 'text-slate-500'}`}>{desc}</p>
    {price && (
      <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Inversión</span>
        <span className={`text-xl font-bold ${isFeatured ? 'text-indigo-600' : 'text-slate-900'}`}>{price} <span className="text-xs font-normal text-slate-400">USD</span></span>
      </div>
    )}
  </button>
);

export default BookingRouter;
