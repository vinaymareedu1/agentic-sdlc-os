# ADR 0003: Use Git worktrees and branch isolation for SDLC execution

- Status: Accepted
- Date: 2026-11-16

## Context

Agents and workflows must make changes without polluting the protected branch. Changes must be isolated, reviewable, and recoverable.

## Decision

We will use Git worktrees and explicit branch management for each workflow task. The system will enforce path restrictions, track diffs, and require explicit human authorization before merge or release.

## Consequences

### Positive

- Safer parallel execution
- Cleaner review history
- Better checkpoint recovery

### Negative

- More operational complexity
- Requires disciplined branch and path scope controls

## Notes

Worktree isolation is a core requirement for secure environment design.
