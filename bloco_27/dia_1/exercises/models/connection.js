// models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(process.env.DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(process.env.DB_NAME);
        return db;
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      })
};

module.exports = connection;
