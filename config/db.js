const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); 

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,  // <-- ici DB_NAME au lieu de DB_DATABASE
  port: process.env.DB_PORT || 3306,
  multipleStatements: true
});
db.connect((err) => {
  if (err) {
    console.error('Connexion échouée :', err.message);
  } else {
    console.log('Connexion MySQL réussie !');
  }
});

module.exports = db;
