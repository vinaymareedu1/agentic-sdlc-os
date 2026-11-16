# Agentic SDLC OS

This repository contains the approved architecture and governance foundation for the Agentic SDLC OS project. The implementation is intentionally limited to Milestone 0: repository foundation.

## Current scope

- pnpm workspace and Turborepo setup
- Shared strict TypeScript and lint configuration
- Minimal package boundaries for the dashboard, API, core library, and worker
- CI validation baseline
- Architecture and governance documentation

No product runtime, agents, workflows, database, or model integration are implemented in this milestone.

## Repository structure

```text
agentic-sdlc-os/
├── apps/
│   ├── dashboard/
│   └── web-api/
├── packages/
│   └── core/
├── services/
│   └── worker/
├── docs/
├── .github/
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
└── eslint.config.mjs