const rp = require('request-promise')

const BASE_URL = 'http://api.themoviedb.org/3/search/movie'
const API_KEY = '4f73e042a6b3135088424966b343456a'

function search(req, res) {
  rp({
    uri: BASE_URL,
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

module.exports = {
  search: search
}