# Escala Marketing Digital — Sitio web

Sitio de Escala Marketing Digital, agencia de gestión de redes sociales en Mérida, Yucatán.

Por ahora es solo el frontend (HTML, CSS y TypeScript). Más adelante se conectará un backend en Node.js con PostgreSQL.

## Estructura

```
index.html        Estructura de la página
css/styles.css    Estilos
src/main.ts       Interacciones en TypeScript (menú móvil, encabezado, animaciones, portafolio)
dist/main.js      JavaScript compilado desde src/main.ts (es lo que carga el navegador)
assets/           Logo, ícono e imágenes del portafolio
tsconfig.json     Configuración de TypeScript
```

## Cómo trabajar

```bash
npm install       # instala TypeScript
npm run build     # compila src/main.ts → dist/main.js
npm run watch     # recompila cada vez que guardas
npm start         # sirve el sitio en local
```

Después de editar `src/main.ts` hay que compilar para que el cambio se vea en la página.

## Secciones

1. Portada
2. Proceso: cómo trabajamos
3. Servicios: lo que hacemos
4. Portafolio: Jicapaleta, Coolevent y Armor Gym
5. Paquetes: Silver y Gold, más anuncios opcionales
6. Contacto por WhatsApp

## Siguiente paso: backend

Los proyectos del portafolio están en el arreglo `PROYECTOS` de `src/main.ts`. Cuando exista la API en Node + PostgreSQL, ese arreglo se puede reemplazar por una llamada como `fetch("/api/proyectos")` sin cambiar el resto de la página.
