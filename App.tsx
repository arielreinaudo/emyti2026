
import React, { useState } from 'react';
import Layout from './components/Layout';
import BookingRouter from './components/BookingRouter';
import { Language, BookingState, Modality } from './types';

const TRANSLATIONS = {
  es: {
    nav: { model: 'Modelo', programs: 'Programas', team: 'Equipo', rosario: 'Presencial' },
    hero: {
      tag: '360° Holistic Healing',
      title: 'En EMYTI volvés a sentirte bien',
      titleAccent: 'en tu propio cuerpo',
      sub: 'Te acompañamos con Coaching en Medicina Funcional y Metabólica, trabajando metabolismo y estrés para lograr cambios sostenibles.',
      ctaPrimary: 'Reservar Ahora',
      ctaSecondary: 'Ver Consultas',
      ctaText: 'No sé por dónde empezar →',
      stats: ['Virtual Global', 'Presencial Rosario', 'Bilingüe (ES / EN)']
    },
    model: {
      title: 'Nuestro Modelo de Salud',
      sub: 'Acompañamos tu salud de manera integral, entendiendo el bienestar como un equilibrio dinámico entre tu biología, tu sistema nervioso y tu entorno. Por eso trabajamos sobre las causas que sostienen el problema: cómo funciona tu metabolismo, cómo estás regulando el estrés en el cuerpo y qué hábitos y relaciones están influyendo en tu día a día. Cuando estos tres ejes se alinean, el cuerpo recupera estabilidad, mejora la energía, el sueño y la claridad mental, y se vuelve más fácil sostener cambios reales en el tiempo. Nuestro objetivo es acompañarte con un plan claro y medible, integrando ciencia, hábitos y seguimiento, para que tu bienestar sea consistente y no dependa de “fuerza de voluntad” momentánea.',
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
        { id: 'metabolica', title: 'Medicina Nutricional y Metabólica', lead: 'Dra. Adriana Ortiz', type: 'Salud Funcional', desc: 'Para quienes buscan balance hormonal, salud digestiva o longevidad metabólica.', features: ['Laboratorios funcionales', 'Protocolo nutricional', 'Atención virtual en Español o Ingles'], cta: 'Ver más' },
        { id: 'evaluacion_metabolica', title: 'Evaluación Nutricional y Metabólica', lead: 'Dra. Adriana Ortiz + Ariel Reinaudo', type: 'Salud Integral', desc: 'Evaluación personalizada de parámetros metabólicos y composición corporal', features: ['Atención en Rosario', 'Composición corporal', 'Vitaminas y Minerales'], cta: 'Ver más' },
        { id: 'acupuntura', title: 'Evaluación Energética y Acupuntura', lead: 'Dra. Adriana Ortiz + Ariel Reinaudo', type: 'Acupuntura', desc: 'Tratamiento del dolor y reequilibrio homeostático mediante técnicas milenarias.', features: ['Atención en Rosario', 'Manejo del dolor', 'Regulación biológica'], cta: 'Ver más' },
        { id: 'estres', title: 'Evaluación y Entrenamiento para Control del Estrés', lead: 'Ariel Reinaudo', type: 'Manejo de Estrés', desc: 'Para quienes conviven con ansiedad, burnout o síntomas psicosomáticos persistentes.', features: ['Atención en Rosario', 'Entrenamiento Vagal', 'Regulación Emocional', 'Solo Español'], cta: 'Ver más' }
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
          "$50 encuentros posteriores y mientras tu membresía esté activa.",
          "Incluye un mes de la Membresía V.I.P.",
          "(Consulta por precio promocional para quienes viven en Argentina)",
          "Importes expresados en Dólares Americanos, pagaderos en Dólares o Pesos Argentinos al precio del dólar oficial compra."
        ],
        cta: "Agendar ahora"
      },
      evaluacion_metabolica: {
        title: "Consulta de Medicina Nutricional y Metabólica (Presencial)",
        description: "Consulta integral basada en la evaluación personalizada de parámetros metabólicos y composición corporal. Mediciones corporales y de Vitaminas y Minerales, junto con un análisis funcional detallado, te permitirán obtener recomendaciones personalizadas para optimizar tu salud y mejorar tu metabolismo.",
        servicesTitle: "Servicios incluidos en la consulta",
        services: [
          "Medición de composición corporal",
          "Evaluación de niveles de Vitaminas y Minerales (EAV)",
          "Interpretación de valores clave en salud metabólica",
          "Recomendaciones personalizadas"
        ],
        benefitsTitle: "Beneficios de esta consulta",
        benefits: [
          "Conoce el estado real de tu composición corporal",
          "Identifica desequilibrios que afectan tu salud",
          "Optimiza tu salud con evaluación funcional",
          "Recibe indicaciones prácticas para salud óptima"
        ],
        investmentTitle: "Inversión",
        investment: [
          "$80 USD",
          "Si sos miembro activo, tenés 30% de descuento.",
          "Importes expresados en Dólares Americanos, pagaderos en Dólares o Pesos Argentinos al precio del dólar oficial compra."
        ],
        cta: "Agendar ahora"
      },
      acupuntura: {
        title: "Evaluación Energética y Acupuntura (Presencial)",
        description: "Tratamiento integral del dolor y reequilibrio homeostático mediante técnicas milenarias de la Medicina Tradicional China. Un enfoque natural para regular las funciones biológicas y recuperar el bienestar físico y emocional.",
        servicesTitle: "Servicios incluidos en la consulta",
        services: [
          "Evaluación energética completa",
          "Sesión de Acupuntura personalizada",
          "Manejo del dolor crónico y agudo",
          "Regulación del sistema homeostático"
        ],
        benefitsTitle: "Beneficios de esta consulta",
        benefits: [
          "Alivio efectivo del dolor",
          "Reducción del estrés y la ansiedad",
          "Mejora en la calidad del sueño",
          "Equilibrio de las funciones vitales"
        ],
        investmentTitle: "Inversión",
        investment: [
          "$80 USD",
          "Si sos miembro activo, tenés 30% de descuento.",
          "Importes expresados en Dólares Americanos, pagaderos en Dólares o Pesos Argentinos al precio del dólar oficial compra."
        ],
        cta: "Agendar ahora"
      },
      estres: {
        title: "Entrenamiento en Coherencia Cardíaca y Regulación del Estrés",
        description: "Sesión integral basada en la evaluación personalizada de la variabilidad de la frecuencia cardíaca (VFC) y la respuesta del sistema nervioso al estrés. A través del biofeedback, determinaremos tu ritmo respiratorio óptimo y te enseñaremos una técnica efectiva para mejorar tu bienestar sin necesidad de dispositivos costosos.",
        servicesTitle: "Servicios incluidos en la consulta",
        services: [
          "Medición de variabilidad de la frecuencia cardíaca (VFC) y resistencia galvánica de la piel (GSR) con biofeedback",
          "Identificación de tu ritmo respiratorio óptimo para inducir coherencia cardíaca",
          "Entrenamiento personalizado en técnica de respiración guiada",
          "Protocolo de práctica en casa con una app gratuita de metrónomo"
        ],
        benefitsTitle: "Beneficios de esta consulta",
        benefits: [
          "Reduce el estrés y la ansiedad en minutos",
          "Mejora la calidad del sueño y la recuperación fisiológica",
          "Aumenta la claridad mental y la toma de decisiones",
          "Fortalece el equilibrio del sistema nervioso y la resiliencia emocional"
        ],
        investmentTitle: "Inversión",
        investment: [
          "$60 USD",
          "Si sos miembro activo, tenés 30% de descuento.",
          "Importes expresados en Dólares Americanos, pagaderos en Dólares o Pesos Argentinos al precio del dólar oficial compra."
        ],
        cta: "Agendar ahora"
      }
    },
    team: {
      title: 'El Equipo',
      desc: 'Profesionales especializados que colaboran de manera constante para ofrecerte un diagnóstico coherente y una estrategia unificada.',
      quote: 'Nuestro objetivo es que dejes de ser un paciente pasivo para convertirte en el arquitecto de tu propia salud.',
      members: [
        { 
          id: 'adriana',
          name: 'Dra. Adriana Ortiz', 
          role: 'Functional Medicine (ES/EN)', 
          desc: 'Experta en metabolismo y salud funcional con mirada global. Mat. Medica 6075 (Arg)', 
          cta: 'Conoce más de mí',
          image: 'https://www.dropbox.com/scl/fi/otjqcs6zsn2xlek2pxnn0/Adriana-circle.png?rlkey=9nelpp0neu1ihmqdic4cwme3x&raw=1'
        },
        { 
          id: 'ariel',
          name: 'Ariel Reinaudo', 
          role: 'Stress Management (ES)', 
          desc: 'Especialista en regulación del sistema nervioso y conducta.', 
          cta: 'Conoce más de mí',
          image: 'https://www.dropbox.com/scl/fi/urm1fbnflxg4o89178k3r/Iconos-landing-visualmedita.png?rlkey=rxura802yl8l7gyns15e5njz7&raw=1'
        }
      ],
      details: {
        adriana: {
          title: 'Dra. Adriana Ortiz, MD (Argentina)',
          subtitle: 'RMA, Medical Assistant y CNH, Nutrition & Health Coach',
          bio: [
            'Adriana ejerció la Medicina Convencional por 12 años en Argentina como Médica General.',
            'Obtuvo un Postgrado en Medicina Tradicional China (MTC) y Homeopatía en la Universidad Nacional de Rosario.',
            'Especialista en PsicoNeuroAcupuntura.',
            'Postgrado en Nutrición y Trastornos Metabólicos en Argentina.'
          ],
          usaLicences: [
            'CRCC (Clinical Research Coordinator Certificated)',
            'RMA (Registered Medical Assistant)',
            'NHC (Nutrition and Health Coach)'
          ]
        },
        ariel: {
          title: 'Ariel Reinaudo',
          bio: [
            'Profesor de Yoga Terapéutico.',
            'Practitioner en Programación Neurolingüística (PNL).',
            'Facilitador en Técnicas de Variabilidad de la Frecuencia Cardíaca (VFC) y Coherencia Cardíaca.',
            'Autor del libro "Modelo de Supraconsciencia Microbiana" (2025).',
            'Facilitador en Técnicas con Eneagrama.'
          ]
        }
      }
    },
    rosario: {
      tag: 'Sede Central',
      title: 'Atención Presencial en Rosario',
      desc: 'Contamos con un espacio diseñado para tu bienestar en el corazón de Rosario, Argentina. Ofrecemos una experiencia cercana y humana para quienes prefieren el contacto directo.',
      features: ['Consultas de evaluación exhaustiva.', 'Mediciones antropométricas y funcionales en sitio.'],
      cta: 'Agendar en Rosario',
      image: 'https://www.dropbox.com/scl/fi/560vp920ntxlc15fsz4js/rosario-web.jpg?rlkey=8p8ulhxtokz7plms37ddj7ua9&raw=1'
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
      title: 'At EMYTI, you feel good again',
      titleAccent: 'in your own body',
      sub: 'We accompany you with Functional and Metabolic Medicine Coaching, working on metabolism and stress to achieve sustainable changes.',
      ctaPrimary: 'Book Now',
      ctaSecondary: 'View Consultations',
      ctaText: 'Don\'t know where to start? →',
      stats: ['Global Virtual', 'In-person Rosario', 'Bilingual (ES / EN)']
    },
    model: {
      title: 'Our Health Model',
      sub: 'We accompany your health in a holistic way, understanding well-being as a dynamic balance between your biology, your nervous system, and your environment. That is why we work on the root causes: how your metabolism functions, how you regulate stress in your body, and which habits and relationships are influencing your daily life. When these three axes align, the body regains stability, energy improves, sleep and mental clarity are restored, and it becomes easier to sustain real changes over time. Our goal is to accompany you with a clear and measurable plan, integrating science, habits, and follow-up, so that your well-being is consistent and does not depend on momentary "willpower".',
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
        { id: 'metabolica', title: 'Nutritional and Metabolic Medicine', lead: 'Dr. Adriana Ortiz', type: 'Functional Health', desc: 'For those seeking hormonal balance, digestive health, or metabolic longevity.', features: ['Functional labs', 'Nutritional protocol', 'Virtual care in Spanish or English'], cta: 'See more' },
        { id: 'evaluacion_metabolica', title: 'Nutritional and Metabolic Evaluation', lead: 'Dr. Adriana Ortiz + Ariel Reinaudo', type: 'Holistic Health', desc: 'Personalized assessment of metabolic parameters and body composition', features: ['Care in Rosario', 'Body composition', 'Vitamins and Minerals'], cta: 'See more' },
        { id: 'acupuntura', title: 'Energy Evaluation and Acupuncture', lead: 'Dr. Adriana Ortiz + Ariel Reinaudo', type: 'Acupuncture', desc: 'Pain treatment and homeostatic rebalancing through ancient techniques.', features: ['Care in Rosario', 'Pain management', 'Biological regulation'], cta: 'See more' },
        { id: 'estres', title: 'Stress Control Evaluation and Training', lead: 'Ariel Reinaudo', type: 'Stress Management', desc: 'For those living with anxiety, burnout, or persistent psychiatrist symptoms.', features: ['Care in Rosario', 'Vagal Training', 'Emotional Regulation', 'Spanish Only'], cta: 'See more' }
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
          "$50 subsequent encounters and while your membership is active.",
          "Includes one month of VIP Membership.",
          "(Inquire for promotional price for residents in Argentina)",
          "Amounts expressed in US Dollars, payable in Dollars or Argentine Pesos at the official dollar rate."
        ],
        cta: "Book now"
      },
      evaluacion_metabolica: {
        title: "Nutritional and Metabolic Medicine Consultation (In-person)",
        description: "Comprehensive consultation based on personalized assessment of metabolic parameters and body composition. Body measurements and Vitamin and Mineral levels, along with a detailed functional analysis, will allow you to obtain personalized recommendations to optimize your health and improve your metabolism.",
        servicesTitle: "Services included in the consultation",
        services: [
          "Body composition measurement",
          "Vitamin and Mineral level assessment (EAV)",
          "Interpretation of key metabolic health indicators",
          "Personalized recommendations"
        ],
        benefitsTitle: "Benefits of this consultation",
        benefits: [
          "Know the real state of your body composition",
          "Identify imbalances affecting your health",
          "Optimize your health with functional assessment",
          "Receive practical indications for optimal health"
        ],
        investmentTitle: "Investment",
        investment: [
          "$80 USD",
          "If you are an active member, you get a 30% discount.",
          "Amounts expressed in US Dollars, payable in Dollars or Argentine Pesos at the official dollar rate."
        ],
        cta: "Book now"
      },
      acupuntura: {
        title: "Acupuncture and Energy Assessment (In-person)",
        description: "Comprehensive pain treatment and homeostatic rebalancing through ancient Traditional Chinese Medicine techniques. A natural approach to regulate biological functions and recover physical and emotional well-being.",
        servicesTitle: "Services included in the consultation",
        services: [
          "Complete energy assessment",
          "Personalized Acupuncture session",
          "Chronic and acute pain management",
          "Homeostatic system regulation"
        ],
        benefitsTitle: "Benefits of this consultation",
        benefits: [
          "Effective pain relief",
          "Reduction of stress and anxiety",
          "Improvement in sleep quality",
          "Balance of vital functions"
        ],
        investmentTitle: "Investment",
        investment: [
          "$80 USD",
          "If you are an active member, you get a 30% discount.",
          "Amounts expressed in US Dollars, payable in Dollars or Argentine Pesos at the official dollar rate."
        ],
        cta: "Book now"
      },
      estres: {
        title: "Heart Coherence Training and Stress Regulation",
        description: "Comprehensive session based on personalized assessment of heart rate variability (HRV) and the nervous system's response to stress. Through biofeedback, we will determine your optimal breathing rhythm and teach you an effective technique to improve your well-being without the need for expensive devices.",
        servicesTitle: "Services included in the consultation",
        services: [
          "Measurement of heart rate variability (HRV) and galvanic skin resistance (GSR) with biofeedback",
          "Identification of your optimal breathing rhythm to induce heart coherence",
          "Personalized training in guided breathing technique",
          "Home practice protocol with a free metronome app"
        ],
        benefitsTitle: "Benefits of this consultation",
        benefits: [
          "Reduces stress and anxiety in minutes",
          "Improves sleep quality and physiological recovery",
          "Increases mental clarity and decision making",
          "Strengthens nervous system balance and emotional resilience"
        ],
        investmentTitle: "Investment",
        investment: [
          "$60 USD",
          "If you are an active member, you get a 30% discount.",
          "Amounts expressed in US Dollars, payable in Dollars or Argentine Pesos at the official dollar rate."
        ],
        cta: "Book now"
      }
    },
    team: {
      title: 'The Team',
      desc: 'Specialized professionals collaborating constantly to offer you a coherent diagnosis and a unified strategy.',
      quote: 'Our goal is for you to stop being a passive patient and become the architect of your own health.',
      members: [
        { 
          id: 'adriana',
          name: 'Dr. Adriana Ortiz', 
          role: 'Functional Medicine (ES/EN)', 
          desc: 'Expert in metabolism and functional health with a global perspective. Mat. Medica 6075 (Arg)', 
          cta: 'Learn more about me',
          image: 'https://www.dropbox.com/scl/fi/otjqcs6zsn2xlek2pxnn0/Adriana-circle.png?rlkey=9nelpp0neu1ihmqdic4cwme3x&raw=1'
        },
        { 
          id: 'ariel',
          name: 'Ariel Reinaudo', 
          role: 'Stress Management (ES)', 
          desc: 'Specialist in nervous system regulation and behavior.', 
          cta: 'Learn more about me',
          image: 'https://www.dropbox.com/scl/fi/urm1fbnflxg4o89178k3r/Iconos-landing-visualmedita.png?rlkey=rxura802yl8l7gyns15e5njz7&raw=1'
        }
      ],
      details: {
        adriana: {
          title: 'Dr. Adriana Ortiz, MD (Argentina)',
          subtitle: 'RMA, Medical Assistant and CNH, Nutrition & Health Coach',
          bio: [
            'Adriana practiced Conventional Medicine for 12 years in Argentina as a General Practitioner.',
            'Obtained a Postgraduate degree in Traditional Chinese Medicine (TCM) and Homeopathy at the National University of Rosario.',
            'Specialist in PsychoNeuroAcupuncture.',
            'Postgraduate in Nutrition and Metabolic Disorders in Argentina.'
          ],
          usaLicences: [
            'CRCC (Clinical Research Coordinator Certificated)',
            'RMA (Registered Medical Assistant)',
            'NHC (Nutrition and Health Coach)'
          ]
        },
        ariel: {
          title: 'Ariel Reinaudo',
          bio: [
            'Therapeutic Yoga Professor.',
            'Neuro-Linguistic Programming (NLP) Practitioner.',
            'Facilitator in HRV (Heart Rate Variability) and Heart Coherence techniques.',
            'Author of the book "Microbial Supraconsciousness Model" (2025).',
            'Facilitator in Enneagram techniques.'
          ]
        }
      }
    },
    rosario: {
      tag: 'Headquarters',
      title: 'In-person Care in Rosario',
      desc: 'We have a space designed for your well-being in the heart of Rosario, Argentina. We offer a close and human experience for those who prefer direct contact.',
      features: ['Exhaustive evaluation consultations.', 'On-site anthropometric and functional measurements.'],
      cta: 'Book in Rosario',
      image: 'https://www.dropbox.com/scl/fi/560vp920ntxlc15fsz4js/rosario-web.jpg?rlkey=8p8ulhxtokz7plms37ddj7ua9&raw=1'
    },
    routerSection: {
      title: 'Start your process',
      desc: 'Use our smart assistant to find the appointment and professional that best suits your case.'
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
  const [routerResetKey, setRouterResetKey] = useState<number>(0);
  const [initialBookingState, setInitialBookingState] = useState<Partial<BookingState>>({});
  const d = TRANSLATIONS[lang];

  const closeModal = () => setActiveModal(null);

  const handleBookNowFromModal = (modality: Modality = 'virtual') => {
    closeModal();
    setInitialBookingState({ modality });
    setRouterResetKey(prev => prev + 1);
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
            <button 
              onClick={() => {
                setInitialBookingState({});
                setRouterResetKey(prev => prev + 1);
                document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all hover:shadow-indigo-200"
            >
              {d.hero.ctaPrimary}
            </button>
            <a href="#programas" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all">
              {d.hero.ctaSecondary}
            </a>
            <button 
              onClick={() => {
                setInitialBookingState({});
                setRouterResetKey(prev => prev + 1);
                document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="w-full sm:w-auto px-8 py-4 text-slate-500 font-medium hover:text-indigo-600 transition-colors"
            >
              {d.hero.ctaText}
            </button>
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
          <div className="mb-20">
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
                id={card.id}
                title={card.title}
                lead={card.lead}
                type={card.type}
                desc={card.desc}
                features={card.features}
                cta={card.cta}
                isFeatured={card.id === 'integrado'}
                isVirtual={card.id === 'metabolica'}
                onAction={() => {
                  if (card.id === 'metabolica') {
                    setActiveModal('metabolica');
                  } else if (card.id === 'evaluacion_metabolica') {
                    setActiveModal('evaluacion_metabolica');
                  } else if (card.id === 'acupuntura') {
                    setActiveModal('acupuntura');
                  } else if (card.id === 'estres') {
                    setActiveModal('estres');
                  } else {
                    setInitialBookingState({});
                    setRouterResetKey(prev => prev + 1);
                    const target = document.getElementById('reservar');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS MODAL */}
      {activeModal === 'metabolica' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{d.details.metabolica.title}</h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-10 overflow-y-auto flex-grow">
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

              <div className="mt-12 mb-6 flex justify-center sticky bottom-0 py-4 bg-white">
                <button 
                  onClick={() => handleBookNowFromModal('virtual')} 
                  className="px-12 py-4 bg-[#5145E5] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4338ca] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {d.details.metabolica.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'evaluacion_metabolica' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{d.details.evaluacion_metabolica.title}</h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-10 overflow-y-auto flex-grow">
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                {d.details.evaluacion_metabolica.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.evaluacion_metabolica.servicesTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.evaluacion_metabolica.services.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.evaluacion_metabolica.benefitsTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.evaluacion_metabolica.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">{d.details.evaluacion_metabolica.investmentTitle}</h4>
                <div className="space-y-3">
                  {d.details.evaluacion_metabolica.investment.map((line, i) => (
                    <p key={i} className="text-slate-700 font-medium">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-12 mb-6 flex justify-center sticky bottom-0 py-4 bg-white">
                <button 
                  onClick={() => handleBookNowFromModal('presencial')} 
                  className="px-12 py-4 bg-[#5145E5] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4338ca] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {d.details.evaluacion_metabolica.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'acupuntura' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{d.details.acupuntura.title}</h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-10 overflow-y-auto flex-grow">
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                {d.details.acupuntura.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.acupuntura.servicesTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.acupuntura.services.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.acupuntura.benefitsTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.acupuntura.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">{d.details.acupuntura.investmentTitle}</h4>
                <div className="space-y-3">
                  {d.details.acupuntura.investment.map((line, i) => (
                    <p key={i} className="text-slate-700 font-medium">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-12 mb-6 flex justify-center sticky bottom-0 py-4 bg-white">
                <button 
                  onClick={() => handleBookNowFromModal('presencial')} 
                  className="px-12 py-4 bg-[#5145E5] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4338ca] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {d.details.acupuntura.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'estres' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{d.details.estres.title}</h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-10 overflow-y-auto flex-grow">
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                {d.details.estres.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.estres.servicesTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.estres.services.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-6">{d.details.estres.benefitsTitle}</h4>
                  <ul className="space-y-4">
                    {d.details.estres.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">{d.details.estres.investmentTitle}</h4>
                <div className="space-y-3">
                  {d.details.estres.investment.map((line, i) => (
                    <p key={i} className="text-slate-700 font-medium">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-12 mb-6 flex justify-center sticky bottom-0 py-4 bg-white">
                <button 
                  onClick={() => handleBookNowFromModal('presencial')} 
                  className="px-12 py-4 bg-[#5145E5] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4338ca] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {d.details.estres.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TEAM MODAL */}
      {(activeModal === 'team_adriana' || activeModal === 'team_ariel') && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-100 sticky top-0 bg-white z-10">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                {activeModal === 'team_adriana' ? d.team.details.adriana.title : d.team.details.ariel.title}
              </h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-10 overflow-y-auto flex-grow">
              {activeModal === 'team_adriana' && (
                <div className="space-y-8">
                  <div>
                    <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-4">
                      {d.team.details.adriana.subtitle}
                    </p>
                    <div className="space-y-4">
                      {d.team.details.adriana.bio.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                          <p className="text-base leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">Licencias en USA</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {d.team.details.adriana.usaLicences.map((lic, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-600">
                          <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium">{lic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'team_ariel' && (
                <div className="space-y-6">
                  {d.team.details.ariel.bio.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                      <p className="text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50">
              <button 
                onClick={closeModal}
                className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
              >
                Cerrar
              </button>
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
                <div key={i} className="group flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="w-64 h-64 aspect-square bg-slate-100 rounded-full overflow-hidden mb-6 relative border-4 border-white shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 text-sm font-semibold mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.desc}</p>
                  <button 
                    onClick={() => {
                      setActiveModal(`team_${member.id}`);
                    }}
                    className="px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-indigo-600 transition-all shadow-sm hover:shadow-md"
                  >
                    {member.cta}
                  </button>
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
             <button 
               onClick={() => {
                 setInitialBookingState({ modality: 'presencial' });
                 setRouterResetKey(prev => prev + 1);
                 document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
               }} 
               className="inline-block mt-12 px-10 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all"
             >
               {d.rosario.cta}
             </button>
          </div>
          <div className="flex-1 w-full h-80 md:h-[500px] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
             <img src={d.rosario.image} alt="Consultorio Rosario" className="w-full h-full object-cover opacity-60" />
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
            initialState={initialBookingState}
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

interface ProgramCardProps {
  id: string;
  title: string;
  lead: string;
  type: string;
  desc: string;
  features: string[];
  cta: string;
  onAction: () => void;
  isFeatured?: boolean;
  isVirtual?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ id, title, lead, type, desc, features, cta, onAction, isFeatured, isVirtual }) => {
  let cardStyles = 'bg-white text-slate-900 border-slate-200 hover:border-indigo-300';
  let badgeStyles = 'bg-slate-100 text-slate-500';
  let leadStyles = 'text-slate-500';
  let descStyles = 'text-slate-600';
  let dotStyles = 'bg-indigo-300';
  let btnStyles = 'bg-slate-900 text-white hover:bg-indigo-600 shadow-sm';

  if (isFeatured) {
    cardStyles = 'bg-slate-900 text-white border-slate-800 shadow-2xl shadow-indigo-200/20 scale-105 z-10';
    badgeStyles = 'bg-indigo-600 text-white';
    leadStyles = 'text-indigo-400';
    descStyles = 'text-slate-400';
    dotStyles = 'bg-indigo-500';
    btnStyles = 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-900/40';
  } else if (isVirtual) {
    cardStyles = 'bg-sky-50 text-slate-900 border-sky-200 hover:border-sky-400 shadow-sm';
    badgeStyles = 'bg-blue-600 text-white';
    leadStyles = 'text-blue-700';
    descStyles = 'text-slate-600';
    dotStyles = 'bg-blue-500';
    btnStyles = 'bg-blue-600 text-white hover:bg-blue-700 shadow-md';
  }

  return (
    <div className={`p-8 rounded-3xl flex flex-col h-full border transition-all ${cardStyles}`}>
      {/* Header Section: Badge + Title + Lead */}
      <div className="mb-4 min-h-[190px]">
        <div className="mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded inline-block ${badgeStyles}`}>{type}</span>
        </div>
        <h3 className="text-2xl font-bold mb-1 leading-tight">{title}</h3>
        <p className={`text-sm ${leadStyles}`}>{lead}</p>
      </div>

      {/* Description Section */}
      <div className="mb-6 min-h-[80px]">
        <p className={`text-sm leading-relaxed ${descStyles}`}>{desc}</p>
      </div>

      {/* Features Section */}
      <div className="flex-grow mb-8 min-h-[160px]">
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${dotStyles}`}></span>
              <span className="leading-tight">
                {f.split(/(Atención virtual|Atención en Rosario|Virtual care|Care in Rosario)/i).map((part, j) => {
                  const lowerPart = part.toLowerCase();
                  if (
                    lowerPart === 'atención virtual' || 
                    lowerPart === 'atención en rosario' || 
                    lowerPart === 'virtual care' || 
                    lowerPart === 'care in rosario'
                  ) {
                    return <span key={j} className="font-bold text-blue-600">{part}</span>;
                  }
                  return part;
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button 
        type="button"
        onClick={onAction}
        className={`w-full py-4 rounded-xl text-center font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] ${btnStyles}`}
      >
        {cta}
      </button>
    </div>
  );
};

export default App;
