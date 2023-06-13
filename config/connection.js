require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
  // 'ecommerce_db',
  // 'root',
  // 'CarlosACF36286269.',
    process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
        // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
      },
    });

module.exports = sequelize;
