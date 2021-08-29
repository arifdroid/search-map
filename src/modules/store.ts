import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'src/modules/reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootSaga from 'src/modules/saga';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

let store;

export function configureStore(preloadedState?) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ].filter(Boolean);

  store = createStore(
    createRootReducer(history),
    // createRootReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );  

  sagaMiddleware.run(rootSaga);
  return store;
}

export function getHistory() {
  return history;
}

export default function getStore() {
  return store;
}
