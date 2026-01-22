
import React, { useState } from 'react';
import Layout from './components/Layout';
import BookingRouter from './components/BookingRouter';
import { Language, BookingState } from './types';

const TRANSLATIONS = {
  es: {
    nav: { model: 'Modelo', programs: 'Programas', team: 'Equipo', rosario: 'Presencial' },
    hero: {
      tag: '360° Holistic Healing',
      title: 'Recupera tu vitalidad con un',
      titleAccent: 'modelo integrado',
      sub: 'Medicina Metabólica y Manejo de Estrés. Un enfoque científico y humano para transformar tu salud desde la raíz.',
      ctaPrimary: 'Reservar Ahora',
      ctaSecondary: 'Ver Programas',
      ctaText: 'No sé por dónde empezar →',
      stats: ['Virtual Global', 'Presencial Rosario', 'Bilingüe (ES / EN)']
    },
    model: {
      title: 'Nuestro Modelo de Salud',
      sub: 'No tratamos síntomas aislados. Entendemos la salud como un equilibrio dinámico entre tu biología, tu sistema nervioso y tus vínculos.',
      cards: [
        { title: 'Acupuntura', desc: 'Técnica milenaria para equilibrar tu energía y tratar dolores crónicos, disponible únicamente en nuestra sede de Rosario.' },
        { title: 'Salud Metabólica', desc: 'Optimizamos tus hormonas, nutrición y energía celular para que tu cuerpo funcione en su máximo potencial.' },
        { title: 'Manejo de Estrés', desc: 'Entrenamos tu sistema nervioso para gestionar el estrés crónico y recuperar la capacidad de calma y enfoque.' },
        { title: 'Vínculos Saludables', desc: 'Integramos la salud relacional como pilar fundamental del bienestar integral y la longevidad.' }
      ],
      integration: {
        title: '¿Por qué la integración es clave?',
        desc: 'Un metabolismo sano no se sostiene en un cuerpo bajo estrés crónico, y la paz mental es difícil de alcanzar si tu biología está inflamada.',
        steps: ['Evaluación', 'Plan', 'Seguimiento']
      }
    },
    programs: {
      title: 'Elige tu camino',
      sub: 'Opciones puntuales o programas de transformación profunda.',
      cards: [
        { id: 'metabolica', title: 'Ala Metabólica', lead: 'Dra. Adriana Ortiz', type: 'Salud Funcional', desc: 'Para quienes buscan balance hormonal, salud digestiva o longevidad metabólica.', features: ['Laboratorios funcionales', 'Protocolo nutricional', 'Soporte ES/EN'], cta: 'Ver más' },
        { id: 'acupuntura', title: 'Ala de Acupuntura', lead: 'Dra. Adriana Ortiz + Ariel Reinaudo', type: 'Medicina Tradicional', desc: 'Tratamiento del dolor y reequilibrio homeostático mediante técnicas milenarias. Solo presencial.', features: ['Atención en Rosario', 'Manejo del dolor', 'Regulación biológica'], cta: 'Ver más' },
        { id: 'integrado', title: 'Programa Integrado', lead: 'Dra. Ortiz + Ariel Reinaudo', type: 'Transformación 360', desc: 'Nuestro programa premium. La sinergia total entre medicina y manejo de estrés.', features: ['Enfoque combinado', 'Optimización biológica', 'Coaching de estrés'], cta: 'Agendar Integrado' },
        { id: 'estres', title: 'Ala de Estrés', lead: 'Ariel Reinaudo', type: 'Manejo de Estrés', desc: 'Para quienes conviven con ansiedad, burnout o síntomas psicosomáticos persistentes.', features: ['Entrenamiento Vagal', 'Regulación Emocional', 'Solo Español'], cta: 'Ver más' }
      ]
    },
    details: {
      metabolica: {
        title: "Consulta Virtual de Medicina Nutricional y Metabólica",
        description: "Consulta integral enfocada en la evaluación de tu salud metabólica y nutricional desde la comodidad de tu hogar. A través de un análisis detallado de síntomas, hábitos y valores bioquímicos, recibirás recomendaciones personalizadas para optimizar tu bienestar y mejorar tu metabolismo.",
        servicesTitle: "Servicios incluidos en la consulta",
        services: [
          "Evaluación de historial clínico, síntomas y hábitos de vida",
          "Análisis de valores bioquímicos (si están disponibles)",
          "Interpretación de indicadores clave en salud metabólica",
          "Recomendaciones personalizadas para mejorar los parámetros evaluados"
        ],
        benefitsTitle: "Beneficios de esta consulta",
        benefits: [
          "Obtén un análisis detallado de tu estado metabólico sin salir de casa",
          "Identifica desequilibrios que pueden afectar tu salud y energía",
          "Optimiza tu bienestar con estrategias nutricionales y funcionales",
          "Recibe recomendaciones prácticas y aplicables a tu día a día"
        ],
        investmentTitle: "Inversión",
        investment: [
          "$80 primer encuentro",
          "$50 encuentros posteriores, si fuera necesario y mientras tu membresía este activa.",
          "Incluye un mes de la Membresía V.I.P.",
          "(Consulta por precio promocional para quienes viven en Argentina)",
          "Importes expresados en Dólares Americanos, pagaderos en Dólares o Pesos Argentinos al precio del dólar oficial."
        ],
        cta: "Agendar ahora"
      }
    },
    team: {
      title: 'El Equipo',
      desc: 'Profesionales especializados que colaboran de manera constante para ofrecerte un diagnóstico coherente y una estrategia unificada.',
      quote: 'Nuestro objetivo es que dejes de ser un paciente pasivo para convertirte en el arquitecto de tu propia salud.',
      members: [
        { name: 'Dra. Adriana Ortiz', role: 'Functional Medicine (ES/EN)', desc: 'Experta en metabolismo y salud funcional con mirada global.', cta: 'Reservar con Dra. →' },
        { name: 'Ariel Reinaudo', role: 'Stress Management (ES)', desc: 'Especialista en regulación del sistema nervioso y conducta.', cta: 'Reservar con Ariel →' }
      ]
    },
    rosario: {
      tag: 'Sede Central',
      title: 'Atención Presencial en Rosario',
      desc: 'Contamos con un espacio diseñado para tu bienestar en el corazón de Rosario, Argentina. Ofrecemos una experiencia cercana y humana para quienes prefieren el contacto directo.',
      features: ['Consultas de evaluación exhaustiva.', 'Mediciones antropométricas y funcionales en sitio.'],
      cta: 'Agendar en Rosario'
    },
    routerSection: {
      title: 'Comienza tu proceso',
      desc: 'Utiliza nuestro asistente inteligente para encontrar el turno y profesional que mejor se adapte a tu caso.'
    },
    footer: {
      tagline: '360° Holistic Healing Model. Medicina Funcional, Metabolismo y Manejo de Estrés.',
      explore: 'Explorar',
      modality: 'Modality',
      links: {
        model: 'Nuestro Modelo',
        programs: 'Programas Metabólicos',
        team: 'Nuestro Equipo',
        rosario: 'Presencial Rosario',
        virtual: 'Consulta Virtual Global',
        englishNote: 'English Service (Dr. Ortiz)',
        terms: 'Términos y Condiciones',
        privacy: 'Privacidad'
      },
      rights: 'Todos los derechos reservados.'
    }
  },
  en: {
    nav: { model: 'Model', programs: 'Programs', team: 'Team', rosario: 'In-person' },
    hero: {
      tag: '360° Holistic Healing',
      title: 'Recover your vitality with an',
      titleAccent: 'integrated model',
      sub: 'Metabolic Medicine & Stress Management. A scientific and human approach to transform your health from the root.',
      ctaPrimary: 'Book Now',
      ctaSecondary: 'View Programs',
      ctaText: 'Don\'t know where to start? →',
      stats: ['Global Virtual', 'In-person Rosario', 'Bilingual (ES / EN)']
    },
    model: {
      title: 'Our Health Model',
      sub: 'We don\'t treat isolated symptoms. We understand health as a dynamic balance between your biology, your nervous system, and your relationships.',
      cards: [
        { title: 'Acupuncture', desc: 'Ancient technique to balance your energy and treat chronic pain, available exclusively at our Rosario clinic.' },
        { title: 'Metabolic Health', desc: 'We optimize your hormones, nutrition, and cellular energy so your body functions at its peak potential.' },
        { title: 'Stress Management', desc: 'We train your nervous system to manage chronic stress and recover the capacity for calm and focus.' },
        { title: 'Healthy Connections', desc: 'We integrate relational health as a fundamental pillar of holistic well-being and longevity.' }
      ],
      integration: {
        title: 'Why is integration key?',
        desc: 'A healthy metabolism cannot be sustained in a body under chronic stress, and mental peace is hard to reach if your biology is inflamed.',
        steps: ['Assessment', 'Plan', 'Follow-up']
      }
    },
    programs: {
      title: 'Choose your path',
      sub: 'Specific options or deep transformation programs.',
      cards: [
        { id: 'metabolica', title: 'Metabolic Wing', lead: 'Dr. Adriana Ortiz', type: 'Functional Health', desc: 'For those seeking hormonal balance, digestive health, or metabolic longevity.', features: ['Functional labs', 'Nutritional protocol', 'ES/EN Support'], cta: 'See more' },
        { id: 'acupuntura', title: 'Acupuncture Wing', lead: 'Dr. Adriana Ortiz + Ariel Reinaudo', type: 'Traditional Medicine', desc: 'Pain treatment and homeostatic rebalancing through ancient techniques. In-person only.', features: ['Rosario-based care', 'Pain management', 'Biological regulation'], cta: 'See more' },
        { id: 'integrado', title: 'Integrated Program', lead: 'Dr. Ortiz + Ariel Reinaudo', type: '360 transformation', desc: 'Our premium program. Total synergy between medicine and stress management.', features: ['Combined approach', 'Biological optimization', 'Stress coaching'], cta: 'Book Integrated' },
        { id: 'estres', title: 'Stress Wing', lead: 'Ariel Reinaudo', type: 'Stress Management', desc: 'For those living with anxiety, burnout, or persistent psychiatrist symptoms.', features: ['Vagal Training', 'Emotional Regulation', 'Spanish Only'], cta: 'See more' }
      ]
    },
    details: {
      metabolica: {
        title: "Virtual Nutritional and Metabolic Medicine Consultation",
        description: "Comprehensive consultation focused on assessing your metabolic and nutritional health from the comfort of your home. Through detailed analysis of symptoms, habits, and biochemical values, you will receive personalized recommendations to optimize your well-being and improve your metabolism.",
        servicesTitle: "Services included in the consultation",
        services: [
          "Evaluation of clinical history, symptoms, and lifestyle habits",
          "Analysis of biochemical values (if available)",
          "Interpretation of key metabolic health indicators",
          "Personalized recommendations to improve evaluated parameters"
        ],
        benefitsTitle: "Benefits of this consultation",
        benefits: [
          "Obtain a detailed analysis of your metabolic status without leaving home",
          "Identify imbalances that may affect your health and energy",
          "Optimize your well-being with nutritional and functional strategies",
          "Receive practical and applicable recommendations for your daily life"
        ],
        investmentTitle: "Investment",
        investment: [
          "$80 first encounter",
          "$50 subsequent encounters, if necessary and while your membership is active.",
          "Includes one month of VIP Membership.",
          "(Inquire for promotional price for residents in Argentina)",
          "Amounts expressed in US Dollars, payable in Dollars or Argentine Pesos at the official dollar rate."
        ],
        cta: "Agendar ahora"
      }
    },
    team: {
      title: 'The Team',
      desc: 'Specialized professionals collaborating constantly to offer you a coherent diagnosis and a unified strategy.',
      quote: 'Our goal is for you to stop being a passive patient and become the architect of your own health.',
      members: [
        { name: 'Dr. Adriana Ortiz', role: 'Functional Medicine (ES/EN)', desc: 'Expert in metabolism and functional health with a global perspective.', cta: 'Book with Dr. →' },
        { name: 'Ariel Reinaudo', role: 'Stress Management (ES)', desc: 'Specialist in nervous system regulation and behavior.', cta: 'Book with Ariel →' }
      ]
    },
    rosario: {
      tag: 'Headquarters',
      title: 'In-person Care in Rosario',
      desc: 'We have a space designed for your well-being in the heart of Rosario, Argentina. We offer a close and human experience for those who prefer direct contact.',
      features: ['Exhaustive evaluation consultations.', 'On-site anthropometric and functional measurements.'],
      cta: 'Book in Rosario'
    },
    routerSection: {
      title: 'Comienza tu proceso',
      desc: 'Utiliza nuestro asistente inteligente para encontrar el turno y profesional que mejor se adapte a tu caso.'
    },
    footer: {
      tagline: '360° Holistic Healing Model. Functional Medicine, Metabolism and Stress Management.',
      explore: 'Explore',
      modality: 'Modality',
      links: {
        model: 'Our Model',
        programs: 'Metabolic Programs',
        team: 'Our Team',
        rosario: 'In-person Rosario',
        virtual: 'Global Virtual Consultation',
        englishNote: 'English Service (Dr. Ortiz)',
        terms: 'Terms and Conditions',
        privacy: 'Privacy'
      },
      rights: 'All rights reserved.'
    }
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  // Usamos una clave para forzar el reinicio del componente BookingRouter
  const [routerResetKey, setRouterResetKey] = useState<number>(0);
  const d = TRANSLATIONS[lang];

  const closeModal = () => setActiveModal(null);

  const handleBookNowFromModal = () => {
    // Cerramos el modal
    closeModal();
    
    // Incrementamos la clave para forzar que el BookingRouter vuelva a su estado inicial
    setRouterResetKey(prev => prev + 1);
    
    // Scroll suave hasta la sección de reservas
    const target = document.getElementById('reservar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout currentLang={lang} onLanguageChange={setLang} dict={d}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            {d.hero.tag}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            {d.hero.title} <br className="hidden md:block" /> <span className="text-indigo-600">{d.hero.titleAccent}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            {d.hero.sub}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#reservar" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all hover:shadow-indigo-200">
              {d.hero.ctaPrimary}
            </a>
            <a href="#programas" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">
              {d.hero.ctaSecondary}
            </a>
            <a href="#reservar" className="w-full sm:w-auto px-8 py-4 text-slate-500 font-medium hover:text-indigo-600 transition-colors">
              {d.hero.ctaText}
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-12 text-slate-400 text-sm font-semibold uppercase tracking-widest">
            {d.hero.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">{stat}</div>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRO MODELO */}
      <section id="modelo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{d.model.title}</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {d.model.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {d.model.cards.map((card, i) => (
              <ModelCard key={i} title={card.title} desc={card.desc} />
            ))}
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-10">
             <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">{d.model.integration.title}</h3>
                <p className="text-slate-600">
                  {d.model.integration.desc}
                </p>
             </div>
             <div className="flex gap-4">
                {d.model.integration.steps.map((step, i) => (
                  <div key={i} className="px-6 py-4 bg-white rounded-xl shadow-sm border border-slate-200 text-center">
                    <div className="text-2xl font-bold text-indigo-600">{step}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* DOS ALAS + INTEGRADO */}
      <section id="programas" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{d.programs.title}</h2>
            <p className="text-slate-500">{d.programs.sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {d.programs.cards.map((card, i) => (
              <ProgramCard 
                key={i}
                title={card.title}
                lead={card.lead}
                type={card.type}
                desc={card.desc}
                features={card.features}
                cta={card.cta}
                href={card.id === 'metabolica' ? undefined : "#reservar"}
                onClick={card.id === 'metabolica' ? () => setActiveModal('metabolica') : undefined}
                isFeatured={i === 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS MODAL */}
      {activeModal === 'metabolica' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{d.details.metabolica.title}</h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-10 overflow-y-auto">
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                {d.details.metabolica.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.metabolica.servicesTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.metabolica.services.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.metabolica.benefitsTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.metabolica.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">{d.details.metabolica.investmentTitle}</h4>
                <div className="space-y-3">
                  {d.details.metabolica.investment.map((line, i) => {
                    const isNote = line.includes('(') || line.includes('Importes');
                    return (
                      <p key={i} className={`${isNote ? 'text-xs text-slate-400' : 'text-slate-700 font-medium'}`}>
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className="mt-12 mb-6 flex justify-center">
                <button 
                  onClick={handleBookNowFromModal} 
                  className="px-12 py-4 bg-[#5145E5] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4338ca] transition-all transform hover:scale-[1.02]"
                >
                  {d.details.metabolica.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EQUIPO */}
      <section id="equipo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{d.team.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {d.team.desc}
              </p>
              <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-sm font-medium text-indigo-900 italic">
                  "{d.team.quote}"
                </p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {d.team.members.map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
                    <img src={`https://picsum.photos/seed/doctor${i+1}/800/1000`} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.desc}</p>
                  <a href="#reservar" className="text-slate-900 font-bold text-sm hover:underline">{member.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRESENCIAL ROSARIO */}
      <section id="rosario" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
             <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4 block">{d.rosario.tag}</span>
             <h2 className="text-4xl font-bold mb-8">{d.rosario.title}</h2>
             <p className="text-slate-400 text-lg leading-relaxed mb-10">
               {d.rosario.desc}
             </p>
             <div className="space-y-6">
                {d.rosario.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-indigo-400 text-xs font-bold">{i+1}</span>
                    </div>
                    <p className="text-slate-300">{feature}</p>
                  </div>
                ))}
             </div>
             <a href="#reservar" className="inline-block mt-12 px-10 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all">{d.rosario.cta}</a>
          </div>
          <div className="flex-1 w-full h-80 md:h-[500px] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/seed/rosario/1200/800" alt="Consultorio Rosario" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>
      </section>

      {/* BOOKING ROUTER (SECTION) */}
      <section id="reservar" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-4xl font-bold text-slate-900 mb-6">{d.routerSection.title}</h2>
             <p className="text-slate-600">
               {d.routerSection.desc}
             </p>
          </div>
          
          <BookingRouter 
            initialLang={lang} 
            key={`booking-router-${routerResetKey}`}
          />
        </div>
      </section>
    </Layout>
  );
};

const ModelCard: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
  <div className="p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all hover:shadow-lg hover:shadow-indigo-50/50">
    <div className="w-12 h-12 bg-indigo-50 rounded-xl mb-6 flex items-center justify-center">
      <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-800">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

const ProgramCard: React.FC<{ 
  title: string, 
  lead: string, 
  type: string, 
  desc: string, 
  features: string[], 
  cta: string, 
  href?: string,
  onClick?: () => void,
  isFeatured?: boolean 
}> = ({ title, lead, type, desc, features, cta, href, onClick, isFeatured }) => {
  const ButtonContent = () => (
    <div className={`w-full py-4 rounded-xl text-center font-bold transition-all ${
      isFeatured 
      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-900/40' 
      : 'bg-slate-900 text-white hover:bg-indigo-600 shadow-sm'
    }`}>
      {cta}
    </div>
  );

  return (
    <div className={`p-8 rounded-3xl flex flex-col h-full border transition-all ${
      isFeatured 
      ? 'bg-slate-900 text-white border-slate-800 shadow-2xl shadow-indigo-200/20 scale-105 z-10' 
      : 'bg-white text-slate-900 border-slate-200 hover:border-indigo-300'
    }`}>
      <div className="mb-6">
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-4 inline-block ${isFeatured ? 'bg-indigo-600' : 'bg-slate-100 text-slate-500'}`}>{type}</span>
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className={`text-sm ${isFeatured ? 'text-indigo-400' : 'text-slate-500'}`}>{lead}</p>
      </div>
      <p className={`text-sm mb-8 flex-grow leading-relaxed ${isFeatured ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span className={`w-1 h-1 rounded-full ${isFeatured ? 'bg-indigo-500' : 'bg-indigo-300'}`}></span>
            {f}
          </li>
        ))}
      </ul>
      {href ? (
        <a href={href}><ButtonContent /></a>
      ) : (
        <button onClick={onClick}><ButtonContent /></button>
      )}
    </div>
  );
};

export default App;
