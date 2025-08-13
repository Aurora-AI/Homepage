export type Locale = 'pt' | 'en' | 'es';

export const LOCALES: Locale[] = ['pt','en','es'];
export const DEFAULT_LOCALE: Locale = 'pt';

export function detectLocaleFromPath(pathname: string): Locale {
  // /, /en, /es, /en/..., /es/...
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg === 'en') return 'en';
  if (seg === 'es') return 'es';
  return 'pt';
}

export function withLocaleHref(locale: Locale, href: string): string {
  // normaliza href relativos: '/produtos', '/status', '/'
  const clean = href.startsWith('/') ? href : `/${href}`;
  if (locale === 'pt') return clean;                // pt sem prefixo
  if (clean === '/') return `/${locale}`;
  return `/${locale}${clean}`;
}
