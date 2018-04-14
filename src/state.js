export const initialState = {
    subscriber: {
        email: '',
        genresChosen: [],
        name: ''
    },
    emailInput: {
        value: '',
        valid: false
    },
    genresAvailable: [ // get from API
        'Action', 'Comedy', 'Fantasy', 'Romance', 'Sci-Fi', 'Self-help'
    ]
};