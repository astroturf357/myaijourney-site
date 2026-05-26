export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

export const localeFlags: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

type TranslationKeys = {
  nav: { home: string; bestTools: string; blog: string; about: string; contact: string; subscribe: string };
  hero: { badge: string; title1: string; title2: string; subtitle: string; subscriberCount: string };
  trust: { tools: string; affiliate: string; years: string; subscribers: string };
  sections: { featured: string; topReviews: string; latest: string; recent: string; seeAll: string; viewAll: string; newsletter: string; newsletterSub: string; joinReaders: string };
  blog: { allReviews: string; title: string; subtitle: string; all: string; readReview: string; minRead: string; noResults: string; viewAll: string };
  post: { back: string; featured: string; affiliate: string; tags: string; tryIt: string; affiliateNote: string; moreReviews: string; weeklyReviews: string; joinReaders: string };
  about: { title: string; subtitle: string; readReviews: string; getInTouch: string; myStory: string; stats: { tools: string; years: string; subscribers: string; automation: string } };
  contact: { title: string; subtitle: string; name: string; email: string; subject: string; message: string; send: string; sent: string; sentSub: string; sendAnother: string; responseTime: string; monFri: string; partnership: string; partnershipSub: string };
  footer: { disclosure: string; nav: string; categories: string; stayUpdated: string; stayUpdatedSub: string; subscribeFree: string; rights: string };
  gate: { title: string; subtitle: string; namePlaceholder: string; emailPlaceholder: string; unlock: string; noSpam: string };
  chat: { title: string; online: string; typing: string; howHelp: string; askSub: string; placeholder: string };
  bestTools: { badge: string; title1: string; title2: string; subtitle: string; readReview: string; disclosure: string };
};

