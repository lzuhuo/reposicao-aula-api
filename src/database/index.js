const { Client } = require('pg');
const { config } = require('../../config/db');

function sql(query){
    let result;

    const client = new Client({
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.port,
        password: config.password
      });
      
      client.connect();
      
      result = client.query(query, (err, res) => {
          console.log(err, res)
          client.end()
      })

    return result;
}

module.exports = {sql};