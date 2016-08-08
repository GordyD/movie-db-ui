const rp = require('request-promise')

const BASE_URL = 'http://api.themoviedb.org/3'
const API_KEY = '4f73e042a6b3135088424966b343456a'

function search(req, res) {
  rp({
    uri: `${BASE_URL}/search/movie`,
    json: true,
    qs: {
      query: req.query.query || '',
      page: req.query.page || 1,
      api_key: API_KEY
    }
  })
  .then((movies) => res.json(movies))
  .catch(err => {
    res.status(400);
    res.json({error: err});
  });
}

function popular(req, res) {
  rp({
    uri: `${BASE_URL}/movie/popular`,
    json: true,
    qs: {
      page: req.query.page || 1,
      api_key: API_KEY
    }
  })
  .then((movies) => res.json(movies))
  .catch(err => {
    res.status(400);
    res.json({error: err});
  });
}

module.exports = {
  search,
  popular
}