// frontend/src/__tests__/App.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../pages/App';

test('renders Dashboard heading', async () => {
  const { getByRole, debug } = render(
    <Router>
      <App />
    </Router>
  );

  // Debugging the rendered output
  debug();

  // Wait for the Dashboard component to be rendered
  await waitFor(() => {
    const headingElement = getByRole('heading', { name: /dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });
});
