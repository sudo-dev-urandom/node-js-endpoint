const mysql = require('mysql');
const connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_nodejs'
});

//connect database
connections.connect((err) => {
    if (err) throw err;
    console.log('DB Connected');
});

module.exports = connections;
