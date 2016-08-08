import React, { PropTypes } from 'react'
import moment from 'moment'
import cx from 'classnames'

import './MovieItem.styl'

/**
 * This is a stateless functional component. Because we do not need
 * to store any internal state in this component we can just create
 * a component that renders based on what it is passed as props.
 */
const MovieItem = (props) => {
  let movieInViewContainerClass = cx('MovieInView-container', { 
    visible: (props.movieInView && props.movieInView.id === props.id)
  })
  let imageElem = <div 
    className='noImage' 
    onClick={() => props.onShowMovieDetail(props)}>
    No Image
  </div>
  if (props.poster_path) {
    imageElem = <img 
      alt={props.original_title}
      onClick={() => props.onShowMovieDetail(props)}
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.poster_path}`} 
    />
  }
  return <div className='MovieItem-container'>
    {imageElem}
    <h4>{props.original_title} ({moment(props.release_date).format('YYYY')})</h4>
    <div className={movieInViewContainerClass} onClick={() => props.onHideMovieDetail()}>
      {imageElem}
      <h2>{props.original_title} ({moment(props.release_date).format('YYYY')})</h2>
      <h3>Rating: <span className='popularity'>{Math.round(props.vote_average)}</span></h3>
      <h3>Popularity: <span className='popularity'>{Math.round(props.popularity)}</span></h3>
      <p>{props.overview}</p>
    </div>
  </div>
} 

/**
 * This is for prop type validation
 */
MovieItem.propTypes = {
}

export default MovieItem

