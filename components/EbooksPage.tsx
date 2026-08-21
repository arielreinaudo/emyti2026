import React from 'react';
import { EbookItem, Language } from '../types';
import { EbookCover } from './EbookCover';
import { BookOpen, ExternalLink, ArrowLeft, Download, CheckCircle2, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface EbooksPageProps {
  lang: Language;
  onNavigateHome: () => void;
  onBookConsultation: () => void;
}

export const EbooksPage: React.FC<EbooksPageProps> = ({
  lang,
  onNavigateHome,
  onBookConsultation
}) => {
  const isEs = lang === 'es';

  const ebooksData: EbookItem[] = isEs
    ? [
        {
          id: 'meditacion_cotidiana',
          title: 'Meditación Cotidiana',
          subtitle: 'Guía práctica para incorporar la meditación como un hábito diario accesible y transformador',
          authors: 'DRA. ADRIANA ORTIZ',
          badge: 'MEDITACIÓN Y MINDFULNESS',
          coverImage: 'https://www.dropbox.com/scl/fi/xckuhbvwp2dnxo7os7ei1/ebook-meditaciones.png?rlkey=0ybueydyg1ei099ebctupl9ak&raw=1',
          pages: 'Formato PDF • 30 páginas',
          pdfUrl: 'https://drive.google.com/file/d/1MJgI363zpA8vrK5yyTKyL7J5vGuxN15J/view?usp=sharing',
          synopsis: 'Una guía práctica diseñada para incorporar la meditación como un hábito diario accesible y transformador en medio de la vida moderna. Aprende técnicas sencillas de atención plena, respiración consciente, visualización y movimiento para calmar la mente, disolver el estrés y cultivar un espacio de paz interior en cualquier momento de tu jornada.',
          keyTopics: [
            'Principios de mindfulness para mantenerte presente en el aquí y el ahora sin juicios.',
            'Técnicas de respiración consciente para regular el sistema nervioso y reducir la ansiedad.',
            'Prácticas de visualización creativa y meditación de bondad amorosa (Metta) para cultivar enfoque y compasión.',
            'Claves para integrar la meditación en actividades cotidianas y superar los obstáculos de la práctica regular.'
          ],
          theme: {
            accentColor: '#6366f1',
            bgGradient: 'linear-gradient(145deg, #eef2f7 0%, #e0e7f1 100%)',
            badgeBg: 'bg-indigo-50 border-indigo-100 text-indigo-700',
            badgeText: 'text-indigo-700',
            polyhedronColors: {
              facet1: '#8b5cf6',
              facet2: '#a855f7',
              facet3: '#ec4899',
              facet4: '#f97316',
              facet5: '#6366f1',
              facet6: '#d946ef'
            }
          }
        },
        {
          id: 'conexion_intestino_cerebro',
          title: 'Intestino-Cerebro',
          subtitle: 'Guía integrativa de comunicación bidireccional entre sistema digestivo y cerebro',
          authors: 'DRA. ADRIANA ORTIZ',
          badge: 'SALUD DIGESTIVA',
          coverImage: 'https://www.dropbox.com/scl/fi/imsgsa9g4l94a50bghjxu/ebook-intestino-cerebro.png?rlkey=pa602y56qz3576udsjgk9akpn&raw=1',
          pages: 'Formato PDF • 16 páginas',
          pdfUrl: 'https://drive.google.com/file/d/1sG9AjjTNn14gOrcHzytiuW7XgoEYTsSi/view?usp=sharing',
          synopsis: 'Una guía integrativa para comprender la comunicación bidireccional entre el sistema digestivo y el cerebro. Descubre cómo la microbiota, la inflamación y la alimentación impactan directamente en tu estado de ánimo, niveles de estrés y salud mental, junto con herramientas naturales para restaurar tu equilibrio emocional y digestivo.',
          keyTopics: [
            'Fundamentos biológicos y neuronales del eje intestino-cerebro y el sistema nervioso entérico.',
            'El rol de la microbiota en la producción de neurotransmisores clave como la serotonina.',
            'Impacto del estrés y la inflamación crónica en la permeabilidad intestinal y el estado de ánimo.',
            'Estrategias nutricionales, hierbas adaptógenas y hábitos prácticos para optimizar la salud intestinal y emocional.'
          ],
          theme: {
            accentColor: '#0284c7',
            bgGradient: 'linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 100%)',
            badgeBg: 'bg-sky-50 border-sky-100 text-sky-700',
            badgeText: 'text-sky-700',
            polyhedronColors: {
              facet1: '#0284c7',
              facet2: '#06b6d4',
              facet3: '#3b82f6',
              facet4: '#0ea5e9',
              facet5: '#14b8a6',
              facet6: '#2563eb'
            }
          }
        },
        {
          id: 'picos_de_glucosa',
          title: 'Los Picos de Glucosa: El Gran Enemigo Silencioso',
          subtitle: 'Guía completa para entender y regular las fluctuaciones de glucosa e insulina en el organismo',
          authors: 'DRA. ADRIANA ORTIZ',
          badge: 'SALUD METABÓLICA Y NUTRICIÓN',
          coverImage: 'https://www.dropbox.com/scl/fi/ak42hbup60geprj7q428b/ebook-picos-glucosa.png?rlkey=rr9rg6vx85iowvq4j3yax719i&raw=1',
          pages: 'Formato PDF • 25 páginas',
          pdfUrl: 'https://drive.google.com/file/d/189o4YP2c9GplqmqgGFi67DBbLRa8TEeA/view?usp=sharing',
          synopsis: 'Una guía completa para entender y regular las fluctuaciones de glucosa e insulina en el organismo. Aprende a identificar las causas y consecuencias de los picos glucémicos, protegiendo tu salud cardiovascular y metabólica mediante elecciones alimenticias estratégicas, actividad física y hábitos de autocuidado sostenibles.',
          keyTopics: [
            'Mecanismos fisiológicos de la glucosa, la insulina y el desarrollo de resistencia celular.',
            'Consecuencias de la variabilidad glucémica en la energía diaria, cambios de humor y salud a largo plazo.',
            'Estrategias nutricionales y combinación de alimentos para estabilizar los niveles de azúcar en sangre.',
            'Herramientas de monitoreo continuo, manejo del estrés y estilo de vida para una salud metabólica óptima.'
          ],
          theme: {
            accentColor: '#059669',
            bgGradient: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
            badgeBg: 'bg-emerald-50 border-emerald-100 text-emerald-700',
            badgeText: 'text-emerald-700',
            polyhedronColors: {
              facet1: '#10b981',
              facet2: '#059669',
              facet3: '#84cc16',
              facet4: '#14b8a6',
              facet5: '#047857',
              facet6: '#22c55e'
            }
          }
        },
        {
          id: 'sabiduria_estoica',
          title: 'Sabiduría Estoica Para Una Vida Saludable',
          subtitle: 'Una obra práctica que une las enseñanzas del estoicismo clásico con la adopción de hábitos saludables cotidianos',
          authors: 'DRA. ADRIANA ORTIZ Y ARIEL REINAUDO',
          badge: 'FILOSOFÍA PRÁCTICA Y BIENESTAR',
          coverImage: 'https://www.dropbox.com/scl/fi/3lnpxt1nlogzgrwhtx48q/ebook-estoicos.png?rlkey=kcnq4mxtzcn4ulbrbhckctbku&raw=1',
          pages: 'Formato PDF • 35 páginas',
          pdfUrl: 'https://drive.google.com/file/d/1ax4fAJS33J1g39ZhQfcxp1j6E_jXHOEM/view?usp=sharing',
          synopsis: 'Una obra práctica que une las enseñanzas del estoicismo clásico con la adopción de hábitos saludables cotidianos. Descubre cómo aplicar principios milenarios como la dicotomía del control, la ataraxia y el discernimiento para mantener una alimentación balanceada, una rutina constante de ejercicio y una mente serena frente a los desafíos modernos.',
          keyTopics: [
            'La dicotomía del control aplicada a la gestión del estrés, la nutrición y el movimiento físico.',
            'Principios para vivir en armonía con la naturaleza y atender las necesidades reales del cuerpo.',
            'Cultivo de la ataraxia y el discernimiento para tomar decisiones conscientes y deliberadas.',
            'Desarrollo de fortaleza mental ante la adversidad y la práctica transformadora de la gratitud diaria.'
          ],
          theme: {
            accentColor: '#d97706',
            bgGradient: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
            badgeBg: 'bg-amber-50 border-amber-100 text-amber-700',
            badgeText: 'text-amber-700',
            polyhedronColors: {
              facet1: '#f59e0b',
              facet2: '#d97706',
              facet3: '#f97316',
              facet4: '#ea580c',
              facet5: '#fbbf24',
              facet6: '#c2410c'
            }
          }
        }
      ]
    : [
        {
          id: 'meditacion_cotidiana',
          title: 'Everyday Meditation',
          subtitle: 'A practical guide designed to incorporate meditation as an accessible and transformative daily habit',
          authors: 'DRA. ADRIANA ORTIZ',
          badge: 'MEDITATION & MINDFULNESS',
          coverImage: 'https://www.dropbox.com/scl/fi/xckuhbvwp2dnxo7os7ei1/ebook-meditaciones.png?rlkey=0ybueydyg1ei099ebctupl9ak&raw=1',
          pages: 'PDF Format • 30 pages',
          pdfUrl: 'https://drive.google.com/file/d/1MJgI363zpA8vrK5yyTKyL7J5vGuxN15J/view?usp=sharing',
          synopsis: 'A practical guide designed to incorporate meditation as an accessible and transformative daily habit amidst modern life. Learn simple techniques of mindfulness, conscious breathing, visualization, and gentle movement to soothe the mind, dissolve stress, and cultivate an oasis of inner peace at any moment of your day.',
          keyTopics: [
            'Mindfulness principles to stay anchored in the here and now without judgment.',
            'Conscious breathing techniques to regulate the nervous system and relieve anxiety.',
            'Creative visualization practices and loving-kindness meditation (Metta) for focus and compassion.',
            'Key strategies to weave meditation into daily activities and sustain regular practice.'
          ],
          theme: {
            accentColor: '#6366f1',
            bgGradient: 'linear-gradient(145deg, #eef2f7 0%, #e0e7f1 100%)',
            badgeBg: 'bg-indigo-50 border-indigo-100 text-indigo-700',
            badgeText: 'text-indigo-700',
            polyhedronColors: {
              facet1: '#8b5cf6',
              facet2: '#a855f7',
              facet3: '#ec4899',
              facet4: '#f97316',
              facet5: '#6366f1',
              facet6: '#d946ef'
            }
          }
        },
        {
          id: 'conexion_intestino_cerebro',
          title: 'Gut-Brain Connection',
          subtitle: 'An integrative guide to bidirectional communication between the digestive system and brain',
          authors: 'DRA. ADRIANA ORTIZ',
          badge: 'DIGESTIVE HEALTH',
          coverImage: 'https://www.dropbox.com/scl/fi/imsgsa9g4l94a50bghjxu/ebook-intestino-cerebro.png?rlkey=pa602y56qz3576udsjgk9akpn&raw=1',
          pages: 'PDF Format • 16 pages',
          pdfUrl: 'https://drive.google.com/file/d/1sG9AjjTNn14gOrcHzytiuW7XgoEYTsSi/view?usp=sharing',
          synopsis: 'An integrative guide to understanding the bidirectional communication between the digestive system and the brain. Discover how the microbiota, inflammation, and nutrition directly impact your mood, stress levels, and mental health, alongside natural tools to restore your emotional and digestive balance.',
          keyTopics: [
            'Biological and neural foundations of the gut-brain axis and the enteric nervous system.',
            'The role of the microbiota in the production of key neurotransmitters like serotonin.',
            'Impact of stress and chronic inflammation on intestinal permeability and mood.',
            'Nutritional strategies, adaptogenic herbs, and practical habits to optimize gut and emotional health.'
          ],
          theme: {
            accentColor: '#0284c7',
            bgGradient: 'linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 100%)',
            badgeBg: 'bg-sky-50 border-sky-100 text-sky-700',
            badgeText: 'text-sky-700',
            polyhedronColors: {
              facet1: '#0284c7',
              facet2: '#06b6d4',
              facet3: '#3b82f6',
              facet4: '#0ea5e9',
              facet5: '#14b8a6',
              facet6: '#2563eb'
            }
          }
        },
        {
          id: 'picos_de_glucosa',
          title: 'Glucose Spikes: The Silent Enemy',
          subtitle: 'A comprehensive guide to understanding and regulating glucose and insulin fluctuations in the body',
          authors: 'DRA. ADRIANA ORTIZ',
          badge: 'METABOLIC HEALTH & NUTRITION',
          coverImage: 'https://www.dropbox.com/scl/fi/ak42hbup60geprj7q428b/ebook-picos-glucosa.png?rlkey=rr9rg6vx85iowvq4j3yax719i&raw=1',
          pages: 'PDF Format • 25 pages',
          pdfUrl: 'https://drive.google.com/file/d/189o4YP2c9GplqmqgGFi67DBbLRa8TEeA/view?usp=sharing',
          synopsis: 'A comprehensive guide to understanding and regulating glucose and insulin fluctuations in the body. Learn to identify the root causes and consequences of glucose spikes, protecting cardiovascular and metabolic health through strategic dietary choices, physical activity, and sustainable self-care habits.',
          keyTopics: [
            'Physiological mechanisms of glucose, insulin, and the development of cellular resistance.',
            'Consequences of glycemic variability on daily energy, mood swings, and long-term health.',
            'Nutritional strategies and food combining to stabilize blood sugar levels.',
            'Continuous monitoring tools, stress management, and lifestyle habits for optimal metabolic health.'
          ],
          theme: {
            accentColor: '#059669',
            bgGradient: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
            badgeBg: 'bg-emerald-50 border-emerald-100 text-emerald-700',
            badgeText: 'text-emerald-700',
            polyhedronColors: {
              facet1: '#10b981',
              facet2: '#059669',
              facet3: '#84cc16',
              facet4: '#14b8a6',
              facet5: '#047857',
              facet6: '#22c55e'
            }
          }
        },
        {
          id: 'sabiduria_estoica',
          title: 'Stoic Wisdom for a Healthy Life',
          subtitle: 'A practical work connecting classical Stoic teachings with the adoption of daily healthy habits',
          authors: 'DRA. ADRIANA ORTIZ & ARIEL REINAUDO',
          badge: 'PRACTICAL PHILOSOPHY & WELL-BEING',
          coverImage: 'https://www.dropbox.com/scl/fi/3lnpxt1nlogzgrwhtx48q/ebook-estoicos.png?rlkey=kcnq4mxtzcn4ulbrbhckctbku&raw=1',
          pages: 'PDF Format • 35 pages',
          pdfUrl: 'https://drive.google.com/file/d/1ax4fAJS33J1g39ZhQfcxp1j6E_jXHOEM/view?usp=sharing',
          synopsis: 'A practical work connecting the teachings of classical Stoicism with the adoption of daily healthy habits. Discover how to apply timeless principles like the dichotomy of control, ataraxia, and discernment to maintain balanced nutrition, a consistent exercise routine, and a serene mind in the face of modern challenges.',
          keyTopics: [
            'The dichotomy of control applied to stress management, nutrition, and physical movement.',
            'Principles for living in harmony with nature and honoring the true needs of the body.',
            'Cultivating ataraxia and discernment to make conscious, deliberate choices.',
            'Developing mental fortitude in the face of adversity and the transformative practice of daily gratitude.'
          ],
          theme: {
            accentColor: '#d97706',
            bgGradient: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
            badgeBg: 'bg-amber-50 border-amber-100 text-amber-700',
            badgeText: 'text-amber-700',
            polyhedronColors: {
              facet1: '#f59e0b',
              facet2: '#d97706',
              facet3: '#f97316',
              facet4: '#ea580c',
              facet5: '#fbbf24',
              facet6: '#c2410c'
            }
          }
        }
      ];

  return (
    <div className="bg-slate-50/70 min-h-screen py-12 md:py-20 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumb / Return */}
        <div className="mb-10 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{isEs ? 'Volver al Inicio' : 'Back to Home'}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span>{isEs ? 'Inicio' : 'Home'}</span>
            <span>/</span>
            <span className="text-indigo-600">E-books</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>{isEs ? 'Biblioteca Digital EMYTI' : 'EMYTI Digital Library'}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {isEs ? (
              <>
                E-books y Guías de <br className="hidden sm:inline" />
                <span className="text-indigo-600">Salud Integral</span>
              </>
            ) : (
              <>
                E-books & Guides for <br className="hidden sm:inline" />
                <span className="text-indigo-600">Holistic Health</span>
              </>
            )}
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            {isEs
              ? 'Materiales prácticos elaborados por nuestro equipo para brindarte herramientas concretas en nutrición metabólica, regulación del sistema nervioso, filosofía estoica y autoconocimiento.'
              : 'Practical resources developed by our team to provide actionable tools in metabolic nutrition, nervous system regulation, stoic philosophy, and deep self-knowledge.'}
          </p>
        </div>

        {/* 4 Ebooks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-20">
          {ebooksData.map((ebook, index) => (
            <div
              key={ebook.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Inner container: 2 columns on tablet/desktop */}
              <div className="p-7 sm:p-9 flex flex-col sm:flex-row gap-8 flex-grow">
                
                {/* Book Cover Container */}
                <div className="sm:w-[220px] md:w-[240px] shrink-0 mx-auto sm:mx-0 flex flex-col items-center">
                  <EbookCover ebook={ebook} className="w-56 sm:w-full" />
                  
                  {/* Subtle info below cover */}
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                    <FileText className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{ebook.pages}</span>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="mb-3">
                      <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${ebook.theme.badgeBg}`}>
                        {ebook.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-slate-900 leading-snug mb-2">
                      {ebook.title}
                    </h2>

                    {/* Subtitle / Authors */}
                    <p className="text-xs font-semibold text-indigo-600 mb-4 uppercase tracking-wider">
                      {ebook.authors}
                    </p>

                    {/* Synopsis */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {ebook.synopsis}
                    </p>

                    {/* Key Highlights */}
                    {ebook.keyTopics && (
                      <div className="mb-6 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                          {isEs ? 'Qué aprenderás en esta guía:' : 'What you will discover:'}
                        </p>
                        <ul className="space-y-2">
                          {ebook.keyTopics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button to open PDF */}
                  <div className="pt-2">
                    <a
                      href={ebook.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2.5 px-6 py-4 bg-slate-900 text-white hover:bg-indigo-600 font-bold text-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] text-center"
                    >
                      <Download className="w-4 h-4 text-white" />
                      <span>{isEs ? 'Abrir E-book (PDF)' : 'Open E-book (PDF)'}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Consultation Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isEs ? 'Acompañamiento Personalizado' : 'Personalized Guidance'}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              {isEs 
                ? '¿Querés aplicar estos principios a tu caso particular con nuestro equipo?'
                : 'Would you like to apply these principles to your specific case with our team?'}
            </h3>
            
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {isEs
                ? 'Nuestros programas y consultas virtuales y presenciales combinan evaluación metabólica, entrenamiento del sistema nervioso y seguimiento personalizado para lograr cambios sostenibles.'
                : 'Our virtual and in-person programs combine metabolic evaluation, nervous system training, and tailored follow-up to achieve sustainable health transformations.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  onNavigateHome();
                  setTimeout(() => {
                    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-8 py-4 bg-indigo-600 text-white font-bold text-sm rounded-xl shadow-lg hover:bg-indigo-500 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>{isEs ? 'Conocer nuestras consultas y programas' : 'Explore Consultations & Programs'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateHome}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-all text-center"
              >
                {isEs ? 'Volver al Inicio' : 'Return to Home'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
