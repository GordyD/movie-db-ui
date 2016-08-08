/* global describe */
/* global it */
/* global sinon */

import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import 'babel-polyfill' // For testing any es6 functions

const expect = chai.expect

import MovieItem from '../../../src/client/components/MovieItem'

describe('MovieItem', () => {
  it('should be exposed as a module and be of type function', () => {
    expect(MovieItem).to.be.a('function')
  })

  describe('render', () => {
    var sampleMovie = {
      id: '456',
      original_title: 'Movie Time!',
      overview: 'This is a movie!',
      poster_path: '1234.jpg',
      release_date: '2001-12-12',
      vote_average: 6.7,
      popularity: 15.23,
      onShowMovieDetail: sinon.stub(),
      onHideMovieDetail: sinon.stub()
    }

    it('should render all the movie information', () => {
      var elem = shallow(<MovieItem {...sampleMovie} />)

      expect(elem).to.be.ok

      expect(elem.find('.MovieItem-title')).to.have.length(1)
      expect(elem.find('.MovieItem-poster')).to.have.length(1)
      expect(elem.find('.MovieInView-container')).to.have.length(1)
      expect(elem.find('.MovieInView-title')).to.have.length(1)
      expect(elem.find('.MovieInView-poster')).to.have.length(1)
      expect(elem.find('.MovieInView-rating')).to.have.length(1)
      expect(elem.find('.MovieInView-popularity')).to.have.length(1)

      let itemTitle = elem.find('.MovieItem-title')

      expect(itemTitle).to.have.length(1)
      expect(itemTitle.text()).to.equal('Movie Time! (2001)')

      let inViewTitle = elem.find('.MovieInView-title')

      expect(inViewTitle).to.have.length(1)
      expect(inViewTitle.text()).to.equal('Movie Time! (2001)')

      let inViewRating = elem.find('.MovieInView-rating')

      expect(inViewRating).to.have.length(1)
      expect(inViewRating.text()).to.equal('Rating: 7')

      let inViewPopularity = elem.find('.MovieInView-popularity')

      expect(inViewPopularity).to.have.length(1)
      expect(inViewPopularity.text()).to.equal('Popularity: 15')

      let description = elem.find('.MovieInView-description')

      expect(description).to.have.length(1)
      expect(description.text()).to.equal('This is a movie!')
    })

    it('should trigger onShowMovieDetail when the movie item image is clicked', () => {
      var elem = shallow(<MovieItem {...sampleMovie} />)

      expect(sampleMovie.onShowMovieDetail.callCount).to.equal(0)
      elem.find('.MovieItem-poster').simulate('click')
      expect(sampleMovie.onShowMovieDetail.callCount).to.equal(1)
    })

    it('should trigger onHideMovieDetail when the movie item image is clicked', () => {
      var elem = shallow(<MovieItem {...sampleMovie} />)

      expect(sampleMovie.onHideMovieDetail.callCount).to.equal(0)
      elem.find('.MovieInView-container').simulate('click')
      expect(sampleMovie.onHideMovieDetail.callCount).to.equal(1)
    })
  })
})