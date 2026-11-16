# System architecture

## 1. Architectural view

The platform is designed as a local-first, secure, workflow-driven software engineering operating system. It consists of a user-facing dashboard, service APIs, orchestration runtime, specialized engineering agents, controlled execution paths, and local model access.

## 2. Core architecture layers

### 2.1 Presentation layer

- Next.js App Router dashboard
- Project and workflow visibility
- Approval orchestration interface
- Audit and artifact views

### 2.2 API and orchestration layer

- Fastify API
- workflow execution entry points
- project and requirement management
- approval and change request APIs
- artifact retrieval endpoints

### 2.3 Runtime and orchestration layer

- LangGraph.js orchestration graph
- state machine for workflow lifecycle transitions
- agent scheduling and handoff logic
- checkpointing and event replay

### 2.4 Agent layer

Each agent is versioned and policy-enforced. Agents operate through a common runtime contract:

- definition metadata
- system instructions
- input and output schema
- permissions and tool restrictions
- timeout and retry settings
- evaluation hooks
- audit events

### 2.5 Execution layer

- restricted Docker-based execution sandbox
- Git worktree isolation
- restricted file access boundaries
- environment-specific build/test execution

### 2.6 Model integration layer

- provider abstraction for Docker Model Runner
- structured output validation
- completion and streaming support
- local model health and discovery endpoints
- usage logging and latency metrics

### 2.7 Data and artifact layer

- Prisma schema for persistent records
- separate SQLite workflow checkpoint store
- structured artifacts with provenance and versioning
- audit tables for operational decisions

## 3. Security model

The platform treats all tool input, retrieved documents, model-produced instructions, and repo content as untrusted. The control plane enforces:

- explicit tool registry registration
- Zod contract validation
- risk classification and approval requirements
- sandboxed execution
- no host credential exposure
- no unrestricted shell by default
- explicit authorization checks before repository or Docker operations

## 4. Operational model

The workflow engine is not a free-form chatbot. It is a governed SDLC engine that enforces state transitions and approval gates. Any state change must be auditable and recoverable.

## 5. Non-goals for this approval phase

This documentation stage does not contain implementation-level design for every runtime contract. Those will be produced progressively with each milestone and validated against acceptance criteria.
