# KHFlow — Prime Video–like Next.js demo

This is a starter Next.js project (demo) for **KHFlow** — a Prime Video–style frontend (static/demo).
It uses local JSON demo data and Video.js player with sample HLS streams.

## Quick start

1. Unzip the project (if you downloaded a zip).
2. Install dependencies:
   ```
   npm install
   ```
3. Run the dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Notes

- This project is a **frontend demo**. There's no backend included in this ZIP.
- Demo movie URLs point to public test HLS streams. Replace `public/data/movies.json` with your own data and video URLs.
- The UI uses Tailwind — the project includes Tailwind config. If you prefer plain CSS you can remove Tailwind references in `styles/globals.css`.

If you want, I can:
- Add a backend + PostgreSQL + Prisma for movies and auth.
- Replace demo HLS links with your own Cloudflare/Bunny-hosted videos.
- Add authentication (NextAuth) and user profiles.

