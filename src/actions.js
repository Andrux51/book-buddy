export const types = {
    chooseGenre: "CHOOSE_GENRE",
    updateEmailInput: "UPDATE_EMAIL_INPUT",
};

export const chooseGenre = (genre, checked) => {
    return {
        type: types.chooseGenre,
        genreChosen: {
            name: genre,
            selected: checked
        }
    };
};

export const updateEmailInput = (value, validate) => {
    return {
        type: types.updateEmailInput,
        emailInput: {
            value: value,
            valid: validate(value)
        }
    };
};
