const { Given, When, Then } = require('cucumber');
const httpStatusCodes = require('http-status-codes');
var expect  = require('chai').expect;
const requester = require('./requester');

/*************************
*  Is the Player exists? *
**************************/
const API_PLAYER_REQUEST = '/api/player?name=';

Given('player\'s name is {string}', function (givenName) {
    this.PLAYER_REQUEST = API_PLAYER_REQUEST + givenName;
});

When('I ask whether it\'s player exists', function () {
    return requester.get(this.PLAYER_REQUEST);
});

Then('I should be told that is {string} that the player exists', function (expectedFound) {
    return requester.getLastResponse()
                    .then((response) => {
                        let wasFound = false;

                        if(response.body.player)
                            wasFound = (response.body.player.length > 0) ? 'true' : 'false';

                        expect(wasFound).to.equal(expectedFound);
                    });
});

/*************************
*  Is the Season exists? *
**************************/

const API_SEASON_REQUEST = '/api/summary?season=';

Given('season\'s year is {string}', function (givenSeason) {
    this.SEASON_REQUEST = API_SEASON_REQUEST + givenSeason;
});

When('I ask whether it\'s season exists', function () {
    return requester.get(this.SEASON_REQUEST);
});

Then('I should be told that is {string} that the season exists', function (expectedFound) {
    return requester.getLastResponse()
                    .then((response) => {
                        let wasFound = false;

                        if(response.body.seasons)
                            wasFound = (response.body.seasons.length > 0) ? 'true' : 'false';

                        expect(wasFound).to.equal(expectedFound);
                    });
});