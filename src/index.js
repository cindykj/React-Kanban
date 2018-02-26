import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/'


const boundCompose = compose.bind(null, applyMiddleware(thunk));
const store = createStore(
  reducers, //pass
  window.__REDUX_DEVTOOLS_EXTENSION__ ? boundCompose(window.__REDUX_DEVTOOLS_EXTENSION__()) : boundCompose() //compose is used to group things together so it is just one arg
);

ReactDOM.render(
  <Provider store={store}>
  <App /> 
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();