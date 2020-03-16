import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import { MakeStore } from 'next-redux-wrapper';
import reducers, { initialState } from './ducks/rootReducers';

const dev: boolean = process.env.NODE_ENV !== 'production';

const { composeWithDevTools } = require('redux-devtools-extension');

export type RootState = ReturnType<typeof reducers>;

export type Store = ReduxStore<RootState>;

/**
 * @param initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 */

const makeStore: MakeStore = (state = initialState): Store => {
  const middlewares = [thunkMiddleware];
  const compose = dev
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);
  return createStore(reducers, state, compose);
};

export default makeStore;
