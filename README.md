# Menú del restaurante

PWA de menú digital optimizada para teléfonos. Incluye carruseles horizontales
para platillos principales, bebidas y postres; búsqueda, filtros y navegación
por categoría.

## Ejecutar

Abre esta carpeta en Visual Studio Code y sirve el proyecto desde `localhost`
con cualquier servidor estático; el service worker necesita `localhost` o
HTTPS para la instalación y el caché offline.

## Publicar en Vercel

Sube el proyecto a GitHub e impórtalo en Vercel con **Other** como framework,
sin comando de compilación y con `.` como directorio de salida. Es HTML, CSS y
JavaScript nativo: no necesita instalar dependencias ni generar un build.

Las fotografías optimizadas a WebP están en [`public/images`](./public/images).
El código las sirve desde `/images/` y usa nombres con hash de contenido para
que la CDN de Vercel pueda almacenarlas de manera inmutable durante un año.
Al reemplazar una fotografía, genera un nuevo archivo WebP y cambia su
nombre/hash y la ruta en `app.js`.

Las imágenes se convierten a 900 px de ancho máximo, se comprimen a calidad
WebP 78 y se cargan bajo demanda. Conservan sus dimensiones intrínsecas para
evitar cambios de diseño durante la carga. Las fuentes usan las tipografías
del sistema, así que el sitio no depende de Google Fonts ni de otros servicios
externos para mostrar imágenes o texto.