import catalan from '@/i18n/ca.json'
import spanish from '@/i18n/es.json'
import english from '@/i18n/en.json'

const LANGUAGES = {
  CATALAN: 'ca',
  SPANISH: 'es',
  ENGLISH: 'en',
} as const

export const getI18N = ({ currentLocale = 'ca' }: { currentLocale: string | undefined }) => {
  if (currentLocale === LANGUAGES.CATALAN) return catalan
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return english
}
