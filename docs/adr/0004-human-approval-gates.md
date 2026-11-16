# ADR 0004: Require human approval gates for high-risk actions

- Status: Accepted
- Date: 2026-11-16

## Context

The platform controls code changes, approvals, merges, and model/tool execution. Unrestricted automation at high risk would violate governance and security requirements.

## Decision

We will classify agent actions using LOW, MEDIUM, HIGH, and CRITICAL risk categories and require explicit human approval for HIGH and CRITICAL actions. The system will also deny unrestricted shell execution by default.

## Consequences

### Positive

- Better governance and auditability
- Reduced risk of destructive actions
- Clear operator accountability

### Negative

- More friction in execution flow
- Requires UI and API support for approval workflows

## Notes

No agent may approve its own implementation as an independent reviewer.
