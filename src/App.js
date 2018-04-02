import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import WelcomePage from './components/Welcome.page';
import GetStartedPage from './components/GetStarted.page';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subscriber: {
        email: '',
        genresChosen: [],
        name: ''
      }
    };
  }

  updateSubscriber = (key, val) => {
    let subscriber = Object.assign({}, this.state.subscriber);

    subscriber[key] = val;

    this.setState({ subscriber });
  }

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
            <Route path="/"
              exact
              component={WelcomePage}
            />
            <Route path="/get-started"
              render={() =>
                <GetStartedPage
                  subscriber={this.state.subscriber}
                  updateSubscriber={this.updateSubscriber}
                />
              }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
