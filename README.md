## Getting Started

1) First, install npm packages:

```bash
yarn install
```

2) Then install Postgres database

3) Then you need to create .env file from .env.example and paste your database config

4) Migrate prisma schemes

```bash
yarn prisma migrate dev
yarn prisma generate
```

5) Finally, run the following command:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.