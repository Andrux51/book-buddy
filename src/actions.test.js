import * as actions from './actions';

// pattern seen in https://redux.js.org/recipes/writing-tests
// this seems to be exceedingly low in value...
describe('actions', () => {
    test('choose a genre', () => {
        const genre = 'action';
        const checked = true;

        const expectedAction = {
            type: actions.types.chooseGenre,
            genreChosen: {
                name: genre,
                selected: checked
            }
        };

        expect(actions.chooseGenre(genre, checked)).toEqual(expectedAction);
    });
    
    test('update email input', () => {
        const value = 'gomer.pyle@usmc.mil';
        const validate = jest.fn().mockReturnValue(true);

        const expectedAction = {
            type: actions.types.updateEmailInput,
            emailInput: {
                value: value,
                valid: true
            }
        };

        expect(actions.updateEmailInput(value, validate)).toEqual(expectedAction);
        expect(validate.mock.calls.length).toBe(1);
    });
});
