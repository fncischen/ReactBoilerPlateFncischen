import {
  ENTERED_STRING,
  PROCESSING_STRING,
  STRING_ADDED,
  STRING_DECLINED,
  CHANGING_STRING,
  LOAD_STRINGS,
  RETRIEVE_STRINGS,
} from './constants.js';

export function enteredString(string) {
  return {
    type: ENTERED_STRING,
    string,
  };
}

export function stringChanged(string) {
  return {
    type: CHANGING_STRING,
    string,
  };
}

export function processingString(string) {
  return {
    type: PROCESSING_STRING,
    string,
  };
}

export function stringAdded(string) {
  return {
    type: STRING_ADDED,
    string,
  };
}

export function stringsLoading() {
  return {
    type: LOAD_STRINGS,
  };
}

export function stringsRetrieved(strings) {
  return {
    type: RETRIEVE_STRINGS,
    strings,
  };
}

export function stringDeclined(err) {
  return {
    type: STRING_DECLINED,
    err,
  };
}
