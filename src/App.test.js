import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {store} from './reducer';
import App from './App';
import WelcomePage from './components/Welcome.page';
import GetStartedPage from './components/GetStarted.page';

let reactRouter, app;

beforeEach(() => {
    reactRouter = mount(
        <Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>
    );
    app = reactRouter.find(App).instance();
});

test(`renders without crashing`, () => {
    const component = renderer.create(
        <Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

describe(`Main app component`, () => {
    test(`find links`, () => {
        // two ways to write the same property
        expect(reactRouter.find({href: '/'})).toHaveLength(1);
        expect(reactRouter.find(`a[href="/get-started"]`)).toHaveLength(1);
    });

    test(`WelcomePage is displayed at first`, () => {
        expect(reactRouter.find(WelcomePage)).toHaveLength(1);
    });

    test(`GetStartedPage link works...`, () => {
        // {button: 0} is the key to this whole thing working
        reactRouter.find({href: '/get-started'}).simulate('click', {button: 0});

        expect(reactRouter.find(WelcomePage)).toHaveLength(0);
        expect(reactRouter.find(GetStartedPage)).toHaveLength(1);
    });

    test(`App component works...`, () => {
        expect(typeof app.props).toBe('object');
    });
});