const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values('VictorHugo')`
    connection.query(sql)

    connection.query('SELECT name FROM people', (err, result) => {
        if (err) {
            console.error(err);
        } else {
            const peoples = result;

            let html = '<h1>Full Cycle!</h1><ul>';
            peoples.forEach(row => {
                html += `<li>Nome: ${row.name}</li>`;
            });
            html += '</ul>';

            res.send(html);
        }
    });

    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})