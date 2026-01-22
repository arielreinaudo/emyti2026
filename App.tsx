
import React, { useState } from 'react';
import Layout from './components/Layout';
import BookingRouter from './components/BookingRouter';
import { Language } from './types';

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
        { title: 'Ala Metabólica', lead: 'Dra. Adriana Ortiz', type: 'Salud Funcional', desc: 'Para quienes buscan balance hormonal, salud digestiva o longevidad metabólica.', features: ['Laboratorios funcionales', 'Protocolo nutricional', 'Soporte ES/EN'], cta: 'Ver más' },
        { title: 'Ala de Acupuntura', lead: 'Dra. Adriana Ortiz + Ariel Reinaudo', type: 'Medicina Tradicional', desc: 'Tratamiento del dolor y reequilibrio homeostático mediante técnicas milenarias. Solo presencial.', features: ['Atención en Rosario', 'Manejo del dolor', 'Regulación biológica'], cta: 'Ver más' },
        { title: 'Programa Integrado', lead: 'Dra. Ortiz + Ariel Reinaudo', type: 'Transformación 360', desc: 'Nuestro programa premium. La sinergia total entre medicina y manejo de estrés.', features: ['Enfoque combinado', 'Optimización biológica', 'Coaching de estrés'], cta: 'Agendar Integrado' },
        { title: 'Ala de Estrés', lead: 'Ariel Reinaudo', type: 'Manejo de Estrés', desc: 'Para quienes conviven con ansiedad, burnout o síntomas psicosomáticos persistentes.', features: ['Entrenamiento Vagal', 'Regulación Emocional', 'Solo Español'], cta: 'Ver más' }
      ]
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
      modality: 'Modalidad',
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
        { title: 'Metabolic Wing', lead: 'Dr. Adriana Ortiz', type: 'Functional Health', desc: 'For those seeking hormonal balance, digestive health, or metabolic longevity.', features: ['Functional labs', 'Nutritional protocol', 'ES/EN Support'], cta: 'See more' },
        { title: 'Acupuncture Wing', lead: 'Dr. Adriana Ortiz + Ariel Reinaudo', type: 'Traditional Medicine', desc: 'Pain treatment and homeostatic rebalancing through ancient techniques. In-person only.', features: ['Rosario-based care', 'Pain management', 'Biological regulation'], cta: 'See more' },
        { title: 'Integrated Program', lead: 'Dr. Ortiz + Ariel Reinaudo', type: '360 transformation', desc: 'Our premium program. Total synergy between medicine and stress management.', features: ['Combined approach', 'Biological optimization', 'Stress coaching'], cta: 'Book Integrated' },
        { title: 'Stress Wing', lead: 'Ariel Reinaudo', type: 'Stress Management', desc: 'For those living with anxiety, burnout, or persistent psychiatrist symptoms.', features: ['Vagal Training', 'Emotional Regulation', 'Spanish Only'], cta: 'See more' }
      ]
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
      title: 'Start your process',
      desc: 'Use our smart assistant to find the appointment and professional that best fits your case.'
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
  const d = TRANSLATIONS[lang];

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
                href="#reservar"
                isFeatured={i === 2}
              />
            ))}
          </div>
        </div>
      </section>

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
          
          <BookingRouter initialLang={lang} />
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
  href: string,
  isFeatured?: boolean 
}> = ({ title, lead, type, desc, features, cta, href, isFeatured }) => (
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
    <a href={href} className={`w-full py-4 rounded-xl text-center font-bold transition-all ${
      isFeatured 
      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-900/40' 
      : 'bg-slate-900 text-white hover:bg-indigo-600 shadow-sm'
    }`}>
      {cta}
    </a>
  </div>
);

export default App;
