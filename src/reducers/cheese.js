import {FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  if (action.type === FETCH_CHEESES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }

  if (action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cheeses: action.cheeses
    });
  }

  if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state
}