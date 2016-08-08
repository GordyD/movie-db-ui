import * as types from './constants'
import { getSearchResults, getPopular } from './service/movies'

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

export function getPopularMovies(page) {
  return (dispatch, getState) => {
    dispatch(getPopularMoviesRequest())

    getPopular(page)
    .then(results => dispatch(getPopularMoviesSuccess(results)))
    .catch(error => dispatch(getPopularMoviesFailure(error)))
  }
}

export function getPopularMoviesRequest() {
  return {
    type: types.GET_POPULAR_MOVIES_REQUEST
  }
}

export function getPopularMoviesSuccess(results) {
  return {
    type: types.GET_POPULAR_MOVIES_SUCCESS,
    results
  }
}

export function getPopularMoviesFailure(error) {
  return {
    type: types.GET_POPULAR_MOVIES_FAILURE,
    error: error.message
  }
}

export function updateSearchTerm(e) {
  return {
    type: types.UPDATE_SEARCH_TERM,
    searchTerm: e.target.value
  }
}

export function showMovieDetail(movie) {
  return {
    type: types.SHOW_MOVIE_DETAIL,
    movie
  }
}

export function hideMovieDetail() {
  console.log('wooo')
  return {
    type: types.HIDE_MOVIE_DETAIL
  }
}