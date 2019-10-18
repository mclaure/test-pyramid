'use strict';

module.exports = function(app) {

  var sqlite3 = require('../controllers/SQLiteController');

  //SQLite3
  app.route('/api/countries/')
    .get(sqlite3.list_all_countries);

  app.route('/api/teams/')
    .get(sqlite3.list_all_teams);    

  app.route('/api/leagues/')
    .get(sqlite3.list_all_leagues);       

  app.route('/api/player')
    .get(sqlite3.get_player_info);          

  app.route('/api/summary')
    .get(sqlite3.get_summary_per_season); 

};