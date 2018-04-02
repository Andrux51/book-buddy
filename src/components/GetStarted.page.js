import React from 'react';
// import {
//     Link
// } from 'react-router-dom';
import EmailForm from './EmailForm';

class GetStartedPage extends React.Component {
    constructor(props) {
        super(props);

        document.title = 'Get Started | BookBuddy';

        this.state = {
            genres: []
        }
    }

    render() {
        return (
            <div>
                <p className="bb-description">
                    Choose <strong>2-4</strong> genres from the list below. You can choose more later,
                    but let's start with something reasonable so your first emails are
                    a bit easier to swallow.
                </p>
                <EmailForm />
            </div>
        )
    }
}

export default GetStartedPage;
