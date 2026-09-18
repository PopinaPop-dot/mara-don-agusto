# Mara & Don Agusto — v1.0

Copia independiente de la landing de Costura y Carpintería, preparada para Vercel o Netlify.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
```

## Publicar en Vercel

1. Subir este proyecto a un repositorio de GitHub.
2. En Vercel: Add New → Project.
3. Importar el repositorio.
4. Framework Preset: Vite.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Deploy.

## Publicar en Netlify

1. Subir este proyecto a GitHub.
2. En Netlify: Add new project → Import an existing project.
3. Build command: `npm run build`
4. Publish directory: `dist`

## Datos centrales

Para cambiar teléfono, textos, servicios, imágenes o dirección:

`src/lib/site.ts`
