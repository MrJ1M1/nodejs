const express = require('express');
const lesson = require('./routers/lesson');
const app = express();
const home = require('./routers/home');

app.use(express.json()); // middle were
app.use('/api/categories', lesson);
app.use('/home', home);
app.set('view engine', 'pug');


const port = process.env.PORT || 7070;
app.listen(port, () => {
    console.log(`${port} ni Eshitishni boshladim!...`);
});