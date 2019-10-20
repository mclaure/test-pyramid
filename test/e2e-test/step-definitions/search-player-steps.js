const expect = require('chai').expect;
module.exports = function () {    
   /****************************
    *  Existing soccer player  *
    ****************************/
    this.When(/^I search for an existing player "([^"]*)"$/, (text) =>{
      return helpers.loadPage('http://localhost:4200')
      .then( () => {
        return page.searchPlayer.performSearch(text);       
      })
    });

    this.Then(/^I should see a successful message like "([^"]*)" in the result$/, function (keywords) {
      return driver.wait(until.elementsLocated(by.id('FoundLabel')), 5000)
      .then(() => {
        driver.findElement(by.id('FoundLabel')).getText()
        .then(result => {
          try {
           expect(result).to.be.eql(keywords);
          }
          catch(e) {
            return Promise.reject(false);
          }
        })        
      })
    });

   /********************************
    *  Non-Existing soccer player  *
    ********************************/   
   this.When(/^I search for a no existing player "([^"]*)"$/, (text) =>{
    return helpers.loadPage('http://localhost:4200')
          .then( () => {
            return page.searchPlayer.performSearch(text);       
          })
    });

  this.Then(/^I should see an unsuccessful message like "([^"]*)" in the result$/, function (keywords) {
    return driver.wait(until.elementsLocated(by.id('NotFoundLabel')), 5000)
    .then(() => {
      driver.findElement(by.id('NotFoundLabel')).getText()
      .then(result => {
        try {
         expect(result).to.be.eql(keywords);
        }
        catch(e) {
          return Promise.reject(false);
        }
      })        
    })
  });

};