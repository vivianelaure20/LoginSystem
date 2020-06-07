const sequelize = require("sequelize") // gets the sequlize dependancy

//configure a basic connection to SQLite. SQLite is a local db that does not need credentials, so this will work for our basic test
const connection = new sequelize({
  dialect: "sqlite", //telling sequelize what database engine we want to use
  storage: "login.db", //the name of the database
})

//defining our 1st entity called User, sequelize will create a corresponding table called Users (note the pluralising applied)
const loginsystem = connection.define("loginsystem", {
  username: sequelize.STRING,
  password: sequelize.STRING,
})

connection
  .sync({
    logging: console.log,
  }) /*the sync command will note that the Users table does not exist in the db and create it. we don't need
     to call the authenticate command as it will be done as part of the sync. we add the logging to get a view of what is happening */
  //.authenticate() //when using sync, authentication happens anyway so calling it explisit is redundant
  .then(() => {
    loginsystem.create({
      username: "viviane",
      password: "123456",
    }) //stringing a create statement that will insert a new entry into our Users table
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err)
  })
