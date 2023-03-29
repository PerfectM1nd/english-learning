## Getting Started

1) First, install npm packages:

```bash
npm install
```

2) Then install Postgres database

3) Then you need to create .env file from .env.example and paste your database config

4) Migrate prisma schemes

```bash
prisma migrate dev
prisma generate
```

5) Finally, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.