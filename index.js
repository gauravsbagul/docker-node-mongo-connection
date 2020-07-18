const mongoose = require('mongoose');

const DATABASE = "mongodb://mymongo:27017/dockertest";
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
