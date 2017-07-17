import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux';

const App = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, {}, composeEnhancers(), applyMiddleware());
  return (
    <Provider store={store}>
      <div>React Starter</div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

