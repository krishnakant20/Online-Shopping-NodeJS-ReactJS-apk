const express = require('express');
const cors = require('cors');
const connectToMongo = require('./config/db.config');
const session = require('express-session');

connectToMongo();

const app=express();
const port = 5000;

app.use(cors());
app.use(session({secret:'pawar123'}));
app.use(express.json());

console.log("welcome eshop");

app.get('/welcome',(req,res)=>{
    res.send('index- welcome to Eshop');
})

app.use('/api/auth',require('./routes/user.routes'));
app.use('/api/addresses',require('./routes/address.routes'));
app.use('/api/products',require('./routes/product.routes'));
app.use('/api/orders',require('./routes/order.routes'));

app.listen(port,()=>{
    console.log(`apk listening on ${port}`);
})

// final apk