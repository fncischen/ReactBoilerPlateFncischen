import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_STRINGS, STRING_ADDED } from './constants';
import { selectedString } from './selectors.js';

// determine which actions the saga watcher will watch for from
import { stringAdded, stringDeclined, stringsRetrieved } from './actions.js';
// in this case, our saga should watch for any server related calls
export function* addString() {
  console.log('add string saga');
  // select string from store
  const requestURL = 'https://localhost:3000/myApi';
  const string = yield select(selectedString);

  // Creates an Effect description that instructs the
  // middleware to schedule the dispatching of an action to the store.
  // This dispatch may not be immediate since other tasks might lie ahead
  // in the saga task queue or still be in progress.

  try {
    // we need the request url first
    // / https://github.com/react-boilerplate/react-boilerplate/issues/436

    const postRequest = yield call(request, requestURL, { string }, 'POST');
    // const strings = yield call(request, requestURL);
    // console.log('list of strings ', strings);
    // console.log(postRequest);
  } catch (err) {
    yield put(stringDeclined(err));
  }
}

export function* getStrings() {
  const requestURL = 'https://localhost:3000/myApi';
  console.log('trying to get strings through saga');
  try {
    // note that this does not use axios or a similar library. use utils/request
    const strings = yield call(request, requestURL);
    yield put(stringsRetrieved(strings));
  } catch (err) {
    yield put(stringDeclined(err));
  }
}

// saga watcher used to show loading indicator after the strings have been retrived

export default function* sagaMan() {
  console.log('our root saga');
  yield takeLatest(STRING_ADDED, addString);
  yield takeLatest(LOAD_STRINGS, getStrings);
}
