// Spanish translations for post titles and excerpts
export const postsES: Record<string, { title: string; excerpt: string }> = {
  'shopify-review-2025': {
    title: 'Reseña de Shopify (2025): La plataforma de comercio electrónico que impulsa más de 4 millones de tiendas online',
    excerpt: 'Desde emprendedores hasta marcas multimillonarias, Shopify impulsa más tiendas online que cualquier otra plataforma.',
  },
  'usearticle-review-2025': {
    title: 'Reseña de UseArticle (2025): Sitios de afiliados en piloto automático — 90 días de contenido sin intervención',
    excerpt: '5 minutos de configuración, 90 días de artículos de afiliados frescos y optimizados para SEO publicados diariamente.',
  },
  'artspace-ai-review-2025': {
    title: 'Reseña de ArtSpace AI (2025): 238 herramientas de imagen AI con un solo clic y oferta de por vida',
    excerpt: '238 herramientas AI en una plataforma: intercambio de rostros, cambio de ropa, restauración de fotos, mejora de resolución.',
  },
  'rytr-review-2025': {
    title: 'Reseña de Rytr (2025): El escritor AI de $7.50/mes que usan 8 millones de personas',
    excerpt: '8 millones de usuarios, 4.9/5 en TrustPilot y escritura AI ilimitada por $7.50 al mes.',
  },
  'synthesia-review-2025': {
    title: 'Reseña de Synthesia (2025): Crea videos profesionales con IA sin cámara, estudio ni actores',
    excerpt: 'Lo que antes tomaba 4 horas ahora toma 30 minutos. Synthesia te permite crear videos de capacitación profesionales.',
  },
  'neuronwriter-review-2025': {
    title: 'Reseña de NeuronWriter (2025): El optimizador de contenido SEO que te ayuda a posicionar en Google Y en búsqueda AI',
    excerpt: 'Tu contenido se posiciona en Google. Pero ¿qué pasa con ChatGPT y Perplexity? NeuronWriter te ayuda a optimizar para ambos.',
  },
  'outlierkit-review-2025': {
    title: 'Reseña de OutlierKit (2025): La herramienta de análisis competitivo de YouTube que te muestra lo que realmente funciona',
    excerpt: 'Deja de adivinar qué videos de YouTube hacer. OutlierKit analiza canales exitosos en tu nicho.',
  },
  'codewords-review-2025': {
    title: 'Reseña de CodeWords (2025): Construí un blog totalmente automatizado en 2 días solo con una conversación',
    excerpt: 'Sin código. Sin plantillas. Solo una conversación con un asistente AI.',
  },
  'launchyard-review-2025': {
    title: 'Reseña de Launchyard (2025): El constructor de negocios con IA que se queda con parte de tu éxito',
    excerpt: 'La promesa suena increíble — una IA que construye y gestiona tu negocio en piloto automático. El costo real: $49.99/mes + 20% de todo lo que ganes.',
  },
  'runway-gen-2-ai-video-generation-review': {
    title: 'Runway Gen-2: Lo último en generación de video con IA — Una reseña práctica',
    excerpt: 'Runway Gen-2 promete un salto transformador en la generación de video con IA.',
  },
  'claude-ai-review-2025': {
    title: 'Reseña de Claude AI 2025: ¿El mejor asistente IA para profesionales?',
    excerpt: 'Después de 3 meses de uso diario en tareas de escritura, codificación y análisis, aquí está mi opinión honesta.',
  },
  'perplexity-ai-vs-google-search': {
    title: 'Perplexity AI vs Google Search: ¿Está la búsqueda AI lista para reemplazar a Google?',
    excerpt: 'Realicé 100 búsquedas reales en ambas herramientas durante dos semanas.',
  },
  'chatgpt-plugins-best-for-productivity': {
    title: '10 plugins de ChatGPT que transformarán tu productividad en 2025',
    excerpt: 'No todos los plugins de ChatGPT son iguales. Después de probar más de 40, estos 10 me ahorraron más tiempo consistentemente.',
  },
  'midjourney-vs-dall-e-3-image-comparison': {
    title: 'Midjourney v6 vs DALL-E 3: ¿Qué generador de imágenes AI gana en 2025?',
    excerpt: 'Generé más de 200 imágenes con los mismos prompts en ambas plataformas.',
  },
  'ai-writing-tools-comparison-2025': {
    title: 'Las 5 mejores herramientas de escritura AI para bloggers en 2025 (Clasificadas y analizadas)',
    excerpt: 'Enfrenté a Jasper, Copy.ai, Writesonic, Claude y ChatGPT en tareas reales de blogging.',
  },
};

export function getPostES(slug: string): { title: string; excerpt: string } | null {
  return postsES[slug] || null;
}

