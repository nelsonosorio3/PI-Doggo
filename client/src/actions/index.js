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


export function loadResults(breed){
  return function(dispatch){
    if(breed.name){
      return fetch(`http://localhost:3001/dogs?name=${breed.name}`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: LOAD_RESULTS, payload: json});
      });
    }
    else{
      return fetch(`http://localhost:3001/dogs`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: LOAD_RESULTS, payload: json});
      });
    }
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


export function getDetails(id){
  return function(dispatch){
    return fetch(`http://localhost:3001/dogs/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({type: GET_BREED_DETAILS, payload: json});
      });
  };
};


export function addBreed(data){
  return function (dispatch){
    return fetch("http://localhost:3001/dog",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: data.name,
                            height: `${data.minHeight} - ${data.maxHeight}`,
                            weight: `${data.minWeight} - ${data.maxWeight}`,
                            life_span: `${data.minLife_span} - ${data.maxLife_span}`,
                            temperaments: data.temperaments.split(",")})
    })
    .then(response => response.json())
    .then(json => {
      dispatch({type: ADD_BREED_TO_DATABASE, payload: json});
    })
  }
}