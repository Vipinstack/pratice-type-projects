import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'; //load store
import { Provider } from 'react-redux'; //load Provider

let initialData={count:0};
function reducer(state=initialData,actions){ //create reducer
    console.log(state);
    switch (actions.type) {
      case 'increment': return{count:state.count+actions.data};
      case 'decrement': return{count:state.count-actions.data};    
      default : return state
        
    }
}

const store=createStore(reducer);//create store.
// store.dispatch({type:'increment',data:2})//dispatch actions.
// store.dispatch({type:'increment',data:2})
// store.dispatch({type:'decrement',data:1})
// store.dispatch({type:'increment',data:2})

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
