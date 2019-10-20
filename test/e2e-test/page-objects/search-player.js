module.exports = {
    url: 'http://localhost:4200',
    elements: {
      searchInput: by.name('searchInput')  
    },
    /**
     * enters a search term into Soccer-Player's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    performSearch: function (searchQuery) {
      var selector = page.searchPlayer.elements.searchInput;

      // return a promise so the calling function knows the task has completed
      return driver.findElement(selector).sendKeys(searchQuery,selenium.Key.ENTER);
    }
  };