# Milestone 0 status

Milestone 0 (repository foundation) is in progress on `milestone-0-foundation`. This milestone establishes a pnpm/Turborepo workspace, strict shared TypeScript and lint configuration, initial package boundaries, CI checks, and project documentation. It does not implement application runtime behavior.

## Workspace

- `apps/dashboard`: future Next.js dashboard boundary; no dashboard runtime yet.
- `apps/web-api`: future Fastify API boundary; no HTTP server runtime yet.
- `packages/core`: shared package foundation with a smoke test.
- `services/worker`: future Node.js worker boundary; no worker runtime yet.

## Requirements

- Node.js 20.11 or newer
- pnpm 9.15.0 (Corepack is configured through the `packageManager` field)

On Windows, if `corepack enable` cannot create shims under `C:\Program Files\nodejs`, install pnpm for the current environment with `npm install --global pnpm@9.15.0`, or run an elevated terminal to enable Corepack. Reopen the terminal after installation.

## Install and validate

```powershell
pnpm install
pnpm typecheck
pnpm lint
pnpm test
```

CI runs these checks on pushes to `main` and `milestone-0-foundation` and on pull requests.
