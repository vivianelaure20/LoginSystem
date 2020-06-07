const db = require("./models")

readName = require("./queries/GetName")

db.sequelize.sync()

readName()
