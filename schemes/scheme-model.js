const db = require("../data/dbConfig.js");
module.exports = {
  find,
  findById,
  findSteps,
};

function find() {
  // This is the equivalent of SELECT * FROM Schemes
  return db("schemes");
}

function findById(id) {
  // This is the equivalent SELECT * FROM Schemes where id=id;
  return db("schemes").where({ id }).first();
}

function findSteps(scheme_id) {
  // This is the equivalent of SELECT steps.instructions, schemes.scheme_name FROM STEPS JOIN Schemes ON steps.scheme_id = schemes.id
  return db
    .select("steps.instructions")
    .from("steps")
    .join("schemes", "steps.scheme_id", "schemes.id")
    .where({ scheme_id });
}
