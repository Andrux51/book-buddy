import React from 'react';
import {Link} from 'react-router-dom';

export default class WelcomePage extends React.Component {
    componentWillMount() {
        document.title = 'Welcome | BookBuddy';
    }

    render() {
        return (
            <div>
                <p className="App-intro bb-description">
                    <strong>Upgrade your inbox</strong> with daily deals on free and discounted ebooks
                    across a multitude of genres. Discover new authors both traditionally
                    and indepedently published.
                    <br /><br />
                    Choose the genres that appeal most
                    to you, and we'll curate an extra choice here and there to
                    help you discover new stuff, too.
                </p>
                <button type="button" className="bb-btn-route">
                    <Link to="/get-started">Get Started</Link>
                </button>
            </div>
        )
    }
}
