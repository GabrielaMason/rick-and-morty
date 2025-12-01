## Rick and Morty – Test Técnico

Aplicación desarrollada en Next.js 16 (App Router) para visualizar personajes de la API pública de Rick and Morty y administrar una lista de favoritos persistida con JSON Server + Redux Toolkit.

Incluye:

-Vista desktop y mobile basada en el look & feel solicitado.

-Filtro en tiempo real por nombre.

-Selección de personaje.

-Like / Unlike en tarjetas.

-Tab Favs con overlay y eliminación de favoritos.

-Persistencia con JSON Server.

-Estado global con Redux Toolkit.

-Pruebas unitarias con Jest y Testing Library.

## Tecnologías utilizadas

Next.js 16 (App Router)

React 19 / Client Components

TypeScript

CSS Modules

Redux Toolkit

JSON Server

Jest + Testing Library

## Instalación
git clone https://github.com/<TU_USUARIO>/<TU_REPO>.git
cd <TU_REPO>
npm install

## Json Server
cp json-server/db.example.json json-server/db.json
npm run json-server
http://localhost:4000/favorites

## Ejecutar Next.js
npm run dev
http://localhost:3000

## Prueba unitarias
npm test
-- favoritesSlice.test.ts
Prueba el reducer de Redux Toolkit
Estado inicial.
Agregar favorito.
Eliminar favorito.

## ¿Qué es lo que más me gustó de mi desarrollo?
Disfruté trabajar con un UI reactivo: selección de personaje, favoritos y la versión móvil. Igual hace mucho que no trabajaba con Redux Toolkit con JSON Server, y me gustó haber logrado una experiencia realista sin necesidad de un backend formal.

## Si hubiera tenido más tiempo, ¿qué habría mejorado?
- Una paginación completada
- Más transiciones y animaciones en la interfaz
- Un mejor manejo de errores

## Paint point y solución
JSON Server generaba IDs propios al agregar un favorito, lo cual causaba que al eliminar un favorito no funcionara correctamente, ya que intentaba borrar usando el ID del personaje (API), pero json-server estaba usando IDs distintos.

Solución: Ajusté el modelo de favorito para que JSON Server genere su propio id, y el personaje se identifique con characterId