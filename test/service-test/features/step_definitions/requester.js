// requester.js
const fetch = require('node-fetch');
const buildUrl = require('build-url');

const port = process.env.PORT || 8000;
const baseUrl = 'http://localhost:' + port;
let lastResponse;

function get(url) {
  const realUrl = buildUrl(baseUrl, {
    path: url
  });

  lastResponse = fetch(realUrl)
    .then((res) => {
      return res.json().then((body) => {
        return {
          status: res.status,
          headers: res.headers.raw(),
          body: body
        };
      });
    });

  return lastResponse;
}

function getLastResponse() {
  return lastResponse;
}

module.exports = {
  get: get,
  getLastResponse: getLastResponse
};