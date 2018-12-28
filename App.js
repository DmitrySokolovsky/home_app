/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { appStore } from './src/store';
import { Entry } from './src/components/entry';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={appStore}>
        <Entry />
      </Provider>
    );
  }
}


