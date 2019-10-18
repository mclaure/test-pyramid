const { Given, When, Then } = require('cucumber');
const httpStatusCodes = require('http-status-codes');
var expect  = require('chai').expect;
const requester = require('./requester');

const API_PLAYER_REQUEST = '/api/player?name=';

Given('player\'s name is {string}', function (givenName) {
    this.API_REQUEST = API_PLAYER_REQUEST + givenName;
});

When('I ask whether it\'s player exists', function () {
    return requester.get(this.API_REQUEST);
});

Then('I should be told {string}', function (expectedFound) {
    return requester.getLastResponse()
                    .then((response) => {
                        let wasFound = false;

                        if(response.body.player)
                            wasFound = (response.body.player.length > 0) ? 'true' : 'false';

                        expect(wasFound).to.equal(expectedFound);
                    });
});