const translations: Record<Locale, TranslationKeys> = {
  en: {
    nav: { home: 'Home', bestTools: 'Best AI Tools', blog: 'Blog', about: 'About', contact: 'Contact', subscribe: 'Subscribe' },
    hero: { badge: 'Honest AI Tool Reviews Since 2023', title1: 'Navigate the AI Landscape', title2: 'with Confidence', subtitle: 'In-depth reviews, honest comparisons, and practical guides on the AI tools that matter. Built for professionals who want real answers, not sponsored fluff.', subscriberCount: 'Join 2,400+ AI enthusiasts. No spam. Unsubscribe anytime.' },
    trust: { tools: '50+ Tools Reviewed', affiliate: 'Affiliate Disclosed', years: '3+ Years Testing AI', subscribers: '2,400+ Subscribers' },
    sections: { featured: 'Featured Reviews', topReviews: 'Top AI Tool Reviews', latest: 'Latest', recent: 'Recent Reviews', seeAll: 'See All Reviews', viewAll: 'View All Reviews', newsletter: 'Get AI Tool Reviews in Your Inbox', newsletterSub: 'Every week I review one AI tool in depth and share what I actually discovered — not what the marketing says.', joinReaders: 'Join 2,400+ readers. Free. Unsubscribe anytime.' },
    blog: { allReviews: 'All Reviews', title: 'AI Tools Reviews & Guides', subtitle: 'Honest, in-depth reviews of the AI tools shaping how we work, create, and think.', all: 'All', readReview: 'Read review', minRead: 'min read', noResults: 'No reviews found for this filter.', viewAll: 'View All Reviews' },
    post: { back: 'All Reviews', featured: 'Featured Review', affiliate: 'Contains affiliate links', tags: 'Tags', tryIt: 'Ready to try it yourself?', affiliateNote: 'This is an affiliate link — I may earn a commission at no extra cost to you.', moreReviews: 'More Reviews', weeklyReviews: 'Get Weekly AI Reviews', joinReaders: 'Join 2,400+ readers getting the latest AI tool reviews every week.' },
    about: { title: 'Hey, I am Jim Harrell', subtitle: 'Automation specialist, AI enthusiast, and the person behind every review on this site. I research and curate AI tools so you do not have to waste money on ones that do not deliver.', readReviews: 'Read My Reviews', getInTouch: 'Get in Touch', myStory: 'My Story', stats: { tools: 'Tools Reviewed', years: 'Years Testing AI', subscribers: 'Newsletter Subscribers', automation: 'Years in Automation' } },
    contact: { title: 'Contact Me', subtitle: 'Questions about a review? Interested in working together? Partnership inquiry? Drop me a message.', name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send Message', sent: 'Message Sent!', sentSub: 'Thanks for reaching out. I typically reply within 24-48 hours.', sendAnother: 'Send Another Message', responseTime: 'Response Time', monFri: 'Monday through Friday', partnership: 'Partnership Inquiries', partnershipSub: 'I work with AI companies and SaaS tools that I genuinely use and recommend.' },
    footer: { disclosure: 'Affiliate Disclosure: Some links on this site are affiliate links. I may earn a commission at no extra cost to you if you purchase through them.', nav: 'Navigation', categories: 'Categories', stayUpdated: 'Stay Updated', stayUpdatedSub: 'Get the latest AI tool reviews delivered to your inbox.', subscribeFree: 'Subscribe Free', rights: 'All rights reserved.' },
    gate: { title: 'Get My Free AI Toolkit Guide', subtitle: 'Enter your email and I will send you my personal AI toolkit recommendations + unlock the link to', namePlaceholder: 'Your name (optional)', emailPlaceholder: 'Your email address', unlock: 'Unlock', noSpam: 'No spam. You will also be subscribed to my weekly AI tools newsletter. Unsubscribe anytime.' },
    chat: { title: 'MyAIJourney Assistant', online: 'Online • 24/7 AI Help', typing: 'Typing...', howHelp: 'How can I help?', askSub: 'Ask me about AI tools, get recommendations, or find the right tool for your needs.', placeholder: 'Ask about AI tools...' },
    bestTools: { badge: 'Updated May 2025', title1: 'The Best AI Tools in 2025', title2: 'Ranked & Reviewed', subtitle: 'Every tool on this list has been researched, analyzed, and rated honestly. No sponsored placements. Affiliate links are disclosed and never influence our ratings.', readReview: 'Read review', disclosure: 'Affiliate Disclosure: Some links on this page are affiliate links. I may earn a commission at no extra cost to you. Ratings are based on genuine research and are never influenced by affiliate relationships.' },
  },
  es: {
    nav: { home: 'Inicio', bestTools: 'Mejores Herramientas IA', blog: 'Blog', about: 'Acerca de', contact: 'Contacto', subscribe: 'Suscribirse' },
    hero: { badge: 'Reseñas honestas de herramientas IA desde 2023', title1: 'Navega el mundo de la IA', title2: 'con confianza', subtitle: 'Reseñas detalladas, comparaciones honestas y guías prácticas sobre las herramientas de IA que importan. Para profesionales que quieren respuestas reales, no publicidad disfrazada.', subscriberCount: 'Únete a 2,400+ entusiastas de IA. Sin spam. Cancela cuando quieras.' },
    trust: { tools: '50+ Herramientas Analizadas', affiliate: 'Afiliación Declarada', years: '3+ Años Probando IA', subscribers: '2,400+ Suscriptores' },
    sections: { featured: 'Reseñas Destacadas', topReviews: 'Mejores Reseñas de Herramientas IA', latest: 'Últimas', recent: 'Reseñas Recientes', seeAll: 'Ver Todas las Reseñas', viewAll: 'Ver Todas las Reseñas', newsletter: 'Recibe Reseñas de IA en Tu Correo', newsletterSub: 'Cada semana analizo una herramienta de IA en profundidad y comparto lo que realmente descubrí.', joinReaders: 'Únete a 2,400+ lectores. Gratis. Cancela cuando quieras.' },
    blog: { allReviews: 'Todas las Reseñas', title: 'Reseñas y Guías de Herramientas IA', subtitle: 'Reseñas honestas y detalladas de las herramientas de IA que están transformando cómo trabajamos y creamos.', all: 'Todas', readReview: 'Leer reseña', minRead: 'min de lectura', noResults: 'No se encontraron reseñas para este filtro.', viewAll: 'Ver Todas las Reseñas' },
    post: { back: 'Todas las Reseñas', featured: 'Reseña Destacada', affiliate: 'Contiene enlaces de afiliado', tags: 'Etiquetas', tryIt: '¿Listo para probarlo?', affiliateNote: 'Este es un enlace de afiliado — puedo ganar una comisión sin costo adicional para ti.', moreReviews: 'Más Reseñas', weeklyReviews: 'Recibe Reseñas Semanales', joinReaders: 'Únete a 2,400+ lectores que reciben las últimas reseñas cada semana.' },
    about: { title: 'Hola, soy Jim Harrell', subtitle: 'Especialista en automatización, entusiasta de la IA y la persona detrás de cada reseña en este sitio. Investigo y selecciono herramientas de IA para que no desperdicies dinero en las que no funcionan.', readReviews: 'Leer Mis Reseñas', getInTouch: 'Contactar', myStory: 'Mi Historia', stats: { tools: 'Herramientas Analizadas', years: 'Años Probando IA', subscribers: 'Suscriptores del Boletín', automation: 'Años en Automatización' } },
    contact: { title: 'Contáctame', subtitle: '¿Preguntas sobre una reseña? ¿Interesado en colaborar? ¿Consulta de asociación? Envíame un mensaje.', name: 'Nombre', email: 'Correo electrónico', subject: 'Asunto', message: 'Mensaje', send: 'Enviar Mensaje', sent: '¡Mensaje Enviado!', sentSub: 'Gracias por escribir. Normalmente respondo en 24-48 horas.', sendAnother: 'Enviar Otro Mensaje', responseTime: 'Tiempo de Respuesta', monFri: 'Lunes a Viernes', partnership: 'Consultas de Asociación', partnershipSub: 'Trabajo con empresas de IA y herramientas SaaS que genuinamente uso y recomiendo.' },
    footer: { disclosure: 'Divulgación de Afiliados: Algunos enlaces en este sitio son enlaces de afiliados. Puedo ganar una comisión sin costo adicional para ti si compras a través de ellos.', nav: 'Navegación', categories: 'Categorías', stayUpdated: 'Mantente Actualizado', stayUpdatedSub: 'Recibe las últimas reseñas de herramientas IA en tu correo.', subscribeFree: 'Suscríbete Gratis', rights: 'Todos los derechos reservados.' },
    gate: { title: 'Obtén Mi Guía Gratuita de Herramientas IA', subtitle: 'Ingresa tu correo y te enviaré mis recomendaciones personales de herramientas IA + desbloquea el enlace a', namePlaceholder: 'Tu nombre (opcional)', emailPlaceholder: 'Tu correo electrónico', unlock: 'Desbloquear', noSpam: 'Sin spam. También te suscribirás a mi boletín semanal de herramientas IA. Cancela cuando quieras.' },
    chat: { title: 'Asistente MyAIJourney', online: 'En línea • Ayuda IA 24/7', typing: 'Escribiendo...', howHelp: '¿Cómo puedo ayudarte?', askSub: 'Pregúntame sobre herramientas de IA, obtén recomendaciones o encuentra la herramienta adecuada.', placeholder: 'Pregunta sobre herramientas IA...' },
    bestTools: { badge: 'Actualizado Mayo 2025', title1: 'Las Mejores Herramientas IA de 2025', title2: 'Clasificadas y Analizadas', subtitle: 'Cada herramienta en esta lista ha sido investigada, analizada y calificada honestamente. Sin ubicaciones patrocinadas. Los enlaces de afiliados se divulgan y nunca influyen en nuestras calificaciones.', readReview: 'Leer reseña', disclosure: 'Divulgación de Afiliados: Algunos enlaces en esta página son enlaces de afiliados. Puedo ganar una comisión sin costo adicional para ti. Las calificaciones se basan en investigación genuina y nunca son influenciadas por relaciones de afiliados.' },
  },
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale] || translations.en;
}

export function getLocaleFromPath(pathname: string): Locale {
  const match = pathname.match(/^\/(es)(\/|$)/);
  if (match) return match[1] as Locale;
  return 'en';
}

export function getPathWithLocale(path: string, locale: Locale): string {
  // Remove existing locale prefix
  const cleanPath = path.replace(/^\/(es)\//, '/').replace(/^\/(es)$/, '/');
  if (locale === 'en') return cleanPath;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

