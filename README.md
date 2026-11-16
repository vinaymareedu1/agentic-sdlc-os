# Milestone 0 status

Milestone 0 repository foundation is in progress. This milestone establishes workspace tooling and package boundaries only; no product runtime is implemented.

## Local setup

Requirements: Node.js 20.11+ and pnpm 9.15.0. On Windows, when Corepack cannot write a shim to `C:\Program Files\nodejs`, run PowerShell as Administrator for `corepack enable`, or install pnpm for the current environment with `npm install --global pnpm@9.15.0` and reopen the terminal.

```powershell
pnpm install
pnpm typecheck
pnpm lint
pnpm test
```

## Workspace packages

- `apps/dashboard`: future Next.js dashboard boundary; no application runtime yet.
- `apps/web-api`: future Fastify API boundary; no server runtime yet.
- `packages/core`: shared core foundation and its initial smoke test.
- `services/worker`: future Node.js worker boundary; no worker runtime yet.

## Repository structure

The full proposed target structure is documented in `docs/architecture/monorepo-structure.md`. This milestone scaffolds only the initial workspace boundaries.
