import rootSaga from "./saga/index";
import reducer from "./reducer/index";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from 'redux';

const saga = createSagaMiddleware();
const middlewares = [saga];

export const configStore = () => {
  const enhancer = [applyMiddleware(...middlewares)];
  window.devToolsExtension && enhancer.push(window.devToolsExtension());
  const store = createStore(reducer, {}, compose(...enhancer));
  saga.run(rootSaga);
  return store;
};