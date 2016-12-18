// const pg       = require('pg-promise')({});

// const pgConfig = {  host:     process.env.PG_HOST,
//                     port:     process.env.PG_PORT,
//                     database: process.env.PG_DATABASE,
//                     user:     process.env.PG_USER,
//                     password: process.env.PG_PASSWORD };

// const db       = pg(pgConfig);

// module.exports = db;

const pg       = require('pg-promise')({});

const pgconfig = process.env.DATABASE_URL || {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};
const db       = pg(pgConfig);
module.exports = db;
