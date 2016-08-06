import React, { PropTypes } from 'react'
import moment from 'moment'

import './MovieItem.styl'

/**
 * This is a stateless functional component. Because we do not need
 * to store any internal state in this component we can just create
 * a component that renders based on what it is passed as props.
 */
const MovieItem = (props) => <div className='MovieItem-container'>
  <h4>{props.original_title}</h4>
</div>

/**
 * This is for prop type validation
 */
MovieItem.propTypes = {
}

export default MovieItem

