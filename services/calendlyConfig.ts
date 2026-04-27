
import { CalendlyLinks } from '../types';

/**
 * CALENDLY LINK CONFIGURATION
 * 
 * Instructions for Operator:
 * To update booking links, locate the key in the CALENDLY object below 
 * and replace the placeholder URL with your actual Calendly link.
 * 
 * Key format: [area]_[type]_[modality]_[language]
 */

export const CALENDLY: CalendlyLinks = {
  // DRA. ORTIZ - VIRTUAL
  "dra_puntual_virtual_es": "https://calendly.com/adrianaortiz/consulta-virtual-argentina",
  "dra_puntual_virtual_en": "https://calendly.com/adrianaortiz/virtualadri",
  "dra_programa_virtual_es": "https://calendly.com/adrianaortiz/consulta-virtual-argentina",
  "dra_programa_virtual_en": "https://calendly.com/adrianaortiz/virtualadri",
  "dra_membresia_virtual_es": "https://calendly.com/adrianaortiz/consulta-virtual-argentina",
  "dra_membresia_virtual_en": "https://calendly.com/adrianaortiz/virtualadri",

  // DRA. ORTIZ - PRESENCIAL (ROSARIO)
  "dra_puntual_presencial_es": "https://calendly.com/adrianaortiz/presencialenrosario",
  "dra_programa_presencial_es": "https://calendly.com/adrianaortiz/presencialenrosario",
  "dra_membresia_presencial_es": "https://calendly.com/adrianaortiz/presencialenrosario",

  // ARIEL REINAUDO - VIRTUAL (ES ONLY)
  "ariel_puntual_virtual_es": "https://calendly.com/adrianaortiz/regulatuestres",
  "ariel_programa_virtual_es": "https://calendly.com/adrianaortiz/regulatuestres",
  "ariel_membresia_virtual_es": "https://calendly.com/adrianaortiz/regulatuestres",

  // ARIEL REINAUDO - PRESENCIAL (ES ONLY)
  "ariel_puntual_presencial_es": "https://calendly.com/adrianaortiz/regulatuestres",
  "ariel_programa_presencial_es": "https://calendly.com/adrianaortiz/regulatuestres",
  "ariel_membresia_presencial_es": "https://calendly.com/adrianaortiz/regulatuestres",

  // RECONFIGURACIÓN INTERNA - VIRTUAL
  "reconfiguracion_puntual_virtual_es": "https://calendly.com/adrianaortiz/gestionestres",
  "reconfiguracion_programa_virtual_es": "https://calendly.com/adrianaortiz/gestionestres",

  // ACUPUNTURA - PRESENCIAL ONLY
  "acupuntura_puntual_presencial_es": "https://calendly.com/adrianaortiz/presencialenrosario",
  "acupuntura_programa_presencial_es": "https://calendly.com/adrianaortiz/presencialenrosario",

  // INTEGRADO (DRA + ARIEL) - VIRTUAL
  "integrado_programa_virtual_es": "https://calendly.com/emyti/integrado-programa-es-v",
  "integrado_membresia_virtual_es": "https://calendly.com/emyti/integrado-membresia-es-v",

  // INTEGRADO (DRA + ARIEL) - PRESENCIAL
  "integrado_programa_presencial_es": "https://calendly.com/emyti/integrado-programa-es-p",
  "integrado_membresia_presencial_es": "https://calendly.com/emyti/integrado-membresia-es-p",

  // FALLBACKS
  "default_orientacion": "https://calendly.com/adrianaortiz/llamada-orientacion"
};

export const getCalendlyUrl = (area: string, type: string, mode: string, lang: string): string => {
  const key = `${area}_${type}_${mode}_${lang}`;
  return CALENDLY[key] || CALENDLY["default_orientacion"];
};
