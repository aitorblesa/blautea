import { defaultLang } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  return lang === 'es' || lang === 'ca' || lang === 'en' ? lang : defaultLang
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string, l: string = lang) {
    if (l === defaultLang) return path
    return `/${l}${path}`
  }
}
