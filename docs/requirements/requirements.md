# Product requirements

## 1. Problem statement

Organizations need a trustworthy, auditable software engineering operating system that can convert requirements into reviewed, validated, approved code changes without relying on a single opaque chatbot flow. The platform must combine structured engineering controls, human governance, local model execution, and repository isolation with software development lifecycle semantics.

## 2. Product goals

- Transform requirements into structured engineering work
- Maintain explicit review, approval, and change control gates
- Allow local LLM inference with deterministic infrastructure assumptions
- Restrict tool access and execution via a controlled gateway
- Isolate work in separate Git worktrees and execution environments
- Produce traceable artifacts and audit events for all agents and decisions
- Support pause, resume, retry, cancel, reject, and recovery across workflow execution

## 3. Functional requirements

### 3.1 Workflow lifecycle

The platform must support the lifecycle:

Discovery -> Requirements Analysis -> Product Definition -> Architecture -> Technical Planning -> Human Plan Approval -> Git Worktree Creation -> Implementation -> QA -> Code Review -> Security Review -> Product Validation -> Human Release Approval -> Authorized Merge or Release

It must also support:

- Pause
- Resume
- Cancel
- Reject
- Request changes
- Retry
- Checkpoint recovery
- Human approval interrupts
- Workflow event history

### 3.2 Agents

The platform must support specialist roles:

- Master Orchestrator
- Product Analyst
- Product Owner
- Solution Architect
- Technical Planner
- Frontend Developer
- Backend Developer
- Database Engineer
- DevOps Engineer
- QA Engineer
- Code Reviewer
- Security Reviewer
- Product Validator

Each agent must have a versioned definition, policy metadata, tool permissions, timeout/retry configuration, evaluation tests, and audit logging.

### 3.3 Tool gateway and security

Every tool call must go through a centralized Tool Gateway with:

- registry
- input validation via Zod
- authorization and permission enforcement
- risk classification
- approval checks
- timeout and sandboxing
- audit event capture
- output validation

Default denied behavior must prevent unrestricted shell access. High/critical actions require explicit human approval.

### 3.4 Git and execution isolation

The platform must create isolated Git worktrees and restrict each agent to assigned repository paths. It must capture:

- branch
- worktree path
- changed files
- diff
- commit references
- tests
- execution logs

### 3.5 Local model provider

The platform must integrate with Docker Model Runner as the initial local inference provider with:

- health check
- model discovery
- completion
- streaming
- structured output validation
- tool call parsing
- timeout and retry handling
- usage and latency logging

### 3.6 Persistence and artifacts

The platform must keep project records, workflow records, and workflow checkpoints separate. Artifact storage must include provenance and version history. Secrets must never be stored in ordinary DB records or memory structures.

### 3.7 Dashboard

The dashboard must provide a view of:

- overview
- projects
- requirements
- workflows
- agents
- skills and ECC
- approvals
- code changes
- testing and QA
- security and audit
- models and usage
- settings

## 4. Non-functional requirements

- Strict TypeScript and runtime validation with Zod
- pnpm workspaces, Turborepo monorepo
- Next.js App Router dashboard
- Fastify API
- Node worker service
- LangGraph-based orchestration
- Prisma + SQLite initially
- SQLite workflow checkpoint storage initially
- Vitest for automated tests and integration tests
- Playwright for browser E2E tests
- Observability compatible with OpenTelemetry
- Pino logging
- Local-first operations with explicit human approvals

## 5. Key quality gates

All implementation must be validated with:

- TypeScript typecheck
- Lint
- Unit tests
- Relevant integration tests
- Workflow transition tests
- Sandbox security tests
- Git worktree tests
- Agent evaluation tests
- Playwright E2E tests

## 6. Out of scope for this approval gate

The following are explicitly not implemented in this initial documentation phase:

- product code generation
- orchestration logic
- database schema implementation
- model integration code
- tool gateway implementation
- workflow execution engine
- dashboard application

## 7. Success criteria for the next phase

The project may proceed to Milestone 0 only when the architecture, principles, roadmap, and acceptance criteria are reviewed and approved by the product owner.
