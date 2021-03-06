const {LOAD_RESULTS,
  LOAD_CURRENT_PAGE,
  FILTER_BY_TEMPERAMENT,
  FILTER_BY_FROM_API,
  FILTER_BY_FROM_USER,
  ORDER_BY_ALPHA_ASC,
  ORDER_BY_ALPHA_DESC,
  ORDER_BY_MIN_TO_MAX_WEIGHT,
  ORDER_BY_MAX_TO_MIN_WEIGHT,
  GO_TO_N_PAGE,
  GET_BREED_DETAILS,
  ADD_BREED_TO_DATABASE,
  BREED_NOT_ADDED_TO_DATABASE} = require("../action-types");

//fetch data from server
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

//filter actions
export function filterTemperament(payload){
  return function(delayedActionMiddleware){
    if(payload.temperament !== "") return delayedActionMiddleware({type: FILTER_BY_TEMPERAMENT, payload});
  }
  
};

export function filterApi(payload){
  return function(delayedActionMiddleware){
    if(!payload.database) return delayedActionMiddleware({type: FILTER_BY_FROM_API, payload});
  }
  
};

export function filterUser(payload){
  return function(delayedActionMiddleware){
    if(!payload.userAdded) return delayedActionMiddleware({type: FILTER_BY_FROM_USER, payload});
  }
};

//Order actions
export function orderAlphaAsc(){
  return {type: ORDER_BY_ALPHA_ASC};
};

export function orderAlphaDesc(){
  return {type: ORDER_BY_ALPHA_DESC};
};

export function orderMinToMaxWeight(){
  return {type: ORDER_BY_MIN_TO_MAX_WEIGHT};
};

export function orderMaxToMinWeight(){
  return {type: ORDER_BY_MAX_TO_MIN_WEIGHT};
};

// Pagination
export function goN(payload){
  return {type: GO_TO_N_PAGE, payload};
};

// detail of specific
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
    if(data.name && data.minHeight && data.maxHeight && data.minWeight && data.maxWeight && data.minLife_span && data.maxLife_span){
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
                              temperaments: data.temperament?.split(",")})
      })
      .then(response => response.json())
      .then(json => {
        dispatch({type: ADD_BREED_TO_DATABASE, payload: json})
      })
    }
    else{
      dispatch({type: ADD_BREED_TO_DATABASE, payload: "noCreatedName"})
    }
    
    
    
  }
}
export function breedNotAdded(){
  return {type: BREED_NOT_ADDED_TO_DATABASE}
}