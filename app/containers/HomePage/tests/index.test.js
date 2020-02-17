import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { onStringChanged, onStringAdded } from '';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <HomePage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should add a string to the server if not empty', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage
            string="Not Empty"
            onStringChanged={() => {}}
            onStringAdded={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onStringAdded if string is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <HomePage onStringChanged={() => {}} onStringAdded={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });
});
