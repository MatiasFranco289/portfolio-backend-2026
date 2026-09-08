# portfolio-backend-2026

Backend API for the 2026 portfolio site, built with **Node.js + Express + TypeScript**.

## Getting started

```bash
npm install
```

Before running the app you must create a `.env.development` or a `.env.production` file depending on your objective, following the template defined in `env_example`:

```bash
# For development (e.g. `npm run dev`, `npm run dev:docker`)
cp env_example .env.development

# For production (e.g. `npm run start`)
cp env_example .env.production
```

Then edit the created file as needed (ports, database credentials, etc.). Note that `npm run dev:docker` automatically reads `.env.development`.

## Available scripts

| Command                    | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `npm run dev`              | Run the Node app in development mode with hot reload (tsx watch) |
| `npm run dev:docker`       | Run the app with Docker Compose for dev (Node + Postgres)        |
| `npm run build:docker-dev` | Build the Docker development image                               |
| `npm run build`            | Compile TypeScript to `dist/`                                    |
| `npm run start`            | Run the compiled output from `dist/`                             |
| `npm run typecheck`        | Type-check the code without emitting output                      |

## Configuration

The server listens on port `4000` by default. Override it with the `PORT` environment variable.
