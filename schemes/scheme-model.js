const db = require("../data/dbConfig.js");
module.exports={
    findScheme
}

function find() {
    // This is the equivalent of SELECT * FROM Schemes
    return db("schemes");

    
}