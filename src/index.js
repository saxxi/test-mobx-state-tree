import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { store } from './store/AppStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

const AppContainer = (
  <Provider {...store}>
    <App />
  </Provider>
);

ReactDOM.render(AppContainer, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
