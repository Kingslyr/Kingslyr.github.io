import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EnviroCore landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /recover the environmental platform/i })).toBeDefined();
  expect(screen.getByRole('link', { name: /explore capabilities/i })).toBeDefined();
});
