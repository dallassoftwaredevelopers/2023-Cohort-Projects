require('dotenv').config()

//Database Config
const config = 
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE 
    };

export default config