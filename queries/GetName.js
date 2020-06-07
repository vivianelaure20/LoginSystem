const db = require("../models")
const { Sequelize, QueryTypes } = require("sequelize")

async function readName() {
  const nameSelection = db.sequelize.query("SELECT * FROM `login`", {
    type: QueryTypes.SELECT,
  })
  // .catch((err) => {
  //   console.error("Unable to connect to the database:", err);
  // });

  const mm = await nameSelection
  console.log(mm[0])
}

module.exports = readName
