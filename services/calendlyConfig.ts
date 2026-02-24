
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
  "dra_puntual_virtual_es": "https://calendly.com/emyti/dra-puntual-es-v",
  "dra_puntual_virtual_en": "https://calendly.com/emyti/dra-puntual-en-v",
  "dra_programa_virtual_es": "https://calendly.com/emyti/dra-programa-es-v",
  "dra_programa_virtual_en": "https://calendly.com/emyti/dra-programa-en-v",
  "dra_membresia_virtual_es": "https://calendly.com/emyti/dra-membresia-es-v",
  "dra_membresia_virtual_en": "https://calendly.com/emyti/dra-membresia-en-v",

  // DRA. ORTIZ - PRESENCIAL (ROSARIO)
  "dra_puntual_presencial_es": "https://calendly.com/emyti/dra-puntual-es-p",
  "dra_programa_presencial_es": "https://calendly.com/emyti/dra-programa-es-p",
  "dra_membresia_presencial_es": "https://calendly.com/emyti/dra-membresia-es-p",

  // ARIEL REINAUDO - VIRTUAL (ES ONLY)
  "ariel_puntual_virtual_es": "https://calendly.com/emyti/ariel-puntual-es-v",
  "ariel_programa_virtual_es": "https://calendly.com/emyti/ariel-programa-es-v",
  "ariel_membresia_virtual_es": "https://calendly.com/emyti/ariel-membresia-es-v",

  // ARIEL REINAUDO - PRESENCIAL (ES ONLY)
  "ariel_puntual_presencial_es": "https://calendly.com/emyti/ariel-puntual-es-p",
  "ariel_programa_presencial_es": "https://calendly.com/emyti/ariel-programa-es-p",
  "ariel_membresia_presencial_es": "https://calendly.com/emyti/ariel-membresia-es-p",

  // ACUPUNTURA - PRESENCIAL ONLY
  "acupuntura_puntual_presencial_es": "https://calendly.com/emyti/acupuntura-p-es",
  "acupuntura_programa_presencial_es": "https://calendly.com/emyti/acupuntura-programa-es",

  // INTEGRADO (DRA + ARIEL) - VIRTUAL
  "integrado_programa_virtual_es": "https://calendly.com/emyti/integrado-programa-es-v",
  "integrado_membresia_virtual_es": "https://calendly.com/emyti/integrado-membresia-es-v",

  // INTEGRADO (DRA + ARIEL) - PRESENCIAL
  "integrado_programa_presencial_es": "https://calendly.com/emyti/integrado-programa-es-p",
  "integrado_membresia_presencial_es": "https://calendly.com/emyti/integrado-membresia-es-p",

  // FALLBACKS
  "default_orientacion": "https://calendly.com/emyti/llamada-orientacion"
};

export const getCalendlyUrl = (area: string, type: string, mode: string, lang: string): string => {
  const key = `${area}_${type}_${mode}_${lang}`;
  return CALENDLY[key] || CALENDLY["default_orientacion"];
};
