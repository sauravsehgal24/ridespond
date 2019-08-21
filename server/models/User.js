
const getSqlConnection = require('../database/config/connectionPool');
const Promise = require('bluebird');

class User {

    static findAll(){
        return Promise.using(
            getSqlConnection,
            conn=>conn.query('select * from users')
            .then(res=>res)
        );
    }

}

module.exports = User;