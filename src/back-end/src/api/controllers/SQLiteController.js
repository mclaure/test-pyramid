'use strict';

var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var dbPath = path.resolve(__dirname, '../../../data/soccer.sqlite')
var db = new sqlite3.Database(dbPath);

exports.list_all_countries = (req, res, next) => {
    let sql = "SELECT id \
                    ,name \
               FROM Country;";
    var params = [];

    db.all(sql, params, (err, rows) => {
        if (err) throw err;
            return res.json({"countries":rows});
    });
};

exports.list_all_teams = (req, res, next) => {
    let sql = 'SELECT id \
                     ,team_long_name AS full_name \
                     ,team_short_name AS short_name \
               FROM Team;';
    var params = [];

    db.all(sql, params, (err, rows) => {
        if (err) throw err;
        return res.json({"teams":rows});
    });   
};

exports.list_all_leagues = (req, res, next) => {
    let sql = 'SELECT id \
                     ,name \
               FROM League;';
    var params = [];

    db.all(sql, params, (err, rows) => {
        if (err) throw err;
        return res.json({"leagues":rows});
    }); 
};

exports.get_player_info = (req, res, next) => {
    let sql = "SELECT id AS id \
                     ,player_name AS name \
                     ,DATE('now')-birthday AS age \
                     ,weight \
                     ,height \
               FROM Player WHERE id = ?;";
    let params = [req.query.id];

    db.get(sql, params, (err, row) => {
        if (err) throw err;
        else {
            if(row) return res.json({ "player" : row });
            return res.json({ "player" : "Not Found" });
        }         
    });
};

exports.get_summary_per_season = (req, res, next) => {
    let sql = "SELECT ct.name AS country \
                     ,le.name AS league \
                     ,mtc.season \
                     ,mtc.stage \
                     ,COUNT(*) AS total_matchs \
                     ,SUM(home_team_goal + away_team_goal) AS total_goals \
                     ,ROUND(AVG(home_team_goal + away_team_goal),0) AS average_goal_per_match \
               FROM Match      mtc \
               INNER JOIN Country ct ON (mtc.country_id = ct.id) \
               INNER JOIN League  le ON (mtc.league_id = le.id) \
               WHERE mtc.season LIKE ? \
               GROUP BY  ct.name \
                        ,le.name \
                        ,mtc.season \
                        ,mtc.stage;";
    let params = "%" + [req.query.season] + "%";

    db.all(sql, params, (err, rows) => {
        if (err) throw err;
        return res.json({"seasons":rows});
    }); 
};