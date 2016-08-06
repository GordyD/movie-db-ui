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
  let buttonClass = cx({disabled: props.isWorking})

  if (props.isWorking) {
    responseElem = <span>Loading...</span>
  } else  {
    if (props.error) {
      responseElem = <span className='error'>Error: {props.error}</span>
    } else if (props.totalResults >= 0) {
      responseElem = <span className='success'>Success: {props.totalResults} found</span>
    }
  }

  return <div className='SearchBar-container'>
    <div className='response'>{responseElem}</div>
    <input 
      type='text' 
      placeholder='Search for something...'
      name='searchTerm'
      value={props.searchTerm} 
      onChange={e => props.onSearchTermChanged(e)} />
    <button className={buttonClass} disabled={props.isWorking} onClick={() => props.onSearchClicked(props.searchTerm)}>
      Search
    </button>
  </div>
}

/**
 * This is for prop type validation
 */
SearchBar.propTypes = {
  onSearchClicked: PropTypes.func.isRequired,
  onSearchTermChanged: PropTypes.func.isRequired,
  isWorking: PropTypes.bool.isRequired,
  totalResults: PropTypes.number
}

export default SearchBar

