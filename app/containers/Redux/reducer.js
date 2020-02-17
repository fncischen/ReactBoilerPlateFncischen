import produce from 'immer';
import {
  ENTERED_STRING,
  PROCESSING_STRING,
  STRING_ADDED,
  STRING_DECLINED,
  CHANGING_STRING,
  RETRIEVE_STRINGS,
} from './constants.js';

// the intent of this reducer to is to change UI state

const iconType = {
  ENTERED: 'entered',
  LOADING: 'loading',
  SUCCESS: 'success',
  DECLINE: 'decline',
};

const initialState = {
  strings: '',
  iconType: null,
  string: '',
  error: null,
};

const homeReducer = (state = initialState, action) => {
  console.log('checking!', action.type);
  switch (action.type) {
    case ENTERED_STRING:
      console.log('entering string');
      state.iconType = iconType.ENTERED;
      state.string = action.string;
      return state;
    case PROCESSING_STRING:
      state.iconType = iconType.LOADING;
      return state;
    case STRING_ADDED:
      console.log('adding string!', state.string);
      state.iconType = iconType.SUCCESS;
      return state;
    case STRING_DECLINED:
      console.log('string declined');
      state.iconType = iconType.DECLINE;
      state.error = action.err;
      return state;
    case CHANGING_STRING:
      console.log('changing string');
      console.log(action.string);
      state.string = action.string;
      return state;
    case RETRIEVE_STRINGS:
      state.strings = action.strings;
    default:
      return state;
  }
};

export default homeReducer;
