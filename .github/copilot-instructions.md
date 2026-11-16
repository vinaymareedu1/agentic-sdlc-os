# Copilot instructions

Milestone 0 (repository foundation) is approved. Keep work within its acceptance checklist and do not begin Milestone 1 or product runtime implementation without separate product-owner approval.

## Engineering rules

- Follow the architecture and ADRs in `docs/`.
- Keep changes incremental and traceable.
- Use strict TypeScript and runtime validation for future runtime contracts.
- Do not add unrestricted shell execution or expose host credentials/Docker socket to agents.
- Validate workspace typecheck, lint, and tests before claiming success.
- Report execution evidence honestly; do not imply commands were run if they were not.
