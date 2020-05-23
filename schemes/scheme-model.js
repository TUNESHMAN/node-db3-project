const db = require("../data/dbConfig.js");
module.exports={
    find,
    findById
}

function find() {
// This is the equivalent of SELECT * FROM Schemes
return db("schemes");
    
}

function findById(id) {
    // This is the equivalent SELECT * FROM Schemes where id=id;
    return db("schemes").where({id}).first();
}