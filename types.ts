
export type Modality = 'virtual' | 'presencial';
export type ConsultationType = 'puntual' | 'programa' | 'membresia';
export type Area = 'dra' | 'ariel' | 'integrado' | 'acupuntura';
export type Language = 'es' | 'en';

export interface BookingState {
  modality: Modality | null;
  type: ConsultationType | null;
  area: Area | null;
  lang: Language | null;
}

export interface CalendlyLinks {
  [key: string]: string;
}
