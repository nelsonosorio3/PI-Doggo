const {
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_FROM_API,
  FILTER_BY_FROM_USER,
  GO_TO_N_PAGE} = require("../action-types");

export const delayedActionMiddleware = storeAPI => next => action => {
  if (action.type ===  FILTER_BY_TEMPERAMENT ||
     action.type === FILTER_BY_FROM_API || 
     action.type === FILTER_BY_FROM_USER ||
     action.type === GO_TO_N_PAGE) {
    setTimeout(() => {
      next(action)
    }, 1000)
    return
  }

  return next(action)
}