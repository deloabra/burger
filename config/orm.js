var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    insertOne: function(tableInput, set, cb){
        var queryString = "INSERT INTO " + tableInput;
        queryString += " SET " + set;
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    updateOne: function(tableInput, set, condition, cb){
        var queryString = "UPDATE " + tableInput;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    
    }
    
};

module.exports = orm;