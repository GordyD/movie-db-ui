import * as types from './constants'
import { getSearchResults } from './service/movies'

export function searchMovies(searchTerm, page) {
  return (dispatch, getState) => {
    dispatch(searchMoviesRequest(searchTerm))

    getSearchResults(searchTerm, page)
    .then(results => dispatch(searchMoviesSuccess(results)))
    .catch(error => dispatch(searchMoviesFailure(error)))
  }
}

export function searchMoviesRequest(searchTerm) {
  return {
    type: types.SEARCH_MOVIES_REQUEST,
    searchTerm
  }
}

export function searchMoviesSuccess(results) {
  return {
    type: types.SEARCH_MOVIES_SUCCESS,
    results
  }
}

export function searchMoviesFailure(error) {
  return {
    type: types.SEARCH_MOVIES_FAILURE,
    error: error.message
  }
}

export function updateSearchTerm(e) {
  return {
    type: types.UPDATE_SEARCH_TERM,
    searchTerm: e.target.value
  }
}