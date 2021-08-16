const {LOAD_RESULTS,
  LOAD_CURRENT_PAGE,
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_FROM_API,
  FILTER_BY_FROM_USER,
  ORDER_BY_ALPHA_ASC,
  ORDER_BY_ALPHA_DESC,
  ORDER_BY_MIN_TO_MAX_WEIGHT,
  ORDER_BY_MAX_TO_MIN_WEIGHT,
  GO_TO_FIRST_PAGE,
  GO_TO_LAST_PAGE,
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  GO_TO_N_PAGE,
  ADD_BREED_TO_DATABASE,} = require("../action-types");

const initialState = {
  results: [],
  currentPageResults = [],
  breedDetails = {},
}

const dogs = (state = initialState, action) =>{
  switch(action.type){
    case LOAD_RESULTS:
    case LOAD_CURRENT_PAGE:
    case FILTER_BY_TEMPERAMENT:
    case FILTER_BY_FROM_API:
    case FILTER_BY_FROM_USER:
    case ORDER_BY_ALPHA_ASC:
    case ORDER_BY_ALPHA_DESC:
    case ORDER_BY_MIN_TO_MAX_WEIGHT:
    case ORDER_BY_MAX_TO_MIN_WEIGHT:
    case GO_TO_FIRST_PAGE:
    case GO_TO_LAST_PAGE:
    case GO_TO_NEXT_PAGE:
    case GO_TO_PREVIOUS_PAGE:
    case GO_TO_N_PAGE:
    case ADD_BREED_TO_DATABASE:
    default:
      return state;
  }
};

export default dogs;