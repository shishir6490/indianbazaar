// frontend/src/pages/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Login from './Login';
import Register from './Register';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="/dashboard" />  {/* Default route */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
