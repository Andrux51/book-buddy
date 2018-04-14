import {createStore} from 'redux';
import {initialState} from './state';
import * as ReducerHelpers from './reducer.helpers';

const reducer = (state = initialState, action) => {
    console.log('action', action);

    switch(action.type) {
        case "CHOOSE_GENRE":
            return {
                ...state,
                subscriber: {
                    ...state.subscriber,
                    genresChosen: ReducerHelpers
                        .handleGenreSelection(state.subscriber.genresChosen, action.genreChosen)
                }
            };
        case "UPDATE_SUBSCRIBER":
            return {
                ...state,
                subscriber: action.subscriber
            }
        case "UPDATE_EMAIL_INPUT":
            return {
                ...state,
                subscriber: {
                    ...state.subscriber,
                    email: action.emailInput.value
                },
                emailInput: action.emailInput
            }
        default:
            break;
    }
    return Object.assign({}, state);
}

export const store = createStore(reducer,
    // enable Redux Devtools Chrome extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);