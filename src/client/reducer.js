import * as types from './constants'

export const initialState = {
  isWorking: false,
  movieInView: null,
  error: null,
  searchTerm: '',
  results: [],
  orderByLength: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SEARCH_MOVIES_REQUEST: 
      return Object.assign({}, state, {
        isWorking: true,
        showingPopular: false,
        error: null,
        searchTerm: action.searchTerm,
        results: []
      })
    case types.SEARCH_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isWorking: false,
        results: action.results.results || [],
        totalResults: action.results.total_results,
        totalPages: action.results.total_pages,
        page: action.results.page
      })
    case types.SEARCH_MOVIES_FAILURE: 
      return Object.assign({}, state, {
        isWorking: false,
        error: action.error
      })
    case types.GET_POPULAR_MOVIES_REQUEST: 
      return Object.assign({}, state, {
        isWorking: true,
        showingPopular: true,
        error: null,
        results: []
      })
    case types.GET_POPULAR_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isWorking: false,
        results: action.results.results || [],
        totalResults: action.results.total_results,
        totalPages: action.results.total_pages,
        page: action.results.page
      })
    case types.GET_POPULAR_MOVIES_FAILURE: 
      return Object.assign({}, state, {
        isWorking: false,
        error: action.error
      })
    case types.UPDATE_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm
      })
    case types.SHOW_MOVIE_DETAIL:
      return Object.assign({}, state, {
        movieInView: action.movie
      })
    case types.HIDE_MOVIE_DETAIL:
      console.log('cool')
      return Object.assign({}, state, {
        movieInView: null
      })
    default:
      console.log('errr')
      return state
  }
}