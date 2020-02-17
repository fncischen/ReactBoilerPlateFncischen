/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { render } from 'react-testing-library';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Input from './Input.js';
import Form from './Form';
import saga from '../Redux/saga.js';

import reducer from '../Redux/reducer.js';

import { stringAdded, stringChanged } from '../Redux/actions';

const key = 'home';

export function HomePage({ onStringAdded, onStringChanged, string }) {
  console.log(saga);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  // conditional rendering

  // use redux life cycles to keep track of button lifecycle
  return (
    <div>
      <h1>
        Please enter the string you'd like to add to our list.
        <Form onSubmit={onStringAdded}>
          <center>
            <Input
              id="string"
              type="text"
              placeholder="Enter your string here"
              value={string}
              onChange={onStringChanged}
            />
            <button> Press </button>
          </center>
        </Form>
      </h1>
    </div>
  );
}

HomePage.propTypes = {
  onStringAdded: PropTypes.func,
  onStringChanged: PropTypes.func,
};

// map state to props
function mapStateToProps(state) {
  const { string } = state;
  // const totalDates = TotalDaysSelector(startDate, endDate)
  return { string };
}

// map dispatch to props
const mapDispatchToProps = dispatch => ({
  // when the string is added
  onStringAdded: e => {
    e.preventDefault();
    dispatch(stringAdded());
  },
  onStringChanged: e => dispatch(stringChanged(e.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
