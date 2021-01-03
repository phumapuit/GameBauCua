import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './styles/styles'

import { createStore } from 'redux'     // tạo store
import { Provider } from 'react-redux' // kết nối react và redux
import rootReducer from './redux/reducers'


// câu lệnh tạo store 
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
