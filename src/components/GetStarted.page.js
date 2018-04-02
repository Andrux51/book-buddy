import React from 'react';
import EmailForm from './EmailForm';
import GenreSelection from './GenreSelection';

class GetStartedPage extends React.Component {
    constructor(props) {
        super(props);
        document.title = 'Get Started | BookBuddy';

        this.state = {
            genresAvailable: [ // get from API
                'Action', 'Comedy', 'Fantasy', 'Romance', 'Sci-Fi', 'Self-help'
            ]
        }
    }

    handleEmailEntry = e => {
        this.props.updateSubscriber('email', e.target.value);
    }

    handleEmailSubmission = email => {
        if(email.valid) {
            console.log(`${email.value} signed up, send req to db`);

            fetch(new Request('./favicon.ico'), {mode: 'cors'}).then(res => {
                console.log(res);
                return res.blob;
            });
        } else {
            console.log('validation failed, color up the input and such');
        }
    }

    handleGenreSelection = (e, genre, selected) => {
        let genresChosen = this.props.subscriber.genresChosen.slice();

        if(selected) {
            genresChosen.push(genre);
        } else {
            genresChosen = genresChosen.filter(elem => {
                return elem !== genre;
            });
        }

        this.props.updateSubscriber('genresChosen', genresChosen);
    }

    allowGenreSelection = (genre) => {
        return this.props.subscriber.genresChosen.includes(genre) || this.props.subscriber.genresChosen.length < 4;
    }

    allowEmailSubmit = () => {
        return this.props.subscriber.genresChosen.length >= 2
            && this.props.subscriber.email && this.props.subscriber.email.length > 0;
    }

    setSubmitButtonText = () => {
        if(this.allowEmailSubmit()) {
            return `Sign me up!`;
        }
        if(!this.props.subscriber.email && this.props.subscriber.genresChosen.length < 2) {
            return `Choose genres & enter email`;
        }
        if(!this.props.subscriber.email) {
            return `Enter email`;
        }
        if(this.props.subscriber.genresChosen.length < 2) {
            return `Choose Genres above`;
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
                <p>
                    Genres chosen: {this.props.subscriber.genresChosen.length}
                    &nbsp;
                    {this.props.subscriber.genresChosen.length < 2 && `(choose ${2 - this.props.subscriber.genresChosen.length} more!)`}
                </p>
                <div className="bb-checkbox-matrix">
                {
                    this.state.genresAvailable.map((genre, i) => {
                        return <GenreSelection key={genre}
                            genre={genre}
                            allow={this.allowGenreSelection(genre)}
                            handleChange={this.handleGenreSelection}
                        />
                    })
                }
                </div>
                <EmailForm onChange={this.handleEmailEntry}
                    handleSubmit={this.handleEmailSubmission}
                    allowSubmit={this.allowEmailSubmit()}
                    submitButtonText={this.setSubmitButtonText()}
                />
            </div>
        )
    }
}

export default GetStartedPage;
