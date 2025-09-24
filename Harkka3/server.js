const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

app.use(express.json());

const db = new sqlite3.Database('./mydb.db', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Database opened successfully');
    }
});

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`);

//get endpoint
app.get('/api/sensor', (req, res) => {
    res.json({
        temerature: 22.5,
        humidity: 55,
        status: 'OK'
    });
});

app.get('/api/users', (req, res) => {
    console.log('In get endpoint');
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/users', (req, res) => {
    console.log('In post endpoint');
    const { name, email } = req.body;
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function(err) {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json({ id: this.lastID, name, email });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
