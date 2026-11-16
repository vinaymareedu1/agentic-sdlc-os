# Implementation roadmap

## Milestone 0: Repository foundation

Goal: establish repository, governance, and quality scaffolding.

Acceptance criteria:

- repository initialized and branch strategy agreed
- developer standards defined
- CI and workspace basics prepared
- project charter and documentation baseline exist

## Milestone 1: ECC inspection and integration framework

Goal: inspect and evaluate ECC assets, select reusable patterns, and configure adapters.

Acceptance criteria:

- asset inventory created
- selected practices mapped to internal contracts
- licensing and attribution preserved
- adapter framework defined

## Milestone 2: Docker Model Runner integration

Goal: enable local model provider integration with health checks and validation.

Acceptance criteria:

- Docker Model Runner connection established
- provider abstraction implemented
- structured output validation configured
- completion streaming and retry logic validated

## Milestone 3: Database and API

Goal: define data model and public API contracts.

Acceptance criteria:

- Prisma schema created
- SQLite starter config created
- Fastify API scaffolding implemented
- contract tests passing

## Milestone 4: Agent and skill runtime

Goal: implement agent metadata, permissions, schema contracts, and evaluation interfaces.

Acceptance criteria:

- core agent definitions implemented
- tool permissions and denial matrix established
- agent runtime contract validated

## Milestone 5: LangGraph orchestration

Goal: implement workflow graph and lifecycle transitions.

Acceptance criteria:

- lifecycle state graph implemented
- all transitions validated
- checkpointing and recoverability tested

## Milestone 6: Tool Gateway and security

Goal: centralize tool execution and security controls.

Acceptance criteria:

- tool registry implemented
- risk classification active
- high-risk approval enforcement tested
- sandbox restrictions validated

## Milestone 7: Git worktrees and sandbox

Goal: isolate work and execution contexts.

Acceptance criteria:

- worktree creation and cleanup tested
- path scope enforcement active
- execution logs and diffs captured

## Milestone 8: First end-to-end SDLC workflow

Goal: run an end-to-end workflow through a controlled path.

Acceptance criteria:

- workflow executes from discovery to release approval
- approval interrupts work as designed
- event history traceable

## Milestone 9: Specialist development agents

Goal: implement and validate the specialist agent set.

Acceptance criteria:

- each required agent role exists
- evaluation tests pass
- cross-agent boundaries enforced

## Milestone 10: QA, code review, and security review

Goal: implement review flows and validation gates.

Acceptance criteria:

- QA workflow active
- code review artifacts captured
- security review findings recorded

## Milestone 11: Dashboard

Goal: expose workflow and platform visibility through the dashboard.

Acceptance criteria:

- dashboard pages implemented
- workflow state visible
- approvals and artifacts accessible

## Milestone 12: Evaluations and hardening

Goal: performance, contract, and robustness hardening.

Acceptance criteria:

- full regression pass
- security hardening complete
- performance and reliability validated
