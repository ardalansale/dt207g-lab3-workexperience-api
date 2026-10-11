# DT207G – Laboration 3 – Backend (Webbtjänst)
En webbtjänst byggd med Node.js, Express och MongoDB som hanterar arbetserfarenheter.

## Publicerad webbjänst
https://dt207g-lab3-workexperience-api.onrender.com/api/workexperience

## GitHub-repo
https://github.com/ardalansale/dt207g-lab3-workexperience-api

## Funktionalitet
- REST-API med endpoints för fullständiga CRUD-operationer (`GET`, `POST`, `PUT`, `DELETE`).
- Databasanlutning mot MongoDB Atlas via Mongoose.
- Schema med krav på minst fyra fält (`company`, `role`, `duration`, `description`).
- Server-side validering som säkerställer att inga fält lämnas tomma.
- CORS-stöd för att tillåta anrop från den separata frontend-webbplatsen.

## Komponenter och struktur
- `server.js` – Huvudfil som sätter upp Express-servern, middleware och ansluter till databasen.
- `models/WorkExperience.js` – Mongoose-schema och modell för databasstrukturen.
- `.env` – Miljövariabler för port och anslutningssträng (ej inkluderad i repot).

## Tekniker
- Node.js
- Express.js
- MongoDB Atlas & Mongoose
- CORS & Dotenv

## Installation och körning
1. Klona repot och installera beroenden:
   ```bash
   npm install