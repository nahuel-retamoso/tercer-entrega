const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', './public');
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    res.render('home');
    }

app.post('/registro', (req, res) => {
    res.render('home');
    }

