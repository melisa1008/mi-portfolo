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
    hero: 'Estudiante organizada, centrada y trabajadora.',
    intro: 'Soy Melisa, estudiante en el EDT de Morges. Este espacio reúne mi perfil, mis aprendizajes y los proyectos que voy desarrollando.',
    latest: 'Aprendizajes y reflexiones', work: 'Proyectos', allArticles: 'Ver todos los artículos',
    allProjects: 'Ver todos los proyectos', read: 'Leer artículo', view: 'Ver proyecto',
    writing: 'Escritura', portfolio: 'Portfolio',
    aboutTitle: 'Hola, soy Melisa.',
    aboutText: 'Soy estudiante en el EDT de Morges. Me describo como una persona ordenada, centrada y trabajadora, con ganas de aprender y afrontar nuevos retos.',
    contactTitle: 'Hablemos.', contactText: 'Puedes escribirme para oportunidades, proyectos o cualquier consulta profesional.',
    email: 'Escríbeme', back: 'Volver', moreLanguages: 'Añade más idiomas cuando quieras.',
  },
  en: {
    home: 'Home', blog: 'Journal', projects: 'Projects', about: 'About', contact: 'Contact',
    hero: 'An organised, focused and hardworking student.',
    intro: 'I am Melisa, a student at EDT in Morges. This space brings together my profile, my learning and the projects I develop.',
    latest: 'Learning and reflections', work: 'Projects', allArticles: 'View all articles',
    allProjects: 'View all projects', read: 'Read article', view: 'View project',
    writing: 'Writing', portfolio: 'Portfolio',
    aboutTitle: 'Hello, I’m Melisa.',
    aboutText: 'I am a student at EDT in Morges. I am an organised, focused and hardworking person, eager to learn and take on new challenges.',
    contactTitle: 'Let’s talk.', contactText: 'You can contact me about opportunities, projects or professional enquiries.',
    email: 'Email me', back: 'Go back', moreLanguages: 'Add more languages whenever you need.',
  },
  fr: {
    home: 'Accueil', blog: 'Journal', projects: 'Projets', about: 'À propos', contact: 'Contact',
    hero: 'Une étudiante organisée, concentrée et travailleuse.',
    intro: 'Je suis Melisa, étudiante à l’EDT de Morges. Cet espace présente mon profil, mes apprentissages et les projets que je développe.',
    latest: 'Apprentissages et réflexions', work: 'Projets', allArticles: 'Voir tous les articles',
    allProjects: 'Voir tous les projets', read: 'Lire l’article', view: 'Voir le projet',
    writing: 'Écriture', portfolio: 'Portfolio',
    aboutTitle: 'Bonjour, je suis Melisa.',
    aboutText: 'Je suis étudiante à l’EDT de Morges. Je suis une personne organisée, concentrée et travailleuse, désireuse d’apprendre et de relever de nouveaux défis.',
    contactTitle: 'Parlons-en.', contactText: 'Vous pouvez m’écrire pour des opportunités, des projets ou toute demande professionnelle.',
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
