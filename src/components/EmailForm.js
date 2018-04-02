import React from 'react';

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: {value: '', valid: false}
        };
    }

    handleEmailValidation = (e) => {
        // **validation regex from http://emailregex.com/
        // eslint-disable-next-line
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            .test(e.target.value);
    }

    handleEmailInputChange = (e) => {
        this.setState({
            emailInput: {
                value: e.target.value,
                valid: this.handleEmailValidation(e)
            }
        });
    }

    handleSignUpButton = (e) => {
        e.preventDefault();
        if(this.state.emailInput.valid) {
            console.log(`${this.state.emailInput.value} signed up, send req to db`);
        } else {
            console.log('validation failed, color up the input and such');
        }
    }

    render() {
        return (
            <form>
                <input type="email"
                    className="bb-form-input"
                    placeholder="Enter your email address..."
                    value={this.state.emailInput.value}
                    onChange={this.handleEmailInputChange}
                />
                <button type="submit"
                    className="bb-btn-submit"
                    onClick={this.handleSignUpButton}>
                    Sign me up!
                </button>
            </form>
        )
    }
}

export default EmailForm;
