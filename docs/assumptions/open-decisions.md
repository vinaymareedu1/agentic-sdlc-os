# Assumptions and unresolved decisions

## 1. Repository state

The repository started empty. There is no existing application code, package configuration, or local toolchain manifest to inspect beyond the GitHub repository metadata.

## 2. Tooling assumptions

We assume the local environment will support the required stack:

- Node.js 20+
- pnpm
- Turborepo
- Docker Desktop or equivalent for local model + sandbox execution
- Git with worktree support

These assumptions are not yet validated in the environment because the repository is empty and no local development shell has been provided in this task.

## 3. Open technical decisions

The following items remain subject to explicit review and validation before implementation:

- exact dashboard stack details beyond Next.js App Router requirement
- exact Prisma schema design and migration strategy
- final set of specialized skills and agent runtime contracts
- final repository branch protection and merge policy
- non-technical operating model for human approval workflows
- final sandbox configuration limits for container execution

## 4. Security and compliance assumptions

- Docker socket access will not be exposed to agents
- restricted runtime boundaries will be enforced via sandboxing
- human approvals will be mandatory for HIGH/CRITICAL operations
- secrets will be stored outside the application database and memory records

## 5. ECC integration decision

The project will not blindly import ECC assets. ECC asset review and adapter design are explicitly deferred to Milestone 1, after the architectural baseline is approved.
