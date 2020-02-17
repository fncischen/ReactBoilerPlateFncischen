import axios from 'axios';
import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import saga from '../Redux/saga.js';

import reducer from '../Redux/reducer.js';

import { stringsRetrieved } from '../Redux/actions';

const key = 'ListOfStringsPage';

export function ListOfStringsPage({ onStringsRetrieved, strings }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    stringsRetrieved();
  });

  return (
    <div>
      <center>
        <h2>List of strings</h2>
        <div className="listOfStrings">
          {
            // axios.get("https://localhost:3000/myApi")
            // .then(res => {console.log(res.data)}).
            // catch(err => {console.log("there is an error")})}
          }
          {strings}
        </div>
      </center>
    </div>
  );
}

function mapStateToProps(state) {
  const { strings } = state;
  // const totalDates = TotalDaysSelector(startDate, endDate)
  return { strings };
}

const mapDispatchToProps = dispatch => ({
  onStringsRetrieved: e => dispatch(stringsRetrieved()),
});

export default connect(
  mapDispatchToProps,
  mapStateToProps,
)(ListOfStringsPage);
