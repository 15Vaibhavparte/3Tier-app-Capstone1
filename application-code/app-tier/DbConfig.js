module.exports = Object.freeze({
    // If a Docker environment variable exists, use it; otherwise, fall back to your default string.
    DB_HOST: process.env.DB_HOST ,
    DB_USER: process.env.DB_USER ,
    
    // Notice we mapped this to DB_PASSWORD to match standard naming conventions, 
    // but it falls back gracefully to your secure password string.
    DB_PWD: process.env.DB_PASSWORD ,
    
    DB_DATABASE: process.env.DB_NAME
});
