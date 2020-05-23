const db = require("../data/dbConfig.js");
module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep
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
    .select("schemes.scheme_name", "steps.instructions")
    .from("steps")
    .join("schemes", "steps.scheme_id", "schemes.id")
    .where({ scheme_id });
}

function add({ scheme_name }) {
  return db("schemes").insert({ scheme_name });
}

function addStep({ step_number, instructions, scheme_id }) {
  // This is the equivalent of INSERT INTO steps (step_number, instructions, scheme_id) VALUES (6,"sign up to twitter", 6);
  return "steps".insert({ step_number, instructions, scheme_id });
}
