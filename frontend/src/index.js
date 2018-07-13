import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import App from './main/app';
import reducers from './main/reducers'
import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
        && window.window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
