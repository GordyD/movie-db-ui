/**
 * For async actions we need three constants for each component part of the process:
 *  - request
 *  - successful response
 *  - failure response
 */
export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST'
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'

export const GET_POPULAR_MOVIES_REQUEST = 'GET_POPULAR_MOVIES_REQUEST'
export const GET_POPULAR_MOVIES_SUCCESS = 'GET_POPULAR_MOVIES_SUCCESS'
export const GET_POPULAR_MOVIES_FAILURE = 'GET_POPULAR_MOVIES_FAILURE'

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'

export const SHOW_MOVIE_DETAIL = 'SHOW_MOVIE_DETAIL'
export const HIDE_MOVIE_DETAIL = 'HIDE_MOVIE_DETAIL'