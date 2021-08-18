import { createStore, applyMiddleware,  compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const composedEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(
  rootReducer,
  composedEnhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);