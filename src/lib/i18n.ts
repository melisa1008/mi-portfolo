export const languages = ['es', 'en', 'fr'] as const;
export type Lang = (typeof languages)[number];

export const languageNames: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

const copy = {
  es: {
    home: 'Inicio', blog: 'Blog', projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto',
    hero: 'Ideas, historias y trabajo con intención.',
    intro: 'Un espacio personal para compartir proyectos, aprendizajes y las cosas que me inspiran.',
    latest: 'Últimos artículos', work: 'Proyectos destacados', allArticles: 'Ver todos los artículos',
    allProjects: 'Ver todos los proyectos', read: 'Leer artículo', view: 'Ver proyecto',
    writing: 'Escritura', portfolio: 'Portfolio',
    aboutTitle: 'Hola, soy [Tu nombre].',
    aboutText: 'Una persona creativa que convierte ideas en experiencias claras, útiles y memorables.',
    contactTitle: '¿Trabajamos juntos?', contactText: 'Estoy disponible para colaboraciones, proyectos y conversaciones interesantes.',
    email: 'Escríbeme', back: 'Volver', moreLanguages: 'Añade más idiomas cuando quieras.',
  },
  en: {
    home: 'Home', blog: 'Journal', projects: 'Projects', about: 'About', contact: 'Contact',
    hero: 'Ideas, stories, and work with intention.',
    intro: 'A personal space to share projects, lessons, and the things that inspire me.',
    latest: 'Latest writing', work: 'Selected projects', allArticles: 'View all articles',
    allProjects: 'View all projects', read: 'Read article', view: 'View project',
    writing: 'Writing', portfolio: 'Portfolio',
    aboutTitle: 'Hello, I’m [Your name].',
    aboutText: 'A creative person turning ideas into clear, useful and memorable experiences.',
    contactTitle: 'Shall we work together?', contactText: 'I’m available for collaborations, projects, and thoughtful conversations.',
    email: 'Email me', back: 'Go back', moreLanguages: 'Add more languages whenever you need.',
  },
  fr: {
    home: 'Accueil', blog: 'Journal', projects: 'Projets', about: 'À propos', contact: 'Contact',
    hero: 'Des idées, des histoires et un travail intentionnel.',
    intro: 'Un espace personnel pour partager des projets, des apprentissages et mes inspirations.',
    latest: 'Derniers articles', work: 'Projets sélectionnés', allArticles: 'Voir tous les articles',
    allProjects: 'Voir tous les projets', read: 'Lire l’article', view: 'Voir le projet',
    writing: 'Écriture', portfolio: 'Portfolio',
    aboutTitle: 'Bonjour, je suis [Votre nom].',
    aboutText: 'Une personne créative qui transforme les idées en expériences claires, utiles et mémorables.',
    contactTitle: 'Travaillons ensemble ?', contactText: 'Je suis disponible pour des collaborations, projets et conversations inspirantes.',
    email: 'M’écrire', back: 'Retour', moreLanguages: 'Ajoutez d’autres langues quand vous le souhaitez.',
  },
} as const;

export function t(lang: Lang) { return copy[lang]; }
export function isLang(value: string | undefined): value is Lang { return !!value && languages.includes(value as Lang); }
export function localeFromId(id: string) { return id.split('/')[0] as Lang; }
export function slugFromId(id: string) { return id.split('/').slice(1).join('/').replace(/\.md$/, ''); }
export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}
