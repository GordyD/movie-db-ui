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
  let movieItemImage = <div 
    className='MovieItem-poster noImage' 
    onClick={() => props.onShowMovieDetail(props)}>
    No Image
  </div>
  let movieInViewImage = <div 
    className='MovieInView-poster noImage' 
    onClick={() => props.onShowMovieDetail(props)}>
    No Image
  </div>
  if (props.poster_path) {
    movieItemImage = <img 
      className='MovieItem-poster'
      alt={props.original_title}
      onClick={() => props.onShowMovieDetail(props)}
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.poster_path}`} 
    />
    movieInViewImage = <img 
      className='MovieInView-poster'
      alt={props.original_title}
      src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.poster_path}`} 
    />
  }
  return <div className='MovieItem-container'>
    {movieItemImage}
    <h4 className='MovieItem-title'>{props.original_title} ({moment(props.release_date).format('YYYY')})</h4>
    <div className={movieInViewContainerClass} onClick={() => props.onHideMovieDetail()}>
      {movieInViewImage}
      <h2 className='MovieInView-title'>{props.original_title} ({moment(props.release_date).format('YYYY')})</h2>
      <h3 className='MovieInView-rating'>Rating: <span>{Math.round(props.vote_average)}</span></h3>
      <h3 className='MovieInView-popularity'>Popularity: <span>{Math.round(props.popularity)}</span></h3>
      <p className='MovieInView-description'>{props.overview}</p>
    </div>
  </div>
} 

/**
 * This is for prop type validation
 */
MovieItem.propTypes = {
}

export default MovieItem

