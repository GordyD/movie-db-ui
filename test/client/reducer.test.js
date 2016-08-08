/* global describe */
/* global it */
/* global sinon */

import chai from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import 'babel-polyfill' // For testing any es6 functions

const expect = chai.expect

import * as actions from '../../src/client/actions'
import reducer from '../../src/client/reducer'

describe('reducer', () => {
  describe('searchMoviesRequest', () => {
    it('should return object with isWorking set as true', () => {
      let initialState = {}
      let action = actions.searchMoviesRequest('matrix')
      let updatedState = reducer(initialState, action)

      expect(updatedState.isWorking).to.be.true
      expect(updatedState.searchTerm).to.equal('matrix')
    })
  })

  describe('searchMoviesSuccess', () => {
    it('should return object with isWorking set as false and results as results', () => {
      let initialState = {}
      let results = {
        results: [
          { id: 1, description: 'foo' },
          { id: 2, description: 'bar' }
        ],
        total_results: 2,
        total_pages: 1,
        page: 1
      }
      let action = actions.searchMoviesSuccess(results)
      let updatedState = reducer(initialState, action)

      expect(updatedState.isWorking).to.be.false
      expect(updatedState.results.length).to.equal(2)
      expect(updatedState.results).to.eql(results.results)
      expect(updatedState.totalResults).to.equal(2)
      expect(updatedState.totalPages).to.equal(1)
      expect(updatedState.page).to.equal(1)
      expect(updatedState.error).to.be.undefined
    })
  })

  describe('searchMoviesFailure', () => {
    it('should return object with isWorking set as false and error as error', () => {
      let initialState = {}
      let error = new Error('We could not reach the API at this time')
      let action = actions.searchMoviesFailure(error)
      let updatedState = reducer(initialState, action)

      expect(updatedState.isWorking).to.be.false
      expect(updatedState.error).to.equal(error.message)
      expect(updatedState.results).to.be.undefined
    })
  })
})