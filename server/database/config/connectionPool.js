require('../../bin/dev')

const mysql = require('promise-mysql');
// const connection = mysql.createConnection({
//   host: '192.254.224.78',
//   user: 'sauravsehgal',
//   password: '$Aurav1234Shagun01',
//   database: 'sauravse_longdrivedb',
//   port: 3306
// });

// const getSqlConnection = () =>

//   connection.connect(err => {
//     if (err) throw err;
//     console.log("Connected!");
//   });
  

let dbConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
};

if (process.env.NODE_ENV === "production") {
  dbConnectionOptions = {
    host: process.env.DB_HOST_REMOTE,
    user: process.env.DB_USER_REMOTE,
    password: process.env.DB_PASSWORD_REMOTE,
    database: process.env.DB_NAME_REMOTE,
    connectionLimit: process.env.DB_CON_LIMIT_REMOTE || 10
  };
}
console.log(process.env.DB_NAME)


// const pool = mysql.createPool(dbConnectionOptions);

/**
 * Collects a db connection and initiaties a disposer function
 * on release of that connection
 */
const getSqlConnection = mysql.createConnection(dbConnectionOptions);


module.exports = getSqlConnection;
