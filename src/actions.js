export const constants = {
    chooseGenre: "CHOOSE_GENRE",
    updateEmailInput: "UPDATE_EMAIL_INPUT",
};

export const chooseGenre = (checked, genre) => {
    return {
        type: "CHOOSE_GENRE",
        genreChosen: {
            name: genre,
            selected: checked
        }
    };
};

export const updateEmailInput = (value, validate) => {
    return {
        type: constants.updateEmailInput,
        emailInput: {
            value: value,
            valid: validate(value)
        }
    };
};
