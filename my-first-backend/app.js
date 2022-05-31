const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let arr = ['Air For English Horn', 'Alice Blue Gown', 'All Alone', 'All By Myself', 'All I Do Is Dream of You'];
    res.send(arr);
});

app.get('/birth_date', (req, res) => {
    res.send('December 12, 1915');
});

app.get('/birth_city', (req, res) => {
    res.send('Hoboken, New Jersey');
});

app.get('/wives', (req, res) => {
    res.send('Barbara Sinatra, Ava Gardner, Mia Farrow, Nancy Sinatra');
});

app.get('/picture', (req, res) => {
    res.redirect('https://en.wikipedia.org/wiki/File:Frank_Sinatra_%2757.jpg');
});



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`${port} chi portni eshitishni boshladim...`);
});