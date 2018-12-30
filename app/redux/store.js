import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Analytics with redux-beacon
import rootReducer from './reducer';

const middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

export default store;
