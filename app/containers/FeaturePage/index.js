/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

import axios from 'axios';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>List of Strings</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        List of Strings
      </H1>
      <div>
        {console.log(axios.get("http://localhost:4000/myApi").then(res => res))}
        {axios.get("http://localhost:4000/myApi").then(res => {return res.data}).catch(console.log("No string!"))}
      </div>
    </div>
  );
}