export const postsContentES: Record<string, string> = {
  'rytr-review-2025': '<h2>¿Qué es Rytr?</h2><p>Rytr es un asistente de escritura con IA utilizado por más de <strong>8 millones de personas</strong> para generar contenido para blogs, correos electrónicos, anuncios, redes sociales y más. ¿Su principal ventaja? Escritura ilimitada con IA por solo <strong>$7.50/mes</strong>.</p><h2>Características Principales</h2><ul><li><strong>Más de 40 casos de uso</strong> — Blogs, correos, anuncios, redes sociales</li><li><strong>Más de 20 tonos de escritura</strong> — Profesional, casual, ingenioso</li><li><strong>Coincidencia de tono personalizado</strong> — Replica tu estilo de escritura</li><li><strong>Verificador de plagio integrado</strong></li><li><strong>Extensión de Chrome</strong></li><li><strong>Más de 40 idiomas</strong></li></ul><h2>Mi Veredicto</h2><p>Rytr es el <strong>mejor escritor IA económico disponible</strong>. A $7.50/mes por generaciones ilimitadas, es imposible superarlo en precio.</p><p><strong>Calificación: 4.0/5 — El rey indiscutible de la escritura IA económica.</strong></p>',
  'synthesia-review-2025': '<h2>¿Qué es Synthesia?</h2><p>Synthesia es una plataforma de creación de videos con IA que te permite hacer videos profesionales usando avatares generados por IA — sin cámara, sin estudio, sin actores. Escribes un guión, eliges un avatar y Synthesia genera un video pulido.</p><p>SAP, Heineken, Mondelez, Merck y Booz Allen Hamilton usan Synthesia.</p><h2>Características Principales</h2><ul><li><strong>Más de 240 avatares IA</strong> — Presentadores diversos y realistas</li><li><strong>Más de 140 idiomas</strong></li><li><strong>De guión a video</strong> — Genera video en minutos</li><li><strong>Avatares personalizados</strong></li></ul><h2>Mi Veredicto</h2><p>Synthesia es la plataforma de video IA más probada a nivel empresarial.</p><p><strong>Calificación: 4.5/5 — El estándar empresarial para creación de video con IA.</strong></p>',
  'neuronwriter-review-2025': '<h2>¿Qué es NeuronWriter?</h2><p>NeuronWriter es una plataforma de optimización de contenido SEO impulsada por IA. Su gran propuesta: tu contenido podría posicionarse en Google, pero <strong>¿qué pasa con ChatGPT, Perplexity y otras plataformas de búsqueda IA?</strong> NeuronWriter te ayuda a optimizar para ambos.</p><h2>Características Principales</h2><ul><li><strong>Puntuaciones de calidad de contenido</strong></li><li><strong>Análisis de palabras clave de competidores</strong></li><li><strong>Generación de artículos con IA</strong></li><li><strong>Seguimiento de marca en búsqueda IA (NUEVO)</strong></li></ul><h2>Mi Veredicto</h2><p>NeuronWriter es un fuerte competidor en optimización de contenido SEO, especialmente por su precio.</p><p><strong>Calificación: 4.3/5 — El mejor optimizador SEO en relación calidad-precio.</strong></p>',
  'outlierkit-review-2025': '<h2>¿Qué es OutlierKit?</h2><p>OutlierKit es una herramienta de análisis de competencia en YouTube que ayuda a los creadores a descubrir qué está funcionando realmente en su nicho. Analizas canales exitosos y replicas sus estrategias ganadoras con datos.</p><h2>Características Principales</h2><ul><li><strong>Análisis de canales competidores</strong></li><li><strong>Ideas de temas y contenido</strong></li><li><strong>Investigación Profunda (NUEVO)</strong></li><li><strong>Detección de valores atípicos</strong></li></ul><h2>Mi Veredicto</h2><p>OutlierKit resuelve un problema real: ¿qué debería hacer a continuación?</p><p><strong>Calificación: 4.2/5 — Herramienta enfocada y valiosa para creadores de YouTube.</strong></p>',
  'artspace-ai-review-2025': '<h2>¿Qué es ArtSpace AI?</h2><p>ArtSpace AI es un conjunto de herramientas de IA todo en uno con <strong>238 herramientas de un solo clic</strong> para restauración de fotos, mejora de resolución, intercambio de rostros, cambio de ropa y creación de imágenes.</p><h2>Características Principales</h2><ul><li><strong>238 herramientas IA de un clic</strong></li><li><strong>Personajes consistentes</strong></li><li><strong>Restauración de fotos</strong></li><li><strong>Oferta de por vida</strong> — Paga una vez, usa para siempre</li></ul><h2>Mi Veredicto</h2><p>ArtSpace AI es una plataforma sorprendentemente capaz que empaqueta 238 herramientas en una interfaz limpia.</p><p><strong>Calificación: 4.3/5 — La mejor oferta de por vida en herramientas de imagen IA.</strong></p>',
};

export function getPostContentES(slug: string): string | null {
  return postsContentES[slug] || null;
}



