

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error
})

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest())
  return fetch(`https://cheesehub.herokuapp.com/api/cheeses`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(cheeses => {
    dispatch(fetchCheesesSuccess(cheeses));
  }).catch(err => {
    dispatch(fetchCheesesError(err));
  });
}

