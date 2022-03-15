import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import allReducers from './Reducers/index';

const storeS=createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Index = () => {

  return (
    <>
    <Provider store={storeS}>
      <App/>
    </Provider>
    </>
  );
}

ReactDOM.render(<Index/>,document.getElementById('root'));
