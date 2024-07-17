// frontend/src/__tests__/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../pages/App';

test('renders Dashboard heading', () => {
  const { getByText, debug } = render(
    <Router>
      <App />
    </Router>
  );
  
  // Debugging the rendered output
  debug();

  // More flexible matching function
  const headingElement = getByText((content, element) => {
    return element.tagName.toLowerCase() === 'h1' && content.match(/dashboard/i);
  });

  expect(headingElement).toBeInTheDocument();
});
