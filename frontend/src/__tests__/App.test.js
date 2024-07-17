// frontend/src/__tests__/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../pages/App';

test('renders Dashboard heading', () => {
  const { getByText } = render(
    <Router>
      <Route path="/dashboard" component={App} />
    </Router>
  );
  const headingElement = getByText(/dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
