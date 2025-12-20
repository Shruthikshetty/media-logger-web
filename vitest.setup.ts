// vitest.setup.ts
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// This forces Vitest to behave like Jest by clearing the DOM after every test
afterEach(() => {
  cleanup();
});