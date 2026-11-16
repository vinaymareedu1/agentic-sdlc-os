# ADR 0005: Use LangGraph for workflow orchestration and state transitions

- Status: Accepted
- Date: 2026-11-16

## Context

The platform needs workflow lifecycle management, state validation, human interrupt points, retries, recovery, and traceable transitions.

## Decision

We will use LangGraph.js as the orchestration framework for workflow states and agent handoffs. Stateful graph transitions will be wrapped in explicit workflow contracts and validation.

## Consequences

### Positive

- Structured orchestration and event-driven execution
- Better transition validation and recoverability
- Clear representation of step dependencies and approvals

### Negative

- Requires careful state design and schema discipline
- Workflow complexity can grow quickly if not kept modular

## Notes

The workflow graph must remain independent of local Copilot conventions and only implement platform-native runtime behavior.
