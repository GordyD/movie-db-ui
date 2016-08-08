import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import { getPopularMovies } from '../actions'
import AsyncMovieList from './AsyncMovieList'

import './App.styl'

class App extends Component {
  componentDidMount() {
    let { dispatch } = this.props

    dispatch(getPopularMovies(1))
  }

  render() {
    return <div className='App-container'>
      <div className='App-header'>
        <h2>Movie DB UI</h2>
      </div>
      <div className='App-body'>
        <AsyncMovieList/>
      </div>
    </div>
  }
}

export default connect()(App)