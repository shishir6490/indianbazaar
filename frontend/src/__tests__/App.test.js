// frontend/src/__tests__/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

test('renders Dashboard heading', () => {
  const { getByText } = render(
    <Router>
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
  const headingElement = getByText(/dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
