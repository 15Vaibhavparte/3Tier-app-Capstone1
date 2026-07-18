module.exports = Object.freeze({
    // If a Docker environment variable exists, use it; otherwise, fall back to your default string.
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,

    // Notice we mapped this to DB_PASSWORD to match standard naming conventions,
    // but it falls back gracefully to your secure password string.
    password: process.env.DB_PASSWORD ,
    
    database: process.env.DB_NAME,
    port: 3306
});
