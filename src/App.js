import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import WelcomePage from './components/Welcome.page';
import GetStartedPage from './components/GetStarted.page';

const mapStateToProps = (state) => {
  return {
    subscriber: state.subscriber
  };
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src="http://placehold.it/80x80?text=logo" className="App-logo" alt="logo" />
            </Link>
            <h1 className="App-title">Welcome to BookBuddy</h1>
          </header>
          <div>
            <Route
              exact
              path="/"
              component={WelcomePage}
            />
            <Route
              path="/get-started"
              component={GetStartedPage}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
