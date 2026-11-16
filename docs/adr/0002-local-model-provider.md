# ADR 0002: Use Docker Model Runner as the initial local inference provider

- Status: Accepted
- Date: 2026-11-16

## Context

The platform requires local LLM inference with restricted network exposure and explicit runtime controls. The initial provider configuration requires:

- LLM_PROVIDER=docker-model-runner
- LLM_MODEL=ai/qwen3
- LLM_BASE_URL=http://localhost:12434/engines/v1
- LLM_API_KEY=not-needed

## Decision

We will abstract the model provider behind a provider interface and implement Docker Model Runner first. We will treat the model endpoint as a local, untrusted execution surface that must be validated before use.

## Consequences

### Positive

- Local-first inference model
- Good fit for developer environments and secure experimentation
- Clear abstraction for future providers

### Negative

- Requires local runtime and health checks
- Requires schema validation for outputs and tool calls
- Local provider availability is environment-dependent

## Notes

The system must never treat HTTP 200 as proof of model usefulness. Output validation remains mandatory.
