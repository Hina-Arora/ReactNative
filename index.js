/** @format */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';import App from './App';

// import Login from './src/pages/Login';
import {name as appName} from './app.json';

// export default class index extends Component {
//
//   render() {
//     return (
//       <Login />
//     );
//   }
// }
AppRegistry.registerComponent(appName, () => App);
