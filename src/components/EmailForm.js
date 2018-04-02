import React from 'react';

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: {value: '', valid: false}
        };
    }

    handleEmailValidation = val => {
        // **validation regex from http://emailregex.com/
        // eslint-disable-next-line
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            .test(val);
    }

    handleChange = e => {
        this.setState({
            emailInput: {
                value: e.target.value,
                valid: this.handleEmailValidation(e.target.value)
            }
        });
        this.props.onChange(e);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.state.emailInput);
    }

    render() {
        return (
            <form>
                <input type="email"
                    className="bb-form-input"
                    placeholder="Enter your email address..."
                    value={this.state.emailInput.value}
                    onChange={this.handleChange}
                />
                <button type="submit"
                    className="bb-btn-submit"
                    onClick={this.handleSubmit}
                    disabled={!this.props.allowSubmit}
                >
                    {this.props.submitButtonText}
                    {/* {this.props.allowSubmit && `Sign me up!`}
                    {!this.props.allowSubmit && `Choose Genres`} */}
                </button>
            </form>
        )
    }
}

export default EmailForm;
