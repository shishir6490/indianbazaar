// src/__tests__/App.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this is imported
import App from '../App';

test('renders Dashboard heading', async () => {
  render(<App />);

  await waitFor(() => {
    const headingElement = screen.getByRole('heading', { name: /dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });
});
