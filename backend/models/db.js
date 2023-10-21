// Importing the mysql2 library to interact with MySQL databases
const mysql = require('mysql2');

// Creating a connection object with the database credentials
const connection = mysql.createConnection({
    host: 'localhost',        // Address of the MySQL server (in this case, it's the local machine)
    user: 'root',             // Username to connect to the database
    password: '',             // Password for the user (left empty here)
    database: 'xe_properties' // Name of the database to connect to
});

// Attempting to establish a connection to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
