import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'

import { searchMovies, updateSearchTerm } from '../actions'

class AsyncMovieList extends Component {
  render() {
    let { 
      isWorking,
      searchTerm,
      results, 
      totalResults,
      error,
      onSearchClicked,
      onSearchTermChanged
    } = this.props
    
    return <div>
      <SearchBar 
        isWorking={isWorking} 
        totalResults={totalResults} 
        error={error} 
        searchTerm={searchTerm}
        onSearchTermChanged={onSearchTermChanged}
        onSearchClicked={onSearchClicked} 
      />
      <MovieList isWorking={isWorking} results={results}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    results: state.results,
    totalResults: state.totalResults,
    isWorking: state.isWorking,
    error: state.error,
    orderByLength: state.orderByLength
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClicked: (searchTerm) => dispatch(searchMovies(searchTerm)),
    onSearchTermChanged: (e) => dispatch(updateSearchTerm(e))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncMovieList)


