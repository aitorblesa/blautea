import SpainFlag from '@/components/flags/Spanish.astro'
import CatalanFlag from '@/components/flags/Catalan.astro'
import EnglishFlag from '@/components/flags/English.astro'

export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof CatalanFlag }> = {
  ca: {
    code: 'ca',
    name: 'Català',
    flag: CatalanFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
  en: {
    code: 'en',
    name: 'English',
    flag: EnglishFlag,
  },
}

export const defaultLang = 'ca'
export const showDefaultLang = false
