import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'

import { 
  searchMovies, 
  updateSearchTerm, 
  getPopularMovies, 
  showMovieDetail, 
  hideMovieDetail 
} from '../actions'

class AsyncMovieList extends Component {
  render() {
    let { 
      isWorking,
      showingPopular,
      movieInView,
      searchTerm,
      results, 
      totalResults,
      error,
      onSearchClicked,
      onSearchTermChanged,
      onGetPopularClicked,
      onShowMovieDetail,
      onHideMovieDetail
    } = this.props
    
    return <div>
      <SearchBar 
        isWorking={isWorking} 
        showingPopular={showingPopular}
        results={results}
        totalResults={totalResults} 
        error={error} 
        searchTerm={searchTerm}
        onSearchTermChanged={onSearchTermChanged}
        onGetPopularClicked={onGetPopularClicked}
        onSearchClicked={onSearchClicked} 
      />
      <MovieList 
        isWorking={isWorking} 
        results={results}
        movieInView={movieInView}
        onShowMovieDetail={onShowMovieDetail}
        onHideMovieDetail={onHideMovieDetail}
      />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    results: state.results,
    totalResults: state.totalResults,
    isWorking: state.isWorking,
    showingPopular: state.showingPopular,
    movieInView: state.movieInView,
    error: state.error,
    orderByLength: state.orderByLength
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClicked: (searchTerm, page) => dispatch(searchMovies(searchTerm, page)),
    onGetPopularClicked: (page) => dispatch(getPopularMovies(page)),
    onSearchTermChanged: (e) => dispatch(updateSearchTerm(e)),
    onShowMovieDetail: (movie) => dispatch(showMovieDetail(movie)),
    onHideMovieDetail: () => dispatch(hideMovieDetail())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncMovieList)


