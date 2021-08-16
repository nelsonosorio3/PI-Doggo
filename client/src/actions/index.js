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

export function loadResults(breed){
  return function(results){
    return fetch("http://localhost:3001")
      .then(response => response.json())
      .then(json => {
        results({type: LOAD_RESULTS, payload: json});
      });
  };
};

export function loadCurrentPage(payload){
  return {type: LOAD_CURRENT_PAGE, payload};
};


export function filterTemperament(payload){
  return {type: FILTER_BY_TEMPERAMENT, payload};
};

export function filterApi(payload){
  return {type: FILTER_BY_FROM_API, payload};
};

export function filterUser(payload){
  return {type: FILTER_BY_FROM_USER, payload};
};


export function orderAlphaAsc(payload){
  return {type: ORDER_BY_ALPHA_ASC, payload};
};

export function orderAlphaDesc(payload){
  return {type: ORDER_BY_ALPHA_DESC, payload};
};

export function oderMinToMaxWeight(payload){
  return {type: ORDER_BY_MIN_TO_MAX_WEIGHT, payload};
};

export function oderMaxToMinWeight(payload){
  return {type: ORDER_BY_MAX_TO_MIN_WEIGHT, payload};
};


export function goFirst(payload){
  return {type: GO_TO_FIRST_PAGE, payload};
};

export function goLast(payload){
  return {type: GO_TO_LAST_PAGE, payload};
};

export function goNext(payload){
  return {type: GO_TO_NEXT_PAGE, payload};
};

export function goPrevious(payload){
  return {type: GO_TO_PREVIOUS_PAGE, payload};
};

export function goN(payload){
  return {type: GO_TO_N_PAGE, payload};
};

export function addBreed(payload){
  return {type: ADD_BREED_TO_DATABASE, payload};
};