const compression = require('compression');
const express  = require('express');
const helmet = require('helmet');
const sql = require('./sqlite');
const app = express();


process.on('SIGINT', function() 
{
    sql.close();
    console.log("\nCaught interrupt signal");
    process.exit();
});

//app.use(helmet());
app.use(compression());
app.disable('x-powered-by');
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/user/:id", function(request, response, next)
{   
    sql.db.get(`SELECT * FROM users WHERE id = ${request.params.id}`, [], (err, row) => {
        if (err) 
        {
            response.status(404).json({"error":err.message});
            return;
        }
        if(row == null)
        {
            response.status(404).json({"error":"User no find"});
            return;
        }
        response.render("user",{
            title: "Мои контакты",
            phone: row.Phone,
            name: row.Name
        });
    });
});
app.use("/users", function(request, response)
{
    sql.db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
          throw err;
        }
        response.render("users",{
            title: "Все контакты",
            users: rows
        })
      });
});
app.use("/", function(request, response)
{
    response.render("index",
    {
        ip: request.ip,
        name: "test"
    });
});
app.listen(8000);