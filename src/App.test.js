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

const jsx = 
    <Provider store={store}>
        <MemoryRouter>
            <App />
        </MemoryRouter>
    </Provider>

test(`renders without crashing`, () => {
    expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

beforeEach(() => {
    reactRouter = mount(jsx);
    app = reactRouter.find(App).instance();
});

describe(`Main app component`, () => {
    test(`App component works...`, () => {
        expect(typeof app.props).toBe('object');
    });

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
});