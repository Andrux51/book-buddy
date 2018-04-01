import React from 'react';

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: ''
        };
    }

    handleEmailInputChange = (e) => {
        this.setState({emailInput: e.target.value});
    }

    handleSignUpButton = (e) => {
        e.preventDefault();
        console.log(`${this.state.emailInput} signed up, send req to db`);
    }

    render() {
        return (
            <form>
                <input type="text"
                    className="bb-form-input"
                    placeholder="Email"
                    value={this.state.emailInput}
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