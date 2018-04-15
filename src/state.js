export const initialState = {
    emailInput: {
        value: '',
        valid: false
    },
    genresAvailable: [ // get from API
        'Action', 'Comedy', 'Fantasy', 'Romance', 'Sci-Fi', 'Self-help'
    ],
    subscriber: {
        email: '',
        genresChosen: [],
        name: ''
    },
};
