import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1';
import {createStore} from 'redux';
import counterReducer from './store/counterReducer';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(counterReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>
  </React.StrictMode>
);
