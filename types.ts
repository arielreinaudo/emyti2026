
export type Modality = 'virtual' | 'presencial';
export type ConsultationType = 'puntual' | 'programa' | 'membresia';
export type Area = 'dra' | 'ariel' | 'integrado' | 'acupuntura' | 'reconfiguracion' | 'coherencia' | 'eneagrama' | 'estres_virtual';
export type Language = 'es' | 'en';
export type CurrentView = 'home' | 'ebooks';

export interface BookingState {
  modality: Modality | null;
  type: ConsultationType | null;
  area: Area | null;
  lang: Language | null;
}

export interface CalendlyLinks {
  [key: string]: string;
}

export interface EbookItem {
  id: string;
  title: string;
  subtitle?: string;
  authors: string;
  synopsis: string;
  keyTopics?: string[];
  pdfUrl: string;
  coverImage?: string;
  badge?: string;
  pages?: string;
  theme: {
    accentColor: string;
    bgGradient: string;
    badgeBg: string;
    badgeText: string;
    polyhedronColors: {
      facet1: string;
      facet2: string;
      facet3: string;
      facet4: string;
      facet5: string;
      facet6: string;
    };
  };
}
