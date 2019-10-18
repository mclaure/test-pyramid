var expect  = require('chai').expect;
var request = require('request');

//API requests to validate
const API_COUNTRIES = 'http://localhost:8000/api/countries';
const API_LEAGUES = 'http://localhost:8000/api/leagues';
const API_TEAMS = 'http://localhost:8000/api/teams';
const API_PLAYER = 'http://localhost:8000/api/player?name=Adam';
const API_SUMMARY = 'http://localhost:8000/api/summary?season=2008';

describe('When GET /api/countries/ API is working fine', function() {
    it('Should return 200 Ok', function(done) {
        request(API_COUNTRIES, function(error, response, body) {     
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('Should return data', function(done) {
        request(API_COUNTRIES, function(error, response, body) {     
            var data = JSON.parse(body);
            expect(data.countries.length).to.not.equal(0);
            done();
        });
    });    
});

describe('When GET /api/leagues/ API is working fine', function() {
    it('Should return 200 Ok', function(done) {
        request(API_LEAGUES, function(error, response, body) {     
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
    it('Should return data', function(done) {
        request(API_LEAGUES, function(error, response, body) {     
            var data = JSON.parse(body);
            expect(data.leagues.length).to.not.equal(0);
            done();
        });
    });    
});

describe('When GET /api/teams/ API is working fine', function() {
    it('Should return 200 Ok', function(done) {
        request(API_TEAMS, function(error, response, body) {     
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
    it('Should return data', function(done) {
        request(API_TEAMS, function(error, response, body) {     
            var data = JSON.parse(body);
            expect(data.teams.length).to.not.equal(0);
            done();
        });
    });    
});

describe('When GET /api/player API is working fine', function() {
    it('Should return 200 Ok', function(done) {
        request(API_PLAYER, function(error, response, body) {     
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
    it('Should return data', function(done) {
        request(API_PLAYER, function(error, response, body) {     
            var data = JSON.parse(body);
            expect(data.player.length).to.not.equal(0);
            done();
        });
    });    
});

describe('When GET /api/summary API is working fine', function() {
    it('Should return 200 Ok', function(done) {
        request(API_SUMMARY, function(error, response, body) {     
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
    it('Should return data', function(done) {
        request(API_SUMMARY, function(error, response, body) {     
            var data = JSON.parse(body);
            expect(data.seasons.length).to.not.equal(0);
            done();
        });
    });    
});