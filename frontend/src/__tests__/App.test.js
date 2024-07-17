// frontend/src/__tests__/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from '../pages/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
