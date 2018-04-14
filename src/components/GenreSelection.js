import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        subscriber: state.subscriber
    }
}

class GenreSelection extends React.Component {
    handleChange = e => {
        this.props.dispatch({
            type: "CHOOSE_GENRE",
            genreChosen: {
                name: this.props.genre,
                selected: e.target.checked
            }
        });
    }

    allowGenreSelection = () => {
        return this.props.subscriber.genresChosen.includes(this.props.genre) || this.props.subscriber.genresChosen.length < 4;
    }

    render() {
        return (
            <div className="bb-genre-checkbox">
                <label>
                    <input type="checkbox"
                        className="bb-form-input"
                        onClick={this.handleChange}
                        disabled={!this.allowGenreSelection()}
                    />
                    {this.props.genre}
                </label>
            </div>
        )
    }
}

export default connect(mapStateToProps)(GenreSelection);
