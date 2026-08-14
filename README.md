# Ambica Travels

Marketing website plus an admin backend for managing travel packages with Next.js App Router, TypeScript, Prisma, PostgreSQL, Auth.js credentials auth, Zod, and Cloudinary.

## Setup

1. Install dependencies.

```bash
npm install
```

2. Copy environment variables and fill them in.

```bash
cp .env.example .env
```

3. Generate Prisma client and run migrations.

```bash
npm run db:generate
npx prisma migrate dev --name init_admin_backend
```

4. Seed the first admin user.

```bash
npm run db:seed
```

5. Start the app.

```bash
npm run dev
```

Open `http://localhost:3000`.

## Admin Routes

- `/admin/login`
- `/admin`
- `/admin/packages`
- `/admin/packages/new`
- `/admin/packages/[id]/edit`

## Public Package Routes

- `/packages`
- `/packages/[slug]`
- `GET /api/packages`
- `GET /api/packages/[slug]`
- `GET /api/packages/featured`

## Admin APIs

- `GET /api/admin/packages`
- `POST /api/admin/packages`
- `GET /api/admin/packages/[id]`
- `PUT /api/admin/packages/[id]`
- `DELETE /api/admin/packages/[id]`
- `POST /api/admin/upload`

All `/api/admin/*` routes require an authenticated admin session.

## Environment Variables

Database and auth:

- `DATABASE_URL`: Neon/PostgreSQL connection string
- `AUTH_SECRET`: random secret for Auth.js sessions
- `AUTH_TRUST_HOST`: set to `true` behind your deployment host

Cloudinary:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `CLOUDINARY_PACKAGE_FOLDER`

Seed admin:

- `SEED_ADMIN_NAME`
- `SEED_ADMIN_EMAIL`
- `SEED_ADMIN_PASSWORD`

Existing contact form mailer:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL_TO`

## Prisma Commands

Create the initial migration:

```bash
npx prisma migrate dev --name init_admin_backend
```

Regenerate client after schema changes:

```bash
npm run db:generate
```

Push schema without a migration:

```bash
npm run db:push
```

Open Prisma Studio:

```bash
npx prisma studio
```

## Notes

- Passwords are hashed with `bcryptjs` before admin records are stored.
- Package slugs are enforced as unique in Prisma and validated with Zod.
- Package thumbnails can be uploaded to Cloudinary or pasted directly as a URL.
- If no packages are marked featured yet, the homepage preview falls back to the most recently updated packages.
