# ADR 0001: Use a TypeScript pnpm + Turborepo monorepo

- Status: Accepted
- Date: 2026-11-16

## Context

The platform needs multiple runtime concerns: dashboard, API, worker, orchestration engine, database layer, security controls, and shared capabilities. This is too large for a single package and too coupled for a purely ad-hoc setup.

## Decision

We will use:

- TypeScript with strict mode
- pnpm workspaces
- Turborepo
- modular package boundaries per domain

## Consequences

### Positive

- Shared tooling and dependency discipline
- Clear package ownership
- Better incremental build/test execution
- Improved maintainability

### Negative

- More setup complexity than a single app
- Requires disciplined workspace configuration and CI practices

## Notes

This decision is the core foundation for all later milestones.
