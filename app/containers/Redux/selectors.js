// the selector is where you add detail regarding the string depending on
// the characteristics of the string provided

import { createSelector } from 'reselect';

// lets use the selector to search for a string among a list of strings :)

const selectedString = state => state.string;

export { selectedString };
