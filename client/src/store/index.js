import { createStore, applyMiddleware,  compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const delayedActionMiddleware = storeAPI => next => action => {
  if (action.type ===  "FILTER_BY_TEMPERAMENT" ||
     action.type === "FILTER_BY_FROM_API" || 
     action.type === "FILTER_BY_FROM_USER" ||
     action.type === "GO_TO_N_PAGE") {
    setTimeout(() => {
      next(action)
    }, 500)
    return
  }

  return next(action)
}

const composedEnhancer = compose(applyMiddleware(thunk, delayedActionMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(
  rootReducer,
  composedEnhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);