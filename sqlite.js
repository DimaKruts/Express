const sqlite3 = require('sqlite3').verbose();
//let db = new sqlite3.Database(':memory:');

let db = new sqlite3.Database('./DB/users.db3', (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to SQlite database.');
});
module.exports.db = db;
// module.exports.getUsers = (id) =>
// {
//     db.all(`SELECT * FROM users WHERE id = ${id}`, [], (err, rows) => {
//         if (err)
//             throw err;
//         let tmp = 
//         {
//             name: rows[0].Name,
//             phone: rows[0].Phone
//         }
//         return tmp;
//     });
// }
module.exports.close = () =>
{
    console.log('\nDisconnected from SQlite database.');
    db.close();
}