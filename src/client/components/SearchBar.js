import React, { PropTypes } from 'react'
import moment from 'moment'
import cx from 'classnames'

import './SearchBar.styl'

/**
 * This is a stateless functional component. Because we do not need
 * to store any internal state in this component we can just create
 * a component that renders based on what it is passed as props.
 */
const SearchBar = (props) => {
  let responseElem = null
  let popularButtonClass = cx({disabled: props.isWorking})
  let searchButtonClass = cx('searchButton', {disabled: props.isWorking})

  if (props.isWorking) {
    responseElem = <span>{props.showingPopular ? 'Loading most popular...' : `Searching for '${props.searchTerm}' ...`}</span>
  } else  {
    if (props.error) {
      responseElem = <span className='error'>Error: {props.error}</span>
    } else if (props.totalResults >= 0) {
      if (props.showingPopular) {
        responseElem = <span className='success'>Showing top {props.results.length} movies</span>
      } else if (props.totalResults > props.results.length) {
        responseElem = <span className='success'>Showing first {props.results.length} of {props.totalResults} movies matching {props.searchTerm}</span>
      } else {
        responseElem = <span className='success'>Showing all {props.results.length} movies matching {props.searchTerm}</span>
      } 
    }
  }

  return <div className='SearchBar-container'>
    <input 
      className='searchBox'
      type='text' 
      placeholder='Search for a movie...'
      name='searchTerm'
      value={props.searchTerm} 
      onChange={e => props.onSearchTermChanged(e)} />
    <button className={searchButtonClass} disabled={props.isWorking} onClick={() => props.onSearchClicked(props.searchTerm)}>
      <i className="fa fa-search" aria-hidden="true"></i>
    </button>

    <button className={popularButtonClass} disabled={props.isWorking} onClick={() => props.onGetPopularClicked(1)}>
      Show Most Popular
    </button>

    <div className='response'>{responseElem}</div>
  </div>
}

/**
 * This is for prop type validation
 */
SearchBar.propTypes = {
  onSearchClicked: PropTypes.func.isRequired,
  onGetPopularClicked: PropTypes.func.isRequired,
  onSearchTermChanged: PropTypes.func.isRequired,
  isWorking: PropTypes.bool.isRequired,
  totalResults: PropTypes.number,
  results: PropTypes.array
}

export default SearchBar

