# portfolio-backend-2026

Backend API for the 2026 portfolio site, built with **Node.js + Express + TypeScript**.

## Getting started

```bash
npm install
```

Before running the app you must create a `.env` file following the template defined in `env_example`:

```bash
cp env_example .env
```

Then edit `.env` as needed (ports, database credentials, etc.).

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
