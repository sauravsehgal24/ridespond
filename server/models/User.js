const getSqlConnection = require("../database/config/connectionPool");
const Promise = require("bluebird");

class User {
  static findAll() {
    return Promise.using(getSqlConnection, conn =>
      conn.query("select * from users").then(res => res)
    );
  }

  static createOne(req) {
      console.log('inside func')
    const {
      body: { first_name, last_name, email, username, avatar_url}
    } = req;

    const values = [first_name, last_name, email, username, avatar_url];

    return Promise.using(getSqlConnection, conn =>
      conn
        .query(
          "insert into users(id,first_name,last_name,email,username, avatar_url) values(uuid(),?,?,?,?, ?)",
          values
        )
        .then(res => console.log('inserted'))
        .catch(err=>console.log(err))
        );
  }
}

module.exports = User;
