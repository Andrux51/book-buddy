import {createStore} from 'redux';
import {initialState} from './state';
import {types as actionTypes} from './actions';
import * as helpers from './reducer.helpers';

const reducer = (state = initialState, action) => {
    console.log('action', action);

    switch(action.type) {
        case actionTypes.chooseGenre:
            return {
                ...state,
                subscriber: {
                    ...state.subscriber,
                    genresChosen: helpers
                        .handleGenreSelection(state.subscriber.genresChosen, action.genreChosen)
                }
            };
        case actionTypes.updateEmailInput:
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