import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import configureStore, { history } from './redux/store';
import App from './App';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
