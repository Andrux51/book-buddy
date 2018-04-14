import React from 'react';
import {connect} from 'react-redux';
import EmailForm from './EmailForm';
import GenreSelection from './GenreSelection';

const mapStateToProps = (state) => {
    return {
        subscriber: state.subscriber,
        emailInput: state.emailInput,
        genresAvailable: state.genresAvailable
    }
}

class GetStartedPage extends React.Component {
    componentWillMount() {
        document.title = 'Get Started | BookBuddy'; 
    }

    allowFormSubmit = () => {
        if(!this.props.emailInput.valid) {
            return false;
        }
        if(!(this.props.subscriber.genresChosen.length >= 2
            && this.props.subscriber.email && this.props.subscriber.email.length > 0)) {
            return false;
        }
        return true;
    }

    setSubmitButtonText = () => {
        if(this.allowFormSubmit()) {
            return `Sign me up!`;
        }
        if(!this.props.emailInput.valid && this.props.subscriber.genresChosen.length < 2) {
            return `Choose genres & enter email`;
        }
        if(!this.props.emailInput.valid) {
            return `Enter email`;
        }
        if(this.props.subscriber.genresChosen.length < 2) {
            return `Choose Genres above`;
        }
        return `Sign Up`;
    }

    render() {
        return (
            <div>
                <p className="bb-description">
                    Choose <strong>2-4</strong> genres from the list below. You can choose more later,
                    but let's start with something reasonable so your first emails are
                    a bit easier to swallow.
                </p>
                <p>
                    Genres chosen: {this.props.subscriber.genresChosen.length}
                    &nbsp;
                    {this.props.subscriber.genresChosen.length < 2 && `(choose ${2 - this.props.subscriber.genresChosen.length} more!)`}
                </p>
                <div className="bb-checkbox-matrix">
                {
                    this.props.genresAvailable.map((genre, i) => {
                        return <GenreSelection
                            key={genre}
                            genre={genre}
                        />
                    })
                }
                </div>
                <EmailForm
                    handleSubmit={this.handleFormSubmission}
                    allowSubmit={this.allowFormSubmit()}
                    submitButtonText={this.setSubmitButtonText()}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(GetStartedPage);
