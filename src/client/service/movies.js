import Promise from 'bluebird'
import superagent from 'superagent'
import moment from 'moment'

const get = Promise.promisify(superagent.get)

/**
 * Get search results
 * 
 * @param  {String} searchTerm
 * 
 * @return {Array}
 */
export const getSearchResults = (searchTerm = '', page = 1) => {
  return get(`/api/0/search?query=${searchTerm}&page=${page}`)
  .then(response => response.body)
}



