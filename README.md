# Lumen — blog y portfolio multilingüe

Sitio personal creado con Astro, inspirado en un diseño editorial minimalista. Incluye blog, portfolio, español/inglés/francés, selector de idioma y Decap CMS.

## Empezar

1. Instala Node.js 20.3 o superior.
2. En esta carpeta, ejecuta `npm install`.
3. Ejecuta `npm run dev` y abre la dirección que indique la terminal.
4. Para publicar, ejecuta `npm run build`.

> Este entorno no tiene Node.js instalado, por lo que el proyecto no se pudo compilar aquí. Instálalo antes de ejecutar los comandos anteriores.

## Personalizar sin complicaciones

- **Artículos:** crea o edita archivos `.md` en `src/content/blog/es`, `en` o `fr`.
- **Proyectos:** usa `src/content/projects/es`, `en` o `fr`.
- **Textos de interfaz:** cambia `src/lib/i18n.ts`: navegación, portada, páginas Sobre mí y Contacto.
- **Nombre, redes y correo:** busca `Lumen`, enlaces de GitHub/LinkedIn y `hola@tudominio.com` en `src/components/Footer.astro` y `src/pages/[lang]/contact.astro`.
- **Colores y tipografías:** están reunidos al final de `src/layouts/BaseLayout.astro`, dentro de `:root`.

Cada entrada se identifica por idioma y slug. Por ejemplo, `src/content/blog/es/mi-articulo.md` se publicará en `/es/blog/mi-articulo/`. Para ofrecer una traducción, crea su equivalente en la carpeta del otro idioma.

## Editor visual (CMS)

El panel está en `/admin/` y usa [Decap CMS](https://decapcms.org/). Para habilitar acceso seguro al publicarlo en Netlify:

1. Sube este repositorio a GitHub, GitLab o Bitbucket.
2. Importa el repositorio en Netlify.
3. En **Integrations > Identity**, activa Identity y registra tus usuarios.
4. En **Identity > Services**, activa **Git Gateway**.
5. Visita `https://tu-dominio.com/admin/` e inicia sesión.

El CMS edita el Markdown y las imágenes, y guarda los cambios directamente en Git. Antes de activar Git Gateway, la web sigue funcionando; simplemente el panel no permitirá guardar.

## Añadir otro idioma

1. Añade el código y el nombre al arreglo `languages` y al objeto `languageNames` de `src/lib/i18n.ts`.
2. Crea sus textos en el objeto `copy` del mismo archivo.
3. Añade el código a `locales` de `astro.config.mjs`.
4. Crea las carpetas `src/content/blog/CODIGO` y `src/content/projects/CODIGO`.
5. Añade dos colecciones (blog y proyectos) para el nuevo idioma en `public/admin/config.yml` si quieres editarlo desde el CMS.
6. Incorpora el código al arreglo de `getStaticPaths()` de las páginas. Como mejora futura, puede centralizarse ese arreglo importando `languages`.

## Git

El repositorio local está inicializado en la rama `main`. Para guardar la primera versión:

```bash
git add .
git commit -m "Create multilingual Astro portfolio"
```
