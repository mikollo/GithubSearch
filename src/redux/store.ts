import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer as any,
  __DEV__
    ? applyMiddleware(sagaMiddleware, logger)
    : applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
