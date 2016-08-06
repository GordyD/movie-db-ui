import * as types from './constants'

export const initialState = {
  isWorking: false,
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
        error: null,
        searchTerm: action.searchTerm,
        results: []
      })
    case types.SEARCH_MOVIES_SUCCESS:

      console.log(action)
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
    case types.UPDATE_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm
      })
    default:
      return state
  }
}