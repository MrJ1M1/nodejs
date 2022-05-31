const express =  require('express');
const app = express();
const mongoose =  require('mongoose');
const categories = require('./routers/categories');
const customers = require('./routers/customers');

mongoose.connect('mongodb://localhost/onlinedars')
    .then(()=>{
        console.log('\nSUCCESSFUL!..................\n')
    })
    .catch((err)=>{
        console.error('WRONG!...................', err);
    });

app.use(express.json());
app.use('/api/category', categories);
app.use('/api/customers', customers);


const port = process.env.PORT || 5055;
app.listen(port, ()=>{
    console.log(`${port} ni eshitishni boshladim!...`);
});