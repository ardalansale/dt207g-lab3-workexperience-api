# DT207G – Laboration 3 (Backend)
En RESTful webbbservis byggd med Node.js, Express och MongoDB (Mongoose) som hanterar arbetserfarenheter med fullt CRUD-stöd och servervalidering.

## Funktioner
- REST-API med endpoints för CRUD-operationer (`GET`, `POST`, `PUT`, `DELETE`).
- Databasanlutning mot MongoDB Atlas via Mongoose.
- Schema med krav på minst 4 fält (`company`, `role`, `duration`, `description`).
- Server-side validering som säkerställer att inga fält lämnas tomma.
- CORS-stöd för att tillåta anrop från separat frontend.

## Tekniker
- Node.js
- Express
- MongoDB Atlas & Mongoose
- CORS & Dotenv

## Installation och körning
1. Klona repot och installera beroenden:
   ```bash
   npm install