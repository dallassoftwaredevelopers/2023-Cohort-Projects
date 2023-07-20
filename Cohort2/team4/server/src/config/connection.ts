const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER || 'ix1v91q5n3s6myphw3hs',
  process.env.DB_PASSWORD || 'pscale_pw_DZW0GlTvKGk9AdOofRgs85ijXXGuqTgCN1FCHmSFIDJ',
  {
    host: 'aws.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
          require: true,
          // Set the SSL certificate options as needed
          rejectUnauthorized: false, // Set this to false if you're using a self-signed certificate
        },
    port: 3306
        }
    }
);

module.exports = sequelize;
