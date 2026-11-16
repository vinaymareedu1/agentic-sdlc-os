# Monorepo structure proposal

## 1. Target repository structure

```text
agentic-sdlc-os/
├── .github/
│   ├── copilot-instructions.md
│   └── workflows/
├── .vscode/
│   └── settings.json
├── apps/
│   ├── dashboard/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── public/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web-api/
│       ├── src/
│       ├── test/
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── core/
│   │   ├── src/
│   │   ├── test/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── config/
│   │   ├── eslint/
│   │   ├── typescript/
│   │   └── vitest/
│   ├── db/
│   │   ├── prisma/
│   │   ├── src/
│   │   ├── test/
│   │   └── package.json
│   ├── agents/
│   │   ├── src/
│   │   ├── definitions/
│   │   ├── evaluations/
│   │   └── package.json
│   ├── workflow-engine/
│   │   ├── src/
│   │   ├── graph/
│   │   ├── states/
│   │   └── package.json
│   ├── llm/
│   │   ├── src/
│   │   ├── providers/
│   │   ├── schema/
│   │   └── package.json
│   ├── security/
│   │   ├── src/
│   │   ├── policies/
│   │   └── package.json
│   ├── git/
│   │   ├── src/
│   │   ├── worktrees/
│   │   └── package.json
│   ├── sandbox/
│   │   ├── src/
│   │   ├── docker/
│   │   └── package.json
│   ├── tool-gateway/
│   │   ├── src/
│   │   ├── registry/
│   │   ├── policies/
│   │   └── package.json
│   └── ui-kit/
│       ├── src/
│       └── package.json
├── services/
│   ├── worker/
│   │   ├── src/
│   │   ├── scripts/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── orchestrator/
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
├── docs/
│   ├── architecture/
│   ├── adr/
│   ├── requirements/
│   ├── roadmap/
│   ├── milestones/
│   ├── security/
│   └── operations/
├── scripts/
│   ├── setup/
│   ├── dev/
│   └── ci/
├── tests/
│   ├── e2e/
│   ├── integration/
│   ├── workflows/
│   └── security/
├── infra/
│   ├── docker/
│   ├── compose/
│   └── k8s/
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
├── .npmrc
├── .gitignore
├── .editorconfig
├── .eslintrc.cjs
├── .prettierrc
├── vitest.config.ts
├── playwright.config.ts
├── docker-compose.yml
└── README.md
```

## 2. Structure rationale

### apps/

Used for product or end-user delivery surfaces:

- dashboard for the web UI
- web-api for the API layer and public contracts

### packages/

Used for reusable, domain-level capabilities that can be shared across apps and services:

- llm and model provider abstractions
- db access and Prisma schema
- workflow orchestration and state machines
- security and policy engine
- git tooling and worktree management
- tool gateway and execution controls
- shared UI components

### services/

Used for independent long-running processes that may be containerized or scheduled:

- worker for async/background execution tasks
- orchestrator for graph orchestration entry points

### docs/

Captures requirements, ADRs, architecture, roadmap, and milestone acceptance.

### tests/

Separates unit, integration, workflow, security, and browser tests and keeps them aligned with the monorepo architecture.

## 3. Decision summary

This is the proposed final structure for the platform after the approval gate. It is intentionally modular and avoids premature microservice decomposition while still scaling cleanly.
