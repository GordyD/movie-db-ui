import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import './MovieList.styl'
import MovieItem from './MovieItem'
import Loader from './Loader'

export default class MovieList extends Component {
  static propTypes = {
    isWorking: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired
  }

  render() {
    // Default content if no results are present
    let contents = <div className='MovieList-empty'>
      <p>No results found!</p>
    </div>

    if (this.props.isWorking) {
      // If we still loading the results then display our 
      // loading animation
      contents = <Loader />
    } else if (this.props.results.length > 0) {
      let results = this.props.results

      // Map each movie object to a MovieItem component
      contents = <ul className='MovieList-container'>
        {results.map((movie, id) => <li key={id}><MovieItem {...movie} /></li>)}
      </ul>
    }
    

    return <div className='MovieList-container'>
      {contents}
    </div>
  }
}