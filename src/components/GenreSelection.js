import React from 'react';

class GenreSelection extends React.Component {
    handleChange = e => {
        this.props.handleChange(e, this.props.genre, e.target.checked);
    }

    render() {
        return (
            <div className="bb-genre-checkbox">
                <label>
                    <input type="checkbox"
                        className="bb-form-input"
                        onClick={this.handleChange}
                        disabled={!this.props.allow}
                    />
                    {this.props.genre}
                </label>
            </div>
        )
    }
}

export default GenreSelection;
