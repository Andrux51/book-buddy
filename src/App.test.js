import React from 'react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import WelcomePage from './components/Welcome.page';
import GetStartedPage from './components/GetStarted.page';

let reactRouter, app;

test(`renders without crashing`, () => {
  const component = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

beforeEach(() => {
  reactRouter = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  app = reactRouter.find(App).instance();
});

describe(`Main app component`, () => {
  beforeEach(() => {
  });

  test(`find links`, () => {
      // two ways to write the same property
      expect(reactRouter.find({href: '/'})).toHaveLength(1);
      expect(reactRouter.find(`a[href="/get-started"]`)).toHaveLength(1);
  });

  // testing react-router sucks, but this was more painful than it should have been
  test(`GetStartedPage works...`, () => {
    reactRouter.find({href: '/get-started'}).simulate('click', {button: 0});

    expect(reactRouter.find(`strong`).text()).toBe(`2-4`);
  });

  test(`subscriber object is built`, () => {
    expect(typeof app.state.subscriber.email).toBe('string');
    expect(Array.isArray(app.state.subscriber.genresChosen)).toBe(true);
    expect(typeof app.state.subscriber.name).toBe('string');
  });

  test(`update subscriber`, () => {
    expect(typeof app.state.subscriber).toBe('object');
  });
});
