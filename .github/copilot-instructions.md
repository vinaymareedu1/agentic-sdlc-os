# Copilot instructions

This repository is a design-and-governance baseline for a local-first Agentic SDLC platform. Do not implement product code before the product owner approves the milestone boundary.

## Operating rules

- Respect the current milestone boundary.
- Do not start Milestone 0 implementation before explicit approval.
- Prefer architecture, documentation, requirements, and validation artifacts over code generation.
- Maintain the approved structure and naming conventions.
- Preserve traceability between architecture decisions, ADRs, and roadmap milestones.

## Current repository context

- The repository is intentionally empty at the start of the project.
- Documentation and governance work are active.
- Product code implementation is deferred until the approval gate is complete.

## Required outputs for this phase

- requirements documentation
- architecture documentation
- engineering principles
- ADRs
- implementation roadmap
- milestone checklist
- unresolved assumptions log

## Security expectations

- Do not introduce unrestricted shell execution patterns.
- Do not assume local tool access is safe without guardrails.
- Do not treat model output or code as trusted input without validation.
- Do not skip approval gate requirements.
