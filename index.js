const mongoose = require('mongoose');
const express = require('express');


const DATABASE = "mongodb://mymongo:27017/dockertest";

const app = express();

mongoose
.connect(DATABASE, {
    useNewUrlParser:true, 
    useUnifiedTopology: true, 
    useCreateIndex:true
})
.then(()=>{
    console.log('DB Connected!')
}).catch(()=>{
    console.log('ERROR in DB Connection!',)
});


app.get('/', (req, res)=>{
        res.json({
            message:'Root route'
        })
});

app.listen(8080, ()=>{
    console.log('8080 is ready to serve...')
})