import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        subscriber: state.subscriber
    }
}

class GenreSelection extends React.Component {
    handleChange = e => {
        this.props.dispatch(actions.chooseGenre(e.target.checked, this.props.genre));
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
