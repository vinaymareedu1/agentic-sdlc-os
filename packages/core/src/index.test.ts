import { describe, expect, it } from 'vitest';
import { coreStatus } from './index.js';

describe('core package foundation', () => {
  it('exposes its foundation status', () => {
    expect(coreStatus).toBe('core-foundation-ready');
  });
});
