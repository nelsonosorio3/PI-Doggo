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
  GET_BREED_DETAILS,
  ADD_BREED_TO_DATABASE,} = require("../action-types");

const initialState = {
  results: [],
  filterResults: [],
  currentPageResults: [],
  breedDetails: {},
}

function rootReducer (state = initialState, action) {
  switch(action.type){
    case LOAD_RESULTS:
      return{
        ...state,
        results: action.payload
      }
    case LOAD_CURRENT_PAGE:
      return{
        ...state,
        currentPageResults: state.results.filter((result, index) => index >= 8*(action.payload.page-1) && index <8(action.payload.page))
      }
    case FILTER_BY_TEMPERAMENT:
      return{
        ...state,
        results: state.results.filter(result => result?.temperaments?.includes(action.payload.temperament.toLowerCase()))
      }
    case FILTER_BY_FROM_API:
      return{
        ...state,
        results: state.results.filter(result => result.id>500)
      }
    case FILTER_BY_FROM_USER:
      return{
        ...state,
        results: state.results.filter(result => result.id<600)
      }
    case ORDER_BY_ALPHA_ASC:
      return{
        ...state,
        results: state.results.sort((element1, element2) => (element1.name.toLowerCase() > element2.name.toLowerCase()) ? 1 : -1)
      }
    case ORDER_BY_ALPHA_DESC:
      return{
        ...state,
        results: state.results.sort((element1, element2) => (element1.name.toLowerCase() > element2.name.toLowerCase()) ? -1 : 1)
      }
    case ORDER_BY_MIN_TO_MAX_WEIGHT:
      return{
        ...state,
        results: state.results.sort((element1, element2) => (Number(element1.weight.split("-")[0]) > Number(element2.weight.split("-")[0])) ? 1 : -1)
      }
    case ORDER_BY_MAX_TO_MIN_WEIGHT:
      return{
        ...state,
        results: state.results.sort((element1, element2) => (Number(element1.weight.split("-")[1]) > Number(element2.weight.split("-")[1])) ? -1 : 1)
      }
    case GO_TO_FIRST_PAGE:
      return{
        ...state,
        currentPageResults: state.results.filter((result, index) => index >= 8*(action.payload.page-1) && index <8(action.payload.page))
      }
    case GO_TO_LAST_PAGE:
      return{
        ...state,
        currentPageResults: state.results.filter((result, index) => index >= 8*(action.payload.page-1) && index <8(action.payload.page))
      }
    case GO_TO_NEXT_PAGE:
      return{
        ...state,
        currentPageResults: state.results.filter((result, index) => index >= 8*(action.payload.page-1) && index <8(action.payload.page))
      }
    case GO_TO_PREVIOUS_PAGE:
      return{
        ...state,
        currentPageResults: state.results.filter((result, index) => index >= 8*(action.payload.page-1) && index <8(action.payload.page))
      }
    case GO_TO_N_PAGE:
      return{
        ...state,
        currentPageResults: state.results.filter((result, index) => index >= 8*(action.payload.page-1) && index <8(action.payload.page))
      }
    case ADD_BREED_TO_DATABASE:
      return{
        ...state,
        breedDetails: action.payload
      }
    case GET_BREED_DETAILS:
      return{
        ...state,
        breedDetails: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;