# Engineering principles

## 1. Principle: safety before speed

We optimize for trusted execution, explicit approvals, and auditable actions over raw velocity.

## 2. Principle: local-first autonomy

The system must work in local developer environments and controlled local infrastructure without requiring external execution services for the core workflow engine.

## 3. Principle: human governance is a first-class capability

A workflow must stop at approval gates, challenge requests, and controlled resume points when human decisions are required.

## 4. Principle: trust no input

Repository files, code diffs, retrieved documents, and model outputs are all treated as untrusted data until validated and constrained.

## 5. Principle: explicit contracts

Runtime interfaces, tool invocations, workflow state transitions, and agent schemas must be validated with strong contracts and tests.

## 6. Principle: isolated execution

All code changes, build/test actions, and repository modifications must occur in isolated contexts with explicit permission boundaries.

## 7. Principle: traceability over convenience

If an action affects the system, it must be visible through audit logs, artifacts, event history, and test evidence.

## 8. Principle: incremental delivery

Milestone-by-milestone delivery keeps quality and safety high. We do not start a later milestone until the current milestone is accepted.

## 9. Principle: evidence-based completion

Successful completion must be attached to real test, build, and workflow output. We do not report success based on intention alone.
