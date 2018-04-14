import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        emailInput: state.emailInput,
        subscriber: state.subscriber
    };
}

class EmailForm extends React.Component {
    handleEmailValidation = val => {
        // **validation regex from http://emailregex.com/
        // eslint-disable-next-line
        return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            .test(val);
    }

    handleChange = e => {
        this.props.dispatch({
            type: "UPDATE_EMAIL_INPUT",
            emailInput: {
                value: e.target.value,
                valid: this.handleEmailValidation(e.target.value)
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.props.emailInput.valid) {
            console.log(`${this.props.subscriber.email} signed up, send req to db`);
            console.log(this.props.subscriber);

            fetch(new Request('./favicon.ico'), {mode: 'cors'}).then(res => {
                console.log(res);
                return res.blob;
            });
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
                    value={this.props.emailInput.value}
                    onChange={this.handleChange}
                />
                <button type="submit"
                    className="bb-btn-submit"
                    onClick={this.handleSubmit}
                    disabled={!this.props.allowSubmit}
                >
                    {this.props.submitButtonText}
                </button>
            </form>
        )
    }
}

export default connect(mapStateToProps)(EmailForm);
