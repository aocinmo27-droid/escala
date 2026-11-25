# Escala Marketing Digital — Sitio web

Sitio de Escala Marketing Digital, agencia de gestión de redes sociales en Mérida, Yucatán.

Por ahora es solo el frontend (HTML, CSS y TypeScript). Más adelante se conectará un backend en Node.js con PostgreSQL.

## Estructura

Todos los archivos están en la raíz para poder subirlos a GitHub sin carpetas:

```
index.html     Estructura de la página
styles.css     Estilos
main.ts        Interacciones en TypeScript
main.js        JavaScript compilado desde main.ts (es lo que carga el navegador)
*.png, *.jpg   Logo, ícono e imágenes del portafolio
```

## Cómo trabajar

```bash
npm install       # instala TypeScript
npm run build     # compila main.ts → main.js
npm run watch     # recompila cada vez que guardas
npm start         # sirve el sitio en local
```

Después de editar `main.ts` hay que compilar para que el cambio se vea en la página.

## Secciones

1. Portada
2. Proceso: cómo trabajamos
3. Servicios: lo que hacemos
4. Portafolio: Jicapaleta, Coolevent y Armor Gym
5. Paquetes: Silver y Gold, más anuncios opcionales
6. Contacto por WhatsApp

## Siguiente paso: backend

Los proyectos del portafolio están en el arreglo `PROYECTOS` de `main.ts`. Cuando exista la API en Node + PostgreSQL, ese arreglo se puede reemplazar por una llamada como `fetch("/api/proyectos")` sin cambiar el resto de la página.
