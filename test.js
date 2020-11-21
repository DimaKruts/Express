const sql = require('./sqlite');

sql.close();

// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('./DB/users.db3', (err) => {
//     if (err) return console.error(err.message);
//     console.log('Connected to the in-memory SQlite database.');
// });
// db.all(`SELECT * FROM users WHERE id = ${1}`, [], (err, rows) => {
//     if (err)
//         throw err;
//     console.log(rows);
//     let tmp =
//     {
//         name: rows[0].Name,
//         phone: rows[0].Phone
//     };
//     //return tmp;
//     console.log(tmp);
// });
// db.close();